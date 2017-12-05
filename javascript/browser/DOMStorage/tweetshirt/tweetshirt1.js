'use strict';

window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
	document.getElementById("shape").onchange=giveItemColor;
	saveButton.onclick=save;
	reloadButton.onclick=load;
	

	// Easter Egg ;-)
	makeImage();
}
var sx=[],sy=[],sw=[],bgc,sh,ic,fgc,fs,tw,dr;

function save(){
	localStorage.bgc=bgc;
	localStorage.shape=sh;
	localStorage.ic=ic;
	localStorage.fgc=fgc;
	localStorage.fz=fs;
	localStorage.tweets=tw;
	localStorage.dr=dr;
	localStorage.x=JSON.stringify(sx);
	localStorage.y=JSON.stringify(sy);
	localStorage.w=JSON.stringify(sw);
}
function load(){
	if(localStorage.bgc){
	backgroundColor.value=localStorage.bgc;
	shape.value=localStorage.shape;
	if(shape.value!='none')giveItemColor();
	itemColor.value=localStorage.ic;
	foregroundColor.value=localStorage.fgc;
	fontSize.value=localStorage.fz;
	tweets.value=localStorage.tweets;
	draai.value=localStorage.dr;
	sx=JSON.parse(localStorage.x);
	sy=JSON.parse(localStorage.y);
	sw=JSON.parse(localStorage.w);
	previewHandler(1);}
}
function giveItemColor(){
	itemColor.style.visibility="visible";
}

function previewHandler(l) {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");
	// there's no 3D canvas yet; this is to make code futureproof

	fillBackgroundColor(canvas, context);

	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = sh = selectObj[index].value;

	if(l!=1){var l=0;sx=[];sy=[];sw=[];
		for (var i = 0; i < 20; i++) {
		var w = Math.floor(Math.random() * 40);sw.push(w);    
		var x = Math.floor(Math.random() * canvas.width);sx.push(x);
		var y = Math.floor(Math.random() * canvas.height);sy.push(y);
	}}
	drawShape(canvas,context,shape);
	drawText(canvas, context);
	drawBird(canvas, context);
}

// This is where we'll set the background color
function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var bgColor = bgc = selectObj.value;

	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);

}
// draw items at a random location
function drawShape(canvas, context, shape){
	if (shape == "squares") {
		for (var i = 0; i < 20; i++) {
			context.rect(sx[i], sy[i], sw[i], sw[i]);
			context.fillStyle = ic = itemColor.value;
			context.fill();}
	}
	else if (shape == "circles") {
		for (var i = 0; i < 20; i++) {context.beginPath();
			context.arc(sx[i], sy[i], sw[i], 0, degreesToRadians(360), true);
			context.fillStyle = ic = itemColor.value;
			context.fill();}
	}
	else{
		itemColor.style.visibility="hidden";
		sx=[];sy=[];sw=[];
	}
}


// draws all the text, including the tweet
function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	
	var fgColor = fgc = selectObj.value;

	context.fillStyle = fgColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);


	// draw the tweet!
	selectObj = document.getElementById("tweets");
	var tweet = tw = selectObj.value;
	context.save();
	context.translate(canvas.clientWidth / 2 ,canvas.clientHeight / 2);
	dr=draai.value;
	context.rotate(dr * Math.PI / 180);
	fs=fontSize.value;
	context.font = "italic "+fs+"em serif";
	context.textAlign = "center";
	context.fillText(tweet, 0,0);
	context.restore();

	// If you want to try splitIntoLines to 
	// handle longer tweets, uncomment this code
	// and replace the context.fillText line above
/*
	if (tweet.length > 60) {
		var tweetLines = splitIntoLines(tweet);
		for (var i = 0; i < tweetLines.length; i++) {
			context.fillText(tweetLines[i], 30, 70+(i*25));
		}
	}
	else {
		context.fillText(tweet, 30, 100);
	}
*/

	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!", 
		canvas.width-20, canvas.height-40);
}

// draws the twitter bird image
function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "images/twitterBird.png";
	// images don't always load immediatly, so we make sure the image is fully loaded before we draw it:
	twitterBird.onload = function() {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};

}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}


function updateTweets(tweets) {
	var tweetsSelection = document.getElementById("tweets");

	// add all tweets to the tweets menu
	for (var i = 0; i < tweets.length; i++) {
		var tweet = tweets[i];

		// create option
		var option = document.createElement("option");
		option.text = tweet.text;

		// strip any quotes out of the tweet so they don't mess up our option
		option.value = tweet.text.replace("\"", "'");

		// add option to select
		tweetsSelection.options.add(option);
    }
	// make sure the top tweet is selected
	tweetsSelection.selectedIndex = 0;
}


// Splits one long string into multiple lines of 
// no more than 60 characters each. Returns an
// array of the lines.
function splitIntoLines(str) {
	var strs = new Array();
	var space = str.indexOf(' ', 60);
	strs[0] = str.substring(0, space);
	strs[1] = str.substring(space+1);
	if (strs[1].length > 60) {
		space = strs[1].indexOf(' ', 60);
		strs[1] = strs[1].substring(space+1);
		strs[2] = strs[1].substring(0, space);
	}
	return strs;
}

// Easter Egg
function makeImage() {
	var canvas = document.getElementById("tshirtCanvas");
	canvas.onclick = function () {
		window.open(canvas.toDataURL('image/png'), '_blank');
	};
}