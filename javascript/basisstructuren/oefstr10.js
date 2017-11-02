'use strict';

var toetsenbord = require('readline-sync');
var getal;

//functies
function isArmstrong(getal){
    var armstrong=0; var uitkomst;
    for (var i=0;i<getal.length;i++) {armstrong += Math.pow(getal.charAt(i),getal.length);}
    getal==armstrong?uitkomst="een":uitkomst="geen";
    //console.log("dit is %s Armstrong getal.",uitkomst);
    return uitkomst;
}

//programma

//getal = toetsenbord.question('Geef een getal tussen 1 en 10000 in : ');

for (var i=1;i<10000;i++){
    if (isArmstrong(""+i)=="een"){
        console.log(i);
    }
}