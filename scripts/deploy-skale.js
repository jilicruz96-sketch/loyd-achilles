const hre = require("hardhat");

async function main() {
  console.log("🚀 Deploying InfinityVault to SKALE...");

  const Vault = await hre.ethers.getContractFactory("InfinityVault");
  const vault = await Vault.deploy();

  await vault.deployed();
  console.log("✅ InfinityVault deployed at:", vault.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
