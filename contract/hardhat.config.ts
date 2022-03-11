import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

import env from "./utils/env";

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    [env.network]: {
      url: env.uri.testnet,
      accounts: env.key.private !== undefined ? [env.key.private] : [],
    },
  },
  gasReporter: {
    enabled: env.debug.reportGas !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: env.key.etherscan,
  },
};

export default config;
