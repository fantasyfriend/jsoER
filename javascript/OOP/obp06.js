'use strict';

var toetsenbord = require('readline-sync');


function Begroting() {
    this.inkomsten = [];
    this.uitgaven = [];
}
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

var begroting = new Begroting();
begroting.voegUitgaveToe(5000);
begroting.voegUitgaveToe(6000);
begroting.voegInkomstToe(4000);
begroting.voegUitgaveToe(7000);
begroting.voegInkomstToe(3000);


console.log(begroting.presenteerBegroting());

