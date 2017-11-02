'use strict';

var toetsenbord = require('readline-sync');

var brood,melk;

/* functiedefinities of -declaraties */
function eb(bedrag) {
    return bedrag*40.3399;
}
function be(bedrag) {
    return bedrag/40.3399;
}

// functies oproepen ("gebruiken")
brood =parseFloat ( toetsenbord.question("Geef het bedrag van een brood : "));
melk =parseFloat ( toetsenbord.question("Geef het bedrag van 1 liter melk : "));

console.log("Het bedrag van brood is %d BeF en het bedrag van 1 liter melk is %d", Math.ceil(eb(brood)), Math.ceil(eb(melk)));
