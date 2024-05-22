
const hre = require("hardhat");
const fs = require('fs');

//Contract Details
const MY_VIDEO_CARD_TOKEN_ADDRESS = "MY_VIDEO_CARD_TOKEN_ADDRESS";
const CONTRACT_JSON = JSON.parse(fs.readFileSync('./artifacts/contracts/MyVideoCardNFT.sol/MyVideoCardNFT.json', 'utf-8'))

//Infura or Alchemy API_KEY
const API_KEY = "https://sepolia.infura.io/v3/INFURA_API_KEY";
// const API_KEY = "https://eth-sepolia.g.alchemy.com/v2/ALCHEMY_API_KEY";

//METAMASK PRIVATE_KEY
const PRIVATE_KEY = "METAMASK PRIVATE_KEY";

//URI for the METADATA
const PINATA_IPFS_URI = "PINATA_IPFS_METADATA_URI";

async function main() {

    console.log("Minting My Video Card NFT...")
        await mintMyVideoCardNFT();

    console.log(`Contract Address: ${MY_VIDEO_CARD_TOKEN_ADDRESS} `)
}

async function mintMyVideoCardNFT() {

    const PROVIDER = new hre.ethers.JsonRpcProvider(API_KEY)
    const SIGNER = new hre.ethers.Wallet(PRIVATE_KEY, PROVIDER);

    console.log(`Calling mintNFTToken...`)
    const contract = new hre.ethers.Contract(MY_VIDEO_CARD_TOKEN_ADDRESS, CONTRACT_JSON.abi, SIGNER)
    
    console.log(`Minting NFT...${PINATA_IPFS_URI}`)
    const transaction = await contract.mint(PINATA_IPFS_URI)
    await transaction.wait()
    
    const tokenCounter = await contract.tokenCounter()
    console.log(`Minting Token Done.`)

    const tokenCounterNumber = Number(tokenCounter) -1;
    console.log(`Successfully Minted the NFT with Token Id : ${tokenCounterNumber}`)
    
    return tokenCounterNumber
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });