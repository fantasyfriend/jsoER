'use strict';

var toetsenbord = require('readline-sync');
var string="";

//functies


//programma

while (string.length<14) {
    string = toetsenbord.question('Geef een woord in van minstens 14 karakters : ');
}


console.log(string);