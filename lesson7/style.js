const celsius = document.querySelector(".celsius");
const result = document.querySelector(".result");

celsius.addEventListener("input", function() {

    let temperature = Number(celsius.value);

    let fahrenheit = (temperature * 9 / 5) + 32;

    result.textContent = fahrenheit.toFixed(2) + " °F";
});