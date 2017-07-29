var bodyParser = require('body-parser');

module.exports = function(app, db){

	app.use(bodyParser());


	app.get('/quote', function(req,res){

	var quotes = db.getQuotes();	
	res.render('quote',{

			title:'Title',
			name: 'Quote',
			quotes: quotes
		});
	});

	app.get('/addquote', function(req,res){

	res.render('addquote',{

			title:'Title',
			name: 'Add quote'
		});
	});

	var quote = [];

	app.post('/addquote', function(req,res){

		console.log('cliente addquote ' + req.body.ficha);
		db.addQuote(
			{
			"cliente": req.body.cliente,			
			"destino": req.body.destino,
			"ficha": req.body.ficha,
			"startdate": req.body.startdate,
			"enddate": req.body.enddate,			
			"viaje":  req.body.viaje,
			"equipo": req.body.equipo,
			"tarifaUSD": req.body.tarifaUSD,
			"tarifaDOP": req.body.tarifaDOP
		});


		res.redirect('/');

		console.log('Registro insertado correctamente...');

	});
}