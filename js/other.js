var delivery = document.querySelector(".button-delivery");
var deliverySub = document.querySelector(".sub-list");

var guarantee = document.querySelector(".button-guarantee");
var guaranteeSub = document.querySelector(".sub-menu-2");

var credit = document.querySelector(".button-credit");
var creditSub = document.querySelector(".sub-menu-3");

var current = document.querySelector(".current-delivery");
var currentLink = document.querySelector(".current-delivery-link");

var btnOne = document.querySelector("#btn-1");
var btnTwo = document.querySelector("#btn-2");

var sliderFirst = document.querySelector(".slide-1");
var sliderSecond = document.querySelector(".slide-2");


  delivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  creditSub.classList.remove("service-show");
  guaranteeSub.classList.remove("service-show");
  deliverySub.classList.add("service-show");
 });

  guarantee.addEventListener("click", function (evt) {
  evt.preventDefault();
  deliverySub.classList.remove("service-show");
  creditSub.classList.remove("service-show");
  current.classList.remove("current-delivery");
  currentLink.classList.remove("current-delivery-link");
  guaranteeSub.classList.add("service-show");
 });

  credit.addEventListener("click", function (evt) {
  evt.preventDefault();
  deliverySub.classList.remove("service-show");
  guaranteeSub.classList.remove("service-show");
  current.classList.remove("current-delivery");
  currentLink.classList.remove("current-delivery-link");
  creditSub.classList.add("service-show");
});

  btnTwo.addEventListener("click", function (evt) {
  sliderSecond.classList.add("slider-name-show");
  sliderFirst.classList.add("slider-name-off");
  sliderFirst.classList.remove("slider-name-show")
});

  btnOne.addEventListener("click", function (evt) {
  sliderSecond.classList.add("slider-name-off");
  sliderFirst.classList.add("slider-name-show");
  sliderSecond.classList.remove("slider-name-show");
});
