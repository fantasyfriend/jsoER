'use strict';

//var toetsenbord = require('readline-sync');

//var zijde = toetsenbord.question('Lengte zijde :  ');

function vierkant(zijde) {
    for (var y=1;y>=zijde;y++){  var z="4";for (var x=1;x>=zijde;x++){z+="*"; };console.log(z);  }
}

vierkant(4);