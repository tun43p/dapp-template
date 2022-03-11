import React, { useContext } from "react";
import ReactDOM from "react-dom";
import ConnectComponent from "./components/connect";
import Provider, { ProviderContext } from "./utils/provider";

function App(): JSX.Element {
  const { account, contract } = useContext(ProviderContext);

  return (
    <div>
      <h1>Dapp Template</h1>
      <ConnectComponent />
      {account && contract && <p>Account and contract connected</p>}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app"),
);
