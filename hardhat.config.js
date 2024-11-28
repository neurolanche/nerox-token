/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    optimism: {  
      url: process.env.OPTIMISM_MAINNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    optimismSepolia: {  
      url: process.env.OPTIMISM_SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    astar: {
      url: "https://evm.astar.network",
      chainId: 592,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, 
    customChains: [
      {
        network: "optimismSepolia",
        chainId: 11155420,
        urls: {
          apiURL: "https://api-sepolia-optimistic.etherscan.io/api", 
          browserURL: "https://sepolia-optimistic.etherscan.io/", 
        },
      },
      {
        network: "astar",
        chainId: 592,
        urls: {
          apiURL: "https://astar.blockscout.com/api",
          browserURL: "https://astar.blockscout.com/",
        },
      },
    ],
  },
  solidity: "0.8.27",
};