
var express = require('express');//voor app
var app = express();
var bodyParser = require('body-parser');// voor .post
app.use(bodyParser.urlencoded({ extended: true }));

var mysql = require('mysql');


function maakConnectie() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',//leeg
        database: 'project',//test project
        root: 3306
    });
    connection.connect();
    return connection;
}



app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/haalEigenRecords', function (req, res) {
    console.log(req.query.name);
    var connection = maakConnectie();
    //connection.connect();
    var identifiers = req.query.name;
    connection.query('SELECT * FROM scores WHERE speler1="' + identifiers + '" or speler2="Erwin" or speler3="Erwin"', identifiers, function (err, rows, fields) {
        if (!err) {
            var result = JSON.stringify(rows); console.log(result);
            res.send(result);
        }
        else { console.log('Error while performing query her.'); }
        connection.end();
    });
});

app.get('/haalRecords', function (req, res) {
    console.log(req.query.id);
    var connection = maakConnectie();
    //connection.connect();
    var identifiers = req.query.id;
    connection.query('SELECT * FROM scores WHERE id=?', identifiers, function (err, rows, fields) {
        if (!err) {
            console.log(rows);
            var result = JSON.stringify(rows); console.log(result);
            res.send(result);
        }
        else { console.log('Error while performing query hr.'); }
        connection.end();
    });
});
app.post('/zetScore', function (req, res) {
    console.log(req.body.name);
    console.log(req.body.id);
    console.log(req.body.score);
    var naam = req.body.name;
    var id = req.body.id;
    var score = req.body.score;
    var connection = maakConnectie();
    connection.query('SELECT * FROM scores WHERE id=' + id, function (err, rows, fields) {
        if (!err && rows.length == 0) {
            console.log('insert');
            connection.query('INSERT INTO scores (id,speler1,score1) VALUES (' + id + ',"' + naam + '",' + score + ')', function (err, rows, fields) {
                if (!err) { res.send("inserted"); }
                else { console.log('Error while performing insert.'); }
                connection.end();
            });
        }
        else if (!err && rows.length > 0) {
            console.log('update');
            if (score < rows[0].score1) {
                connection.query('UPDATE scores SET speler3="' + rows[0].speler2 + '", score3=' + rows[0].score2 + ', speler2="' + rows[0].speler1 + '", score2=' + rows[0].score1 + ', speler1="' + naam + '", score1=' + score + ' WHERE id=' + id, function (err, rows, fields) {
                    if (!err) { res.send("updated 1e"); }
                    else { console.log('Error while performing update 1e.'); }
                    connection.end();
                });
            }
            else if (score < rows[0].score2) {
                connection.query('UPDATE scores SET speler3="' + rows[0].speler2 + '", score3=' + rows[0].score2 + ', speler2="' + naam + '", score2=' + score + ' WHERE id=' + id, function (err, rows, fields) {
                    if (!err) { res.send("updated 2e"); }
                    else { console.log('Error while performing update 2e.'); }
                    connection.end();
                });
            }
            else if (score < rows[0].score3) {
                connection.query('UPDATE scores SET speler3="' + naam + '", score3=' + score + ' WHERE id=' + id, function (err, rows, fields) {
                    if (!err) { res.send("updated 3e"); }
                    else { console.log('Error while performing update 3e.'); }
                    connection.end();
                });
            }
            else { res.send("geen update"); }
        }
        else { console.log('Error while performing select.'); }
    });
    
});

app.get('/haalCatLijst', function (req, res) {
    console.log(req.query.user_id);
    var user_id = req.query.user_id;
    //check user tabel
    var connection = maakConnectie();
    connection.query('SELECT * FROM categorie WHERE user_id=?',user_id, function (err, rows, fields) {
        if (!err) {
            console.log(rows);
            var result = JSON.stringify(rows); console.log(result);
            res.send(result);
        }
        else { console.log('Error while performing query haalCatLijst.'); }
        connection.end();
    });
});
app.post('/maakCat', function (req, res) {
    console.log(req.body.name);
    console.log(req.body.parent);
    var user_id = req.body.user_id;
    var naam = req.body.name;
    var parent = req.body.parent;
    var connection = maakConnectie();
    console.log('insert');
    connection.query('INSERT INTO categorie (user_id,naam,parent_id) VALUES ('+user_id+',"' + naam + '",' + parent + ')', function (err, rows, fields) {
    if (!err) { res.send("inserted"); }
    else { console.log('Error while performing insert.'); }
    connection.end();
    });
});
app.post('/maakTaak', function (req, res) {
    console.log(req.body.name);
    console.log(req.body.parent);
    console.log(req.body.info);
    var naam = req.body.name;
    var info = req.body.info;
    var parent = req.body.parent;
    var connection = maakConnectie();
    console.log('insert');
    connection.query('INSERT INTO taak (cat_id,naam,info) VALUES ('+parent+',"' + naam + '","' + info + '")', function (err, rows, fields) {
    if (!err) { res.send("inserted"); }
    else { console.log('Error while performing insert.'); }
    connection.end();
    });
});
app.get('/haalTaakLijst', function (req, res) {
    console.log(req.query.user_id);
    var user_id = req.query.user_id;
    //check user tabel
    var connection = maakConnectie();
    connection.query('SELECT * FROM `taak` WHERE cat_id in(select id from categorie where user_id=?)',user_id, function (err, rows, fields) {
        if (!err) {
            //console.log(rows);
            var result = JSON.stringify(rows); console.log(result);
            res.send(result);
        }
        else { console.log('Error while performing query haalTaakLijst.'); }
        connection.end();
    });
});
app.post('/updateTaak', function (req, res) {
    console.log(req.body.id);
    console.log(req.body.parent);
    var id = req.body.id;
    var parent = req.body.parent;
    var connection = maakConnectie();
    console.log('update');
    connection.query('UPDATE taak SET cat_id='+parent+' WHERE id=' + id + '', function (err, rows, fields) {
    if (!err) { res.send("updated"); }
    else { console.log('Error while performing update in Taak.'); }
    connection.end();
    });
});
app.post('/updateCat', function (req, res) {
    console.log(req.body.id);
    console.log(req.body.parent);
    var id = req.body.id;
    var parent = req.body.parent;
    var connection = maakConnectie();
    console.log('update');
    connection.query('UPDATE categorie SET parent_id='+parent+' WHERE id=' + id + '', function (err, rows, fields) {
    if (!err) { res.send("updated"); }
    else { console.log('Error while performing update in Cat.'); }
    connection.end();
    });
});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

//CREATE TABLE `test`.`scores` ( `id` INT NOT NULL AUTO_INCREMENT , `speler1` VARCHAR(80) NOT NULL DEFAULT 'computer 1' , `score1` INT(4) NOT NULL DEFAULT '5900' , `speler2` VARCHAR(80) NOT NULL DEFAULT 'computer 2' , `score2` INT(4) NOT NULL DEFAULT '5800' , `speler3` VARCHAR(80) NOT NULL DEFAULT 'computer 3' , `score3` INT(4) NOT NULL DEFAULT '5700' , PRIMARY KEY (`id`));