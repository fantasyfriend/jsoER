'use strict';
var toetsenbord = require('readline-sync');
var punten = parseInt(toetsenbord.question('totaal aantal punten behaald :  '), 10);

switch (punten) {
    case 18: case 19: case 20:
        console.log("grootste onderscheiding");
        break;
    case 16: case 17:
        console.log("grote onderscheiding");
        break;
    case 14: case 15:
        console.log("onderscheiding");
        break;
    case 10: case 11: case 12: case 13:
        console.log("voldoende");
        break;
    default:
        console.log("onvoldoende");
}

if (punten < 10){console.log("onvoldoende");}
else if (punten >= 10 && punten < 14){console.log("onvoldoende");}
else if (punten >= 14 && punten < 16){console.log("onderscheiding");}
else if (punten >= 16 && punten < 18){console.log("grote onderscheiding");}
else if (punten >= 18 && punten <= 20){console.log("grootste onderscheiding");}
else {console.log("verkeerde invoer");}