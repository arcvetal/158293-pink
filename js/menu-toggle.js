var header = document.querySelector(".page-header");
var navMenu = document.querySelector(".page-header__wrapper");
var openClose = document.querySelector(".main-nav__toggle");

header.classList.remove("page-header--nojs");
navMenu.classList.remove("page-header__wrapper--nojs");

openClose.addEventListener("click", function() {
	if (navMenu.classList.contains("page-header__wrapper--closed")) {
		navMenu.classList.remove("page-header__wrapper--closed");
		navMenu.classList.add("page-header__wrapper--opened");
	} else {
		navMenu.classList.add("page-header__wrapper--closed");
		navMenu.classList.remove("page-header__wrapper--opened");
	}
});