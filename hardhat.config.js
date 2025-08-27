require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    skale: {
      url: "https://mainnet.skalenodes.com/v1/elated-tan-skat",
      chainId: 2046399126,
      accounts: [process.env.PRIVATE_KEY] // 👈 add your wallet PK in .env
    }
  }
};
