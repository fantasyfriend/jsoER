'use strict';


var mongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017';

function toon(buurt){
// Use connect method to connect to the server
mongoClient.connect(url, function (err, client) {
    var db = client.db('test');
    console.log("Connected successfully to server");
    // Get the restaurants collection
    var collection = db.collection('restaurant');
    collection.updateMany({'borough':buurt},{$set:{'borough':'unknown'}}, function (error, response) {
        
        console.log(response.result.nModified+" document(s) aangepast");
        
        client.close();
    });
});
};

toon('Missing');