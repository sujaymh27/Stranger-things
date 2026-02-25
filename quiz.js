document.addEventListener("DOMContentLoaded", function () {

const quiz = [
  {
    question: "Who is Eleven’s best friend?",
    options: ["Mike", "Lucas", "Dustin", "Will"],
    answer: 0
  },
  {
    question: "Who is the police chief of Hawkins?",
    options: ["Steve", "Hopper", "Billy", "Jonathan"],
    answer: 1
  },
  {
    question: "What is the alternate dimension called?",
    options: ["Dark World", "Upside Down", "Shadow Land", "Other Side"],
    answer: 1
  },
  {
    question: "Who leads the Hellfire Club?",
    options: ["Steve", "Eddie", "Mike", "Dustin"],
    answer: 1
  },
  {
    question: "What is Eleven’s real name?",
    options: ["Jane", "Nancy", "Joyce", "Holly"],
    answer: 0
  },
  {
    question: "Who is Mike’s sister?",
    options: ["Nancy", "Max", "Robin", "Erica"],
    answer: 0
  },
  {
    question: "Who works at Scoops Ahoy?",
    options: ["Robin", "Joyce", "Karen", "Holly"],
    answer: 0
  },
  {
    question: "Who is Will Byers' mother?",
    options: ["Karen", "Joyce", "Nancy", "Max"],
    answer: 1
  },
  {
    question: "Who is Max’s stepbrother?",
    options: ["Billy", "Steve", "Lucas", "Jonathan"],
    answer: 0
  },
  {
    question: "What game do the boys love?",
    options: ["Chess", "UNO", "Dungeons & Dragons", "Monopoly"],
    answer: 2
  },
  {
    question: "Who becomes close friends with Dustin?",
    options: ["Eddie", "Billy", "Jason", "Tommy"],
    answer: 0
  },
  {
    question: "What powers does Eleven have?",
    options: ["Flying", "Telekinesis", "Invisibility", "Speed"],
    answer: 1
  },
  {
    question: "Who is Vecna originally?",
    options: ["001", "008", "011", "Hopper"],
    answer: 0
  },
  {
    question: "Where is Hopper trapped in Season 4?",
    options: ["USA", "Russia", "Canada", "Mexico"],
    answer: 1
  },
  {
    question: "What food does Eleven love?",
    options: ["Pizza", "Waffles", "Burger", "Fries"],
    answer: 1
  },
  {
    question: "Who is Nancy’s boyfriend in Season 1?",
    options: ["Steve", "Jonathan", "Billy", "Mike"],
    answer: 0
  },
  {
    question: "Who is Lucas’s younger sister?",
    options: ["Erica", "Nancy", "Robin", "Joyce"],
    answer: 0
  },
  {
    question: "Who is the leader of the group of kids?",
    options: ["Mike", "Steve", "Hopper", "Billy"],
    answer: 0
  },
  {
    question: "What monster appears in Season 1?",
    options: ["Demogorgon", "Mind Flayer", "Vecna", "Ghost"],
    answer: 0
  },
  {
    question: "Who sacrifices himself in Season 4?",
    options: ["Eddie", "Steve", "Mike", "Dustin"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const startBtn = document.getElementById("quizbtn");
const quizContainer = document.getElementById("quizContainer");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
});

function loadQuestion() {
  const q = quiz[currentQuestion];

  document.getElementById("question").innerText =
    (currentQuestion + 1) + ". " + q.question;

  document.getElementById("opt0").innerText = q.options[0];
  document.getElementById("opt1").innerText = q.options[1];
  document.getElementById("opt2").innerText = q.options[2];
  document.getElementById("opt3").innerText = q.options[3];

  document.querySelectorAll('input[name="option"]')
    .forEach(r => r.checked = false);
}

nextBtn.addEventListener("click", function () {

  const selected = document.querySelector('input[name="option"]:checked');

  if (!selected) {
    alert("Please select an option!");
    return;
  }

  if (parseInt(selected.value) === quiz[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.style.display = "none";
  result.innerText = "Your Final Score: " + score + " / " + quiz.length;
}

});