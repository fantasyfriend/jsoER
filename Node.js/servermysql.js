var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'deschop',
  port: 3306
});

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
   console.log("Got a request for the homepage");
   connection.connect();
    var identifiers = ['planten'];
    connection.query('SELECT * from ??', identifiers, function (err, rows, fields) {
        if (!err) {
        var result = JSON.stringify(rows);
        res.send(result);
    }
    else {
        console.log('Error while performing query.');
    }
    connection.end();
    });
});

var server = app.listen(1337, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});


