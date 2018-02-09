// een niet-abstracte klasse die een interface implementeert moet 
// alle velden en methode uit de interface bezitten
class LaatsteWilsbeschikking {
    constructor(id, voornaam, naam, crematie, plechtigheid, rustplaats) {
        this.id = id;
        this.voornaam = voornaam;
        this.naam = naam;
        this.crematie = crematie;
        this.plechtigheid = plechtigheid;
        this.rustplaats = rustplaats;
        this.registratieDatum = new Date();
    }
    registreer() {
        // output om didactische reden ;-)
        console.log("registratie van de laatstewilsbeschikking van %s %s", this.voornaam, this.naam);
        console.log("(id: %s, na de %s volgt een %s.  Laatste rustplaats: %s)", this.id, this.plechtigheid, this.verwerking, this.rustplaats);
    }
    get verwerking() {
        return this.crematie ? "crematie" : "begrafenis";
    }
}
class ZonnepanelenInstallatie {
    constructor(aantalPanelen, adres) {
        this.aantalPanelen = aantalPanelen;
        this.adres = adres;
        this.registratieDatum = new Date();
        ZonnepanelenInstallatie.teller++;
        this.id = "ZP" + ZonnepanelenInstallatie.teller;
    }
    registreer() {
        // output om didactische reden ;-)
        console.log("Wij hebben de aanvraag tot registratie van %s zonnepanelen op het adres %s goed ontvangen.", this.aantalPanelen, this.adres);
        console.log("Vermeld bij elke communicatie referentienr %s aub", this.id);
    }
}
ZonnepanelenInstallatie.teller = 0;
class AdresWijziging {
    constructor(rijksregisternr, oudAdres, nieuwAdres, dag, maand, jaar) {
        this.rijksregisternr = rijksregisternr;
        this.oudAdres = oudAdres;
        this.nieuwAdres = nieuwAdres;
        this.registratieDatum = new Date(jaar, maand - 1, dag);
        console.log(this.registratieDatum);
        this.id = Math.floor(Math.random() * 10000000).toString();
    }
    registreer() {
        // output om didactische reden ;-)
        console.log("Op %s is de persoon met rijksregisternr %s verhuisd van %s naar %s", this.registratieDatum.toLocaleDateString("nl-BE"), this.rijksregisternr, this.oudAdres, this.nieuwAdres);
    }
}
let registraties = new Array();
registraties.push(new LaatsteWilsbeschikking("1234567", "Pierre", "Dooie", false, "RK woord- en communiedienst", "familiegraf op het Schoonselhof"));
registraties.push(new ZonnepanelenInstallatie(9, "Zonneplein 123, Zonnewende"));
registraties.push(new AdresWijziging("89122839857", "Gemeenteplein 13", "Nieuwstraat 56A", 31, 1, 2018));
for (let registratie of registraties) {
    console.log("\n*** Bezig met verwerking van " + registratie.id + " ***");
    registratie.registreer();
}
