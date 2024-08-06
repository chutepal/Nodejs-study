// Using asynchronous methods
const fs = require('fs');

fs.readFile('./Files/read.txt', 'utf-8', (err, data) => { // File path, Encoding, Callback fn
    console.log(data)
})

console.log('Reading file...')

fs.writeFile('./Files/write.txt', 'Write file using asynchronous method', (err, data) => {
    console.log('File written successfully')
});
