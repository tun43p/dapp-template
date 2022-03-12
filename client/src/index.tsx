import { StrictMode, useContext } from "react";
import { render } from "react-dom";
import HeaderComponent from "./components/header";
import Provider, { ProviderContext } from "./utils/provider";
import Style from "./utils/style";

function App(): JSX.Element {
  const { account, contract } = useContext(ProviderContext);

  return (
    <div>
      <HeaderComponent />
      {account && contract && <p>Account and contract connected</p>}
    </div>
  );
}

render(
  <StrictMode>
    <Style />
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("app"),
);
