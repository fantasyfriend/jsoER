'use strict';

var toetsenbord = require('readline-sync');

var getal1, getal2, getal3;

/* functiedefinities of -declaraties */
function max(getal1,getal2) {
    var resultaat;
    getal1 < getal2 ? resultaat=getal2: resultaat=getal1;
    return resultaat;
}

// functies oproepen ("gebruiken")
getal1 =parseFloat ( toetsenbord.question("Geef eerste getal: "));
getal2 =parseFloat (  toetsenbord.question("Geef tweede getal: "));
getal3 =parseFloat (  toetsenbord.question("Geef derde getal: "));
console.log("Het hoogste getal is %d", max(getal3,max(getal1,getal2)));
