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

}