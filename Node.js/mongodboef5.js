'use strict';


var mongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017';

function voegtoe(invoer){
// Use connect method to connect to the server
mongoClient.connect(url, function (err, client) {
    var db = client.db('test');
    console.log("Connected successfully to server");
    // Get the restaurants collection
    var collection = db.collection('restaurant');
        
    collection.insertOne(invoer, function (error, response) {
        
        console.log(response.insertedCount+" document(s) toegevoegd");
        
        client.close();
    });
});
};

voegtoe({'name':'Dropie','cuisine':'Insects'});