'use strict';

var toetsenbord = require('readline-sync');
var munten = [200, 100, 50, 20, 10];
var invoer = "",bedrag = 0,wisselgeld = "";

do {
    invoer = toetsenbord.question("\nVoer waarde van een muntje in ( 2 , 1 , 0.5 , 0.2 of 0.1 ), \ndruk B voor het brood of R om te stoppen : ");
    switch (invoer) {
        case "r": case "R":
            {
                console.log("Tot de volgende keer.");
                break;
            }
        case "b": case "B":
            {
                if (bedrag >= 220) {
                    bedrag -= 220;
                    console.log("Hier is uw brood \nU heeft nog " + bedrag/100 + " Euro");
                }
                else {
                    console.log((220 - bedrag)/100 + " tekort, voeg nog wat toe.");
                }
                break;
            }
        case "2": case "1": case "0.5": case "0.2": case "0.1":
            {
                bedrag += parseFloat(invoer)*100;
                console.log("Uw totaal is nu " + bedrag/100 + " Euro");
                break;
            }
        default:
            { console.log("verkeerde invoer !"); }
    }
} while (invoer != "r" && invoer != "R");

if (bedrag > 0) {
    console.log("Uw teruggave is " + bedrag/100 + " Euro.");
    for (var i = 0; i < munten.length; i++) {
        while (bedrag >= munten[i]) {
            wisselgeld += " " + munten[i]/100 + " Euro ";
            bedrag -= munten[i];
        };
    }
    console.log("Uw wisselgeld is " + wisselgeld);
}
