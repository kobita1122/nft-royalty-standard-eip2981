# NFT Royalty Standard (EIP-2981)

An expert-level repository for modern NFT creators. This project implements the EIP-2981 Royalty Standard, which provides a unified way for NFT marketplaces (like OpenSea, Rarible, and LooksRare) to query royalty information directly from the smart contract.

## Key Features
* **ERC-721 Integration:** Full NFT functionality using OpenZeppelin v5.0.
* **Universal Royalty Logic:** Implements `royaltyInfo` to return the receiver address and percentage for any sale price.
* **On-Chain Enforcement:** Metadata and royalty settings are baked into the contract, ensuring transparency.
* **Flat Architecture:** Single-directory layout for easy deployment and audit.

## Workflow
1. **Mint:** Create an NFT with a specific `tokenURI`.
2. **Set Royalty:** Define a global or per-token royalty percentage (e.g., 5%).
3. **Query:** Marketplaces call `royaltyInfo(tokenId, salePrice)` to calculate the payout during a secondary sale.

## Setup
1. `npm install`
2. Update the `baseURI` in `RoyaltyNFT.sol`.
3. Deploy and mint your first royalty-backed collectible.
