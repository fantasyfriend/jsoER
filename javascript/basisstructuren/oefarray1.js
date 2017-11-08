'use strict'

var toetsenbord = require('readline-sync');
var naam=[];
for(var i=0;i<5;i++){
naam[i] = toetsenbord.question('Geef een naam in: ');
}
naam.sort();
for(var i=0;i<naam.length;i++){
    console.log(naam[i]);
}