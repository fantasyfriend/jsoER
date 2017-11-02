'use strict';

var toetsenbord = require('readline-sync');
var bmTrap,ongevallen;

//functies
function bmBerekening(t,o) {
    var text=""
    if (o==0){t--;}
    else if (o==1){t+=2}
    else {t+=2+((o-1)*3)}
    if (t<1){t=1}
    else if (t>18){text="\nU zit boven de 18 bonus-malus punten, gelieve een andere verzekeraar te gaan zoeken !"}
    console.log("U heeft nu " + t + " bonus-malus punten."+text);
}

//programma
bmTrap = parseInt(toetsenbord.question('Geef uw huidige bonus-malus trap waarde : '), 10);
ongevallen = parseInt(toetsenbord.question('Geef aantal ongevallen aan deze periode : '), 10);
bmBerekening(bmTrap,ongevallen);