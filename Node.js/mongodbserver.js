'use strict';

var express = require('express');
var app = express();
var path = require("path");
var url = require("url");

var mongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017';

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/totaal', function(req, res){
mongoClient.connect(url, function (err, client) {
    var db = client.db('test');
    console.log("Connected successfully to server");
    var collection = db.collection('restaurant');
    collection.find().toArray(function (err, docs) {
        client.close();
        res.send( JSON.stringify(docs) );
    });
});
});

app.get('/restaurants/keukens', function(req, res){
    mongoClient.connect(url, function (err, client) {
        var db = client.db('test');
        console.log("Connected successfully to server");
        var collection = db.collection('restaurant');
        collection.distinct('cuisine', function (err, docs) {
            res.send( JSON.stringify(docs) );
        client.close();
    });
});
});

app.get('/restaurants/keuken', function(req, res){
    mongoClient.connect(url, function (err, client) {
        var zoek=req.query.q;
        var db = client.db('test');
        console.log("Connected successfully to server en zoek voor "+zoek);
        var collection = db.collection('restaurant');
        collection.find({'cuisine':''+zoek+''}).toArray(function (err, docs) {
            client.close();
            res.send( JSON.stringify(docs) );
    });
});
});

var server = app.listen(8888, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port)
});