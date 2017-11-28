'use strict';

<<<<<<< HEAD
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
=======
const AANTALKOERSEN = 4, REFERENTIEKOERS = 10;

function Fortis() {
    this.koersen = [];
}

Fortis.prototype.voegKoersToe = function (koers) {
if (this.koersen.length < AANTALKOERSEN) {
			this.koersen.push(koers);
		} else {
			for (var i = 1; i < this.koersen.length; i++) {
				this.koersen[i - 1] = this.koersen[i];
			}
			this.koersen[this.koersen.length - 1] = koers;
		}

}

Fortis.prototype.maxCoupon = function () {
    return REFERENTIEKOERS - this.gemiddeldeKoers();
}

Fortis.prototype.gemiddeldeKoers = function () {
    var som = 0;
    for (var i = 0; i < this.koersen.length; i++) {
        som += this.koersen[i];
    }
    return som / this.koersen.length;
}


var fortis = new Fortis();
fortis.voegKoersToe(2);
fortis.voegKoersToe(1.75);
fortis.voegKoersToe(1.85);
fortis.voegKoersToe(2.01);
fortis.voegKoersToe(3);
console.log("De maximum coupon is %d", fortis.maxCoupon());
>>>>>>> 3dbef206d3a67c12f58d79389db062b7f70d3acb
