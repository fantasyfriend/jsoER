'use strict';

var toetsenbord = require('readline-sync');
var string="";

//functies


//programma


string = toetsenbord.question('Geef een woord in dat een palindroom is : ');

string==string.split("").reverse().join("")?console.log(string+" is een palindroom"):console.log(string+" is geen palindroom");
