//conditions challenge

let age = prompt("enter yur age:");

if (age > 18) {
  console.log("it is valid to vote");
} else {
  console.log("Invalid");
}

let vowel = prompt("enter your characters here:");

if (
  vowel === "a" ||
  vowel === "e" ||
  vowel === "i" ||
  vowel === "o" ||
  vowel === "u"
) {
  console.log("its a vowel character");
} else {
  console.log("not a vowel character");
}

let grade = prompt("enter your grade boyz");

if (
  grade === "A" ||
  grade === "B+" ||
  grade === "B" ||
  grade === "C+" ||
  grade === "C"
) {
  console.log("good job");
} else {
  console.log("bed boy");
}
