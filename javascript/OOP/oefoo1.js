'use strict';

var toetsenbord = require('readline-sync');
var tankbeurten=3;
var tank=[];
var gemVerbruik=0;

function Tanken(inhoud,afstand) {
    this.inhoud = inhoud;
    this.afstand=afstand;
}

Tanken.prototype.verbruik = function() {
    return inhoud/afstand*100;
};

for(var i=0;i<tankbeurten;i++){
    var inhoud = parseInt(toetsenbord.question("Geef inhoud tank: "));
    var afstand = parseInt(toetsenbord.question("Geef afstand: "));
    tank[i]=new Tanken(inhoud,afstand);
    gemVerbruik+=tank[i].verbruik();
}

console.log("Uw wagen verbruikt %d liter per 100 km.", (gemVerbruik/tankbeurten).toFixed(2));