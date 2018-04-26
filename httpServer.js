const http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hi there !\n');
}).listen('8181', '127.0.0.1');
console.log('Server Running');

