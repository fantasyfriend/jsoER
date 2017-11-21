'use strict';
var canvas,context,topx;

function drawCircle(color,x,y,straal){
    context.beginPath();
    context.arc(x,y,straal,0,2*Math.PI);
    context.fillStyle=color;
    context.fill();
}
function veelhoek(color,hoekpunten){
    context.fillStyle=color;
    context.beginPath();
    context.moveTo(hoekpunten[0],hoekpunten[1]);
    for(var i=2;i<hoekpunten.length;i+=2){
        context.lineTo(hoekpunten[i],hoekpunten[i+1]);
    }
    context.lineTo(hoekpunten[0],hoekpunten[1]);
    context.fill();
}
function drawOgen(){
    drawCircle("white",topx-25,315,10);
    drawCircle("white",topx+25,315,10);
    drawCircle("blue",topx-25,315,5);
    drawCircle("blue",topx+25,315,5);
}
function drawBaard(){
    veelhoek("white",[topx-60,360,topx+60,360,topx,520]);
}
function drawMond(color,x,y,straal){
    context.beginPath();
    context.arc(topx,350,20,Math.PI/16,Math.PI-Math.PI/16);
    context.fillStyle="darkred";
    context.fill();
}
function drawMijter(){
    veelhoek("red",[topx,60,topx+120,180,topx+60,300,topx-60,300,topx-120,180]);
}

function drawFace(){
    drawCircle("pink",topx,320,70);
    drawOgen();
    drawBaard();
    drawMond();
    drawMijter();
    
}

window.onload=function(){
    canvas=document.getElementById("mijnCanvas");
    //console.log(canvas.clientWidth);
    //console.log(canvas.clientHeight);
    context=canvas.getContext("2d");
    topx=canvas.clientWidth/2;

    context.clearRect(0,0,600,600);
    context.fillStyle="beige";
    context.fillRect(0,0,600,600);

    drawFace();


}