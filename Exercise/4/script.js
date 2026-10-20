const names = ["alice", "bob", "charlie", "diana", "edward"];

const numbers = [1, 2, 3, 4, 5];

const products = [
  { name: "shoes", price: 50 },
  { name: "bag", price: 30 },
  { name: "hat", price: 20 },
  { name: "shirt", price: 40 },
];

const students = [
  { name: "Kofi", score: 80 },
  { name: "Ama", score: 65 },
  { name: "Kwame", score: 90 },
  { name: "Abena", score: 72 },
];

console.log("1.", names.map(function(name) {
  return name.toUpperCase();
}));

console.log("2.", numbers.map(function(number) {
  return number * 2;
}));

console.log("3.", products.map(function(product) {
  return product.name;
}));

console.log("4.", products.map(function(product) {
  return {
    ...product,
    discountedPrice: product.price * 0.9
  };
}));

console.log("5.", students.map(function(student) {
  return student.name + " scored " + student.score + " points";
}));