"use strict";
var sass = require("node-sass");
var fs = require("fs");
console.log('ik wacht op wijzigingen');
fs.watch('scss/style.scss',null,function(event,filename){
    if(event=='change'){
        sass.render(
            {
                file: "scss/style.scss",
                outputStyle: "expanded",
                sourceComments: true
            }, function (err, result) {
                if (!err) {
                    fs.writeFile("css/style.css", result.css, (err) => {
                        if (!err) {
                            console.log("Klaar!");
                        } else {
                            console.log("Er was een error bij de create van css: " + err);
                        }
        
                    })
                }
                else { console.log('er was een fout bij het schrijven') }
            });
}})

