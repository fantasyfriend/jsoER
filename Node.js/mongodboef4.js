'use strict';


var mongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017';

function verwijder(cuisine){
// Use connect method to connect to the server
mongoClient.connect(url, function (err, client) {
    var db = client.db('test');
    console.log("Connected successfully to server");
    // Get the restaurants collection
    var collection = db.collection('restaurant');
        
    collection.deleteMany({'cuisine':cuisine}, function (error, response) {
        
        console.log(response.result.n+" document(s) verwijderd");
        
        client.close();
    });
});
};

verwijder('Peruvian');