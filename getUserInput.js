const readline = require('readline');

// Create interface and configure
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/** Get input from user using rl.question() method
    rl.question(<prompt string>, <callback method to capture input data>)
*/
rl.question('Enter your name: ', (name) => {
    console.log('You entered '+name);
    rl.close(); // To close the interface
})

// Add event listener on closing interface
rl.on('close', () => {
    console.log('Interface closed')
    process.exit();
})