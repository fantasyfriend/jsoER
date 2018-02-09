class Behandeling {
    constructor(public prijs: number, public omschrijving: string) { }

    getPrijs(p: Patient): number {
        return this.prijs * p.behandelingspercentage;
    }
}

De prijs voor een residentiële patiënt voor een behandeling van 100 EUR = 200 EUR (vaste ligprijs) + 100 EUR * 1 (geen korting) = 300 EUR.
De prijs voor een ambulante patiënt voor een behandeling van 100 EUR = 100 EUR * 0.9 (10% korting) = 90 EUR.

Zorg ervoor dat het volgende programma werkt:
let ogenVerwisselen: Behandeling = new Behandeling(100, "ogen verwisselen");
let benenUitDeKnoopHalen: Behandeling = new Behandeling(200, "benen uit de knoop halen");
let patienten: Patient[] = new Array<Patient>(4);
patienten[0] = new AmbulantePatient("Jan", ogenVerwisselen);
patienten[1] = new ResidentielePatient("Piet", ogenVerwisselen);
patienten[2] = new AmbulantePatient("Joris", benenUitDeKnoopHalen);
patienten[3] = new ResidentielePatient("Corneel", benenUitDeKnoopHalen);
for (let patient of patienten) {
    console.log("De behandeling '%s' voor %s kost %s EUR.",
        patient.behandeling.omschrijving, patient.naam, patient.getPrijs());
}
en de volgende output geeft:
De behandeling 'ogen verwisselen' voor Jan kost 90,0 EUR.
De behandeling 'ogen verwisselen' voor Piet kost 300,0 EUR.
De behandeling 'benen uit de knoop halen' voor Joris kost 180,0 EUR.
De behandeling 'benen uit de knoop halen' voor Corneel kost 400,0 EUR.