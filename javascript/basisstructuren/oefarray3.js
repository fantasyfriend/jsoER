'use strict'

var toetsenbord = require('readline-sync');
var nummer=[0,0,0,0,0,0];

for(var i=0;i<6000;i++){
nummer[Math.floor(Math.random()*6)]++;
}

for(var i=1;i<=nummer.length;i++){
console.log("waarde %d is %dx gevallen.",i,nummer[i-1]);
}