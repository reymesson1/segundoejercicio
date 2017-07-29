var bodyParser = require('body-parser');

module.exports = function(app, db){
	
	app.use(bodyParser());

	app.get('/registration', function(req,res){

        res.render('registration', {

                
                name: 'Name'
        });
	});

	app.post('/registration', function(req,res){

		var emailField = req.body.email;
        var pwdField = req.body.password;
        var cPwdField = req.body.confirmPassword;
        
        var usersTable = db.getUsers();
        var isUsed = false;
        
        for(var x=0;x<usersTable.length;x++){
            //console.log(usersTable[x].email);
            if(usersTable[x].email==emailField){
                isUsed=true;
            }
        }
            
        if(isUsed){
            
                res.render('registration',{

                    error: true,
                    name: 'Users already exists'
                });
            
        }else{
            
            if(pwdField==cPwdField){
                
                db.addUser({email:emailField,password:pwdField});
                usersTable = db.getUsers();

                res.redirect('/');
            
            }else{
                    res.render('registration',{

                        error: true,
                        name: 'Check confirm password and try again'
                    });
            }
        }
        

	});

}