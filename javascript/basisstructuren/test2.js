'use strict';

var toetsenbord = require('readline-sync');
var controle,eenheid,toegelaten,gemeten;

function mijlenNaarKm(m){
    return m/0.62137;
}
function LeesEenheid(){
    do {
    var invoer = toetsenbord.question("Voer de eenheid in ( k of m ) :");
    }
    while (invoer!="K" && invoer!="k" && invoer!="M" && invoer!="m");
    return invoer;
}
function boeteBijSnelheidsovertreding(t,g,e){
    var teveel;var boete;
    if (e=="m" || e=="M"){teveel=mijlenNaarKm(g-t);}else{teveel=g-t;}
    teveel<=0?boete="geen boete":teveel<=10?boete="50 Euro boete":teveel<=30?boete=Math.round(50+((teveel-10)*10))+" Euro boete":boete=" een dagvaarding";
    return boete;
}

do {
    controle = toetsenbord.question("\nwilt u een boete berekenen, tik een j in om door te gaan :");
    if (controle=="j" || controle=="J"){
        eenheid= LeesEenheid();
        toegelaten = toetsenbord.question("Voer de toegelaten snelheid in :");
        gemeten = toetsenbord.question("Voer de gemeten snelheid in :");
        console.log("Het is "+boeteBijSnelheidsovertreding(toegelaten,gemeten,eenheid));
    }
}
while (controle=="j" ||controle=="J");

