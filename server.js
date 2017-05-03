require("dotenv").config(); //config will look for .env and push to servers

var express = require("express");
var app = express();

app.get("/", function(request, respond){
	//respond.send("hello world!");
		respond.json({
		"user": process.env.DB_USER,
		"pass": process.env.DB_PASS
	});
});

app.listen(8080);  //or server.listen

console.log("server is running!");
