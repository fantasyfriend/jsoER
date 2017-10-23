'use strict';

var toetsenbord = require('readline-sync');

var eerste = toetsenbord.question('eerste getal:  ');
var tweede = toetsenbord.question('tweede getal:  ');
var som = parseInt(eerste) + parseInt(tweede)
console.log('Het product van %s en %s is %s', eerste, tweede, som);
var loon = toetsenbord.question('loon (geheel getal):  ');
var verhoging = toetsenbord.question('verhoging (geheel getal):  ');
loon=parseInt(loon, 10);verhoging=parseInt(verhoging, 10)
var nieuwLoon = loon + verhoging;
console.log('Het nieuwe loon is %s,- = oude loon (%s,-) + verhoging (%s,-)', nieuwLoon, loon, verhoging);