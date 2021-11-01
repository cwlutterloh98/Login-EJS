// Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('public'));
 
// Set EJS as templating engine
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
 
// The render method takes the name of the HTML
// page to be rendered as input.
// This page should be in views folder in
// the root directory.
// We can pass multiple properties and values
// as an object, here we are passing the only name

	res.render('login.ejs', {
	});
 
});
 
 // serve static files
app.use(express.static('public'));

var server = app.listen(4000, function(){
    console.log('listening to port 4000')
});