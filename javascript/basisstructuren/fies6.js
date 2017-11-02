'use strict';

var toetsenbord = require('readline-sync');
var getal;

//functies
function fibonaci(x) {
    var waarde=1,waarde1=0,waarde2=1;
    for (var i=2;i <=x;i++){waarde=waarde1+waarde2;waarde1=waarde2;waarde2=waarde;}
    return waarde;
}

//programma
getal = parseInt(toetsenbord.question('Geef getal in de lijst van Fibonacci in: '), 10);
console.log("De Fiboncci waarde van "+getal+" is " + fibonaci(getal));