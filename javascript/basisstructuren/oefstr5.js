'use strict';

var toetsenbord = require('readline-sync');
var string="";

//functies


//programma


string = toetsenbord.question('Geef een zin in die minstens een g en een h bevat : ');

var nieuweString="";
for (var i=0;i<string.length;i++) {
    string.charAt(i)=="g"?nieuweString+="h":string.charAt(i)=="h"?nieuweString+="g":nieuweString+=string.charAt(i);
}
string = string.replace(/g/g,"=g=").replace(/h/g,"g").replace(/=g=/g,"h");

console.log(string);
console.log(nieuweString);
