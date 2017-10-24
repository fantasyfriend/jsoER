'use strict';

var toetsenbord = require('readline-sync');

var geslacht = toetsenbord.question("geslacht m of v : ");
var ml = 0; var mh = 0; var vl = 0; var vh = 0;var leeftijd;

while (geslacht == "m" || geslacht == "v") {
    leeftijd = parseInt(toetsenbord.question("leeftijd : "), 10);
    if (geslacht == "m") {
        if (leeftijd < 25) { ml++ }
        else { mh++ }
    }
    else {
        if (leeftijd < 25) { vl++ }
        else { vh++ }
    }
    geslacht = toetsenbord.question("geslacht m of v : ");
}

console.log("\t<25\t>=25\nmannen\t" + ml + "\t" + mh+"\nvrouwen\t" + vl + "\t" + vh);