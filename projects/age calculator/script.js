//varible
let inputdate = document.querySelector("input");
let btn = document.querySelector("button");
let resultpara = document.querySelector("p");

// logic
let ageoutput = () => {
  let userage = inputdate.value.split("-");
  let calage = 2025 - Number(userage[0]);
  resultpara.innerHTML = `your age is ${calage}`;
};
//eentlisner

btn.addEventListener("click", ageoutput);
