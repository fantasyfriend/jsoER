'use strict';

var toetsenbord = require('readline-sync');

var geslacht = toetsenbord.question("geslacht m of v : ");
var leeftijd = parseInt(toetsenbord.question("leeftijd : "), 10);
var ml = 0; var mh = 0; var vl = 0; var vh = 0;

while (geslacht == "m" || geslacht == "v") {
    if (geslacht == "m") {
        if (leeftijd < 25) { ml++ }
        else { mh++ }
    }
    else {
        if (leeftijd < 25) { vl++ }
        else { vh++ }
    }
    geslacht = toetsenbord.question("geslacht m of v : ");
    leeftijd = parseInt(toetsenbord.question("leeftijd : "), 10);
}

console.log("         <25  >=25");
console.log("mannen    " + ml + "     " + mh);
console.log("vrouwen   " + vl + "     " + vh);