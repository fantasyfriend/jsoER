'use strict';

var toetsenbord = require('readline-sync');
var string="";

//functies
function naarAntwerps(string){
    string=string.replace(/h/g,"");
    return string;
}
function naarLimburgs(string){
    string=string.replace(/a/g,"aa").replace(/e/g,"ee").replace(/i/g,"ii").replace(/o/g,"oo").replace(/u/g,"uu");
    return string;
    
}


//programma


string = toetsenbord.question('Geef een zin in : ');

console.log("Antwerps : "+naarAntwerps(string));
console.log("Limburgs : "+naarLimburgs(string));
