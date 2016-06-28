
var popupSuccess = document.querySelector(".page-form__popup-success");
var popupError = document.querySelector(".page-form__popup-error");
var form = document.querySelector(".page-form");
var tel = document.querySelector("[type=tel]");
var email = document.querySelector("[type=email]");
var errorClose = document.querySelector(".page-form__popup-btn--error");
var successClose = document.querySelector(".page-form__popup-btn--success");

form.addEventListener("submit", function(event) {
	if (!tel.value || !email.value) {
          event.preventDefault();
          popupError.classList.add("page-form__popup-block");
	} else {
		popupSuccess.classList.add("page-form__popup-block");
	}
});

errorClose.addEventListener("click", function(event) {
	event.preventDefault();
	popupError.classList.remove("page-form__popup-block");
});

successClose.addEventListener("click", function(event) {
	event.preventDefault();
	popupSuccess.classList.remove("page-form__popup-block");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popupError.classList.contains("page-form__popup-block")) {
			popupError.classList.remove("page-form__popup-block");
		}
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popupSuccess.classList.contains("page-form__popup-block")) {
			popupSuccess.classList.remove("page-form__popup-block");
		}
	}
});