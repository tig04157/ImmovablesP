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

  
app.post('/chinfo', function(req, res){
  var data = [req.body.id,req.body.pw];
  var sql = "SELECT count(*) as id FROM test WHERE id = ? ";

  connection.query(sql,data[0],(err, result,rows)=>{
    if(err) throw err;
    else{
      console.log(result[0].id)
      if(result[0].id == 1)
        {
          res.send({
            values: "중복"
          });
        }
      else{
        res.send({
          values: "중복아님"
        });
      }
      console.log(result);

    }
  });
});


app.post('/data', function(req, res){
  console.log(req.body); 
  var data = [req.body.id,req.body.pw];
  var sql = "INSERT INTO test(id,pw) values(?) ";
  connection.query(sql,[data],(err, result)=>{
    if(err) throw err;
    else{
      console.log(result);
      res.send({
        result: "완료"
      });
    }
  });
});

app.listen(3210, ()=>{
  console.log('Server aktif di port 3210')
});