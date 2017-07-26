var express = require('express');

var app = express();

var handlebars = require('express-handlebars');

app.set('view engine', 'html');

app.engine('html', handlebars({

	defaultLayout: 'base',
	extname: '.html'
}));

var db = require('./lib/db-helpers.js')();

var loginRoute = require('./route/login.js');
var logoutRoute = require('./route/logout.js');
var registrationRoute = require('./route/registration.js');
var quoteRoute = require('./route/quote.js');

var esteroide = require('./lib/esteroide.js');

loginRoute(app,db);
logoutRoute(app,db);
registrationRoute(app,db);
quoteRoute(app,db);
esteroide(app,db);


app.get('/', function(req,res){

	res.render('index',{

		title:'Title',
		name: 'Name'
	});
});




app.listen(8081, function(){

	console.log('Listening from 8081...');
});