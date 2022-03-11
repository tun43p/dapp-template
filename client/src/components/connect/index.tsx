import { useContext } from "react";
import { ProviderContext } from "../../utils/provider";
import { StyledButton } from "./style";

export default function ConnectComponent(): JSX.Element {
  const { account, connect } = useContext(ProviderContext);

  return (
    <StyledButton onClick={() => connect}>
      {account ? account : "Connect wallet"}
    </StyledButton>
  );
}
