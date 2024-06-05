//Deployed to  0x348D10371546170023D863232b659F565781B3A6

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying emission contract with the account:", deployer.address);
      //Get the contract to deploy and deploy
      const Emission = await hre.ethers.getContractFactory("Emission");
      const emission = await Emission.deploy();
     const contract_address = await emission.target;
    console.log("contract deployed to", contract_address);
  }
  

  //We recommend this pattern to be able to use async/await eveverywhere
main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
});