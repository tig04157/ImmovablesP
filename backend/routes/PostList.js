var express = require('express');
var router = express.Router();

// mysql 선언
var dbConObj = require('../lib/dbConnector');
var conn = dbConObj.init();

/* GET comments listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// 본문 읽어 오기
router.get('/getPost/:test', function(req, res, next) {
    console.log(req.params.test)
    conn.query('SELECT * FROM imformation', function(err, row) {
        console.log(row);
        res.send(row);
        
    });
});

module.exports = router;