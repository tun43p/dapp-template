/// <reference types="react-scripts" />

declare global {
  interface Window {
    ethereum: Ethereum;
  }

  type Ethereum =
    | {
        request: (params: { method: string }) => Promise<string[]>;
      }
    | undefined;
}

export default Window;
