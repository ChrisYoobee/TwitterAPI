var express = require('express');
var cors = require('cors');
var Twit = require('twit');
var config = require('./config')

var T = new Twit({
  consumer_key:         config.Tconsumer_key,
  consumer_secret:      config.Tconsumer_secret,
  access_token:         config.Taccess_token,
  access_token_secret:  config.Taccess_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})



var app = express();

app.use(cors());

app.use(function(request, response, next){
	console.log(`${request.method} request for ${request.url}`);
	next();

});

app.use(express.static("./public"));

// app.get("/search=:term", function(request, response){

// 	var term = request.params.term;
// 	var params = {q:term};
// 	T.get('search/tweets', params, function(error, tweets, twitterResponse){
// 		// console.log(tweets);
// 		if(!error){
// 			response.json(tweets);
// 		}
// 	});
// });

app.get("/trends", function(request, response){
	var params = {id:23424916};
	T.get('trends/place', params, function(error, trends, twitterResponse){
		// console.log(trends);
		if(!error){
			response.json(trends);
		}

	});
});

app.get("search=:term", function(request, response){
	var params = {q:term};
	T.get('users/search', params, function(error, users, twitterResponse){
		console.log(users);
		if(!error){
			response.json(users);
		}

	})
})


app.listen(3000);

console.log("server running on port 3000");