# codebase Hardhat & Alchemy

This project demonstrates a basic Hardhat use case. with  simple contract to read and write state on blockchain. 

Try running some of the following tasks:


## its required to add .env file
```shell
API_URL = "https://eth-sepolia.g.alchemy.com/v2/<Alchemy API KEY sepolia>"
API_KEY = "from alchemy sepolia network"
PRIVATE_KEY = "from your wallet on meta or hardhat accounts"
CONTRACT_ADDRESS = "after deploy your contract"
ETHERSCAN_API_KEY = "From your etherscan account"
```

```shell
npx hardhat help
npx hardhat test
npx hardhat node
```
## Deploy your contract in network sepolia testnet
```shell
npx hardhat run scripts/deploy.js
```

## Interact with function read message
```shell
npx hardhat run scripts/greeting.js
```

## Interact with function to update message
```shell
npx hardhat run scripts/update.js
```

```
Notice: you can execute your additional functions
 for example bot to interact with  your contract with cmd:
node app.js
```
## example for contract deployed
https://sepolia.etherscan.io/address/0x4C99868475969f0d069334EC487676C4ff86F615
