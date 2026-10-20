const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ages = [12, 18, 15, 21, 17, 25, 13, 30];

const products = [
  { name: "shoes", price: 50, inStock: true },
  { name: "bag", price: 30, inStock: false },
  { name: "hat", price: 20, inStock: true },
  { name: "shirt", price: 120, inStock: true },
  { name: "watch", price: 200, inStock: false },
];

const students = [
  { name: "Kofi", score: 80, passed: true },
  { name: "Ama", score: 45, passed: false },
  { name: "Kwame", score: 90, passed: true },
  { name: "Abena", score: 30, passed: false },
  { name: "Yaw", score: 72, passed: true },
];

console.log("1.", numbers.filter(function(number) {
  return number % 2 === 0;
}));

console.log("2.", ages.filter(function(age) {
  return age >= 18;
}));

console.log("3.", products.filter(function(product) {
  return product.inStock;
}));

console.log("4.", products.filter(function(product) {
  return product.inStock && product.price < 100;
}));

console.log("5.", students.filter(function(student) {
  return student.passed;
}).map(function(student) {
  return student.name;
}));