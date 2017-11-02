'use strict';

var toetsenbord = require('readline-sync');

//functies
function isPerfectGetal(getal) {
    var waarde=0;
    for (var i=1;i<getal;i++){
        if(getal%i==0){waarde+=i;}
    }
    if (waarde==getal){console.log(waarde);}
    
}

//programma

for (var i=1;i<10000;i++){
    isPerfectGetal(i)
}