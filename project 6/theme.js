// =====================================================
// PROJECT 06 — DOUBLE CLICK vs SINGLE CLICK
// script.js
// =====================================================
//
// CONCEPT: Different event types on the same element
//
// WHAT THIS FILE TEACHES:
//   1. One element can have MANY event listeners
//   2. Each event type triggers independently
//   3. The event object (e) carries information
//   4. Common mouse events and when they fire
// =====================================================
 
 
// ── SELECT ELEMENTS ───────────────────────────────────
 
const clickBox      = document.querySelector("#click-box");
const clickResult   = document.querySelector("#click-result");
const eventLog      = document.querySelector("#event-log");
const clearLogBtn   = document.querySelector("#clear-log");
const singleBtn     = document.querySelector("#single-btn");
const holdBtn       = document.querySelector("#hold-btn");
 
let logCount = 0;
 
 
// ── LOG HELPER FUNCTION ───────────────────────────────
//
// Adds a line to the event log on screen.
// We reuse this for every event — shows why functions
// are useful. Write once, use many times.
 
function logEvent(message, colorClass) {
  // Remove the "empty" placeholder if it is there
  let emptyMsg = eventLog.querySelector(".log-empty");
  if (emptyMsg) emptyMsg.remove();
 
  logCount++;
 
  let entry       = document.createElement("p");
  entry.className = `log-entry log-${colorClass}`;
  entry.textContent = `[${logCount}] ${message}`;
 
  // Add to the log
  eventLog.appendChild(entry);
 
  // Auto-scroll to the bottom so latest is visible
  eventLog.scrollTop = eventLog.scrollHeight;
 
  // Make it available globally (called from HTML)
  console.log(message);
}
 
// Make logEvent available to HTML onclick attributes
window.logEvent = logEvent;
 
 
// ── ATTACH MULTIPLE EVENTS TO THE SAME ELEMENT ────────
//
// EXPLAIN: "We call addEventListener THREE times on the
// same element. Each call adds a NEW listener.
// They don't replace each other — they all live together."
 
 
// 1. Single click
clickBox.addEventListener("click", function() {
  clickResult.textContent   = "Single Click! 👆";
  clickResult.style.color   = "#4f8ef7";
  clickBox.style.borderColor = "#4f8ef7";
  logEvent("click fired on the box", "click");
});
 
 
// 2. Double click
// EXPLAIN: "dblclick fires after two quick clicks.
// Notice: the 'click' event fires too when you double click —
// once for each individual click. Watch the log!"
clickBox.addEventListener("dblclick", function() {
  clickResult.textContent   = "Double Click! 👆👆";
  clickResult.style.color   = "#f5a623";
  clickBox.style.borderColor = "#f5a623";
  logEvent("dblclick fired on the box", "dblclick");
});
 
 
// 3. Right click (contextmenu)
// EXPLAIN: "contextmenu fires when the right mouse button
// is clicked. e.preventDefault() stops the browser's
// default right-click menu from appearing."
clickBox.addEventListener("contextmenu", function(e) {
  e.preventDefault();   // stop the browser menu
  clickResult.textContent   = "Right Click! 🖱️";
  clickResult.style.color   = "#f26b6b";
  clickBox.style.borderColor = "#f26b6b";
  logEvent("contextmenu (right click) fired", "right");
});
 
 
// 4. Mouse over and out (hover)
clickBox.addEventListener("mouseover", function() {
  logEvent("mouseover — mouse entered the box", "hold");
});
 
clickBox.addEventListener("mouseout", function() {
  logEvent("mouseout — mouse left the box", "hold");
});
 
 
// ── SEPARATE BUTTON DEMOS ─────────────────────────────
 
singleBtn.addEventListener("click", function() {
  logEvent("click fired on Single Click button", "click");
});
 
 
// mousedown fires when you PRESS the button — before release
// mouseup fires when you RELEASE
// EXPLAIN: "click = mousedown + mouseup together.
// But sometimes you need to know about just pressing or releasing."
 
holdBtn.addEventListener("mousedown", function() {
  holdBtn.textContent = "Holding... 🔒";
  logEvent("mousedown — button is being held", "hold");
});
 
holdBtn.addEventListener("mouseup", function() {
  holdBtn.textContent = "Hold Me Down";
  logEvent("mouseup — button was released", "hold");
});

// document.addEventListener(`keydown`, function(e){
    // if(e===""){
        // logEvent("Space pressed!","click" )
// }

// })
document.addEventListener('keydown', () => {
    console.log(`Key pressed: ${event.key}`);
});
singleBtn.addEventListener("click", function () {

    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);

    singleBtn.style.backgroundColor = color;

    logEvent("click fired on Single Click button", "click");
});



let singleClickCount = 0;
let doubleClickCount = 0;
let rightClickCount = 0;
 
 
// ── CLEAR LOG ─────────────────────────────────────────
 
clearLogBtn.addEventListener("click", function() {
  eventLog.innerHTML = '<p class="log-empty">Events will appear here as they fire...</p>';
  logCount = 0;
});