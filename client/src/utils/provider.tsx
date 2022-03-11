import { ethers } from "ethers";
import { createContext, ReactChild, useState } from "react";
import { CONTRACT_ADDRESS, PRIVATE_KEY } from "./constants";

import artifact from "../artifacts/Greeter.json";

export type ProviderProps = {
  children: ReactChild;
};

export type ProviderType = {
  account: string | null;
  connect: () => Promise<void>;
  contract: ethers.Contract | null;
  provider: ethers.providers.Web3Provider | null;
  signer: ethers.Signer | null;
};

export const ProviderContext = createContext<ProviderType>({
  account: null,
  connect: async () => {},
  contract: null,
  provider: null,
  signer: null,
});

export default function Provider({ children }: ProviderProps): JSX.Element {
  const [account, setAccount] = useState<string | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  const connect = async (): Promise<void> => {
    if (!CONTRACT_ADDRESS || !PRIVATE_KEY) return;

    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);

        const tmpProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tmpProvider);

        if (tmpProvider) {
          const tmpSigner = tmpProvider.getSigner();
          setSigner(tmpSigner);

          if (tmpSigner) {
            const ownerWallet = new ethers.Wallet(PRIVATE_KEY, tmpProvider);
            const tmpContract = new ethers.Contract(
              CONTRACT_ADDRESS,
              artifact.abi,
              ownerWallet,
            );
            setContract(tmpContract);
          }
        }
      } else {
        throw Error("Need to install MetaMask");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProviderContext.Provider
      value={{ account, connect, contract, provider, signer }}
    >
      {children}
    </ProviderContext.Provider>
  );
}
