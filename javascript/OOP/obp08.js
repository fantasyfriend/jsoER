'use strict';

var toetsenbord = require('readline-sync');


function Fortis() {
    this.koers = [];
}
Fortis.prototype.voegKoersToe = function(k) {
    this.koers.push(k); 
}
Fortis.prototype.geefMaxCoupon = function(uitgave) {
    var som=0;
    var t=this.koers.length<4?this.koers.length:4;
    for(var i=this.koers.length-1;i>this.koers.length-1-t;i--){
        som+=this.koers[i];
     }
    return (10-som/t).toFixed(2); 
}

var belegger1=new Fortis();
belegger1.voegKoersToe(2);
belegger1.voegKoersToe(1.75);
belegger1.voegKoersToe(1.85);
belegger1.voegKoersToe(2.01);
belegger1.voegKoersToe(3);

console.log(belegger1.geefMaxCoupon());