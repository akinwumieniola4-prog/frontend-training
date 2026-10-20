const password = document.querySelector("#password");
const showPassword = document.querySelector("#showPassword");
const loginBtn = document.querySelector("#loginBtn");

showPassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    showPassword.textContent = "🙈";
  } else {
    password.type = "password";
    showPassword.textContent = "👁";
  }
});

loginBtn.addEventListener("click", function () {
  const email = document.querySelector("#email").value;

  if (email === "" || password.value === "") {
    alert("Please fill in all fields");
  } else {
    alert("Login successful!");
  }
});

