function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(3, 5);

function sum(number1, number2) {
  let sum = number1 + number2;
  return sum;
}
console.log(sum(2, 5));

// even or odd number

function isEven(number) {
  if (number % 2 === 0) {
    return number + " is Even";
  } else {
    return number + " is Odd";
  }
}
console.log(isEven(10));

//reversed

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("helloo")); // "oolleh"

// factoorail

function factorial(number) {
  let n = 1;
  for (i = 1; i <= number; i++) n = n * i;
  return n;
}
console.log(factorial(9));

// temperature convert c to f

function tempCOnverter(celcius) {
  let feranhite = (celcius * 9) / 5 + 32;
  return feranhite;
}

let results = tempCOnverter(37);
console.log(results);

// vowel number count

function vowel(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

let result = vowel("ali raza");
console.log(result); // 4
