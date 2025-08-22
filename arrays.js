//arrays []

let studentName = ["ali", "raza", "asim", "ashu"];
let age = [22, 23, , 24, 25];
let sem = [3, 5, 8, 4];

for (let i = 0; i < 4; i++) {
  console.log(
    `student name is ${studentName[i]} student age is ${age[i]} student semester is ${sem[i]}`
  );
}
studentName.push("hamza");
console.log(studentName);

//method of array

// push() → Add to the end

studentName.push("hamza");
console.log(studentName); // ["ali", "raza", "asim", "ashu", "hamza"]

// unshift() → Add to the beginning

studentName.unshift("ahmad");
console.log(studentName); // ["ahmad", "ali", "raza", "asim", "ashu", "hamza"]

// 🔹 Removing Elements

// pop() → Remove last element

studentName.pop();
console.log(studentName); // removes "hamza"

// shift() → Remove first element

studentName.shift();
console.log(studentName); // removes "ahmad"

// splice() → Remove or replace elements

studentName.splice(1, 1); // remove 1 element at index 1
console.log(studentName); // removes "ali"

// 🔹 Finding Elements

indexOf();

console.log(studentName.indexOf("asim")); // 1 (position)

includes();

console.log(studentName.includes("raza")); // true

// 🔹 Joining / Splitting

// join();

console.log(studentName.join(", ")); // "ali, raza, asim, ashu"

// split() (used on strings → array)

let str = "ali,raza,asim,ashu";
console.log(str.split(",")); // ["ali", "raza", "asim", "ashu"]

// 🔹 Sorting & Reversing

studentName.sort(); // alphabetically
console.log(studentName);

studentName.reverse();
console.log(studentName);

// 🔹 Slice (copy part of array)

let fewStudents = studentName.slice(0, 2);
console.log(fewStudents); // ["ali", "raza"]
