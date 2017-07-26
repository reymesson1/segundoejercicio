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

    return {

        addCookie: addCookie,
        getCookies: getCookies,
        setCookieDelete: setCookieDelete,
        addUser: addUser,
        getUsers: getUsers
    }
}