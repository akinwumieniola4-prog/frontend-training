const weight= document.querySelector(".Imperia")
const height = document.querySelector(".Height")
const calculate = document.querySelector(".Calculate")
const bminumber = document.querySelector(".measure-box h1")
const category = document.querySelector(".measure-box h2")
calculate.addEventListener("click",function(){
    let weightValue = parseFloat (weight.value)
     let heightValue = parseFloat (height.value)
     console.log(heightValue)
heightValue= heightValue/100
let bmi = weightValue /(heightValue*heightValue)
bminumber.textContent = bmi.toFixed(1)
// if(bmi < 18.5){
//     category.textContent="Under"
// }
// else if (bmi < 25){
//     category.textContent="Normal"
// }
// else if (bmi < 30){
//     category.textContent = "Over"
// }
// else{
//     category.textContent ="Obese"
// }

})
if (bmi < 18.5) {
    category  = "Underweight";
    advice    = "Consider speaking to a healthcare provider about healthy weight gain.";
    color     = "#4f8ef7";
    markerPos = "12%";
  } else if (bmi < 25) {
    category  = "Normal Weight ✅";
    advice    = "Great! You are within a healthy BMI range. Keep it up!";
    color     = "#3ecfa0";
    markerPos = "37%";
  } else if (bmi < 30) {
    category  = "Overweight";
    advice    = "Consider light exercise and a balanced diet. Small changes add up.";
    color     = "#f5a623";
    markerPos = "62%";
  } else {
    category  = "Obese";
    advice    = "Please consult a healthcare professional for personalised guidance.";
    color     = "#f26b6b";
    markerPos = "87%";
  }
  console.log(bmi)

//  let weightValue = weightValue
//      let heightValue = heightValue
// heightValue=heightvalue/100
// let bmi = weightValue /(heightValue*eightValue)
// bminumber.textContent = bmi.toFixed(1)
// if(bmi < 18.5){
//     category.textContent="better"
// }
// else if (bmi < 25){
//     category.textContent="good"
// }
// else if (bmi < 30){
//     category.textContent = "normal"
// }
// else{
//     category.textContent ="bad"
// }

 




// const container = document.querySelector('.bmi-container');
// const calculateBtn = document.querySelector('.Calculate');
// const bminumber = document.querySelector('.bminumber');
// const category = document.querySelector('.category');

// calculateBtn.addEventListener('click', () => {
//     // Select the inputs inside the container using dot class notation
//     let weightValue = parseFloat(container.querySelector('.weight').value)
//     let heightValue = parseFloat(container.querySelector('.height').value)

    
//     if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
//         category.textContent = "Please enter valid positive numbers.";
//         return;
//     }

    
//     heightValue = heightValue / 100;
//     let bmi = weightValue / (heightValue * heightValue);

//     bminumber.textContent = bmi.toFixed(1);

//     if (bmi < 18.5) {
//         category.textContent = "underweight";
//     } else if (bmi < 25) {
//         category.textContent = "normal";
//     } else if (bmi < 30) {
//         category.textContent = "overweight";
//     } else {
//         category.textContent = "obese";
//     }
// });

