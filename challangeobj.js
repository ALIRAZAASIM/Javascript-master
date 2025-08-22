let car1 = {
  name: "civic",
  model: 2023,
  color: "red",
};
let car2 = {
  name: "supra",
  model: 2024,
  color: "blue",
};
let car3 = {
  name: "gwagon",
  model: 2025,
  color: "green",
};
console.log(car1.name, car1.model, car1.color);
console.log(car2.name, car2.model, car2.color);
console.log(car3.name, car3.model, car3.color);

function totalPrice(array) {
  let sum = 0; // ek variable banaya jisme hum total price store karenge
  for (let i = 0; i < array.length; i++) {
    // loop chalaya jo array ke har element par chalega
    sum = sum + array[i].price; // har item ka price sum mein add karte jaenge
  }
  return sum; // loop ke baad final total return kar denge
}

let items = [
  { name: "burger", price: 266 },
  { name: "shawarma", price: 400 },
  { name: "burger", price: 500 },
];

console.log(totalPrice(items)); // function call karke result print kar diya
