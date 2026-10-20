const wordtext = document.querySelector(".word-text");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const message = document.querySelector(".message");
const heart = document.querySelector(".heart");

yes.addEventListener("click", function () {
    wordtext.textContent = "Awww, I knew it! 🥹❤️";

    message.textContent =
        "You just made my heart smile! I appreciate you so much, my love. 💖💋";

    heart.textContent = "💖";

    document.body.style.background =
        "linear-gradient(135deg, #70002e, #ff2876, #3b0018)";
});

no.addEventListener("click", function () {
    wordtext.textContent = "Are you sure? 🥺💕";

    message.textContent =
        "It's okay! Just know that you are special to me. ❤️";

    heart.textContent = "🥹";
});