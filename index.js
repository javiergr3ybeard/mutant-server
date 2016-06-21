var express = require('express');
var http = require('http');
var firebase = require('firebase');
var twilio = require('twilio');
var dotenv = require('dotenv');

var app = express();
var server = http.createServer(app);
dotenv.load();

//Authenticate with firebase
firebase.initializeApp({
  serviceAccount: "firebase-credentials.json",
  databaseUTL: "https://my-cewl-project.firebaseio.com/"
});
var rootRef = firebase.database().ref();

//Authenticat TWILIO!!!
var twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

//listen for new texts being added
var textsRef = rootRef.child('texts');
textsRef.on('child_added', function(snapshot) {
  var text = snapshot.val();
  twilioClient.messages.create({
    body: text.name + ', Come to my office so we can disscus:"' + text.topic + '"',
    to: text.phoneNumber,
    from: process.env.TWILIO_NUMBER
  }, function(err, message) {
    if(err) {
      consol.log(err.message);
    }
  });
});

server.listen(3030, function() {
  console.log('listen on http://localhose:3030');
});
