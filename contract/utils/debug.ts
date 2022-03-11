import { ethers } from "hardhat";

async function debug(): Promise<void> {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the address:", deployer.address);
  console.log("Balance:", (await deployer.getBalance()).toString());
}

export default debug;
