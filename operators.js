//Arithmetic Operators (Math operations)

let a = 10,
  b = 3;
console.log(a + b); // Addition → 13
console.log(a - b); // Subtraction → 7
console.log(a * b); // Multiplication → 30
console.log(a / b); // Division → 3.333...
console.log(a % b); // Modulus (remainder) → 1
console.log(a ** b); // Exponentiation (power) → 1000

// 2. Assignment Operators (Assign values)

let x = 5;
x += 3; // x = x + 3 → 8
x -= 2; // x = x - 2 → 6
x *= 4; // x = x * 4 → 24
x /= 3; // x = x / 3 → 8
x %= 5; // x = x % 5 → 3
x **= 2; // x = x ** 2 → 9

// 3. Comparison Operators (Compare values → returns true/false)

console.log(5 == "5"); // true  (only value compared)
console.log(5 === "5"); // false (value + type compared)
console.log(5 != 3); // true
console.log(5 !== "5"); // true
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 2); // false

// 4. Logical Operators

console.log(true && false); // AND → false
console.log(true || false); // OR → true
console.log(!true); // NOT → false

//5. String Operators

let firstName = "Ali";
let lastName = " Raza";
console.log(firstName + lastName); // Concatenation → "Ali Raza"
console.log("Hello " + 5); // "Hello 5"

//6. Unary Operators

let y = 5;
console.log(++y); // Pre-increment → 6
console.log(y++); // Post-increment → 6 (then y becomes 7)
console.log(--y); // Pre-decrement → 6
console.log(y--); // Post-decrement → 6 (then y becomes 5)

//7. Ternary Operator (Short if-else)

let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

//8. Type Operators

console.log(typeof "Ali"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(Array.isArray([1, 2, 3])); // true
