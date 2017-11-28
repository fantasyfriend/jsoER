'use strict';

var toetsenbord = require('readline-sync');

function TV2(post,uur) {
    this.post = post;
    this.uur=uur;
}

TV2.prototype.getProgramma = function() {
    /*var resultaat;
    if(this.post==0){resultaat=this.uur<18?"Tik Tak":this.uur<19?"Samson en Gert":"K3 in het Sportpaleis";}
    else{resultaat=this.uur<19?"sport":this.uur<20?"voetbal":'sport'}
    return resultaat;*/
    return this.post==0?(
    this.uur<18?"Tik Tak":
    this.uur<19?"Samson en Gert":
    'K3 in het Sportpaleis'):this.post==1?
    (this.uur<19?"sport":
    this.uur<20?"voetbal":
    'sport'):
    "er is alleen post 0 en post 1.";
};

var tv = new TV2();
tv.post = 1;
tv.uur = 19;
var programma = tv.getProgramma();
console.log("Om %d uur is er %s op tv;",tv.uur,programma);
var post = parseInt(toetsenbord.question("Geef post: "));
var uur = parseInt(toetsenbord.question("Geef uur: "));
tv.post = post;
tv.uur = uur;
programma = tv.getProgramma();
console.log("Om %d uur is er %s op tv;",tv.uur,programma);