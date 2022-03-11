import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Provider, { ProviderContext } from "./utils/provider";

function App(): JSX.Element {
  const { account, connect, contract } = useContext(ProviderContext);

  return (
    <div>
      <h1>Dapp Template</h1>
      <button onClick={connect}>{account ? account : "Connect wallet"}</button>
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
