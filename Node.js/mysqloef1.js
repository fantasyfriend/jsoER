var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'deschop',
  port     : 3306
});


var x="dom' or '1'='1";
connection.connect();

var identifiers = ['leveranciers', 'lev_code', code];
connection.query('delete from ?? WHERE ?? = ?', identifiers, function(err, rows, fields) {
  if (!err){
    var result = JSON.stringify(rows);
    console.log(result);
  }
  else{
    console.log('Error while performing query.');
    console(err.message);
    }
    connection.end();
});

