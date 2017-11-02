'use strict';

var toetsenbord = require('readline-sync');

// functies
function geefGetal (x) {
    return Math.floor(x*Math.random())+1;
}
function evalueerProduct (a,b,c) {
    return a*b==c;
}
function toonMeldingBijUitkomst (u) {
    var meldingU;
    switch (geefGetal(4)){
        case 1:u?meldingU="goed":meldingU="fout";break;
        case 2:u?meldingU="top":meldingU="doe eens je best !";break;
        case 3:u?meldingU="super":meldingU="verkeert";break;
        default:u?meldingU="OK":meldingU="nee hoor !";
    }
    return meldingU;
}
function toonMeldingBijTotaal (t) {
    var meldingT;
    switch (t){
        case 5:case 6:meldingT="nog veel oefenen !";break;
        case 7:meldingT="OK";break;
        case 8:meldingT="een goede score !";break;
        case 9:meldingT="heel goed !";break;
        case 10:meldingT="proficiat ! uitstekend !";break;
        default:meldingT="onvoldoende";
    }
    return meldingT
}

// programma
var getalx,getala,getalb,getalc,waarde,totaal=0;

waarde =parseInt ( toetsenbord.question("Geef een maximale waarde: "));

for (var i=0;i<10;i++) {
    getala=geefGetal(waarde);
    getalb=geefGetal(waarde);
    getalc=parseInt ( toetsenbord.question("Geef het product van "+getala+" en "+getalb+": "));
    console.log(toonMeldingBijUitkomst(evalueerProduct (getala,getalb,getalc)));
    evalueerProduct (getala,getalb,getalc)?totaal+=1:totaal+=0;

}
console.log(toonMeldingBijTotaal (totaal));