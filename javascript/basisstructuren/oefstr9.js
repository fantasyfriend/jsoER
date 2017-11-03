'use strict';

var toetsenbord = require('readline-sync');
var nummer;

//functies
function geslacht(nummer){
    var geslacht;
    nummer.split("-")[1]%2==0?geslacht="vrouw":geslacht="man";
    console.log("U bent een "+geslacht);
}
function leeftijd(nummer){
    var leeftijd="";
    leeftijd=(new Date().getFullYear())-(1900+parseInt(nummer.split("-")[0].slice(0,2)));
    leeftijd>99?leeftijd-=100:leeftijd-=0;
    console.log("Uw leeftijd is "+leeftijd);
}
//programma


nummer = toetsenbord.question('Geef uw rijksreginster nummer in : ');

geslacht(nummer);
leeftijd(nummer);
