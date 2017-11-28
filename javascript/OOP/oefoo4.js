'use strict';

'use strict'

function Hond(naam,ras,gewicht){
    this.naam=naam;
    this.ras=ras;
    this.gewicht=gewicht;
}
Hond.prototype.blaf=function(){
    return this.gewicht>30?"WOEF WOEF":this.gewicht<10?"kefkefkefkef":"waf";
}



function ShowHond() {
    this.win = 0;
    this.paradeer="";
    
}
ShowHond.prototype = new Hond();
ShowHond.prototype.winShow = function() {this.win++;}
ShowHond.prototype.paradeer = function() {this.win++;}



console.log("Uw wagen verbruikt %d liter per 100 km.", (gemVerbruik/tankbeurten).toFixed(2));