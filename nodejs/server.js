var http = require('http');
var fs = require('fs')
var ejs = require('ejs')
var settings = require('./settings')
var server = http.createServer();

var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8')
var n = 0
server.on('request', function(req, res) {
  n++;
  var data = ejs.render(template, {
    title:"hello",
    content:"<strong>World!</strong>",
    n: n
  });

  res.writeHead(200,{'Content-Type':'text/html'});
  res.write(data);
  res.end();
});
// server.listen(1337,'192.168.33.72');
server.listen(settings.port, settings.host);
console.log("server listening ...")