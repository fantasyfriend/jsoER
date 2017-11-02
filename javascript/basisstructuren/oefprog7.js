var toetsenbord = require('readline-sync');

var bedrag=100;
const aandeel = 3.75;
var inkoop=0,aantal;

// functiedefinities

function rentebedrag(bedrag) {
    return bedrag * rente / 100;
}

// functies oproepen ("gebruiken")
while (bedrag>=aandeel){
aantal = parseInt(toetsenbord.question("hoeveel aandelen wilt u kopen : "), 10);
inkoop += aantal*aandeel;bedrag = 100-inkoop;
if (100>=inkoop){console.log("U heeft al gekocht voor %d EUR.", inkoop);}
else {console.log("U heeft niet voldoende geld meer ter beschikking");}
}
