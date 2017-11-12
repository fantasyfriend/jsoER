'use strict';

var toetsenbord = require('readline-sync');

var rij= parseInt(toetsenbord.question("Geef aantal rijen in: "),10);
var kol= parseInt(toetsenbord.question("Geef aantal kolommen in: "),10);
var tabel=new Array(rij);
for(var i=0;i<rij;i++){tabel[i]=new Array(kol);}

function vierkant(array2D){
    return array2D.length==array2D[0].length;
}

function magisch(array2D){
    var magi=new Array(tabel.length*2+2);magi.fill(0);
    for(var x=0;x<tabel.length;x++){
        magi[tabel.length*2]+=tabel[x][x];magi[tabel.length*2+1]+=tabel[x][tabel.length-x-1];
        for(var y=0;y<tabel[0].length;y++){magi[x]+=tabel[x][y];magi[x+tabel.length]+=tabel[y][x];};
    }
console.log(magi);
if(magi.every((v,i,a)=>v===a[0])){console.log("Dit is een magisch vierkant.");}else{console.log("Helaas geen magisch vierkant!")}
}

if(vierkant(tabel)){
    for(var x=0;x<tabel.length;x++){
        for(var y=0;y<tabel[0].length;y++){tabel[x][y]=parseInt(toetsenbord.question("getal ("+x+","+y+"): "),10);};
    }
    magisch(tabel);
}
