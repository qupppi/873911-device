
var openMap = document.querySelector(".contacts img");
var map = document.querySelector(".map-container");
var closeMap = map.querySelector(".close-button-map");

openMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("map-container-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("map-container-show");
});

var openPopUp = document.querySelector(".write-us-button");
var popUp = document.querySelector(".write-us");
var closePopUp = popUp.querySelector(".close-button-popup");
var nameUser = popUp.querySelector("[name=name-user]");
var email = popUp.querySelector("[name=email]");
var contentLetter = popUp.querySelector("[name=content-letter]");
var submit = popUp.querySelector(".send-button");

openPopUp.addEventListener("click", function (evt) {
  evt.preventDefault();
  popUp.classList.add("write-us-show");
});

closePopUp.addEventListener("click", function (evt) {
  evt.preventDefault();
  popUp.classList.remove("write-us-show");
  popUp.classList.remove("empty-form");
});

submit.addEventListener("click", function (evt) {
  if (!nameUser.value || !email.value || !contentLetter.value) {
    evt.preventDefault();
    popUp.classList.add("empty-form");
  }
});




