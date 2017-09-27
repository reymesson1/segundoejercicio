var bodyParser = require('body-parser');

module.exports = function(app, db){

    var idFactura = 0;
	
	app.use(bodyParser());
    
	app.get('/invoice', function(req,res){

       var invoices = db.getInvoices();

	   res.render('invoice',{

			title:'Title',
			name: 'Invoice',
            invoices: invoices

		});
	});

	
	app.post('/printinvoice', function(req,res){

       if(req.body.idSelected){

       		           
       	   var invoices = db.getInvoicesFind({"idFactura": parseInt(req.body.idSelected)});
       	   
		   res.render('print',{

				title:'Title',
				name: 'Invoice',
	            invoices: invoices

			});
       }
	});

    app.post('/addinvoice', function(req,res){

        if(req.body.numeroconduce){

        	idFactura = db.getInvoices().length+1;

        	

        	var quotes = db.getQuotesFind({"idConduce": parseInt(req.body.numeroconduce)});

            
            db.addInvoice(
	        {
	            "idFactura": idFactura,
	            "fecha": "11/08/2017",	            
	            "cliente": "Cartones del Caribe",
	            "items": quotes,
	            "tipoconduce": req.body.tipoconduce
	       });
        }

        res.redirect('/');
    });
	 
    
}