import {
  createContext,
  ReactChild,
  useCallback,
  useEffect,
  useState,
} from "react";
import ethereum, { EthereumMethods } from "../utils/ethereum";
import status from "../utils/status";

type WalletType = {
  wallet: string | null;
};

export const WalletContext = createContext<WalletType>({
  wallet: null,
});

export default function WalletProvider({
  children,
}: {
  children: ReactChild;
}): JSX.Element {
  const [wallet, setWallet] = useState<string | null>(null);

  const verification = useCallback(async () => {
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

      const rinkebyChainId = "0x4";

      if (chainId !== rinkebyChainId) {
        status("error", "You're not connected to the Rinkeby Testnet");
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

  return (
    <WalletContext.Provider value={{ wallet }}>
      {children}
    </WalletContext.Provider>
  );
}
