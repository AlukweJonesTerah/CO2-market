//Deployed to  0xB466Fa9cDFffC28D757f0fC6c6d7c4fe8a739032

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying kyc contract with the account:", deployer.address);
      //Get the contract to deploy and deploy
      const KYC = await hre.ethers.getContractFactory("KYC");
      const kyc = await KYC.deploy();
     const contract_address = await kyc.target;
    console.log("contract deployed to", contract_address);
  }
  

  //We recommend this pattern to be able to use async/await eveverywhere
main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
});