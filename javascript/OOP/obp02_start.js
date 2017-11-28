'use strict';

var toetsenbord = require('readline-sync');

function TV(post) {
	this.post = post;
}

TV.prototype.getProgramma = function() {
    return this.post==0?"K3 en de regenboogprinces":
    this.post==1?"Belgie-Spanje":
    this.post==2?"Parijs-Tours":
    this.post==3?"Lotto Uitslag":
    'Ooit "FC de Kampioenen" gemist?';
};

var tv = new TV();
tv.post = 2;
var programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
var post = parseInt(toetsenbord.question("Geef post: "));
tv.post = post;
programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
