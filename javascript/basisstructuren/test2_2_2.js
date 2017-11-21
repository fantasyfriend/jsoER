'use strict';
var toetsenbord = require('readline-sync');

var eenheden = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tientallen = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var honderdtallen = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var duizendtallen = ["", "M", "MM"];
/* TODO: 
Vraag aan de gebruiker een jaartal tussen 0 (excl) en 2100 (incl). 
Schrijf een functie om te controleren of het ingevoerde gegeven een getal is 
en tussen 0 (excl) en 2100 (incl) ligt.
Het programma moet een andere foutmelding tonen als het ingetikte gegeven geen getal is
dan wanneer het ingetikte gegeven wel een getal is maar buiten de grenzen ligt. 
Het script mag pas verder gaan als de gebruiker een geldig getal ingetikt heeft. 
(Invoer blijven vragen als dit niet het geval is.) 
*/
var controle;
do {var jaar = parseInt(toetsenbord.question('Geef een jaartal tussen 0 (excl) en 2100 (incl) : '), 10);
    if (isNaN(jaar)) { console.log("Dit is geen nummer!"); controle = true; }
    else {if (jaar < 0 || jaar > 2100) { console.log("Dit is geen geldig jaartal!"); controle = true; }
        else { controle = false; }
    }
}
while (controle)
/* TODO:
Schrijf een functie die van een gegeven getal de voorstelling in Romeinse cijfers teruggeeft.
Gebruik deze functie om op het einde van het script te tonen 
<jaar> is in Romeinse cijfers <romeins> 
waarbij <jaar> het ingetikte jaar is 
en <romeins> dat jaar in Romeinse cijfers.
*/
var romeins=[eenheden,tientallen,honderdtallen,duizendtallen];
function naarRomeins(j) {
    var r="";j+="";
    for(var i=j.length-1;i>=0;i--){
        r+=romeins[i][(j.substring(j.length-i-1,j.length-i))];
    }
    return r;
}
console.log("%d is in romeinse cijfers %s",jaar,naarRomeins(jaar));