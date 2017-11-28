'use strict'

Number.pad= function(num,size,char) {
    var string="";
	for(var i=0;i<size-((num+"").length);i++){
        string+=char;
    }
	return string+num;
}

var s=Number.pad(12,4,'0');
console.log(s);