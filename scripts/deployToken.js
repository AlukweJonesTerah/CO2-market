// deploy.js
// deployed to: 0x8dd4E0331a710b5dD5F8245fB1d42301349Cef31

const { ethers } = require("hardhat");

async function main() {
  const [deployer, government, industry1, individual1] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  const deployerBalance = await ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", (deployerBalance.toString()));

  const tokenName = "Green Credit Token";
  const tokenSymbol = "GCT";
  const tokenPrice = ethers.parseEther("1"); // Initial token price set to 1 ETH
  const GreenCreditToken = await hre.ethers.getContractFactory("GreenCreditToken");
  const green_credit_token = await GreenCreditToken.deploy(tokenPrice);
  const contract_address = await green_credit_token.target;
  console.log("contract deployed to", contract_address);
}

main()
.then(() => process.exit())
.catch((error) =>{
    console.log(error);
    process.exit(1);
});