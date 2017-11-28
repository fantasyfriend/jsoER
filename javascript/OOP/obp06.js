'use strict';

<<<<<<< HEAD
var toetsenbord = require('readline-sync');


=======
>>>>>>> 3dbef206d3a67c12f58d79389db062b7f70d3acb
function Begroting() {
    this.inkomsten = [];
    this.uitgaven = [];
}
<<<<<<< HEAD
Begroting.prototype.voegInkomstToe = function(inkomst) {
    this.inkomsten.push(inkomst); 
}
Begroting.prototype.voegUitgaveToe = function(uitgave) {
    this.uitgaven.push(uitgave); 
}

Begroting.prototype.presenteerBegroting = function() {
    var text="";
    if(this.uitgaven.length!=0){
        text+="\nUitgaven:";
        for(var i=0;i<this.uitgaven.length;i++){
            text+="\n-"+this.uitgaven[i];
        }
    }
    if(this.inkomsten.length!=0){
        text+="\nInkomsten:";
        for(var i=0;i<this.inkomsten.length;i++){
            text+="\n+"+this.inkomsten[i];
        }
    }
    var som =this.uitgaven.reduce((pv, cv) => pv+cv, 0)-this.inkomsten.reduce((pv, cv) => pv+cv, 0);
    if(som>0)text+="\n+"+som;
    text+="\nDe begroting is op order.";
    return text;
}

=======

Begroting.prototype.voegInkomstToe = function (inkomst) {
    this.inkomsten.push(inkomst);
}

Begroting.prototype.voegUitgaveToe = function (uitgave) {
    this.uitgaven.push(uitgave);
}

Begroting.prototype.presenteerBegroting = function () {
    var tekst = "Uitgaven:\n";
    for (var i = 0; i < this.uitgaven.length; i++) {
        tekst += "-" + this.uitgaven[i] + "\n";
    }
    tekst += "Inkomsten:\n";
    for (var i = 0; i < this.inkomsten.length; i++) {
        tekst += this.inkomsten[i] + "\n";
    }
    var verschil = this.berekenVerschil();
    if (verschil < 0) {
        tekst +=  -verschil + "\n";
    }
    tekst += "De begroting is in evenwicht.\n";
    return tekst;
}

Begroting.prototype.berekenVerschil = function () {
    var totaalInkomsten = 0;
    for (var i = 0; i < this.inkomsten.length; i++) {
        totaalInkomsten += this.inkomsten[i];
    }
    var totaalUitgaven = 0;
    for (var i = 0; i < this.uitgaven.length; i++) {
        totaalUitgaven += this.uitgaven[i];
    }
    return totaalInkomsten - totaalUitgaven;
}


>>>>>>> 3dbef206d3a67c12f58d79389db062b7f70d3acb
var begroting = new Begroting();
begroting.voegUitgaveToe(5000);
begroting.voegUitgaveToe(6000);
begroting.voegInkomstToe(4000);
begroting.voegUitgaveToe(7000);
begroting.voegInkomstToe(3000);
<<<<<<< HEAD


console.log(begroting.presenteerBegroting());

=======
console.log(begroting.presenteerBegroting());
>>>>>>> 3dbef206d3a67c12f58d79389db062b7f70d3acb
