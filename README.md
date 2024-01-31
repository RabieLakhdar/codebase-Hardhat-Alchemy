# codebase Hardhat & Alchemy

This project demonstrates a basic Hardhat use case. with  simple contract to read and write state on blockchain. 

Try running some of the following tasks:

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

## required add .env file
```shell
API_URL = "https://eth-sepolia.g.alchemy.com/v2/<Alchemy API KEY sepolia>"
API_KEY = "from alchemy sepolia network"
PRIVATE_KEY = "from your wallet on meta or hardhat accounts"
CONTRACT_ADDRESS = "after deploy your contract"
```