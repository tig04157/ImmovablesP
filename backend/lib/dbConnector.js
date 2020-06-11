var mysql = require('mysql');

var dbconnInfo = {
    host: '13.209.89.137',
    user: 'gmc',
    password: '17005314',
    port: null,
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
