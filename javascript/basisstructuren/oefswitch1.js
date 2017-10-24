'use strict';
var toetsenbord = require('readline-sync');

var getal1 = parseInt(toetsenbord.question('kies uw eerste getal :  '), 10);
var getal2 = parseInt(toetsenbord.question('kies uw tweede getal :  '), 10);

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