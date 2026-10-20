const hoverCards = document.querySelectorAll(".hover-card");
const infoPanel = document.querySelector("#info-panel");
const infoText = document.querySelector("#info-text");
const hoverZone = document.querySelector("#hover-zone");
const enterCount = document.querySelector("#enter-count");
const leaveCount = document.querySelector("#leave-count");
let enters = 0;
let leaves = 0;
for (let i = 0; i < hoverCards.length; i++) {
    let card = hoverCards[i];
card.addEventListener("mouseover", function() {
        const title = card.querySelector(".hover-card-title");
        const titleText = title.textContent;
const information = card.dataset.info;
infoText.textContent = information;
 card.style.borderColor = card.dataset.color;
    });
    card.addEventListener("mouseout", function() {
        infoText.textContent =
            "Hover a card above to see information here."
        card.style.borderColor = "#2a2a45";
    });
}
hoverZone.addEventListener("mouseover", function() {
    enters++;
    enterCount.textContent = enters
    hoverZone.classList.add("active")
    hoverZone.textContent = "Mouse is inside!"

});
hoverZone.addEventListener("mouseout", function() {
    leaves++;
    leaveCount.textContent = leaves;
    hoverZone.classList.remove("active"); 
    hoverZone.textContent =
        "Move your mouse in and out of this zone";
});
hoverZone.addEventListener("mousemove", function() {
    console.log("Mouse is moving");
});
hoverZone.addEventListener("mouseover", function(e) {
    console.log(e.type);
    console.log(e.target);
});
for (let i = 0; i < hoverCards.length; i++) {
    hoverCards[i].addEventListener("mouseover", function() {
        hoverCards[i].style.transform = "scale(1.05)";
    });
    hoverCards[i].addEventListener("mouseout", function() {
        hoverCards[i].style.transform = "scale(1)"
    });
}