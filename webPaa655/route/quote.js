var bodyParser = require('body-parser');

module.exports = function(app, db){

    var idConduce = 0;
	
	app.use(bodyParser());
    
	app.get('/quote', function(req,res){

       var quotes = db.getQuotes();

	   res.render('quote',{

			title:'Title',
			name: 'Quote',
            quotes: quotes

		});
	});

    app.post('/quote', function(req,res){


        if(req.body.name){

            var quotes = db.getQuotesFind({"tipoconduce": req.body.name});
                        
            res.render('quote'+req.body.name,{

                title:'Title',
                name: 'CONDUCE ' + req.body.name.toUpperCase(),
                quotes: quotes
            });
        }
    });
	
    app.get('/addquotehp', function(req,res){

        res.render('addquotehp',{

            title:'Title',
            name: 'Agregar Conduce HP'
        });
    });

    app.get('/addquotecolas', function(req,res){
    
        res.render('addquotecolas',{

            title:'Title',
            name: 'Agregar Conduce Colas'
        });
    });

    app.get('/addquotetrailers', function(req,res){
    
        res.render('addquotetrailers',{

            title:'Title',
            name: 'Agregar Conduce Trailers'
        });
    });
       
    app.get('/addquotechatelain', function(req,res){
    
        res.render('addquotechatelain',{

            title:'Title',
            name: 'Agregar Conduce Chatelain'
        });
    });

    app.get('/addquotecarribex', function(req,res){
    
        res.render('addquotecarribex',{

            title:'Title',
            name: 'Agregar Conduce Carribex'
        });
    });

    app.get('/addquotecaracol', function(req,res){
    
        res.render('addquotecaracol',{

            title:'Title',
            name: 'Agregar Conduce Caracol'
        });
    });

    app.get('/addquoterigidos', function(req,res){
    
        res.render('addquoterigidos',{

            title:'Title',
            name: 'Agregar Conduce Rigidos'
        });
    });

    app.post('/addquotehp', function(req,res){

        idConduce = db.getQuotes().length;   
                
        db.addQuote(
        {      
            "idConduce": idConduce,      
            "fecha": req.body.fecha,
            "fechaviaje": req.body.fechaviaje, 
            "destino": req.body.destino,           
            "codigoreferencia": req.body.codigoreferencia,
            "fichacamion": req.body.fichacamion,
            "fichatrailers": req.body.fichatrailers,
            "tarifaDOP": req.body.tarifaDOP,
            "tipoconduce": "hp"
        });
        
        res.redirect('/');
    });
    
    app.post('/addquotecolas', function(req,res){
        
        idConduce = db.getQuotes().length;

        db.addQuote(
        {
            "idConduce": idConduce,
            "fecha": req.body.fecha,
            "fechaviaje": req.body.fechaviaje,
            "destino": req.body.destino,
            "codigoreferencia": req.body.codigoreferencia,
            "fichapatana": req.body.fichapatana,
            "fichaequipo": req.body.fichaequipo,
            "tarifaUSD": req.body.tarifaUSD,
            "tarifaDOP": req.body.tarifaDOP,
            "tipoconduce": "colas"
        });
        
        res.redirect('/');
    });
    
    app.post('/addquotetrailers', function(req,res){
        
        idConduce = db.getQuotes().length;

        db.addQuote(
        {
            "idConduce": idConduce,
            "fecha": req.body.fecha,
            "fechaviaje": req.body.fechaviaje,
            "destino": req.body.destino,
            "codigoreferencia": req.body.codigoreferencia,
            "fichacamion": req.body.fichacamion,
            "fichatrailers": req.body.fichatrailers,
            "tarifaDOP": req.body.tarifaDOP,
            "tipoconduce": "trailers"
        });
        
        res.redirect('/');
    });
    
    app.post('/addquotechatelain', function(req,res){
        
        idConduce = db.getQuotes().length;

        db.addQuote(
        {
            "idConduce": idConduce,
            "fecha": req.body.fecha,
            "fechaviaje": req.body.fechaviaje,
            "destino": req.body.destino,
            "codigoreferencia": req.body.codigoreferencia,
            "fichas": req.body.fichas,
            "tarifaUSD": req.body.tarifaUSD,
            "tarifaDOP": req.body.tarifaDOP,
            "tipoconduce": "chatelain"
       });
        
        res.redirect('/');
        
    });
    
    app.post('/addquotecarribex', function(req,res){
                
        idConduce = db.getQuotes().length;

        db.addQuote(
        {
            "idConduce": idConduce,
            "fecha": req.body.fecha,
            "fechaviaje": req.body.fechaviaje,
            "destino": req.body.destino,
            "codigoreferencia": req.body.codigoreferencia,
            "fichapatana": req.body.fichapatana,
            "fichaequipo": req.body.fichaequipo,
            "tarifaUSD": req.body.tarifaUSD,
            "tarifaDOP": req.body.tarifaDOP,
            "tipoconduce": "carribex"
        });
        
        res.redirect('/');
    });
    
    app.post('/addquotecaracol', function(req,res){
        
        idConduce = db.getQuotes().length;

        db.addQuote(
        {
            "idConduce": idConduce,
            "fecha": req.body.fecha,
            "fechaviaje": req.body.fechaviaje,
            "destino": req.body.destino,
            "codigoreferencia": req.body.codigoreferencia,
            "fichacamion": req.body.fichacamion,
            "fichatrailers": req.body.fichatrailers,
            "tarifaDOP": req.body.tarifaDOP,
            "tipoconduce": "caracol"
        });
        
        res.redirect('/');
    });
    
    app.post('/addquoterigidos', function(req,res){

        idConduce = db.getQuotes().length;

        db.addQuote(
        {
            "idConduce": idConduce,
            "fecha": req.body.fecha,
            "destino": req.body.destino,
            "descripcion": req.body.descripcion,
            "codigoreferencia": req.body.codigoreferencia,
            "ficha": req.body.ficha,
            "tarifaDOP": req.body.tarifaDOP,
            "tipoconduce": "rigidos"
       });
                
        res.redirect('/');
    });
}