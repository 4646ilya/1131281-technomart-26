var link = document.querySelector(".button-red-3");

var popup = document.querySelector(".login-pop");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=surname]");
var email = popup.querySelector("[name=email]");
var textarea = popup.querySelector("[name=textarea]");

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
    } catch (err) {
    isStorageSupport = false;
  }


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
  		login.value = storage;
      email.focus();
  	} else {
  login.focus();
	}
  });

 close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

 form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !textarea.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
    } else {
    	if (isStorageSupport) {
    		localStorage.setItem("login", login.value);
    	}
    }
  });

 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
