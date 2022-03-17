import {
  createContext,
  ReactChild,
  useCallback,
  useEffect,
  useState,
} from "react";
import config from "../utils/config";
import ethereum, { EthereumMethods } from "../utils/ethereum";
import status from "../utils/status";

export const WalletContext = createContext<{
  connect: () => Promise<void>;
  wallet: string | null;
}>({
  connect: async () => {},
  wallet: null,
});

export default function WalletProvider({
  children,
}: {
  children: ReactChild;
}): JSX.Element {
  const [wallet, setWallet] = useState<string | null>(null);

  const verification = useCallback(async (): Promise<void> => {
    try {
      if (!ethereum) {
        status("error", "Please install MetaMask");
        return;
      }

      const accounts = await ethereum.request({
        method: EthereumMethods.Accounts,
      });

      if (!accounts || accounts.length === 0) {
        status("error", "No MetaMask accounts");
        return;
      }

      const chainId = (
        await ethereum.request({
          method: EthereumMethods.ChainID,
        })
      ).toString();

      if (chainId !== config.chain.rinkeby.id) {
        status(
          "error",
          `You're not connected to the ${config.chain.rinkeby.name} Testnet`,
        );
        return;
      }

      const requestAccounts = await ethereum.request({
        method: EthereumMethods.RequestAccounts,
      });

      setWallet(requestAccounts[0]);
    } catch (error) {
      status("error", `Error checking wallets: ${(error as Error).message}`);
    }
  }, [ethereum]);

  useEffect(() => {
    verification().catch((error) => status("error", (error as Error).message));
  }, [verification]);

  const connect = async (): Promise<void> => {
    try {
      if (!ethereum) {
        status("error", "Please install MetaMask");
        return;
      }

      const chainId = (
        await ethereum.request({
          method: EthereumMethods.ChainID,
        })
      ).toString();

      if (chainId !== config.chain.rinkeby.id) {
        status(
          "error",
          `You're not connected to the ${config.chain.rinkeby.name} Testnet`,
        );
        return;
      }

      const requestAccounts = await ethereum.request({
        method: EthereumMethods.RequestAccounts,
      });

      setWallet(requestAccounts[0]);

      status("success", `Connect with the account ${requestAccounts[0]}`);
    } catch (error) {
      status("error", `Error connecting wallet: ${(error as Error).message}`);
    }
  };

  return (
    <WalletContext.Provider value={{ connect, wallet }}>
      {children}
    </WalletContext.Provider>
  );
}
