const http = require('http'); //require either take your JS file path or you can import a core node.js module
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler); //execute for every incoming requests

server.listen(3000); //node.js will keep this running for incoming requests