const nameInput  = document.querySelector("#name-input");
const addBtn     = document.querySelector("#add-btn");
const clearAll   = document.querySelector("#clear-all");
const namesList  = document.querySelector("#names-list");
const nameCount  = document.querySelector("#name-count");
const pickCount  = document.querySelector("#pick-count");
const pickBtn    = document.querySelector("#pick-btn");
const resetBtn   = document.querySelector("#reset-btn");
const winnerBox  = document.querySelector("#winner-box");
const winnerNames= document.querySelector("#winner-names");

let allNames = [];
let availablePool = [];

function addName() {
  const name = nameInput.value.trim();

  if (name !== "") {
    if (!allNames.includes(name)) {
      allNames.push(name);
      availablePool.push(name);

      nameInput.value = "";

      renderNames();
    }
  }
}

function renderNames() {
  namesList.textContent = "";
  nameCount.textContent = allNames.length;

  if (allNames.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Add names above to get started...";
    empty.classList.add("list-empty");
    namesList.appendChild(empty);
  }

  for (let i = 0; i < allNames.length; i++) {
    const chip = document.createElement("div");
    chip.classList.add("name-chip");

    chip.textContent = allNames[i];

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "×";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", function () {
      removeName(allNames[i]);
    });

    chip.appendChild(removeBtn);
    namesList.appendChild(chip);
  }
}

function removeName(name) {
  const allIndex = allNames.indexOf(name);

  if (allIndex !== -1) {
    allNames.splice(allIndex, 1);
  }

  const poolIndex = availablePool.indexOf(name);

  if (poolIndex !== -1) {
    availablePool.splice(poolIndex, 1);
  }

  renderNames();
}

function pickNames() {
  const number = Number(pickCount.value);

  if (availablePool.length === 0) {
    return;
  }

  if (number > availablePool.length) {
    return;
  }

  winnerNames.textContent = "";

  for (let i = 0; i < number; i++) {
    const randomIndex = Math.floor(Math.random() * availablePool.length);

    const pickedName = availablePool[randomIndex];

    const winner = document.createElement("div");
    winner.textContent = pickedName;
    winner.classList.add("winner-name");

    winnerNames.appendChild(winner);

    availablePool.splice(randomIndex, 1);
  }

  winnerBox.classList.remove("hidden");
}


function resetPicked() {
  availablePool = [...allNames];

  winnerNames.textContent = "";
  winnerBox.classList.add("hidden");

  renderNames();
}

addBtn.addEventListener("click", addName);

nameInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") addName();
});

clearAll.addEventListener("click", function() {
  allNames = [];
  availablePool = [];

  renderNames();
  winnerBox.classList.add("hidden");
});

pickBtn.addEventListener("click", pickNames);
resetBtn.addEventListener("click", resetPicked);