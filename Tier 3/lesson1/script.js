const birth = document.querySelector(".birth")
const calculate = document.querySelector(".calculate")
const result = document.querySelector(".result")

calculate.addEventListener("click", function () {
  let age = 2026 - birth.value
  result.textContent = "You are approximately " + age + " years old."
})