let ele = document.querySelector("h1");
console.log(ele);

let ele2 = document.querySelector(".container");
console.log(ele2.innerHTML);

ele.innerText = "aliraza";
ele.textContent = "again change it";

let anc = document.querySelector("a");
anc.setAttribute("href", "https://www.google.com/");
