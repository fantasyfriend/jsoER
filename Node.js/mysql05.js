/*
 * vooraf:  npm install mysql 
 */

function getRecords(callback) {
	var result = {};
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'root',
		database : 'deschop',
		port: 3307
	});

	connection.connect();

	connection.query('SELECT * from planten', function(err, rows, fields) {
		if (err) {
			callback(err, {});
			
		} else {
			callback(null, rows);
		}
		connection.end();
	});
}

var http = require('http');
http.createServer(function handler(req, res) {
	console.log('request received');
	res.writeHead(200, {
		'Content-Type' : 'application/json'
	});
	getRecords(function(err, rows){
		var result;
		if (err){
			console.log('Error while performing query.');
			console.log(err);
			result = {};
		}
		else{
			console.log("Sending data to client:");
			console.log(JSON.stringify(rows));
			result = rows;
		}
		res.end(JSON.stringify(result));
	});   
}).listen(1337, 'localhost');
console.log('Server running at http://localhost:1337/');
