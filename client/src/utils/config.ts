import contract from "../artifacts/Greeter.json";

const config = {
  app: {
    title: "Dapp Template",
  },
  chain: {
    rinkeby: {
      id: "0x4",
      name: "Rinkeby",
    },
  },
  contract: {
    abi: contract.abi,
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  },
};

export default config;
