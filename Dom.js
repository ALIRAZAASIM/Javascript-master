let ele = document.querySelector("h1");
console.log(ele);

let ele2 = document.querySelector(".container");
console.log(ele2.innerHTML);

ele.innerText = "aliraza";
ele.textContent = "again change it";

let ancher = document.querySelector("a");
ancher.setAttribute("href", "https://www.google.com/");

// for styling

ele.style.background = "blue";
ele.style.padding = "10px";

// remove class
// ele2.classList.remove("container");

// add class
ele.classList.add("container2");

let btn = document.querySelector("button");
let img = document.querySelector("img"); // should be "img" not "image"

function changeImgSize() {
  img.style.height = "200px";
  img.style.width = "200px";
}
btn.addEventListener("click", changeImgSize);
