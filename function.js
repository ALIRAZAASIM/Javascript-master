// const { use } = require("react");

// function person() {
//   console.log("hello ali");
//   console.log("how are you boyz");
// }
// person();

function user(user1, user2) {
  console.log(user1 + user2);
}
user(5, 7);
user("ali", "raza");
user(3, 9);

function userAge(year, name) {
  let age = 2025 - year;
  console.log(`${name} age is ${age}`);
}
userAge(2002, "ali");

const expression = function (num1, num2) {
  let variable = num1 * 3;
  return variable + num2;
};

console.log(expression(2, 3)); // 9
