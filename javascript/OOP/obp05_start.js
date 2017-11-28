'use strict';

function Auto(snelheid,uren,minuten) {
    this.snelheid = snelheid;
    this.aantalUren=uren;
    this.aantalMinuten=minuten;
}

Auto.prototype.afstand = function() {
	return (this.aantalUren*this.snelheid)+(this.aantalMinuten/60*this.snelheid);
};

var auto = new Auto();
auto.snelheid = 60;
auto.aantalUren = 2;
auto.aantalMinuten = 5;
console.log("Na %d:%s u gereden te hebben tegen %d km/uur heb je %d km afgelegd",
    auto.aantalUren, auto.aantalMinuten < 10 ? "0"+auto.aantalMinuten : auto.aantalMinuten,  auto.snelheid, auto.afstand());
