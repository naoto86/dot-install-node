var http = require('http');
var settings = require('./settings')
var server = http.createServer();
console.log(settings);
server.on('request', function(req, res) {
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.write('hello world!!!');
  res.end();
});
// server.listen(1337,'192.168.33.72');
server.listen(settings.port, settings.host);
console.log("server listening ...")