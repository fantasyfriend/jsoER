'use strict'

var mijnauto;

mijnauto={
    merk:"Ford",
    model:"Fiesta",
    bouwjaar:1960,
    cabrio:true,
    gestart:false,
    rijden:function(){
        if(this.gestart){
        console.log("mijn "+this.merk+" doet vroemm vroemmmm...");
        }
        else {console.log("start de motor eerst!");}
    },
    starten:function(){
        this.gestart=true;
        console.log("de motor draaid....");
    },
    gegevens:function(){
        return "Dit is een "+this.merk+" "+this.model+" "+(this.cabrio?'cabrio ':'')+"uit "+this.bouwjaar+"";
    },
};

mijnauto.kleur="rood";

var tmp=mijnauto.gegevens();
console.log(tmp);