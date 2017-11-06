'use strict';

function maakString(lengte, karakter=" "){
    // TODO: geef een string bestaande uit lengte keer karakter naast elkaar terug
    // gebruik een spatie als karakter als het karakter niet doorgegeven wordt
    var output="";
    for (var i=0;i<lengte;i++){
        output+=karakter;
    }
    return output;
}

function tekenGetallenPiramide(hoogte){
      // TODO: vul aan zodat deze lus hoogte keer uitgevoerd wordt
      // TODO: gebruik functie maakString om een string te maken die
      // bestaat uit hoogte-i spaties gevolgd door i*2-1 keer het cijfer i
      // TODO: teken deze string op het scherm
    for(var i=1;i<=hoogte;i++){
        console.log(maakString(hoogte-i)+maakString(i*2-1,i));
    }
}

// TODO: teken een getallenpiramide van 5 hoog. Gebruik hiervoor een zelfgeschreven functie
tekenGetallenPiramide(5);