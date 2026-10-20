  const input = document.querySelector(".content")
const ShowBtn = document.querySelector(".show-btn")
const uppercase = document.querySelector(".uppercase")
const lowercase = document.querySelector(".lowercase")
const color = document.querySelector(".color")
const bigger = document.querySelector(".bigger")
const smaller = document.querySelector(".small")

const heading = document.querySelector(".Demo")

const counter = document.querySelector(".blue")
const clearBtn = document.querySelector(".meta")
const nameInput = document.querySelector(".hemo")
const timeInput = document.querySelector(".jack")
const greetBtn = document.querySelector(".green")



ShowBtn.addEventListener("click", function() {
    heading.textContent = input.value;
});


input.addEventListener("input", function() {
    heading.textContent = input.value;

    counter.textContent = input.value.length + " / 60 characters";
})

uppercase.addEventListener("click", function() {
    heading.textContent = heading.textContent.toUpperCase()
})

lowercase.addEventListener("click", function() {
    heading.textContent = heading.textContent.toLowerCase()
})

color.addEventListener("click", function() {
    let colors = ["red", "blue", "green", "orange", "purple", "yellow", "pink"]

    let random = Math.floor(Math.random() * colors.length)

    heading.style.color = colors[random]
});
const greeting = document.createElement("p")
greeting.className = "greeting";
document.querySelector(".greet-box").after(greeting)

bigger.addEventListener("click", function() {
    heading.style.fontSize = "10px"
});
smaller.addEventListener("click", function() {
    heading.style.fontSize = "50px"
});

clearBtn.addEventListener("click", function() {
    input.value = "";
    heading.textContent = "Your heading will appear here..."
    counter.textContent = "0 / 60 characters"
})

greetBtn.addEventListener("click", function() {

    let name = nameInput.value
    let time = timeInput.value

    if (time < 12) {
        greeting.textContent = name + " Good Morning"
    } 
    else if (time < 18) {
        greeting.textContent = name + " Good Afternoon"
    } 
    else {
        greeting.textContent = name + " Good Evening"
    }
})

nameInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        greetBtn.click()
    }
})