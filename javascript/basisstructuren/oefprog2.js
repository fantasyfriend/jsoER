var toetsenbord = require('readline-sync');

var bank, bedrag;
const rente = 4;

// functiedefinities

function rentebedrag(bedrag) {
    return bedrag * rente / 100;
}

// functies oproepen ("gebruiken")
bank = toetsenbord.question("Geef naam van de bank : ");
bedrag = parseFloat(toetsenbord.question("Geef het bedrag : "));

if (bank.toUpperCase() == "KAUPTHING") {
    console.log('"U kunt voorlopig uw (%s EUR) niet opvragen".', bedrag);
}
else {
    console.log("Bij %s bedraagd het rentebedrag %d EUR. Het totaalbedrag is %d EUR.", bank, rentebedrag(bedrag), bedrag + rentebedrag(bedrag));
}