const balance = document.querySelector(".balance h1");

const depositInput = document.querySelector(".card:nth-child(1) input");
const withdrawInput = document.querySelector(".card:nth-child(2) input");

const depositBtn = document.querySelector(".card:nth-child(1) button");
const withdrawBtn = document.querySelector(".card:nth-child(2) button");

const transactions = document.querySelector(".transactions");

let money = 0;


depositBtn.addEventListener("click", function () {
  let amount = Number(depositInput.value);

  if (amount > 0) {
    money = money + amount;

    balance.textContent = "₦" + money.toFixed(2);

    let transaction = document.createElement("p");
    transaction.textContent = "Deposit: +₦" + amount.toFixed(2);

    transactions.appendChild(transaction);

    depositInput.value = "";
  }
});


withdrawBtn.addEventListener("click", function () {
  let amount = Number(withdrawInput.value);

  if (amount > 0) {

    if (amount <= money) {
      money = money - amount;

      balance.textContent = "₦" + money.toFixed(2);

      let transaction = document.createElement("p");
      transaction.textContent = "Withdraw: -₦" + amount.toFixed(2);

      transactions.appendChild(transaction);

      withdrawInput.value = "";
    } else {
      alert("Insufficient balance");
    }

  }
});