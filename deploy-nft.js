const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const RoyaltyNFT = await hre.ethers.getContractFactory("RoyaltyNFT");
  const nft = await RoyaltyNFT.deploy("CryptoCreator", "CCX");

  await nft.waitForDeployment();
  const address = await nft.getAddress();

  console.log("Royalty NFT deployed to:", address);

  // Set 7.5% royalty (750 basis points) for the deployer
  await nft.setDefaultRoyalty(deployer.address, 750);
  console.log("Global royalty set to 7.5%");

  // Mint an example token
  await nft.safeMint(deployer.address, "ipfs://example-hash");
  console.log("Token #0 minted with royalty protection.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
