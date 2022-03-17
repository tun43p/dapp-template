import { ethers } from "ethers";
import {
  createContext,
  ReactChild,
  useCallback,
  useEffect,
  useState,
} from "react";
import config from "../utils/config";
import ethereum from "../utils/ethereum";
import status from "../utils/status";

export const ContractContext = createContext<{
  contract: ethers.Contract | null;
  provider: ethers.providers.Web3Provider | null;
  signer: ethers.providers.JsonRpcSigner | null;
}>({
  contract: null,
  provider: null,
  signer: null,
});

export default function ContractProvider({
  children,
}: {
  children: ReactChild;
}): JSX.Element {
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(
    null,
  );

  const setup = useCallback(async (): Promise<void> => {
    try {
      if (!ethereum) {
        status("error", "Please install MetaMask");
        return;
      }

      const tmpProvider = new ethers.providers.Web3Provider(ethereum);
      setProvider(tmpProvider);

      const tmpSigner = tmpProvider.getSigner();
      setSigner(tmpSigner);

      const tmpContract = new ethers.Contract(
        config.contract.address,
        config.contract.abi,
        tmpSigner,
      );
      setContract(tmpContract);
    } catch (error) {
      status(
        "error",
        `Error setting up the contract: ${(error as Error).message}`,
      );
    }
  }, [ethereum]);

  useEffect(() => {
    setup().catch((error) => status("error", (error as Error).message));
  }, [setup]);

  return (
    <ContractContext.Provider value={{ contract, provider, signer }}>
      {children}
    </ContractContext.Provider>
  );
}
