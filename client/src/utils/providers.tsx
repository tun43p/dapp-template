import { ReactChild } from "react";
import ContractProvider from "../providers/contract";
import GlobalProvider from "../providers/global";
import WalletProvider from "../providers/wallet";

export default function Providers({
  children,
}: {
  children: ReactChild;
}): JSX.Element {
  return (
    <GlobalProvider>
      <WalletProvider>
        <ContractProvider>{children}</ContractProvider>
      </WalletProvider>
    </GlobalProvider>
  );
}
