var toetsenbord = require('readline-sync');
var munt = [2, 1, 0.5, 0.2, 0.1];
var x=0
var input = parseFloat(toetsenbord.question("voer een muntje in ( 2 , 1 , 0.5 , 0.2 of 0.1 ) : "));


if (rb > maat[maat.length-1]) { console.log("helaas dit is boven onze max. formaat"); }
else {
    while (rb > maat[x]) {
        x++;
    }
    console.log("gebruik onze gordijnen van maat " + maat[x] + " cm");
}