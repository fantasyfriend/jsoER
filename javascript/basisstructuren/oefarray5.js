'use strict'

var toetsenbord = require('readline-sync');
var naam=[];
var invoer="niet van belang";
var teller=0;
var positie;

while(invoer!="" || teller<10){
    invoer = toetsenbord.question('naam: ');
    if (invoer!=""){
    naam[teller]=invoer;
    teller++;
    }
}
positie = toetsenbord.question('welke positie: ');
if (positie<0 || positie>naam.length){console.log("deze positie bestaat niet!");}
else {console.log(naam[positie]);}
