//challaenge  using for loop print the value 1 to 10.

for (let number = 1; number < 11; number++) {
  console.log(number);
}

//uses for loop outut 0 to 20 only even number

for (evenNumber = 0; evenNumber < 21; evenNumber = evenNumber + 2) {
  console.log(evenNumber);
}

//print claculation of 5

for (let i = 1; i <= 10; i = i + 1) {
  console.log(`5 x ${i} = ${i * 5}`);
}

//sum the value

let sum = 0;

for (let num = 1; num <= 100; num++) {
  sum = sum + num;
}
console.log(`sum of 100 values are : ${sum}`);
