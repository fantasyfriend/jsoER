var toetsenbord = require('readline-sync');

var aantal, spatie="", voor="";

aantal = parseInt(toetsenbord.question("Geef aantal : ", 10));

for (var x=1;x<=aantal;x++){
    if (x>2){spatie += " ";}
    if (x==aantal){
        spatie="";
        for (var y=0;y<aantal-2;y++){spatie += "*";}
    }
    console.log("%s%s*", voor, spatie);
    voor="*";
}