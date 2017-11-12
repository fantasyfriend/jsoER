'use strict'

var toetsenbord = require('readline-sync');
var lengte=[];
var invoer;
var totaal=0;
var laagste=300;
var laag;

for (var i=0;i<9;i++){
    invoer = toetsenbord.question('lengte: ')*1;
    lengte[i]=invoer;
    totaal+=invoer;
    if(invoer<laagste){laagste=invoer;laag=i+1;}
}

console.log("gemiddelde lengte is %dcm op de %de positie.",Math.floor(totaal/9),laag);

