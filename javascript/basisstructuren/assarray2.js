'use strict';

var toetsenbord = require('readline-sync');

var lijst = new Array();
var w,woord,zin,woorden,karakters=0;

zin = toetsenbord.question("Geef een zin in: ");
woord=zin.toLowerCase().split(" ");
woorden=woord.length;   
for (var i = 0; i < woorden; i++) {
    woord[i]=woord[i].replace(/[.,?!:;()]/g,"");
    if (lijst[woord[i]] == null) lijst[woord[i]] = 0;
    karakters+=woord[i].length;
    lijst[woord[i]]++;
}
console.log("aantal woorder: ",woorden);
console.log("aantal karakters: ",karakters);     
console.log("overzicht:");
for (w in lijst) {console.log("%s %dx",w,lijst[w]);}