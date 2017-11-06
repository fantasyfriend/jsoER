'use strict';

var toetsenbord = require('readline-sync');
var score,punten,puntenT=0,scoreT=0,text,vak=0,toevoeging="",gewGem;

for (var i=0;i<15;i++) {
    punten = toetsenbord.question("\ngeef studiepunten in voor de "+(i+1)+"e studie :");
    puntenT += punten*1;
    do {
        score = toetsenbord.question("geef hiervan de score in (0-20) :");
    }
    while (score<0 || score>20);
    if (score<=10){vak+=1;}
    scoreT += punten*score;
}

gewGem=scoreT/puntenT;
gewGem>=10?text="\nU bent geslaagd voor het examen.":text="Helaas u bent niet geslaagd voor het examen!";
console.log(text+"\nU had een gewogen gemiddelde van %s behaald.",gewGem);
if (vak>1){toevoeging="ken"}
console.log("Voor %d vak%s had u voor het examen een onvoldoende behaald.",vak,toevoeging);