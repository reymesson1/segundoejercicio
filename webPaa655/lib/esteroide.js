var handlebars = require('express-handlebars');

var global = "Datos";

module.exports = function(app, db){

    app.engine('html', handlebars({
        
        defaultLayout: 'base',
        helpers: {

            inputSearch: function(value){

                global=value;
                return '<input type="text" class="form-control" placeholder="Search for..." aria-label="Search for..." />'
            },

            search: function(table,opts){

                var res="";

                for(var x=0;x<table.length;x++){

                    console.log(table[x].idFactura + ' ' + global);

                    res+=opts.fn(table[x]);
                }

                return res;                
            },
            
            counter: function(data){

                return data + 1;

            },

            navBarLogin : function(data){
                
                var cookies = db.getCookies();
                
                if(cookies.length==0){                    
                    return '<li><a href="/login">Sign in</a></li><li><a href="registration">Sign up</a></li>';
                }else{
                    return '<li><a href="/logout">Sign out</a></li>';
                }
            }
        },
        extname: '.html'
    }));
}