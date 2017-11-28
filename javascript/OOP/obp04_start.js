'use strict';

function Rekening(beginJaar,eindJaar,rente,startBedrag) {
    this.beginjaar = beginJaar;
    this.eindjaar = eindJaar;
    this.rente=rente;
    this.startbedrag = startBedrag;
}

Rekening.prototype.eindbedrag = function() {
    return (this.eindjaar-this.beginjaar)*this.rente/100*this.startbedrag+this.startbedrag;
};

var rekening = new Rekening(2000,2010,4,1000);
console.log("%d EUR belegd tegen %d%% in %d geeft in het jaar %d als eindbedrag %d",
    rekening.startbedrag, rekening.rente, rekening.beginjaar, rekening.eindjaar, rekening.eindbedrag());
