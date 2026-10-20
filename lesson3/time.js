const element = document.querySelector(".event-box");

element.addEventListener("click", function() {
    element.textContent = "You clicked!";
});
element.addEventListener("dblclick", function() {
    element.textContent = "You double-clicked!";
});
element.addEventListener("mouseenter", function() {
    element.textContent = "Mouse entered!";
});

element.addEventListener("mouseleave", function() {
    element.textContent = "Mouse left!";
});

box.addEventListener("mousedown", function() {
    element.textContent = "Mouse button is being held!";
});

box.addEventListener("mouseup", function() {
    element.textContent = "Mouse button released!";
});

element.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    element.textContent = "Right click detected!";
});

document.addEventListener("keydown", function(e) {
    element.textContent = "You pressed: " + e.key;
});

document.addEventListener("keyup", function(e) {
    element.textContent = "You released: " + e.key;
});

element.addEventListener("mousemove", function() {
    element.textContent = "Mouse is moving!";
});