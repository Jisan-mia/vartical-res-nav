const navToggle = document.querySelector(".nav-toggle");
const navLists = document.querySelector(".nav-lists");

navToggle.addEventListener("click", function () {
	navToggle.classList.toggle("toggle-rotate");
	navLists.classList.toggle("show-nav-lists");
});
