module.exports = function(app, db){
            
	app.get('/preciocombustibles', function(req,res){

		var combustibles = db.getCombustibles();



		res.render('preciocombustibles',{

			title:'Title',
			name: 'Precio Combustibles',
			combustibles: combustibles               
		});
	});

	app.post('/preciocombustibles', function(req,res){

		var combustibles = db.getCombustibles();		

		var index = 0;

		index=combustibles.length;

		index+=1;

		db.addCombustible(
        {      
            "id": index,      
            "fechadesde": req.body.fechadesde,
            "fechahasta": req.body.fechahasta,             
            "precio": req.body.precio,
            "estado": "activo"
		});


		res.redirect('/preciocombustibles');
	})

	app.get('/tasadeldolar', function(req,res){

		var dolars = db.getDolars();



		res.render('tasadeldolar',{

			title:'Title',
			name: 'Tasa del Dolar',
			dolars: dolars
		});
	});

	app.post('/tasadeldolar', function(req,res){

		var dolars = db.getDolars();		

		var index = 0;

		index=dolars.length;

		index+=1;

		db.addDolar(
        {      
            "id": index,      
            "fechadesde": req.body.fechadesde,
            "fechahasta": req.body.fechahasta,             
            "precio": req.body.precio,
            "estado": "activo"
		});


		res.redirect('/tasadeldolar');
	})

	app.get('/tarifaxrutas', function(req,res){

		var rutas = db.getRutas();

		res.render('tarifaxrutas',{

			title:'Title',
			name: 'Tarifa por Rutas',
			rutas: rutas
		});
	});

	app.post('/tarifaxrutas', function(req,res){

		var rutas = db.getRutas();		

		var index = 0;

		index=rutas.length;

		index+=1;

		db.addRuta(
        {      
            "id": index,      
            "desde": req.body.desde,
            "hasta": req.body.hasta,             
            "precio": req.body.precio,
            "estado": "activo"
		});


		res.redirect('/tarifaxrutas');		
	})

	app.get('/tablaclientes', function(req,res){

		var clientes = db.getClientes();

		res.render('clientes',{

			title:'Title',
			name: 'Listado de Clientes',
			clientes: clientes
		});
	});

	app.post('/tablaclientes', function(req,res){

		var clientes = db.getClientes();		

		var index = 0;

		index=clientes.length;

		index+=1;

		db.addCliente(
        {      
            "id": index,      
            "nombre": req.body.nombre,            
            "rnc": req.body.rnc,            
            "direccion": req.body.direccion,            
            "telefono": req.body.telefono,            
            "estado": "activo"
		});


		res.redirect('/tablaclientes');		
	})

	app.get('/usuarios', function(req,res){

		var usuarios = db.getUsuarios();

		res.render('usuarios',{

			title:'Title',
			name: 'Listado de Usuarios',
			usuarios: usuarios
		});
	});

	app.post('/usuarios', function(req,res){

		var usuarios = db.getUsuarios();		

		var index = 0;

		index=usuarios.length;

		index+=1;

		db.addUsuario(
        {      
            "id": index,      
            "nombre": req.body.nombre,            
            "posicion": req.body.posicion,            
            "direccion": req.body.direccion,            
            "telefono": req.body.telefono,            
            "estado": "activo"
		});


		res.redirect('/usuarios');		
	})

}