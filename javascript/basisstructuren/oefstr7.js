'use strict';

var toetsenbord = require('readline-sync');
var string="";

//functies
function woordAantal(string){
    return string.split(" ").length;
}

//programma


string = toetsenbord.question('Geef een zin in : ');

console.log("Het aantal woorden in de zin is "+woordAantal(string));