'use strict';

var toetsenbord = require('readline-sync');
var jaar;

//functies
function schrikkeljaar(jaar) {
    var uitkomst;
    if ((jaar%4==0 && jaar%100!=0) || jaar%400==0) {uitkomst="schrikkeljaar"}
    else {uitkomst="nee"}
    return uitkomst;
}


//programma
jaar = parseInt(toetsenbord.question('Geef een jaar in: '), 10);

console.log("jaar " + jaar + " "+ schrikkeljaar(jaar));