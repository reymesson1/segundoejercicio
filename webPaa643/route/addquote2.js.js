 
Fotos

más

Principal

AddQuote

￼

rey messon

a usuario
hace 18 horas

Detalles

~addQuote


<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

<link rel="stylesheet" href="/resources/demos/style.css">

<form class="form-horizontal" action="/addquote" method="post">

  <fieldset>

    <legend>Add New Quote</legend>

    <div class="form-group">

      <label class="col-lg-2 control-label">Cliente</label>

      <div class="col-lg-10">

        <input type="text" class="form-control" id="tags" name="cliente" placeholder="Cliente">

      </div>

    </div>    

    <div class="form-group">

      <label class="col-lg-2 control-label">Ficha</label>

      <div class="col-lg-10">

        <input type="text" class="form-control" id="ficha" name="ficha" placeholder="Ficha">

      </div>

    </div>

    <div class="form-group">

      <label class="col-lg-2 control-label">Start Date</label>

      <div class="col-lg-10">

        <input type="text" class="form-control" name="startdate" id="startdate" placeholder="Start Date">

      </div>

    </div>

    <div class="form-group">

      <label class="col-lg-2 control-label">End Date</label>

      <div class="col-lg-10">

        <input type="text" class="form-control" name="enddate" id="enddate" placeholder="End Date">        

      </div>

    </div>

    <div class="form-group">

      <label class="col-lg-2 control-label">Destino</label>

      <div class="col-lg-10">

        <input type="text" class="form-control" name="destino" id="destino" placeholder="Destino">

      </div>

    </div>

    <div class="form-group">

      <label class="col-lg-2 control-label">Visita/Viaje</label>

      <div class="col-lg-10">

        <input type="text" class="form-control" name="viaje" placeholder="Visita o Viaje">

      </div>

    </div>

    <div class="form-group">

      <label class="col-lg-2 control-label">Ficha</label>

      <div class="col-lg-10">

        <input type="text" class="form-control" id="equipo" name="equipo" placeholder="Equipo">

      </div>

    </div>

    <div class="form-group">

      <label class="col-lg-2 control-label">Tarifa USD</label>

      <div class="col-lg-10">

        <input type="text" class="form-control" name="tarifaUSD" id="tarifaUSD" placeholder="Tarifa USD">

      </div>

    </div>

    <div class="form-group">

      <label class="col-lg-2 control-label">Tarifa DOP</label>

      <div class="col-lg-10">

        <input type="text" class="form-control" name="tarifaDOP" id="tarifaDOM" placeholder="Tarifa DOP">

      </div>

    </div>    

    <div class="form-group">

      <div class="col-lg-10 col-lg-offset-2">

        <button type="reset" class="btn btn-default">Cancel</button>

        <button type="submit" class="btn btn-primary">Save</button>

      </div>

    </div>

  </fieldset>

</form>

<script src="https://code.jquery.com/jquery-1.12.4.js"></script>

<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<script>

  $( function() {

    $( "#startdate" ).datepicker();

    $( "#enddate" ).datepicker();


    var availableTags = [

      "ActionScript",

      "AppleScript",

      "Asp",

      "BASIC",

      "C",

      "C++",

      "Clojure",

      "COBOL",

      "ColdFusion",

      "Erlang",

      "Fortran",

      "Groovy",

      "Haskell",

      "Java",

      "JavaScript",

      "Lisp",

      "Perl",

      "PHP",

      "Python",

      "Ruby",

      "Scala",

      "Scheme"

    ];

    $( "#tags" ).autocomplete({

      source: availableTags

    });

    $( "#destino" ).autocomplete({

      source: availableTags

    });

  } );

</script>




~addQuote


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

			{"destino": req.body.cliente},

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

		);

        db.addCookie({email:emailField});



		


	});

}


