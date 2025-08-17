//if else conditions

let age = 50;
if (age > 40) {
  console.log("it is older");
} else {
  console.log("it is not older.");
}

//if else if

let marks = 75;
if (marks > 92) {
  console.log("its grade is A");
} else if (marks > 81) {
  console.log("its grade is B+");
} else if (marks > 74) {
  console.log("its grade is B");
} else if (marks > 67) {
  console.log("its grade is c+");
} else if (marks > 60) {
  console.log("its grade is c");
} else {
  console.log("no result");
}

// and && or !!

let cgpa = 2.7;
let internship = "yes";

if (cgpa > 2.5 && internship === "yes") {
  console.log("Eligible for the degree");
}

if (cgpa > 2.5 || internship === "yes") {
  console.log("At least one condition is true");
} else {
  console.log("Not eligible");
}
