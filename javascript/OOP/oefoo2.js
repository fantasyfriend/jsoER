'use strict';

var toetsenbord = require('readline-sync');
var dag=["maandag","dinsdag","woensdag","donderdag","vrijdag"];

function Werknemer(naam,uren=[8,8,7,7,7]) {
    this.naam = naam;
    this.uren=uren;
}

Werknemer.prototype.aantalOveruren = function() {
    var som=0;
    for(var i=0;i<5;i++){som+=this.uren[i]}
    return som-37;
}
Werknemer.prototype.wijzigWerkuren = function(dagnr,uren) {
    for(var i=0;i<5;i++){
        this.uren[i] = parseInt(toetsenbord.question("Geef gewerkte uren van "+dag[i]+": "), 10);
            
    }
}

var Jan=new Werknemer("Jan",[8,7,8,7,7]);
Jan.wijzigWerkuren();
var tijd=Jan.aantalOveruren();

console.log("%s heeft %s.", Jan.naam,tijd<0?"minder dan 37 uur gewerkt":tijd+"uur overgewerkt");