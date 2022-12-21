// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.

const { ethers } = require("hardhat")

async function main() {
  // get the contract factory
  const whitelistContract = await ethers.getContractFactory("Whitelist");
  // deploy the contract
  const deployedWhitelistContract = await whitelistContract.deploy(50)
  // wait for the contract to deploy
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract
  console.log("Whitelist Contract Address: ", deployedWhitelistContract.address)
}

// call the main function and catch any error that occurs
main().then(() => process.exit(0)).catch((error) => {
  console.error(error)
  process.exit(1)
})