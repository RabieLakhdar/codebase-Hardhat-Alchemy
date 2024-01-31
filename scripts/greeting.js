
const { helloWorldContract } = require('../helpers/initialization.js')

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);
}
main();
