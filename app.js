const http = require('http'); //require either take your JS file path or you can import a core node.js module

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}); //execute for every incoming requests

server.listen(3000); //node.js will keep this running for incoming requests