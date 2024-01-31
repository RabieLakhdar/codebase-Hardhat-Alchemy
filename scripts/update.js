
const { helloWorldContract } = require('../helpers/initialization.js')

async function main() {

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("Hello, its updated");
    await tx.wait();
}

main();
