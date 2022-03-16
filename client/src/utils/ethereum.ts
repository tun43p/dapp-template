const { ethereum } = window;

export enum EthereumMethods {
  Accounts = "eth_accounts",
  ChainID = "eth_chainId",
  RequestAccounts = "eth_requestAccounts",
}

export default ethereum;
