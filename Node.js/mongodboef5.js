'use strict';


var mongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017';

function voegtoe(naam){
// Use connect method to connect to the server
mongoClient.connect(url, function (err, client) {
    var db = client.db('test');
    console.log("Connected successfully to server");
    // Get the restaurants collection
    var collection = db.collection('restaurant');
        
    collection.insertOne({'name':naam}, function (error, response) {
        
        console.log(response.insertedCount+" document(s) toegevoegd");
        
        client.close();
    });
});
};

voegtoe('Dodo');