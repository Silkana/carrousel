'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var slider = [
	"images/1.jpg",
	"images/2.jpg",
	"images/3.jpg",
	"images/4.jpg",
	"images/5.jpg",
	"images/6.jpg"
];

var photoTitle = [
	"Ruelle Décadente 0",
	"Photographe Doué 1",
	"Triangles-rectangles et Rectangles 2",
	"Apparetements couteux 3",
	"HDR city 4",
	"Il est 5 Heures 5"
];



var i=1;
var bool = true;
var photo = document.querySelector("figure").children[0];
var pName = document.querySelector("figure").children[2]; 
var toggle = setInterval(slideAuto,2000);
var previousI = 0;
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function slideAuto(){
	
	
	photo.setAttribute("src", slider[i]);
	console.log(photo);     
	console.log(i);
	     
	pName.innerHTML = photoTitle[i];
    
    i++;
    if(i>=6){
    	i=0;
    }  
}


function toggleSlide() {
	var buttonStop = document.getElementById("slidertoggle");
	buttonStop.addEventListener("click", function(){
		
		if(bool == true){
	 		window.clearInterval(toggle);
	 		console.log("stop");
	 		bool = false;
	    }
	    else if(bool == false){
	    	toggle = setInterval(slideAuto,2000);
	    	console.log("demarre");
	    	bool = true;
	    }
	});
}

function onClickNext(){
	//get next image 
	i++
	if(i>=6){						
		i = 0;
	}
	var nextImageSrc = slider[i];
	photo.setAttribute("src", slider[i]);
	pName.innerHTML= photoTitle[i];
}

function onClickPrevious(){
	//get next image 

	i--;	
	if(i < 0){
		i = 5;
	}
	var nextImageSrc = slider[i];
	photo.setAttribute("src", slider[i]);
	pName.innerHTML = photoTitle[i];
}


function onClickRandom() {
	
	do {
		i = parseInt(slider.length * Math.random());
	} while (i == previousI);
		console.log("previoui", previousI);
		photo.setAttribute("src", slider[i]);
		previousI = i;
		console.log("i= ", i);
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/




 



toggleSlide();

/*NEXT   NEXT   NEXT   NEXT   NEXT   NEXT   NEXT   NEXT*/

//sélectionner le boutton "next"
var buttonNext = document.getElementById("slidernext");
//attacher l'évènement click au boutton "next"
buttonNext.addEventListener("click", onClickNext);

// la fonction déclanchée on 'click' sur le boutton "next"


/*PREVIOUS     PREVIOUS     PREVIOUS     PREVIOUS     PREVIOUS*/


var buttonPrevious = document.getElementById("sliderprevious");
buttonPrevious.addEventListener("click", onClickPrevious);


var buttonRandom = document.getElementById("sliderandom");
buttonRandom.addEventListener("click", onClickRandom);