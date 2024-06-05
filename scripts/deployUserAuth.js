//Deployed to  0xCC02e6843300a3DAA5E40a23245eA9258ef69F3d

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying userAuth contract with the account:", deployer.address);
      //Get the contract to deploy and deploy
      const UserAuth = await hre.ethers.getContractFactory("UserAuth");
      const userAuth = await UserAuth.deploy();
     const contract_address = await userAuth.target;
    console.log("contract deployed to", contract_address);
  }
  

  //We recommend this pattern to be able to use async/await eveverywhere
main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
});