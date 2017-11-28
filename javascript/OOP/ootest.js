'use strict';

function Persoon(a,v) {
    this.aNaam=a;
    this.vNaam=v;
    
}

Persoon.prototype.volledigeNaam = function() {
	return this.vNaam+" "+this.aNaam;
};
Persoon.prototype.toString = function() {
	return this.volledigeNaam();
};
function Werknemer(anaam,vNaam,loon){
    /*this.anaam=naam;
    this.vNaam=vNaam;*/Persoon.apply(this, arguments);
    this.loon=loon;
}
Werknemer.prototype=new Persoon();

var persoon1=new Persoon("Kapot","Isabel");
console.log(persoon1.volledigeNaam());
console.log(persoon1.toString());

var werknemer1=new Werknemer("Stok","Pol",1234);
console.log(werknemer1.toString());

var werknemer2=new Werknemer("Selie", "Peter",2345);
werknemer2.volledigeNaam=function(){
    return "met de groeten van "+this.vNaam+" "+this.aNaam;
}
console.log(werknemer2.volledigeNaam());