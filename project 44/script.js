const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let num1 = "";
let sign = "";

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (button.textContent === "AC") {
            display.textContent = "0";
            num1 = "";
            sign = "";
        }

        else if (button.textContent === "%") {
            display.textContent = Number(display.textContent) / 100;
        }

        else if (button.textContent === "÷/-") {
            display.textContent = Number(display.textContent) * -1;
        }

        else if (button.textContent === "+" || button.textContent === "×" || button.textContent === "-" || button.textContent === "÷") {
            num1 = display.textContent;
            sign = button.textContent;
            display.textContent = "";
        }

        else if (button.textContent === "=") {
            if (sign === "+") {
                display.textContent = Number(num1) + Number(display.textContent);
            }

            else if (sign === "×") {
                display.textContent = Number(num1) * Number(display.textContent);
            }

            else if (sign === "-") {
                display.textContent = Number(num1) - Number(display.textContent);
            }

            else if (sign === "÷") {
                display.textContent = Number(num1) / Number(display.textContent);
            }
        }

        else {
            display.textContent += button.textContent;
        }

    });
});