'use strict';

var toetsenbord = require('readline-sync');

var eerste = toetsenbord.question('eerste getal:  ');
var tweede = toetsenbord.question('tweede getal:  ');
var som = parseInt(eerste) * parseInt(tweede)
console.log('Het product van %s en %s is %s', eerste, tweede, som);
var loon = toetsenbord.question('loon :  ');
var verhoging = toetsenbord.question('verhoging :  ');
loon=parseFloat(loon);verhoging=parseFloat(verhoging)
var nieuwLoon = loon + verhoging;
console.log('Het nieuwe loon is %d = oude loon (%d) + verhoging (%d)', nieuwLoon, loon, verhoging);