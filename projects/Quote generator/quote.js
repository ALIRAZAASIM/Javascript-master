//variable
let para = document.querySelector("p");
let btn = document.querySelector("button");

//logic

let quote = [
  "Code is like humor. When you have to explain it, its bad.",
  "Talk is cheap. Show me the code.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "Code never lies, comments sometimes do.",
  "Programs must be written for people to read.",
  "Simplicity is the soul of efficiency.",
  "Before software can be reusable, it has to be usable.",
  "Clean code looks like it was written by someone who cares.",
  "The best error message is the one that never shows up.",
];

let quotegenerate = () => {
  let index = Math.floor(Math.random() * 10);
  para.innerHTML = quote[index];
};

//Eventlistener
btn.addEventListener("click", quotegenerate);
