var bodyParser = require('body-parser');

module.exports = function(app, db){
	
	app.use(bodyParser());
    
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
    
	app.post('/addquote', function(req,res){

        if(req.body.name){
            
            //res.redirect('/addquote' + req.body.name);     
            res.render('addquote'+req.body.name,{

                title:'Title',
                name: 'Add quote' +req.body.name
            });
        }

	});
}