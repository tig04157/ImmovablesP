var mysql = require('mysql');

var dbconnInfo = {
    host: '13.125.30.205',
    user: 'gmc',
    password: '17005314',
    port: 3306,
    //password: '0000',
    database: 'Immovables'
};


var connection = {
    init : () => {
        return mysql.createConnection(dbconnInfo);
    },

    open : (con) => {
        con.connect(function(err){
            if(err){
                console.error("mysql connection error : " + err);
            }else{
                console.info("mysql connection successfully.");
            }
        });
    }
};


module.exports = connection;