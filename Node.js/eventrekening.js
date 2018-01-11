'use strict'
var events = require('events');
// Create an eventEmitter object
var em = new events.EventEmitter();

function Rekening(x=0){
    this.saldo=x
};
Rekening.prototype.stortGeld=function(b){
    this.saldo+=b;
}
Rekening.prototype.haalGeldAf=function(b){
    if (b<this.saldo){this.saldo-=b;}
    else {em.emit('saldo_negatief',this);}
}
Rekening.prototype.on=function(e,f){
    em.on(e,f);
}

var rekening = new Rekening(100);

rekening.on('saldo_negatief', function(src){
    console.log("saldo ontoereikend! (Saldo bedraagt ",src.saldo,")");
});

console.log("saldo na creatie: ", rekening.saldo);
var bedrag  = 20;
rekening.stortGeld(bedrag);
console.log("saldo na storting van ", bedrag, ": ", rekening.saldo);
bedrag = 10;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);
bedrag = 150;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);

