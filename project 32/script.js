const num = document.querySelector("#q-num")
const score = document.querySelector("#q-score")
const progbar = document.querySelector("#prog-bar")
const questiontext = document.querySelector("#question-text")
const optionsgrid = document.querySelector("#options-grid")
const startbtn = document.querySelector("#start-btn")
const nextbtn = document.querySelector("#next-btn")
const resultsscore = document.querySelector("#results-score")
const resultsmsg = document.querySelector("#results-msg")
const resultsbreakdown = document.querySelector("#results-breakdown")
const retrybtn = document.querySelector("#retry-btn")

const feedback = document.querySelector("#q-feedback")
const progressarea = document.querySelector("#progress-area")
const resultsscreen = document.querySelector("#results-screen")

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used to style a webpage?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    answer: "CSS"
  },
  {
    question: "Which language is used to make a webpage interactive?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    answer: "JavaScript"
  },
  {
    question: "Which symbol is used for an ID in CSS?",
    options: [
      ".",
      "#",
      "*",
      "@"
    ],
    answer: "#"
  },
  {
    question: "Which method selects an element in JavaScript?",
    options: [
      "querySelector()",
      "getElement()",
      "selectElement()",
      "findElement()"
    ],
    answer: "querySelector()"
  },
  {
    question: "Which HTML element is used to display an image ?",
    options: [
      "<image>",
      "<img>",
      "<picture>",
      "<src>"
    ],
    answer: "<img>"
  },
  {
    question: "which css property is used to change the text color?",
    options: [
      "font-color",
      "text-color",
      "color",
      "foreground-color"
    ],
    answer: "color"
  },
   {
    question: "What does Math.floor(4.9) return?",
    options: ["5", "4", "4.9", "0"],
    answer: "4"
  },
  {
    question: "Which event fires when a user clicks a button?",
    options: ["hover", "press", "click", "select"],
    answer: "click"
  },
  {
    question: "What is the correct way to write a comment in JavaScript?",
    options: ["<!-- comment -->", "# comment", "// comment", "** comment"],
    answer: "// comment"
  }
]

let currentIndex = 0
let userScore = 0
let userAnswers = []

startbtn.addEventListener("click", function () {
  currentIndex = 0
  userScore = 0
  userAnswers = []

  progressarea.classList.remove("hidden")
  startbtn.classList.add("hidden")
  resultsscreen.classList.add("hidden")

  showQuestion()
})

function showQuestion() {
  const currentQuestion = questions[currentIndex]

  num.textContent = "Question " + (currentIndex + 1) + " of " + questions.length
  score.textContent = "Score: " + userScore

  questiontext.textContent = currentQuestion.question

  optionsgrid.textContent = ""

  feedback.textContent = ""
  feedback.classList.remove("correct", "wrong")

  nextbtn.classList.add("hidden")

  progbar.style.width = ((currentIndex + 1) / questions.length) * 100 + "%"

  for (let i = 0; i < currentQuestion.options.length; i++) {
    const optionbtn = document.createElement("button")

    optionbtn.textContent = currentQuestion.options[i]
    optionbtn.classList.add("option-btn")

    optionbtn.addEventListener("click", function () {
      checkAnswer(optionbtn, currentQuestion.options[i])
    })

    optionsgrid.appendChild(optionbtn)
  }
}

function checkAnswer(button, selectedAnswer) {
  const currentQuestion = questions[currentIndex]
  const buttons = optionsgrid.querySelectorAll(".option-btn")

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true
  }

  userAnswers.push(selectedAnswer)

  if (selectedAnswer === currentQuestion.answer) {
    userScore++
    score.textContent = "Score: " + userScore

    button.classList.add("correct")
    feedback.textContent = "Correct! 🎉"
    feedback.classList.add("correct")
  } else {
    button.classList.add("wrong")
    feedback.textContent = "Wrong answer!"
    feedback.classList.add("wrong")

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].textContent === currentQuestion.answer) {
        buttons[i].classList.add("correct")
      }
    }
  }

  nextbtn.classList.remove("hidden")
}

nextbtn.addEventListener("click", function () {
  currentIndex++

  if (currentIndex < questions.length) {
    showQuestion()
  } else {
    showResults()
  }
})

function showResults() {
  progressarea.classList.add("hidden")
  questiontext.textContent = ""
  optionsgrid.textContent = ""
  feedback.textContent = ""
  nextbtn.classList.add("hidden")

  resultsscreen.classList.remove("hidden")

  const percentage = (userScore / questions.length) * 100

  resultsscore.textContent = userScore + " / " + questions.length

  if (percentage >= 80) {
    resultsmsg.textContent = "Excellent work! 🎉"
  } else if (percentage >= 50) {
    resultsmsg.textContent = "Good job! Keep practicing."
  } else {
    resultsmsg.textContent = "Keep learning and try again."
  }

  resultsbreakdown.textContent = ""

  for (let i = 0; i < questions.length; i++) {
    const item = document.createElement("div")
    item.classList.add("breakdown-item")

    if (userAnswers[i] === questions[i].answer) {
      item.classList.add("correct-ans")
    } else {
      item.classList.add("wrong-ans")
    }

    const icon = document.createElement("span")
    icon.classList.add("breakdown-icon")

    if (userAnswers[i] === questions[i].answer) {
      icon.textContent = "✓"
    } else {
      icon.textContent = "✗"
    }

    const text = document.createElement("span")
    text.classList.add("breakdown-text")

    text.textContent =
      "Q" + (i + 1) + ": " +
      questions[i].question +
      " — Your answer: " +
      userAnswers[i]

    item.appendChild(icon)
    item.appendChild(text)

    resultsbreakdown.appendChild(item)
  }
}

retrybtn.addEventListener("click", function () {
  currentIndex = 0
  userScore = 0
  userAnswers = []

  resultsscreen.classList.add("hidden")
  progressarea.classList.remove("hidden")

  showQuestion()
})