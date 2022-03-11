/// <reference types="react-scripts" />

import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: Ethereum;
  }

  type Ethereum =
    | {
        request: (params: { method: string }) => Promise<string[]>;
      }
    | undefined;

  type Contract = ethers.Contract;
  type Signer = ethers.Signer;
  type Web3Provider = ethers.providers.Web3Provider;
}
