'use strict';
var toetsenbord = require('readline-sync');

var getal1 = parseInt(toetsenbord.question('kies uw eerste geheel getal :  '));
var getal2 = parseInt(toetsenbord.question('kies uw tweede geheel getal :  '));
var uitkomst
var operator = toetsenbord.question('kies de gewenste operator (+,-,* of /) :  ');


switch (operator) {
    case '+':
        console.log(getal1 + ' + ' + getal2 + ' = ' + (getal1 + getal2));
        break;
    case '-':
        console.log(getal1 + ' - ' + getal2 + ' = ' + (getal1 - getal2));
        break;
    case '*':
        console.log(getal1 + ' * ' + getal2 + ' = ' + (getal1 * getal2));
        break;
    case '/':
        console.log(getal1 + ' / ' + getal2 + ' = ' + (getal1 / getal2));
        break;
    default:
        console.log("Verkeerde operator");
}