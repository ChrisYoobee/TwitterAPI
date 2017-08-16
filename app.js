var express = require('express');
var cors = require('cors');
var Twit = require('twit');
var config = require('./config')

var T = new Twit({
  consumer_key:         config.consumer_key:,
  consumer_secret:      config.consumer_secret,
  access_token:         config.access_token,
  access_token_secret:  config.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})

var app = express();

app.use(cors());

app.use(function(request, response, next){
	console.log(`${request.method} request for ${request.url}`);
	next();

});

app.use(express.static("./public"));

app.listen(3000);

console.log("server running on port 3000");