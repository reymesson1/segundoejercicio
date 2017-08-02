module.exports = function(app, db){
	
	app.get('/quote', function(req,res){

	res.render('quote',{

			title:'Title',
			name: 'Quote'
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
        
        


		console.log("cliente " + req.body.cliente);

		console.log("destino " + req.body.destino);

		console.log("ficha " + req.body.ficha);

		console.log("startdate " + req.body.startdate);

		console.log("enddate " + req.body.enddate);

		console.log("destino " + req.body.destino);

		console.log("viaje " + req.body.viaje);

		console.log("equipo" + req.body.equipo);

		console.log("tarifaUSD" + req.body.tarifaUSD);

		console.log("tarifaDOP" + req.body.tarifaDOP);		


		console.log("cliente " + req.body.cliente);

		console.log("destino " + req.body.destino);

		console.log("ficha " + req.body.ficha);

		console.log("startdate " + req.body.startdate);

		console.log("enddate " + req.body.enddate);

		console.log("destino " + req.body.destino);

		console.log("viaje " + req.body.viaje);

		console.log("equipo" + req.body.equipo);

		console.log("tarifaUSD" + req.body.tarifaUSD);

		console.log("tarifaDOP" + req.body.tarifaDOP);		


		db.addQuote(

			{"destino": req.body.cliente,

			"cliente ": req.body.cliente,

			"destino ": req.body.destino,

			"ficha:": req.body.ficha,

			"startdate": req.body.startdate,

			"enddate": req.body.enddate,

			"destino": req.body.destino,

			"viaje":  req.body.viaje,

			"equipo": req.body.equipo,

			"tarifaUSD": req.body.tarifaUSD,

			"tarifaDOP": req.body.tarifaDOP
            }
		);
    });
}