'use strict';

var toetsenbord = require('readline-sync');
var string="";

//functies


//programma


string = toetsenbord.question('Geef een zin in met comma\'s : ');
string = string.replace(/,/g,", ");



console.log(string);