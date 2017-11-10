'use strict'

const rij=4,kol=4;

//2d array
var speelbord = new Array(rij);
for(var i=0;i<kol;i++){speelbord[i] = new Array(kol);}

for(var r=0;r<speelbord.length;r++){for(var k=0;k<speelbord[r].length;k++){
    speelbord[r][k]=r+" "+k;
}}

console.log(speelbord);

var iets=new Array();{iets[]=new Array();}
iets[0][0]="1";
iets[0][1]="2";
iets[1][0]="3";
iets[1][1]="4";
console.log(iets);