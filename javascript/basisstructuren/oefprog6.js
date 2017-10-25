var toetsenbord = require('readline-sync');

var hoogte, rand="", inhoud="", tussen="", voor="";

hoogte = parseInt(toetsenbord.question("Geef hoogte : ", 10));

for (var y=0;y<hoogte*3-2;y++){rand += "*";inhoud +=" ";}

for (var x=1;x<=hoogte;x++){
    if (x>1 && x<hoogte){tussen=inhoud;}else{tussen=rand;}
    console.log("%s*%s*", voor, tussen);
    voor +=" ";
}