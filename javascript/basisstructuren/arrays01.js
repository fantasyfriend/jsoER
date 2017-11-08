'use strict'

// declaratie van array
var lijst;

// creatie van array
lijst = new Array(); //array constructor

// bewerkingen
for (var i=0;i<5;i++){
    lijst[i]=(i+1)*10;
}
lijst[0]=0;
lijst[lijst.length-1]="string";
lijst[lijst.length+3]="ohoh";
lijst.push("iets");
lijst[lijst.length]="nog iets";

for (var i=lijst.length-1;i>=0;i--){
    console.log(lijst[i]);
}
