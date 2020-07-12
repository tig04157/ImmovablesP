var express = require('express');
var router = express.Router();

var dbConObj = require('../lib/dbConnector');
var conn = dbConObj.init();


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// 본문 읽어 오기
router.get('/getCity', function(req, res, next) {
    console.log(3);
    conn.query('SELECT * FROM city', function(err, row) {
        console.log(3);
        res.send(row);  
        
        alert(row);
    });
});

module.exports = router;
