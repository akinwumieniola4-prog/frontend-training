const input = document.querySelector(".text-input")
 const ShowBtn = document.querySelector(".show-btn")
  const button = document.querySelector(".uppercase")
 const lower = document.querySelector(".lowercase")
  const color = document.querySelector(".color")
 const small = document.querySelector(".smaller")
const heading = document.querySelector(".output")

ShowBtn.addEventListener("click",function(){
  heading.textContent = input.value
 })

button.addEventListener("click",function(){
  heading.textContent = heading.textContent.toUpperCase()
 })


lower.addEventListener("click",function(){
  heading.textContent = heading.textContent.toLowerCase()
 })

 color.addEventListener("click",function(){
     heading.style.color = "blue"
 })
 small.addEventListener("click",function(){
  heading.style.fontSize = "10px"
 })





















