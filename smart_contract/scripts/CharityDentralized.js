const { ethers } = require("hardhat");

async function main() {
  const CharityDecentralized = await ethers.getContractFactory("CharityDecentralized");
  const charity = await CharityDecentralized.deploy();
  await charity.deployed();
  console.log("CharityDecentralized deployed to:", charity.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
