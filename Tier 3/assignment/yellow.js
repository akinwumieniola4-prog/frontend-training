const unit = document.querySelector(".unit");
const result = document.querySelector(".result");
const choices = document.querySelectorAll(".choices p");

unit.addEventListener("click", function() {
    choices.forEach(function(choice) {
        choice.style.display = "block";
    });
});

choices.forEach(function(choice) {
    choice.addEventListener("click", function() {
        unit.textContent = choice.textContent;
        result.textContent = choice.textContent;
    });
});