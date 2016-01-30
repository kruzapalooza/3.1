// Dependency Configuration
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require ('method-override');
var globalId = 2;

// Express Setup
var app = express();

// Middleware setup
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(methodOverride());

// Data Setup
var todos = [{
	"id":1,
	"text": "Need to do this"
}];

// Routes
app.get('/api/todos', function(req, res){
	res.send(todos);
});

app.post('/api/todos', function(req, res){
	console.log(req);
	// create todo obj
	var todo = { 
		"id": globalId,
		"text". req.body.text; 
	}

	todos.push(todo);
	globalId += 1;

	res.send(todos); // get body off request

});

app.listen(3000);
console.log("Up and running on 3000");


// var server = http.createServer(function(request, response){

// if (request.url == '/') {
// 	console.log("We've been hit!");
// 	response.write("Hi");
// 	response.end();
// 	return;
// 	}

// 	if (request.url == '/hello') {
// 		console.log("We've been hit on /hello");
// 		response.write("World");
// 		response.end();
// 		return;
// 	}

// 		if (request.url == '/goodbye') {
// 		console.log("We've been hit on /goodbye");
// 		response.write("<h1>Galaxy</h1>");

// 		response.end();
// 		return;
// 	}

// }); 