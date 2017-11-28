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



function ShowHond(naam,ras,gewicht,win=0) {
    Hond.apply(this, arguments);
    this.win = win;
    
    
}
ShowHond.prototype = new Hond();
ShowHond.prototype.winShow = function() {this.win++;}
ShowHond.prototype.paradeer = function(manier) {this.paraderen=manier;console.log(this.paraderen);}


var scotty = new ShowHond("Scotty", "Schotse terrier", 15, 0);
var beatrice = new ShowHond("Beatrice", "dwergkeeshond", 5, 3);

// showhonden kunnen alles wat gewone honden kunnen:
console.log(scotty.blaf());
// showhonden kunnen meer dan gewone honden:
scotty.paradeer("trappelen");
beatrice.paradeer("trippelen");

console.log(scotty.naam , " heeft al ", scotty.win, " show(s) gewonnen.");
console.log(beatrice.naam , " heeft al ", beatrice.win, " show(s) gewonnen.");
scotty.winShow();
console.log("Nu heeft ", scotty.naam , " " , scotty.win, " show(s) gewonnen.");
console.log("Nu heeft ", beatrice.naam , " " , beatrice.win, " show(s) gewonnen.");

console.log(scotty);