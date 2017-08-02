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
    
	app.post('/addquote', function(req,res){

        if(req.body.name){
            
            //res.redirect('/addquote' + req.body.name);     
            res.render('addquote'+req.body.name,{

                title:'Title',
                name: 'Add quote' +req.body.name
            });
        }

	});
    
    app.post('/addquotehp', function(req,res){
        
        console.log(req.body.fecha);
        console.log(req.body.fechaviaje);
        console.log(req.body.codigoreferencia);
        console.log(req.body.fichacamion);
        console.log(req.body.fichatrailers);
        console.log(req.body.tarifaDOP);
        
        db.addQuote(
        {
            "fecha": "req.body.fecha",
            "fechaviaje": "req.body.fechaviaje",
            "codigorefencia": "req.body.codigoreferencia",
            "fichacamion": "req.body.fichacamion",
            "fichatrailers": "req.body.fichatrailers",
            "tarifaDOP": "req.body.tarifaDOP",
            "tipoConduce": "HP"
        });
        
        res.redirect('/');
    });
    
    app.post('/addquotecolas', function(req,res){
        
        console.log(req.body.fecha);
        console.log(req.body.fechaviaje);
        console.log(req.body.codigoreferencia);
        console.log(req.body.fichapatana);
        console.log(req.body.fichaequipo);
        console.log(req.body.tarifaUSD);
        console.log(req.body.tarifaDOP);
        
        db.addQuote(
        {
            "fecha": "req.body.fecha",
            "fechaviaje": "req.body.fechaviaje",
            "codigorefencia": "req.body.codigoreferencia",
            "fichapatana": "req.body.fichapatana",
            "fichaequipo": "req.body.fichaequipo",
            "tarifaUSD": "req.body.tarifaUSD",
            "tarifaDOP": "req.body.tarifaDOP",
            "tipoConduce": "Colas"
        });
        
        res.redirect('/');
    });
    
    app.post('/addquotetrailers', function(req,res){
        
        console.log(req.body.fecha);
        console.log(req.body.fechaviaje);
        console.log(req.body.codigoreferencia);
        console.log(req.body.fichacamion);
        console.log(req.body.fichatrailers);
        console.log(req.body.tarifaDOP);
        
        db.addQuote(
        {
            "fecha": "req.body.fecha",
            "fechaviaje": "req.body.fechaviaje",
            "codigorefencia": "req.body.codigoreferencia",
            "fichacamion": "req.body.fichacamion",
            "fichatrailers": "req.body.fichatrailers",
            "tarifaDOP": "req.body.tarifaDOP",
            "tipoConduce": "Trailers"
        });
        
        res.redirect('/');
    });
    
    app.post('/addquotechatelain', function(req,res){
        
        console.log(req.body.fecha);
        console.log(req.body.fechaviaje);
        console.log(req.body.codigoreferencia);
        console.log(req.body.fichas);
        console.log(req.body.tarifaUSD);
        console.log(req.body.tarifaDOP);
        
        db.addQuote(
        {
            "fecha": "req.body.fecha",
            "fechaviaje": "req.body.fechaviaje",
            "codigorefencia": "req.body.codigoreferencia",
            "fichas": "req.body.fichas",
            "tarifaUSD": "req.body.tarifaUSD",
            "tarifaDOP": "req.body.tarifaDOP",
            "tipoConduce": "Chatelain"
        });
        
        res.redirect('/');
        
    });
    
    app.post('/addquotecarribex', function(req,res){
        
        console.log(req.body.fecha);
        console.log(req.body.fechaviaje);
        console.log(req.body.codigoreferencia);
        console.log(req.body.fichapatana);
        console.log(req.body.fichaequipo);
        console.log(req.body.tarifaUSD);
        console.log(req.body.tarifaDOP);
        
        db.addQuote(
        {
            "fecha": "req.body.fecha",
            "fecha": "req.body.fechaviaje",
            "codigorefencia": "req.body.codigoreferencia",
            "fichapatana": "req.body.fichapatana",
            "fichaequipo": "req.body.fichaequipo",
            "tarifaUSD": "req.body.tarifaUSD",
            "tarifaDOP": "req.body.tarifaDOP",
            "tipoConduce": "Carribex"
        });
        
        res.redirect('/');
    });
    
    app.post('/addquotecaracol', function(req,res){
        
        console.log(req.body.fecha);
        console.log(req.body.fechaviaje);
        console.log(req.body.codigoreferencia);
        console.log(req.body.fichacamion);
        console.log(req.body.fichatrailers);
        console.log(req.body.tarifaDOP);    
        db.addQuote(
        {
            "fecha": "req.body.fecha",
            "fechaviaje": "req.body.fechaviaje",
            "codigorefencia": "req.body.codigoreferencia",
            "fichapatana": "req.body.fichatrailers",
            "tarifaDOP": "req.body.tarifaDOP",
            "tipoConduce": "Caracol"
        });
        
        res.redirect('/');
    });
    
    app.post('/addquoterigidos', function(req,res){
        
        console.log(req.body.fecha);
        console.log(req.body.descripcion);
        console.log(req.body.codigoreferencia);
        console.log(req.body.ficha);
        console.log(req.body.tarifaDOP);
        
        db.addQuote(
        {
            "fecha": "req.body.fecha",
            "codigorefencia": "req.body.codigoreferencia",
            "ficha": "req.body.ficha",
            "tarifaUSD": "req.body.tarifaUSD",
            "tipoConduce": "Rigidos"
        });
        
        console.log(db.getQuotes());
        res.redirect('/');
    });
}