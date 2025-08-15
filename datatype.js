// there are two types of datatypes permitive and non permitive

// Primitive Data Types → Basic, non-divisible values (string, number, boolean, null, undefined, symbol, bigint).

// Non-Primitive Data Types → Objects, arrays, and functions (can store multiple values and are mutable).

//Primitive data type
let Primitive = "ali";
console.log(Primitive);

//non Primitive data type

//object
let object = {
  name: "asim",
  num: 5,
  isStudent: true,
};
console.log(object);

//Array

let array = ["ali", "raza", "asim", 5];
console.log(array);

//function

function greet(name) {
  return "hello, " + name + "!";
}
console.log(greet("ali"));
