var projectButton = document.getElementsByClassName("project-button")[0];

var contentContainer = document.getElementsByClassName("content-container")[0];

var projects = document.getElementsByClassName("project-container")[0];

projectButton.addEventListener("click", projectLoader);

function projectLoader() {
	contentContainer.style.display = "none";
	projectButton.style.display = "none";
	projects.style.display = "flex";
	projects.style.animation = "welcome 6s ease-in";
	projects.style.animationFillMode = "forwards";
}