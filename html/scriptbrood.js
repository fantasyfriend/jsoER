'use strict';
var d=new Date;
var soort=["wit","bruin"]
var smos=["","met smos"]
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
var bestel=new Array(broodjes.length*4);
bestel.fill(0);
   


function opmaak() {
    var totaal=0;
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
        htmlbestel+="<tr><td>"+bestel[i]+"</td><td>"+soort[so]+" "+broodjes[i%12][0]+" "+smos[sm]+"</td><td>"+broodjes[i%12][2]+"</td><td>"+broodjes[i%12][2]*bestel[i]+"</td></tr>";
        }
    }
    alert(htmlbestel);
    document.getElementById("tabel").innerHTML = 
    "<thead><tr><th colspan='4'>Uw bestellings totaal</th></tr><tr><th>aantal</th><th>broodje</th><th>prijs</th><th>totaal</th></tr></thead><tbody>"+htmlbestel+"</tbody><tfoot><tr><th colspan='3'>totaal bestelling in Euro: </th><td>"+totaal+"</td></tr></tfoot>";
}
                
function startJS(){

    bestelfrm.btn.onclick = opmaak;
        
    var htmloverzicht="",htmllijst="";
    for (var i=0;i<broodjes.length;i++){
        htmloverzicht+="<div class='item'><h3>"+broodjes[i][0]+"</h3><img src='images/"+broodjes[i][1]+".jpg'><p class='prijs'>"+broodjes[i][2]+" Euro</p></div>";
        htmllijst+="<option value='"+i+"'>"+broodjes[i][0]+"</option>";}
    
    var locatie=document.getElementById("mainindex");
    if (locatie){locatie.innerHTML = "<h2>ons assortiment</h2><div class='flexwrapper'>"+htmloverzicht+"</div>";}
    
    var locatie=document.getElementById("br");
    if (locatie){locatie.innerHTML =htmllijst;}

    var dag=(d.getDate()+11)%12;
    document.getElementById("side").innerHTML = "<h2>broodje van de dag</h2><div class='item'><h3>"+broodjes[dag][0]+"</h3><img src='images/"+broodjes[dag][1]+".jpg'><p class='prijs'>"+broodjes[dag][2]+" Euro</p></div>";
        
}
window.onload = startJS;