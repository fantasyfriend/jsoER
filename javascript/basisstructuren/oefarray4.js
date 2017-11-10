'use strict'

var toetsenbord = require('readline-sync');
var getal=[];
var invoer;

for (var i=0;i<5;i++){
    invoer = parseInt(toetsenbord.question('getal: '), 10);
    if(i!=0){
        for(var x=0;x<i;x++){
            if(invoer==getal[x-1]){i-=1,console.log("reeds ingegeven!");}
            else{getal[i]=invoer;}
        }
    }
    else{getal[i]=invoer;}
}

getal.sort(function(a,b){return a-b});

console.log("De volgende getallen zijn ingegeven: %s.",getal);