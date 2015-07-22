var http = require('http');
var fs = require('fs');

var index = fs.readFileSync('index.html')

http.createServer(function(request, response) {
  response.end(index);
}).listen(3000);
console.log('Entre em http://localhost:3000/');

