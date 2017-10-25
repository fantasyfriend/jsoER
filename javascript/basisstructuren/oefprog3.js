var toetsenbord = require('readline-sync');

var bank, bedrag, uitzondering="", max=20000;

bank = toetsenbord.question("Geef naam van de bank : ");
bedrag = parseFloat(toetsenbord.question("Geef het bedrag : "));

if (bank.toUpperCase() == "KAUPTHING" && bedrag > max) {
    uitzondering="maar "; bedrag=max;
}
console.log("%s geeft %s %dEUR terug.", bank, uitzondering, bedrag);
