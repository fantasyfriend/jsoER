var toetsenbord = require('readline-sync');

var aantal, spatie="";

aantal = parseInt(toetsenbord.question("Geef aantal : ", 10));

for (var x=0;x<aantal;x++){
    console.log("%s*", spatie);
    spatie += " ";
}