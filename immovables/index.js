const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'iclab4',
  database : 'immovables'
});

connection.connect();

app.get('/data', function(req,res){
  var sql = 'SELECT * FROM test';
  connection.query(sql, (err, result)=>{
      if(err) throw err;
      console.log(result);
      res.send(result);
  });
  });

app.post('/loginInfo', function(req, res){
  console.log(req.body); 
  var data = [req.body.id,req.body.pw];
  var sql = "SELECT count(*) FROM test WHERE id = ?";
  connection.query(sql,data[0],(err, result)=>{
    if(err) throw err
    else{
      console.log(result);
      res.send({
        result: this.result
      });
    }
  });
});


app.post('/data', function(req, res){
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

app.listen(3210, ()=>{
  console.log('Server aktif di port 3210')
});