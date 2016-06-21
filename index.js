var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

server.listen(3030, function() {
  console.log(listen on 'http://localhose:3030');
});
