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
    collection.updateMany({'borough':buurt},{$set:{'borough':'unknown'}});
    collection.find({'borough':'unknown'}).toArray(function (err, docs) {
        console.log(docs.length+" document(s) updated");
        docs.forEach(function (element) {
            console.log('%s (%s), %s', element.name, element.cuisine, element.borough);
        });
        client.close();
    });
});
};

toon('Missing');