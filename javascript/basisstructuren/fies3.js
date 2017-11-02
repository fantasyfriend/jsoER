'use strict';

var toetsenbord = require('readline-sync');
var a,b,c;

//functies
function discriminant(a,b,c) {
    return (b*b)-(4*a*c);
}
function nulpunten(d) {
    var punten
    d<0?punten=0:d=0?punten=1:punten=2;
    return punten
}

//programma
a = parseInt(toetsenbord.question('Geef a in: '), 10);
b = parseInt(toetsenbord.question('Geef b in: '), 10);
c = parseInt(toetsenbord.question('Geef c in: '), 10);
console.log("discriminant " + discriminant(a,b,c)+ " nulpunten "+ nulpunten(discriminant(a,b,c)));