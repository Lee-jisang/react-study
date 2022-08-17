var menuBtn = document.querySelector(".menu-btn");
var nav = document.querySelector("nav");
var lineOne = document.querySelector("nav .menu-btn .line--1");
var lineTwo = document.querySelector("nav .menu-btn .line--2");
var lineThree = document.querySelector("nav .menu-btn .line--3");
var link = document.querySelector("nav .nav-links");

var menuBg = document.querySelector(".menu-bg");

var x = document.querySelector(".line--3");

console.log(x);
console.log(menuBg.classList);
console.log(menuBg.className);

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  lineOne.classList.toggle("line-cross");
  lineTwo.classList.toggle("line-fade-out");
  lineThree.classList.toggle("line-cross");
  link.classList.toggle("fade-in");
  menuBg.className = "menu-bg2";
});