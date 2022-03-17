import React, { useContext } from "react";
import { ContractContext } from "../../providers/contract";

import { WalletContext } from "../../providers/wallet";
import config from "../../utils/config";
import status from "../../utils/status";

import { StyledHomeContainer } from "./style";

export default function HomeRoute(): JSX.Element {
  const { connect, wallet } = useContext(WalletContext);
  const { contract } = useContext(ContractContext);

  const handleConnect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    connect().catch((error) => status("error", (error as Error).message));
  };

  return (
    <StyledHomeContainer>
      <div>
        <h1>{config.app.title}</h1>
        <button onClick={handleConnect}>
          {wallet ? wallet : "Connect with MetaMask"}
        </button>
      </div>
      {wallet && contract && <p>You're connected</p>}
    </StyledHomeContainer>
  );
}
