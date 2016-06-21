var express = require('express');
var http = require('http');
var firebase = require('firebase');

var app = express();
var server = http.createServer(app);

firebase.initializeApp({
  serviceAccount: "firebase-credentials.json",
  databaseUTL: "https://my-cewl-project.firebaseio.com/"
});

server.listen(3030, function() {
  console.log('listen on http://localhose:3030');
});
