// making a avariable and acceess the element / class/id

let redbtn = document.querySelector(".red");
let greenbtn = document.querySelector(".green");
let bluebtn = document.querySelector(".blue");
let pinkbtn = document.querySelector(".pink");
let blackbtn = document.querySelector(".black");
let head = document.querySelector(".title");

//making a functions
let redhandler = function () {
  document.body.style.background = "red";
};
let greenhandler = function () {
  document.body.style.background = "green";
};
let bluehandler = function () {
  document.body.style.background = "blue";
};
let pinkhandler = function () {
  document.body.style.background = "pink";
};
let blackhandler = function () {
  document.body.style.background = "black";
  head.style.color = "white";
};

//add eventlistener
redbtn.addEventListener("click", redhandler);
greenbtn.addEventListener("click", greenhandler);
bluebtn.addEventListener("click", bluehandler);
pinkbtn.addEventListener("click", pinkhandler);
blackbtn.addEventListener("click", blackhandler);
