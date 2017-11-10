'use strict'

var toetsenbord = require('readline-sync');

var rb = parseInt(toetsenbord.question("raam breedte in cm : "), 10);
var maat = [60, 90, 120, 150, 200];
var x = 0;
if (rb > maat[maat.length-1]) { console.log("helaas dit is boven onze max. formaat"); }
else {
    while (rb > maat[x]) {
        x++;
    }
    console.log("gebruik onze gordijnen van maat " + maat[x] + "cm.");
}