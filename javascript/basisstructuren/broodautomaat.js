var toetsenbord = require('readline-sync');
var munten = [2, 1, 0.5, 0.2, 0.1];
var invoer = ""; munt = []; tel = 0; bedrag = 0; wisselgeld = "";

do {
    var invoer = toetsenbord.question("\nVoer waarde van een muntje in ( 2 , 1 , 0.5 , 0.2 of 0.1 ), \ndruk B voor het brood of R om te stoppen : ");
    switch (invoer) {
        case "r": case "R":
            {
                console.log("Tot de volgende keer.");
                break;
            }
        case "b": case "B":
            {
                if (bedrag >= 2.20) {
                    bedrag -= 2.20;
                    console.log("Hier is uw brood \nU heeft nog " + bedrag + " Euro");
                }
                else {
                    console.log((2.20 - bedrag) + " tekort, voeg nog wat toe.");
                }
                break;
            }
        case "2": case "1": case "0.5": case "0.2": case "0.1":
            {
                bedrag += invoer-0;
                munt[tel] = invoer-0;
                console.log("Uw totaal is nu " + bedrag + " Euro");
                tel++;
                break;
            }
        default:
            { console.log("verkeerde invoer !"); }
    }
} while (invoer != "r" && invoer != "R");

if (bedrag > 0){
console.log("Uw teruggave is " + bedrag + " Euro.");
for (var i = 0; i < munten.length; i++) {
    while (bedrag > munten[i]) {
        wisselgeld+=" "+munten[i]+" Euro ";
        bedrag -= munten[i];
    };
}
console.log("Uw wisselgeld is " + wisselgeld);
}

console.log("Uw totaal is nu " + bedrag + " Euro");