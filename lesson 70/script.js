const birth = document.querySelector(".birth")
const calculate = document.querySelector(".calculate")
const result = document.querySelector(".result")


  function birth(){
    let mark = Number(score.value)
    if (mark >=90) {
 result.textContent="Excellent"
} 
else if (mark >=70) {

 result.textContent= "very Good"
}
 else if (mark >=60) {
 result.textContent="good"
} 
else if (mark >=45) {
 result.textContent="fair"
} 
else if (mark >=30) {
 result.textContent="bad"
} 
else {
 result.textContent="very bad"
}
  }
calculate.addEventListener("click",birth)
 