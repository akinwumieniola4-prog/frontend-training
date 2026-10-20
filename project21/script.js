const numInput = document.querySelector("#num-input");
const resultBox = document.querySelector("#result-box");
const resultIcon = document.querySelector("#result-icon");
const resultLabel = document.querySelector("#result-label");
const factTags = document.querySelector("#fact-tags");
const moduloViz = document.querySelector("#modulo-viz");
const vizText = document.querySelector("#viz-text");
const dotRow = document.querySelector("#dot-row")
const historyList = document.querySelector("#history-list")
const clearBtn = document.querySelector("#clear-btn");

let history = []

numInput.addEventListener("input", function () {

    let val = parseInt(numInput.value)

    if (isNaN(val)) {
        resultBox.classList.add("hidden")
        moduloViz.classList.add("hidden")
        numInput.classList.remove("even", "odd")
        return;
    }

    let isEven = val % 2 === 0;

    console.log("Number:", val);
    console.log("Is even:", isEven);

    numInput.classList.remove("even", "odd");
    numInput.classList.add(isEven ? "even" : "odd");

    resultBox.classList.remove("hidden", "even", "odd");
    resultBox.classList.add(isEven ? "even" : "odd");

    resultIcon.textContent = isEven ? "✌️" : "☝️";

    resultLabel.textContent =
        `${val} is ${isEven ? "EVEN" : "ODD"}`;

    let checks = [
        { divisor: 2, label: "2", color: "green" },
        { divisor: 3, label: "3", color: "blue" },
        { divisor: 5, label: "5", color: "amber" },
        { divisor: 7, label: "7", color: "purple" },
        { divisor: 10, label: "10", color: "red" }
    ];

    factTags.innerHTML = "";

    for (let i = 0; i < checks.length; i++) {

        if (val % checks[i].divisor === 0) {

            console.log(checks[i]);

            let tag = document.createElement("span");

            tag.className = `tag tag-${checks[i].color}`;

            tag.textContent =
                `Divisible by ${checks[i].divisor}`;

            factTags.appendChild(tag);
        }
    }

    if (val < 0) {

        let tag = document.createElement("span");

        tag.className = "tag tag-red";
        tag.textContent = "Negative";

        factTags.appendChild(tag);
    }

    if (isPrime(val)) {

        let tag = document.createElement("span");

        tag.className = "tag tag-purple";
        tag.textContent = "Prime! 🌟";

        factTags.appendChild(tag);
    }

    moduloViz.classList.remove("hidden");

    let absVal = Math.abs(val);
    let showMax = Math.min(absVal, 20);

    vizText.textContent =
        `${val} ÷ 2 = ${Math.floor(val / 2)} remainder ${val % 2}`;

    dotRow.innerHTML = "";

    for (let i = 0; i < showMax; i++) {

        let dot = document.createElement("div");

        dot.className = "dot";

        if (!isEven && i === showMax - 1) {
            dot.classList.add("remainder");
        }

        dotRow.appendChild(dot);
    }

    if (absVal > 20) {

        dotRow.innerHTML += `
            <span style="
                color:#5a5a7a;
                font-size:12px;
                align-self:center;
            ">
                ...and ${absVal - 20} more
            </span>
        `;
    }

    if (
        history.length === 0 ||
        history[history.length - 1].val !== val
    ) {

        history.push({
            val: val,
            isEven: isEven
        });

        renderHistory();
    }
});

function renderHistory() {

    let empty = historyList.querySelector(".history-empty");

    if (empty) {
        empty.remove();
    }

    historyList.innerHTML = "";

    for (let i = 0; i < history.length; i++) {

        console.log(history[i]);

        let chip = document.createElement("span");

        chip.className = `history-chip ${
            history[i].isEven ? "chip-even" : "chip-odd"
        }`;

        chip.textContent = history[i].val;

        historyList.appendChild(chip);
    }
}

clearBtn.addEventListener("click", function () {

    history = [];

    historyList.innerHTML =
        '<p class="history-empty">Numbers you check will appear here...</p>';
});

function isPrime(n) {

    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {

        if (n % i === 0) {
            return false;
        }
    }

    return true;
}