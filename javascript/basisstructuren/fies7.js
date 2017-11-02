'use strict';

var toetsenbord = require('readline-sync');
var w,b,i;

//functies
function resultaat(vak) {
    var cijfer=11;
    while (cijfer<0 || cijfer>10) {
        cijfer = parseInt(toetsenbord.question('Geef het cijfer voor '+vak+' in: '), 10);
        if (cijfer<1 || cijfer>10) {console.log("Verkeerde invoer! Het cijfer moet tussen 0 en 10 zijn.");}
    }
    return cijfer;
}
function uitslag() {
    var uitslag="";
    var w = resultaat("wiskunde"), b = resultaat("boekhouden"), i = resultaat("informatica");
    if (w<6){uitslag="\nWiskunde was minder dan 6.";}
    if (b+i<12){uitslag+="\nTotaal van boekhouden en informatica was minder dan 12.";}
    w>5 && b+i>11?uitslag="\nGeslaagd!":uitslag+="\nHelaas dus niet geslaagd!"; 
    console.log(uitslag);
}
//programma

uitslag();