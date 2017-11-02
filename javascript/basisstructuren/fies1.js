'use strict';

var toetsenbord = require('readline-sync');
var straal;

//functies
function opp(r) {
    return Math.PI * r * r;
}
function omtrek(r) {
    return 2 * Math.PI * r;
}

//programma
straal = parseInt(toetsenbord.question('Geef de straal in: '), 10);
console.log("De omtrek is " + omtrek(straal) + " en de oppervlakte is " + opp(straal));