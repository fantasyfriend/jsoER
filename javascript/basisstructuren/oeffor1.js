'use strict';

var toetsenbord = require('readline-sync');
var g = 99, r = "bottle", rx ="s",i = "bier", part1 = "", part2 = "", partx = "",keuze="j";

//do {
partx = 'Go to the store and buy some more, ' + g + ' ' + r + rx + ' of ' + i + ' on the wall.';
for (var getal = g; getal > 0; getal--) {
    part1 = getal + ' ' + r + rx + ' of ' + i + ' on the wall, ' + getal + ' ' + r + rx + ' of ' + i + '.\n';
    if (getal - 1 == 1) { rx = ""; }
    part2 = 'Take one down and pass it around, ' + (getal - 1) + ' ' + r + rx + ' of ' + i + ' on the wall.';
    if (getal - 1 == 0) { part2 = partx; }
    console.log(part1 + part2);
}
//}
//while (keuze=="j" || keuze=="J");
