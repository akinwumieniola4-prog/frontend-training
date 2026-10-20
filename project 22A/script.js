const input = document.querySelector(".input");
const result = document.querySelector(".result");
const characters = document.querySelector(".characters")
const words = document.querySelector(".words");
const uppercase = document.querySelector(".uppercase")
const lowercase = document.querySelector(".lowercase")
const trim = document.querySelector(".trim")
const spilt = document.querySelector(".split")

uppercase.addEventListener("click", function() {
    result.textContent = input.value.toUpperCase()
})

lowercase.addEventListener("click", function() {
    result.textContent = input.value.toLowerCase()
})

trim.addEventListener("click", function() {
    result.textContent = input.value.trim()
})

spilt.addEventListener("click", function() {
    result.textContent = input.value.split(" ").join(" | ")
})

input.addEventListener("input", function() {
    characters.textContent = input.value.length
    words.textContent = input.value.trim().split(" ").length
})




