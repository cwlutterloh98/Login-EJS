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

// get dashboard
app.get('/', (req, res)=>{
	res.render('dashboard/dashboard.ejs', {
	});
});

// get login
app.get('/login', (req, res)=>{
	res.render('login/login.ejs', {
	});
});
 
 // serve static files
app.use(express.static('public'));

var server = app.listen(4000, function(){
    console.log('listening to port 4000')
});