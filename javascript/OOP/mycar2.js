'use strict'

function Auto(merk,model){
    this.merk=merk;
    this.model=model;
    this.cabrio=false;
    this.bouwjaar=new Date().getFullYear();
    this.gestart=true;
    this.starten=function(){
        this.gestart=true;
        console.log("de motor draaid....");
    };
    this.rijden=function(geluid){
        if(this.gestart){
            var tmp=this.gegevens();
            console.log("ik vertrek met mijn %s",tmp);
            console.log("mijn "+this.merk+" doet "+geluid+".");
        }
        else {console.log("start de motor eerst!");};
    };
    this.gegevens=function(){
        return this.merk+" "+this.model+" "+(this.cabrio?'cabrio ':'')+"uit "+this.bouwjaar+"";
    };
}

var auto1=new Auto("BMW","X6");
var auto2=new Auto("Audi","A6");
auto2.cabrio=true;
auto2.kleur="vieswit";

auto2.rijden("plopsssss....");
