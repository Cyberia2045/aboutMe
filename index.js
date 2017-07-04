var projectButton = document.getElementsByClassName("project-button")[0];

var contentContainer = document.getElementsByClassName("content-container")[0];

var projects = document.getElementsByClassName("project-container")[0];

var homeButton = document.getElementsByClassName("home-button")[0];

projectButton.addEventListener("click", projectLoader);

homeButton.addEventListener("click", home);

function projectLoader() {
	contentContainer.style.display = "none";
	projectButton.style.display = "none";
	projects.style.display = "flex";
	projects.style.animation = "welcome 6s ease-in";
	projects.style.animationFillMode = "forwards";
}

function home() {
	projects.style.display = "none";
	projectButton.style.display = "block";
	contentContainer.style.display = "flex";
	contentContainer.style.animation = "welcome 6s ease-in";
	contentContainer.style.animationFillMode = "forwards";
}










