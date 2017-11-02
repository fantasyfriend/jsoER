'use strict';

var toetsenbord = require('readline-sync');
var string="";

//functies


//programma

while (!string.includes("@")) {
    string = toetsenbord.question('Geef een email adres in: ');
}


console.log(string);