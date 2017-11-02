'use strict';

// functies
function tekenLijn (l=25,k="=") {
    var lijn=""
    for(var i=1;i <= l;i++) {lijn+=k;}
    console.log(lijn);
}

// programma
tekenLijn();
tekenLijn(10);
tekenLijn(20,"*");

for (var i=1;i <= 10;i++){tekenLijn(i,"*");}