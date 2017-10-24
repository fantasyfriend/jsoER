var toetsenbord = require('readline-sync');

var bedrag = toetsenbord.question('het bedrag:  ');
if (bedrag>5){console.log("Voor mij een ijsje met 3 bollen aub");}
else {console.log("Ik zal wel plat water drinken");}