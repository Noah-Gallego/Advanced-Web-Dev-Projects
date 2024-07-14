// Built in Library in Node.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Create a server object
// req: Request object
// res: Response object
const server = http.createServer((req, res) => {
    console.log('Request received');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1 style = "color: blue;">Hello World</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});