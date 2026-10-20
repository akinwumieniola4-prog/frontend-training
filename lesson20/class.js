let correctPassword = "open123";
let userGuess = "open123";
if (userGuess === "") {
    console.log("Please enter a password.");
} else if (userGuess === correctPassword) {
    console.log("Login successful!");
} else {
    console.log("Incorrect password.");
}


let number = 8;

if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}

let age = 16;

if (age >= 18) {
    console.log("Welcome! You can enter the cinema.");
} else {
    console.log("Sorry, you are too young.");
    console.log("You need " + (18 - age) + " more year(s).");
}
let a = 20;
let b = 15;
let c = 10;

if (a > b && a > c) {
    console.log(a + " is the biggest number.");
} else if (b > a & b > c) {
    console.log(b + " is the biggest number.");
} else if (c > a & c > b) {
    console.log(c + " is the biggest number.");
} else {
    console.log("Two or more numbers are the same.");
}

let trafficLight = "green";

if (trafficLight === "red") {
    console.log("Stop!");
} else if (trafficLight === "yellow") {
    console.log("Get Ready!");
} else if (trafficLight === "green") {
    console.log("Go!");
} else {
    console.log("Not a valid traffic light color.");
}

