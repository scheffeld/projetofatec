var mysql = require('mysql');

var connMySQL = function(){
    return mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        passwor  : 'root',
        database : 'webapp'
    });
};

module.exports = function(){
    return connMySQL;
}