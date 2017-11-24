var http = require('http');
var fs = require('fs')
var ejs = require('ejs')
var qs = require('querystring')
var settings = require('./settings')
var server = http.createServer();

var template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8')
var posts = []

function renderForm(posts, res){
  var data = ejs.render(template,{
    posts: posts
  })
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write(data);
  res.end();
}

server.on('request', function(req, res) {
  if (req.method === 'POST' ){
    req.data = "";
    req.on("readable", function(){
      req.data += read.read();
    })
    req.on("end", function(){

    })
  }else{
    renderForm(posts, res)
  }

});
// server.listen(1337,'192.168.33.72');
server.listen(settings.port, settings.host);
console.log("server listening ...")