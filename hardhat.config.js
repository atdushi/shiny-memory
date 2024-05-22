require("@nomicfoundation/hardhat-toolbox");

const HTTPS_ENDPOINT = "INFURA SEPOLIA HTTPS END POINT";
const PRIVATE_KEY = "METAMASK PRIVATE KEY";

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: HTTPS_ENDPOINT,
      accounts: [PRIVATE_KEY],
    }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}