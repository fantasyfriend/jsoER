var toetsenbord = require('readline-sync');

const bedrag = 100;
var aandeel = 3.75;
var inkoop = 0;
var aantal = 0;
var totaal = 0;
var gekocht = 0;

while (bedrag >= gekocht) {
    aantal = parseInt(toetsenbord.question("hoeveel aandelen wilt u kopen : "), 10);
    totaal += aantal;
    inkoop = aantal * aandeel;
    gekocht += inkoop;
    console.log("U heeft al gekocht voor %d EUR.", gekocht);
    console.log("De huidige waarde van uw portefeuille is %d", totaal * aandeel);
    aandeel -= 0.10;
}
console.log("Uw geld is op!");
