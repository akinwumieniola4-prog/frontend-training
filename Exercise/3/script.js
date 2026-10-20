const fruits = ["mango", "banana", "orange"];
const veggies = ["carrot", "spinach", "tomato"];

const person1 = { name: "Ama", age: 22 };
const person2 = { country: "Ghana", job: "Designer" };

console.log([...fruits, ...veggies]);

console.log([...fruits, "pineapple"]);

console.log({ ...person1, ...person2 });

console.log({ ...person1, age: 30 });

function sumAll(...numbers) {
  console.log(numbers.reduce(function(sum, number) {
    return sum + number;
  }, 0));
}

sumAll(1, 2, 3, 4, 5);