'use strict';

var toetsenbord = require('readline-sync');

var lijst = new Array();
var naam="";
while (naam!="stop") {
    naam = toetsenbord.question("Geef een gemeente naam in of stop om te stoppen: ");
    if(naam!="stop"){
        if (lijst[naam] == null) {
            lijst[naam] = toetsenbord.question("Geef een postnummer: ");
        }
        else {console.log(lijst[naam]);}
    }
}

for (naam in lijst) {  // overloop alle indexen
    console.log("%d, %s", lijst[naam], naam);
}