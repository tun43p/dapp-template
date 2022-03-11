const alchemy = process.env.ALCHEMY_API_KEY;
const network = process.env.NETWORK || "ropsten";

const env = {
  app: {
    name: process.env.APP_NAME || "Dapp Template",
    symbol: process.env.APP_SYMBOL || "DT",
  },
  debug: {
    reportGas: process.env.REPORT_GAS,
  },
  key: {
    alchemy,
    etherscan: process.env.ETHERSCAN_API_KEY,
    private: process.env.WALLET_PRIVATE_KEY,
    public: process.env.WALLET_PUBLIC_KEY,
  },
  uri: {
    mainnet:
      process.env.MAINNET_URI ||
      `https://eth-mainnet.alchemyapi.io/v2/${alchemy}`,
    pinata: process.env.PINATA_BASE_URI || "https://gateway.pinata.cloud/ipfs/",
    testnet:
      process.env.TESTNET_URI ||
      `https://eth-${network}.alchemyapi.io/v2/${alchemy}`,
  },
  network,
};

export default env;
