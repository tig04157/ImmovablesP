const express = require('express');
const index = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
index.use(bodyParser.json());
index.use(cors());
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'iclab4',
  database : 'immovables'
});

connection.connect();

index.get('/data', function(req,res){
  var sql = 'SELECT * FROM test';
  connection.query(sql, (err, result)=>{
      if(err) throw err;
      console.log(result);
      res.send(result);
  });
  });

index.post('/data', function(req, res){
	console.log(req.body); 
    var data = [req.body.id,req.body.pw];
    var sql = "INSERT INTO test(id,pw) VALUES(?) ";
    connection.query(sql,[data],(err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send({
        status: 'ㅗ!',
        no: null,
		id: req.body.id,
		pw: req.body.pw
	});
});
});

index.listen(3210, ()=>{
  console.log('Server aktif di port 3210')
});