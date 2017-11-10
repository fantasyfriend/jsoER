'use strict';
var d=new Date;
var soort=["wit","bruin"]
var smos=["","+ smos"]
var broodjes=[];
broodjes[0]=["zalm broodje","vis",3.50];
broodjes[1]=["broodje ham","h",2.75];
broodjes[2]=["Franse kaas brood","kaas",3.25];
broodjes[3]=["garnalen broodje","g",4.00];
broodjes[4]=["hamburger","hamb",3.00];
broodjes[5]=["vlees-kerry brood","hs",3.50];
broodjes[6]=["rib burger brood","vl",4.00];
broodjes[7]=["ham-kaas broodje","hk",2.75];
broodjes[8]=["ham-kaas-ei broodje","hkei",3.00];
broodjes[9]=["dubbele kip brood","kip",3.50];
broodjes[10]=["broodje kroket","krok",3.00];
broodjes[11]=["vlees salade brood","sal",3.25];

if(!bestel){
var bestel=new Array(broodjes.length*4);
bestel.fill(0);
var totaal=0;
}

var htmloverzicht="",htmllijst="";
for (var i=0;i<broodjes.length;i++){
    htmloverzicht+="<div class='item'><h3>"+broodjes[i][0]+"</h3><img src='images/"+broodjes[i][1]+".jpg'><p class='prijs'>"+(broodjes[i][2]).toFixed(2)+" Euro</p></div>";
    htmllijst+="<option value='"+i+"'>"+broodjes[i][0]+"</option>";}
   

function opmaak() {
    
    var br= bestelfrm.brood.value*1;
    var so= bestelfrm.soort.value*broodjes.length;
    var sm= bestelfrm.smos.checked?broodjes.length*2:0;
    bestel[br+so+sm]+=1;
    var htmlbestel="";
    for (var i=0;i<bestel.length;i++){
        if(bestel[i]>0){
        totaal+=broodjes[i%12][2]*bestel[i];
        i<24?sm=0:sm=1;
        i%24<12?so=0:so=1;
        htmlbestel+="<tr><td>"+bestel[i]+"x </td><td></td><td> "+soort[so]+" "+broodjes[i%12][0]+" "+smos[sm]+"</td><td>"+(broodjes[i%12][2]*bestel[i]).toFixed(2)+"</td></tr>";
        }
    }
    document.getElementById("tab").innerHTML = 
    "<table id='tabel'><thead><tr><th>aantal</th><th></th><th>broodje</th><th>totaal</th></tr></thead><tbody>"+htmlbestel+"</tbody><br><tfoot><tr><th colspan='3'>totaal bestelling in Euro: </th><td>"+(totaal).toFixed(2)+"</td></tr></tfoot></table>";
}
                
function startJS(){
            
   
    
    var locatie=document.getElementById("mainindex");
    if (locatie){locatie.innerHTML = "<h2>ons assortiment</h2><div class='flexwrapper'>"+htmloverzicht+"</div>";}
    
    var locatie=document.getElementById("br");
    if (locatie){locatie.innerHTML =htmllijst;}

    var dag=(d.getDate()+11)%12;
    document.getElementById("side").innerHTML = "<h2>broodje van de dag</h2><div class='item'><h3>"+broodjes[dag][0]+"</h3><img src='images/"+broodjes[dag][1]+".jpg'><p class='prijs'>"+(broodjes[dag][2]).toFixed(2)+" Euro</p></div>";
    
    var bestellen=bestelfrm.btn;
    if (bestellen){bestellen.onclick = opmaak;}
}
window.onload = startJS;