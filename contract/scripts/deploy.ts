import { ethers } from "hardhat";

import debug from "../utils/debug";

async function deploy(): Promise<void> {
  await debug();

  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

deploy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
