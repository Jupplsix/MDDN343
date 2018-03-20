var introductionPage = document.querySelector("#introduction-container");

var project1Button = document.querySelector("#project1Button");
var project2Button = document.querySelector("#project2Button");
// var project3Button = document.querySelector("#project3Button");

function resizelanding() {
	var displayWidth = window.innerWidth;
	if(displayWidth >= 670) {
		var displayHeight = window.innerHeight;
		displayHeight = displayHeight + "px";
		introductionPage.style.height = displayHeight;
	};
};

function resizeLandingOnLoad() {
	var displayHeight = window.innerHeight;
	displayHeight = displayHeight + "px";
	introductionPage.style.height = displayHeight;
}

function scrollToProject1 () {
	var project = document.querySelector("#project1");
	project.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest"
		});
};

function scrollToProject2 () {
 	var project = document.querySelector("#project2");
	project.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest"
		});
};

// function scrollToProject3 () {
// 	var project = document.querySelector("#project3");
// 	project.scrollIntoView({
// 			behavior: "smooth",
// 			block: "start",
// 			inline: "nearest"
// 		});
// };




window.addEventListener('resize', resizelanding);
window.addEventListener('load', resizeLandingOnLoad);

project1Button.addEventListener('click', scrollToProject1);
project2Button.addEventListener('click', scrollToProject2);
// project3Button.addEventListener('click', scrollToProject3);
