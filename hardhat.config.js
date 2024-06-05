require("@nomicfoundation/hardhat-toolbox"); 
require('dotenv').config()
const ALCHEMY_HTTP_URL=process.env.ALCHEMY_HTTP_URL
const POLYGON_MAINNET_RPC_URL = process.env.POLYGON_MAINNET_RPC_URL || "https://polygon-mainnet.alchemyapi.io/v2/your-api-key"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x" // optional
const MNEMONIC = process.env.MNEMONIC || "chalk ski palace behave gas minimum put obscure muffin rural cruel crash"
/** @type import('hardhat/config').HardhatUserConfig */
 HOLESKY_RPC_URL="https://eth-holesky.g.alchemy.com/v2/4QS3qzsmHflvtZ9RtpI_vtXLiFppg7Cw"

 module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // // If you want to do some forking, uncomment this
      // forking: {
      //   url: MAINNET_RPC_URL
      // }
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    holesky: {
      url:"https://eth-holesky.g.alchemy.com/v2/4QS3qzsmHflvtZ9RtpI_vtXLiFppg7Cw",
      accounts: ["705d463ce00c05adafa4e28e34da9721ce33ca418952ac1d8e9cf1c0dd1229a1"]
    }
  }
};

