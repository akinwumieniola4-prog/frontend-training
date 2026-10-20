const numbers = [10, 20, 30, 40, 50];

const cart = [
  { name: "shoes", price: 50, quantity: 2 },
  { name: "bag", price: 30, quantity: 1 },
  { name: "hat", price: 20, quantity: 3 },
  { name: "shirt", price: 40, quantity: 2 },
];

const words = ["hello", "world", "i", "love", "javascript"];

const votes = ["yes", "no", "yes", "yes", "no", "yes", "no"];

const students = [
  { name: "Kofi", score: 80 },
  { name: "Ama", score: 65 },
  { name: "Kwame", score: 90 },
  { name: "Abena", score: 72 },
];

console.log("1.", numbers.reduce(function(total, number) {
  return total + number;
}, 0));

console.log("2.", cart.reduce(function(total, item) {
  return total + item.price * item.quantity;
}, 0));

console.log("3.", words.reduce(function(sentence, word) {
  return sentence + " " + word;
}, "").trim());

console.log