'use strict';

var toetsenbord = require('readline-sync');

var a = parseInt(toetsenbord.question("Geef een geheel getal (<0 om te stoppen): "), 10);
var b = parseInt(toetsenbord.question("Geef nog een geheel getal (<0 om te stoppen): "), 10);

while (a != b) {
    if (a < b) { b = b - a; }
    else { a = a - b; }
}

console.log(a);