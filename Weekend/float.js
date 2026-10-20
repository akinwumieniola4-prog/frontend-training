const input = document.querySelector("#text-input")
const button = document.querySelector("#show-btn")
const Ending = document.querySelector("#output")

button.addEventListener("click",function(){
   Ending.textContent = input.value
})