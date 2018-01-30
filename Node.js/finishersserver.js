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

app.get('/man', function(req, res){
mongoClient.connect(url, function (err, client) {
    var db = client.db('test');
    console.log("Connected successfully to server");
    var collection = db.collection('finishers');
    collection.find({'gender':'man'}).sort({'finish':1}).toArray(function (err, docs) {
        client.close();
        res.send( JSON.stringify(docs) );
    });
});
});

app.get('/woman', function(req, res){
    mongoClient.connect(url, function (err, client) {
    var db = client.db('test');
    console.log("Connected successfully to server");
    var collection = db.collection('finishers');
    collection.find({'gender':'female'}).sort({'finish':1}).toArray(function (err, docs) {
        client.close();
        res.send( JSON.stringify(docs) );
    });
});
});

app.get('/all', function(req, res){
    mongoClient.connect(url, function (err, client) {
    var db = client.db('test');
    console.log("Connected successfully to server");
    var collection = db.collection('finishers');
    collection.find().sort({'finish':1}).toArray(function (err, docs) {
        client.close();
         res.send( JSON.stringify(docs) );
    });
});
});

app.post('/input', function(req, res){
    mongoClient.connect(url, function (err, client) {
        var fn=req.query.fn;
        var ln=req.query.ln;
        var g=req.query.g;
        var h=req.query.h*1;
        var m=req.query.m*1;
        var db = client.db('test');
        console.log("Connected successfully to server en schrijf weg: %s, %s, %s, %d, %d",fn,ln,g,h,m);
        var collection = db.collection('finishers');
        collection.insertOne({'first_name':fn,'last_name':ln,'gender':g,'finish':{'hour':h,'minutes':m}},function(){
            client.close();
            res.send('De gegevens zijn weggeschreven');
    });
});
});

var server = app.listen(8888, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port)
});