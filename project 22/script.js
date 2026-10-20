const textArea = document.querySelector("#text-area");
const clearBtn = document.querySelector("#clear-btn");
const upperBtn = document.querySelector("#upper-btn");
const lowerBtn = document.querySelector("#lower-btn");
const sampleBtn = document.querySelector("#sample-btn");
const commonWords = document.querySelector("#common-words");
const sWords = document.querySelector("#s-words");
const sChars = document.querySelector("#s-chars");
const sCharsNs = document.querySelector("#s-chars-ns");
const sSentences = document.querySelector("#s-sentences");
const sParagraphs = document.querySelector("#s-paragraphs");
const sRead = document.querySelector("#s-read");
const sSpeak = document.querySelector("#s-speak");
const sAvgWord = document.querySelector("#s-avg-word");

const STOP_WORDS = new Set([
    "the", "a", "an", "and", "or", "but", "in", "on", "at",
    "to", "for", "of", "with", "is", "it", "this", "that",
    "was", "are", "be", "as", "by", "from", "i", "you",
    "he", "she", "we", "they", "my", "your"
]);

const SAMPLE_TEXT = `JavaScript is a programming language that runs in the browser. It was created in 1995 and has become one of the most popular languages in the world.

JavaScript can change HTML content, validate forms, handle events, and communicate with servers. It works together with HTML and CSS to build interactive web pages.

Learning JavaScript takes practice. The more projects you build, the more comfortable you become. Start small, be consistent, and enjoy the process.`;

textArea.addEventListener("input", analyse)

function analyse() {

    let text = textArea.value;

    if (text.trim() === "") {
        resetStats();
        return
    }


    let words = text
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    let wordCount = words.length;

    console.log("Words:", words);
    console.log("Word count:", wordCount);


    
    let charCount = text.length;

    let charNoSpace = text.replace(/\s/g, "").length;

    console.log("Characters:", charCount);
    console.log("Characters without spaces:", charNoSpace);


    
    let sentences = text
        .split(/[.!?]+/)
        .filter(function (s) {
            return s.trim() !== "";
        });

    let sentenceCount = sentences.length;

    console.log("Sentences:", sentences);
    console.log("Sentence count:", sentenceCount);


    // PARAGRAPHS
    let paragraphs = text
        .split(/\n\s*\n/)
        .filter(function (p) {
            return p.trim() !== "";
        });

    let paraCount = paragraphs.length;

    console.log("Paragraphs:", paragraphs);
    console.log("Paragraph count:", paraCount);
    let readSeconds =
        Math.ceil((wordCount / 200) * 60);



    let speakSeconds =
        Math.ceil((wordCount / 130) * 60);



    let totalLetters = 0;

    for (let i = 0; i < words.length; i++) {

        let cleanWord = words[i].replace(
            /[^a-zA-Z]/g,
            ""
        );

        totalLetters += cleanWord.length;
    }

    let avgWordLen =
        wordCount > 0
            ? totalLetters / wordCount
            : 0;


    sWords.textContent = wordCount;
    sChars.textContent = charCount;
    sCharsNs.textContent = charNoSpace;
    sSentences.textContent = sentenceCount;
    sParagraphs.textContent = paraCount;

    sRead.textContent = formatTime(readSeconds);
    sSpeak.textContent = formatTime(speakSeconds);

    sAvgWord.textContent = avgWordLen.toFixed(1);


    let wordFreq = {};

    for (let i = 0; i < words.length; i++) {

        let word = words[i]
            .toLowerCase()
            .replace(/[^a-zA-Z]/g, "");

        if (word !== "" && !STOP_WORDS.has(word)) {

            if (wordFreq[word]) {
                wordFreq[word]++;
            } else {
                wordFreq[word] = 1;
            }
        }
    }


    let common = Object.keys(wordFreq)

    common.sort(function (a, b) {
        return wordFreq[b] - wordFreq[a];
    });

    common = common.slice(0, 5);


    commonWords.innerHTML = "";

    for (let i = 0; i < common.length; i++) {

        let word = common[i];

        let chip = document.createElement("div");
        chip.className = "word-chip";

        chip.innerHTML =
            '<span class="word-text">' + word +
            '</span><span class="word-count">' +
            wordFreq[word] + '</span>';

        commonWords.appendChild(chip);
    }
}


function formatTime(seconds) {

    if (seconds < 60) {
        return seconds + "s";
    }

    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;

    return minutes + "m " + secs + "s";
}


function resetStats() {

    sWords.textContent = "0";
    sChars.textContent = "0";
    sCharsNs.textContent = "0";
    sSentences.textContent = "0";
    sParagraphs.textContent = "0";
    sRead.textContent = "0s";
    sSpeak.textContent = "0s";
    sAvgWord.textContent = "0";

    commonWords.innerHTML =
        '<p class="empty-msg">Type something to see word frequency...</p>';
}



clearBtn.addEventListener("click", function () {

    textArea.value = "";

    resetStats();
});


upperBtn.addEventListener("click", function () {

    textArea.value = textArea.value.toUpperCase();

    analyse();
});


lowerBtn.addEventListener("click", function () {

    textArea.value = textArea.value.toLowerCase();

    analyse();
});


sampleBtn.addEventListener("click", function () {

    textArea.value = SAMPLE_TEXT;

    analyse();
});