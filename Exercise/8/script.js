const numbers = [5, 12, 8, 130, 44, 3, 99];

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
  { id: 4, name: "Diana", active: false },
  { id: 5, name: "Edward", active: true },
];

const products = [
  { id: 101, name: "shoes", price: 50 },
  { id: 102, name: "bag", price: 30 },
  { id: 103, name: "hat", price: 20 },
  { id: 104, name: "shirt", price: 40 },
];

const cart = ["shoes", "bag", "hat", "shirt", "watch"];

console.log("1.", numbers.find(function(number) {
  return number > 10;
}));

console.log("2.", numbers.findIndex(function(number) {
  return number === 130;
}));

console.log("3.", users.find(function(user) {
  return user.id === 3;
}));

console.log("4.", users.findIndex(function(user) {
  return user.active === false;
}));

const product = products.find(function(product) {
  return product.id === 102;
});

console.log("5.", product.name, product.price);

console.log("6.", cart.findIndex(function(item) {
  return item === "hat";
}));

const user = users.find(function(user) {
  return user.id === 99;
});

if (user) {
  console.log("7.", user);
} else {
  console.log("User not found");
}