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
function drawMiter(){
    veelhoek("red",[topx,60,topx+120,180,topx+60,300,topx-60,300,topx-120,180]);
    drawLijn("gold",topx-120,180,topx+120,180,10);
    drawLijn("gold",topx,60,topx,300,10);
}
function drawImage(naam,x,y,width,height){
    var img=new Image();
    img.src=naam;
    img.onload=function(){
        context.drawImage(img,x,y,width,height);
    }
}
function drawLijn(color,x1,y1,x2,y2,width){
    context.strokeStyle=color;
    context.lineWidth=width;
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}
function text(color,text,x,y){
    context.fillStyle=color;
    context.font="bold 2em sans-serif";
    context.textAlign="center";
    context.fillText(text,x,y);
}
function rnd(x){return Math.floor(Math.random()*x)};

function snoep(){
    var x,y,z;
    for(var i=0;i<12;i++){
    //drawImage("images/images.png",rnd(580),rnd(580),20+rnd(20),20+rnd(20));
    x=rnd(560);y=rnd(580);z=rnd(10)+3;
    veelhoek("rgb("+x/2.5+","+y/2.5+","+z*20+")",[x,y,x+z,y+z,x+z*2,y,x+z*3,y+z,x+4*z,y,x+4*z,y+2*z,x+3*z,y+z,x+2*z,y+2*z,x+z,y+z,x,y+2*z]);
    }    
}

function drawFace(){
    context.clearRect(0,0,600,600);
    context.fillStyle="beige";
    context.fillRect(0,0,600,600);
    drawCircle("pink",topx,320,70);
    drawOgen();
    drawBaard();
    drawMond();
    drawMiter();
    drawImage("images/speelgoedzak.png",450,450,150,150);
    text("purple","Dag sinterklaasje !",topx,550);
    snoep()
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

    setInterval(drawFace,300);


}