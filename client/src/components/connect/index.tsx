import { useContext, useEffect, useState } from "react";
import { ProviderContext } from "../../utils/provider";
import { StyledButton } from "./style";

export default function ConnectComponent(): JSX.Element {
  const { account, connect } = useContext(ProviderContext);
  const [connection, setConnection] = useState<boolean>(false);

  useEffect(() => {
    if (connection) {
      connect().catch((err) => {
        console.error(err);
      });
    }
  }, [connection]);

  return (
    <StyledButton onClick={() => setConnection(true)}>
      {account ? account : "Connect wallet"}
    </StyledButton>
  );
}
