'use strict';

var toetsenbord = require('readline-sync');

var totaal = 0,antwoord="goed";

for (var teller = 1; teller < 6; teller++) {
    do {
        if (antwoord!="goed"){
            antwoord="goed";
            console.log("Let een beetje op! Dit was geen getal!");
        }
        var waarde = toetsenbord.question("Geef uw "+teller+"e getal : ");
        isNaN(waarde)? antwoord="fout": antwoord="goed";
    }
    while (antwoord!="goed");
    totaal += parseFloat(waarde);
}
console.log('De som van de 5 getallen is ' + totaal);