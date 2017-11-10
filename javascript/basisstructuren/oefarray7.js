'use strict'

var toetsenbord = require('readline-sync');
var getal=[];
var invoer;
var even="";

for (var i=0;i<10;i++){
    invoer = parseInt(toetsenbord.question('geheel getal: '), 10);
    getal[i]=invoer;
}

for (var i=0;i<10;i++){
    if(getal[i]%2==0){even+="het "+(i+1)+"e ("+getal[i]+") "}
}
console.log("De volgende getallen zijn even: %s.",even);