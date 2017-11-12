'use strict';

var toetsenbord = require('readline-sync');

var aantalVakken = 3, vak;
var puntenTabel = new Array(aantalVakken);

function leesTweeDimTabel(tabel, hoofding) {
  var rij, kol;
  for (rij = 0; rij < tabel.length; rij++) {
    for (kol = 0; kol < tabel[rij].length; kol++) {
      tabel[rij][kol] = parseInt(toetsenbord.question(hoofding + (rij + 1) + "(" + (kol + 1) + ") "));
    }
  }
}

function toonTweeDimTabel(tabel, hoofding) {
  var rij, kol, result = hoofding;
  for (rij = 0; rij < tabel.length; rij++) {
    result += "\n";
    for (kol = 0; kol < tabel[rij].length; kol++) {
      result += "\t" + tabel[rij][kol];
    }
  }
  console.log(result);return tabel;
}


/* oefening */
function maximum(tabel) {
  var max = tabel[0][0];
  for (var rij = 0; rij < tabel.length; rij++) {
    /*
	  for(var kol=0; kol<tabel[rij].length; kol++){
		  if (max < tabel[rij][kol]){
			  max = tabel[rij][kol];
			}
		}	
    */
    // korter in ES6
    max = Math.max(...tabel[rij], max);
  }
  return max;
}


/****** HOOFDPROGRAMMA ******/
// allocatie van kolommen van tabel
for (vak = 0; vak < aantalVakken; vak++) {
  puntenTabel[vak] = new Array(5);
}

leesTweeDimTabel(puntenTabel, "Geef punten voor vak ");
toonTweeDimTabel(puntenTabel, "Behaalde punten");

/* oefening: */
<<<<<<< HEAD
=======
function maximum(puntenTabel){
var x=[];
for(var i=0;i<aantalvakken;i++){x[i]=Math.max(...puntenTabel[i]);}
return Math.max(...x);
}

>>>>>>> b3eb56ec098c65c7c5b804f3bfc0c26c9634afb0
console.log("Het maximum = %d", maximum(puntenTabel));