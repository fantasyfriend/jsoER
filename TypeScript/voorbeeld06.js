/* interface met optionele prop */
// door een vraagteken achter de naam van een prop te schrijven,
// geef je aan dat die prop optioneel is
function toonPersoon(persoon) {
    var result = persoon.voornaam + " " + persoon.naam;
    if (persoon.partner) {
        result += " is gehuwd met " + persoon.partner.voornaam + " " + persoon.partner.naam;
    }
    console.log(result);
}
var persoon1 = { voornaam: "Nicole", naam: "Josy", partner: { voornaam: "Hugo", naam: "Sigal" } };
toonPersoon(persoon1);
var persoon2 = { voornaam: "Jorge", naam: "Bergoglio", jaarBenoeming: 2013 };
toonPersoon(persoon2);
var artikel = { code: "123", prijs: 2.3, omschrijving: "mini-baguette smos kaas" };
toonPersoon(artikel); // compileerfout
// object literals worden anders behandeld:
// een object literal als argument mag enkel de props uit de interface hebben
toonPersoon({ voornaam: "Johan", naam: "Bonny" });
toonPersoon({ voornaam: "Julius", naam: "Caesar", jaarOverlijden: "48 AC" }); // compileerfout
