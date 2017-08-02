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

db.addQuote(
			{
			"cliente": "req.body.cliente",
			"destino": "req.body.destino",
			"ficha": "req.body.ficha",
			"startdate": "req.body.startdate",
			"enddate": "req.body.enddate",
			"destino": "req.body.destino",
			"viaje":  "req.body.viaje",
			"equipo": "req.body.equipo",
			"tarifaUSD": "req.body.tarifaUSD",
			"tarifaDOP": "req.body.tarifaDOP"
});


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