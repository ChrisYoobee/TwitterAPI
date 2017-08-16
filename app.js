var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());

app.use(function(request, response, next){
	console.log(`${request.method} request for ${request.url}`);
	next();

});

app.use(express.static("./public"));

app.listen(3000);

console.log("server running on port 3000");