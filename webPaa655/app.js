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
var invoiceRoute = require('./route/invoice.js');
var configuration = require('./route/configuration.js');

var esteroide = require('./lib/esteroide.js');

loginRoute(app,db);
logoutRoute(app,db);
registrationRoute(app,db);
quoteRoute(app,db);
invoiceRoute(app,db);
esteroide(app,db);
configuration(app,db);

app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res){

	res.render('index',{

		title:'Title',
		name: 'Dashboard'
	});
});


db.addQuote(
        {      
            "idConduce": 1,      
            "fecha": '11/08/2017',
            "fechaviaje": '11/08/2017', 
            "destino": 'HP',           
            "codigoreferencia": 000112,
            "fichacamion": "001",
            "fichatrailers": "005",
            "tarifaDOP": "123.00",
            "tipoconduce": "hp"
});
db.addQuote(
        {      
            "idConduce": 1,      
            "fecha": '11/08/2017',
            "fechaviaje": '11/08/2017', 
            "destino": 'HP',           
            "codigoreferencia": 000112,
            "fichacamion": "001",
            "fichatrailers": "005",
            "tarifaDOP": "123.00",
            "tipoconduce": "hp"
});db.addQuote(
        {      
            "idConduce": 1,      
            "fecha": '11/08/2017',
            "fechaviaje": '11/08/2017', 
            "destino": 'HP',           
            "codigoreferencia": 000112,
            "fichacamion": "001",
            "fichatrailers": "005",
            "tarifaDOP": "123.00",
            "tipoconduce": "hp"
});

db.addCliente({"id": "1","nombre":"CARTONERA A. HUED, S.A.S.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "2","nombre":"CERVECERIA VEGANA, S.R.L.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "3","nombre":"CARTONERA A. HUED, S.A.S.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "4","nombre":"PALA PIZZA, S.R.L.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "5","nombre":"BIO NUCLEAR, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "6","nombre":"CARTONERA A. HUED, S.A.S","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "7","nombre":"QUALA DOMINICANA, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "8","nombre":"BRUGAL & CO, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "9","nombre":"PRODUCGTOS FAMILIA SANCELA, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "10","nombre":"CORTES HERMANOS & CO. C. POR A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "11","nombre":"CORTES HERMANOS & CO. C. POR A. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "12","nombre":"MERCASID, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "13","nombre":"MICROTEK DOMINICANA, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "14","nombre":"EXPORTADORA OBA, S.R.L.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "15","nombre":"MCPA TOPFRUIT DOMINICANA, S.R.L.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "16","nombre":"FRUECODOM, S.R.L.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "17","nombre":"PERAVIA INDUSTRIAL, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "18","nombre":"CENTRO CHARROS, S.R.L.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "19","nombre":"BRUGAL & CO, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "20","nombre":"PASTEURIZADORA RICA, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "21","nombre":"MOLINOS MODERNOS, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "22","nombre":"HANES CARIBE INC.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "23","nombre":"METRIX DOMINICANA, C. POR A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "24","nombre":"B. BRAUN DOMINICAN REPUBLIC, INC","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "25","nombre":"FENIX MANUFACTURING SOLUTIONS","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "26","nombre":"QUINTA PASADENA, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "27","nombre":"NORTHLINE TROPICAL FRUITS, S.A.S.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "28","nombre":"SWS CAMISAS INC.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "29","nombre":"NAPCO ALARMLOCK GRUPO INT. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "30","nombre":"CORTES HERMANOS & CO. C. POR A. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "31","nombre":"CONVATEC DOMINICAN REPUBLIC, INC.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "32","nombre":"CARTONERA A. HUED, S.A.S.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "33","nombre":"C.H. ALIMENTOS INTERNATIONAL, S.A.S.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "34","nombre":"MINAGRO, S.R.L.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "35","nombre":"HORIZONTES ORGANICOS, S.R.L.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "36","nombre":"PERAVIA INDUSTRIAL, S.A. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "37","nombre":"HANES CARIBE, INC. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "38","nombre":"HORIZONTES ORGANICOS, S.R.L. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "39","nombre":"CONVATEC DOMINICAN REPUBLIC, INC.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "40","nombre":"PLANTACIONES DEL NORTE, S.A. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "41","nombre":"MINAGRO, S.R.L. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "42","nombre":"LABORATORIOS ORBIS, S.A. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "43","nombre":"TRANSAGRICOLA, S.R.L. (LINDA)","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "44","nombre":"A M FRUTAS Y VEGETALES","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "45","nombre":"VINICOLA DEL NORTE, S.A. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "46","nombre":"HANES CARIBE, INC.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "47","nombre":"PERAVIA INDUSTRIAL, S.A. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "48","nombre":"LA FABRIL, C. POR A. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "49","nombre":"INDUSTRIAS MACIER, S.A. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "50","nombre":"GILDAN ACTIVE WEAR DOMINICAN","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "51","nombre":"BALTIMORE DOMINICANA, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "52","nombre":"PLANTACIONES DEL NORTE, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "53","nombre":"MCPA TOPFRUIT DOMINICANA, S.R.L.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "54","nombre":"PLANTACIONES DEL NORTE, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "55","nombre":"TRANSAGRICOLA, S.R.L. (LINDA)","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "56","nombre":"PASTEURIZADORA RICA, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "57","nombre":"CERVECERIA VEGANA, S.R.L.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "58","nombre":"BRUGAL & CO. S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "59","nombre":"PASTEURIZADORA RICA, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "60","nombre":"BIO NUCLEAR, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "61","nombre":"EXPORTADORA OBA, S.R.L.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "62","nombre":"DAVIS & GECKS CARIBE, LTD","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "63","nombre":"BEPENSA DOMINICANA, S.A. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "64","nombre":"MONES PACKAGING SOLUTIONS","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "65","nombre":"MERCASID, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "66","nombre":"BALTIMORE DOMINICANA, S.A. ","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "67","nombre":"DAVIS & GECKS CARIBE, LTD","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "68","nombre":"MOLINOS MODERNOS, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "69","nombre":"CARRIBEX, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "70","nombre":"ZONA FRANCA CARACOL","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "71","nombre":"SEDE CHATELAIN","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "72","nombre":"GILDAN ACTIVE WEAR DOMINICAN","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "73","nombre":"MOLINOS MODERNOS, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "74","nombre":"GILDAN ACTIVE WEAR DOMINICAN","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "75","nombre":"PLANTACIONES DEL NORTE, S.A.","rnc":"","direccion":"","telefono":""});
db.addCliente({"id": "76","nombre":"PLANTACIONES DEL NORTE, S.A.","rnc":"","direccion":"","telefono":""});

app.listen(80, function(){

	console.log('Listening from 80...');
});
