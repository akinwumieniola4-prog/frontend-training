const button = document.querySelector(".btn");
const panel = document.querySelector(".panel");
button.addEventListener("click", function () {
if (panel.classList.contains("hidden")) 
    {
panel.classList.remove("hidden")
        button.textContent = "Hide the Panel"
 }
  else  {
panel.classList.add("hidden")
 button.textContent = "Show the Panel"
    }

}
)