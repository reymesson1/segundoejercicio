module.exports = function(){

	var loki = require('lokijs');

    var db = new loki('loki.json');

    /******************Table COOKIES**********************/

    var cookies = db.addCollection('cookies');
    
    function addCookie(cookie){
    
        cookies.insert(cookie);
    }
    
    function getCookies(){
    
        return cookies.find();
    }
    
    function setCookieDelete(){
    
        var value = cookies.find();
        return cookies.remove(value[0]);
    }

    /******************Table USERs**********************/
    
    var users = db.addCollection('users');
        
    function addUser(user){
            
        users.insert(user);
    }

    // TODO: sdsds
    function getUsers() {
        return users.find();
    }
    
    /******************Table Quote**********************/
    
    var quotes = db.addCollection('quotes');
    
    function addQuote(quote){
        
        quotes.insert(quote);
    }
    
    function getQuotes(){
        
        return quotes.find();
    }

    function getQuotesFind(quote){
        
        return quotes.find(quote);
    }

    /******************Table Invoice**********************/
    
    var invoices = db.addCollection('invoices');
    
    function addInvoice(invoice){
        
        invoices.insert(invoice);
    }
    
    function getInvoices(){
        
        return invoices.find();
    }

    function getInvoicesFind(invoice){
        
        return invoices.find(invoice);
    }

    /******************Table Precio Combustibles**********************/
    
    var combustibles = db.addCollection('combustibles');
    
    function addCombustible(combustible){
        
        combustibles.insert(combustible);
    }
    
    function getCombustibles(){
        
        return combustibles.find();
    }


    /******************Table Tasa del Dolar**********************/
    
    var dolars = db.addCollection('dolars');
    
    function addDolar(dolar){
        
        dolars.insert(dolar);
    }
    
    function getDolars(){
        
        return dolars.find();
    }

    /******************Table Tasa del Dolar**********************/
    
    var rutas = db.addCollection('rutas');
    
    function addRuta(ruta){
        
        rutas.insert(ruta);
    }
    
    function getRutas(){
        
        return rutas.find();
    }

    /******************Tabla de Clientes**********************/
    
    var clientes = db.addCollection('clientes');
    
    function addCliente(cliente){
        
        clientes.insert(cliente);
    }
    
    function getClientes(){
        
        return clientes.find();
    }

    /******************Tabla de Usuarios**********************/
    
    var usuarios = db.addCollection('usuarios');
    
    function addUsuario(usuario){
        
        usuarios.insert(usuario);
    }
    
    function getUsuarios(){
        
        return usuarios.find();
    }

    return {

        addCookie: addCookie,
        getCookies: getCookies,
        setCookieDelete: setCookieDelete,
        addUser: addUser,
        getUsers: getUsers,
        addQuote: addQuote,
        getQuotes: getQuotes,
        getQuotesFind: getQuotesFind,
        addInvoice: addInvoice,
        getInvoices: getInvoices,
        getInvoicesFind: getInvoicesFind,
        addCombustible: addCombustible,
        getCombustibles: getCombustibles,
        addDolar: addDolar,
        getDolars: getDolars,
        addRuta: addRuta,
        getRutas: getRutas,
        addCliente: addCliente,
        getClientes: getClientes,
        addUsuario: addUsuario,
        getUsuarios: getUsuarios
    }
}