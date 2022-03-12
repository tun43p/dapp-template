import ConnectComponent from "../connect";
import { StyledHeader, StyledHeaderTitle } from "./style";

export default function HeaderComponent(): JSX.Element {
  return (
    <StyledHeader>
      <StyledHeaderTitle>Dapp Template</StyledHeaderTitle>
      <ConnectComponent />
    </StyledHeader>
  );
}
