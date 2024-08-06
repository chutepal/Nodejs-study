const http = require('http');

// Step 1: Create a server
const server = http.createServer((req, res) => {
    res.end('Hello from the server!') // To send response to client-side
    console.log('A new request received')
})

// Step 2: Start the server
server.listen('8000', '127.0.0.1', () => { // Port, Server address, Callback fn
    console.log('Server has started')
})