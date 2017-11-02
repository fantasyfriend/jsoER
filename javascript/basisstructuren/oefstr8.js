'use strict';

var toetsenbord = require('readline-sync');
var voornaam,achternaam;

//functies
function naam(voornaam,achternaam){
    if (achternaam.includes(" ")){
        var naamArray=achternaam.split(" ");
        var deel1="";for (var i=0;i<naamArray.length-1;i++){deel1+=" "+naamArray[i];};
        var deel2=naamArray[naamArray.length-1];
        achternaam=deel2+","+deel1;
    }
    console.log(achternaam + ", "+ voornaam);
}

//programma


voornaam = toetsenbord.question('Geef uw voornaam in : ');
achternaam = toetsenbord.question('Geef uw achternaam in : ');

naam(voornaam,achternaam);