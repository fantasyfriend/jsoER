var toetsenbord = require('readline-sync');

var getal;

// functiedefinities
function celcius(f) {
    return 5.0 / 9.0 * (f -32);
}
function fahrenheid(c) {
    return 9.0 / 5.0 * c + 32;
}

// functies oproepen ("gebruiken")
getal =parseFloat (toetsenbord.question("Geef een getal : "));

console.log("%d Celcius = %d Fahrenheid en %d Fahrenheid = %d Celcius", getal, Math.round(fahrenheid(getal)), getal, Math.round(celcius(getal)));