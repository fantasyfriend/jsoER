'use strict';

var toetsenbord = require('readline-sync');
var a,b;

//functies
function zijde(a,b) {
    return Math.sqrt((a*a)+(b*b));
}

//programma
a = parseInt(toetsenbord.question('Geef rechte zijde a in: '), 10);
b = parseInt(toetsenbord.question('Geef rechte zijde b in: '), 10);
console.log("De schuine zijde is " + zijde(a,b));