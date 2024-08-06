// Using synchronous methods
const fs = require('fs');

const readContent = fs.readFileSync('./Files/read.txt', 'utf-8'); // File path, encoding

console.log(readContent)

const content = `Data written in file: ${readContent} \nDate created: ${new Date()}`;

fs.writeFileSync('./Files/write.txt', content); // If write.txt file is not present, it will automatically create the file first