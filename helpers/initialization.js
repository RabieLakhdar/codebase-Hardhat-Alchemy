const ethers = require('ethers');

let provider
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json")

const API_URL = process.env.API_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

// Provider
// This is a node provider that gives you read and write access to the blockchain
const alchemyProvider = new ethers.providers.JsonRpcProvider(API_URL);

// Signer
// This represents an Ethereum account that has the ability to sign transactions
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
// This is an Ethers.js object representing a specific contract deployed on-chain
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);


module.exports = {
  alchemyProvider,
  signer,
  helloWorldContract
}