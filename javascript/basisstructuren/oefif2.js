var toetsenbord = require('readline-sync');

var naam = toetsenbord.question('uw naam:  ');
var leeftijd = toetsenbord.question('uw leeftijd:  ');
if (leeftijd>14){console.log("Sorry, deze pagina is enkel voor kinderen");}
else {console.log("Welkom " + naam);}