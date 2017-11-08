'use strict'

var toetsenbord = require('readline-sync');
var verkopers=["Jan","Piet","Joris","Corneel"];
var totaal=[];
for (var i=0;i<verkopers.length;i++){totaal[i]=0;}
var invoer,omzet;

function controle(){
var naam = toetsenbord.question('Geef een naam in: ');
for (var i=0;i<verkopers.length;i++){
    if (verkopers[i]==naam || naam=="einde"){return naam;}
}
console.log("verkeerde naam");
controle();
}

function wie(naam){
for (var i=0;i<verkopers.length;i++){
    if (verkopers[i]==naam){return i}
}    
}

invoer=controle();
while (invoer.toLowerCase()!="einde"){
omzet = parseInt(toetsenbord.question('Geef de omzet in: '),10);
totaal[wie(invoer)]+=omzet;
invoer=controle();
}

for (var i=0;i<verkopers.length;i++){
    console.log("\nVerkoper %s heeft %d aan omzet behaald.",verkopers[i],totaal[i]);
}
