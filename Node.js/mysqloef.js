function updateRecord(row, callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3306
	});

	connection.connect();
	connection.query('delete from ?? WHERE ?? = ?', identifiers,function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
			}
			connection.end();
		});
}

var code='997';
var identifiers = ['leveranciers', 'lev_code', code]; 
updateRecord(identifiers, function (err, result) {
	if (err) {
		console.log('Error while performing query.');
		console.log(err);
	}
	else {
		console.log("%d rows affected", result.affectedRows);
	}
});   
