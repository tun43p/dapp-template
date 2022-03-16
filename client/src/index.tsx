import { StrictMode } from "react";
import { render } from "react-dom";

import WalletProvider from "./providers/wallet";
import GlobalStyle from "./utils/style";

function App(): JSX.Element {
  return (
    <div>
      <h1>Dapp Template</h1>
    </div>
  );
}

render(
  <StrictMode>
    <GlobalStyle />
    <WalletProvider>
      <App />
    </WalletProvider>
  </StrictMode>,
  document.getElementById("app"),
);
