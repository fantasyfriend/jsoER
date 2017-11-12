'use strict'

var toetsenbord = require('readline-sync');
var getallen=["nul","een","twee","drie","vier","vijf","zes","zeven","acht","negen"];
var invoer;

invoer = parseInt(toetsenbord.question('getal: '), 10);

console.log("Dit is getal %s.",getallen[invoer]);