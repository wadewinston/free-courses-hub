// volta.js

const questions = [
  "What topic are you most interested in right now?",
  "What's your current skill level?",
  "Do you prefer short courses or full programs?",
  "Do you need subtitles in Portuguese?",
  "Do you prefer video, text, or interactive formats?",
];

const optionalQuestion = "What's your main goal? (e.g., get a job, build a portfolio, learn for fun)";

let currentQuestion = 0;
let answers = [];

function startVolta() {
  const container = document.getElementById("volta-questions");
  const resultBox = document.getElementById("volta-result");
  resultBox.innerHTML = "";
  answers = [];
  currentQuestion = 0;
  askQuestion(container);
}

function askQuestion(container) {
  container.innerHTML = `
    <p><strong>${questions[currentQuestion]}</strong></p>
    <input type="text" id="answerInput" style="width: 100%; padding: 8px; margin-top: 5px" />
    <button onclick="submitAnswer()" style="margin-top: 10px">Next</button>
  `;
}

function submitAnswer() {
  const input = document.getElementById("answerInput").value.trim();
  if (!input) return;
  answers.push(input);
  const container = document.getElementById("volta-questions");

  currentQuestion++;
  if (currentQuestion < questions.length) {
    askQuestion(container);
  } else {
    askOptional(container);
  }
}

function askOptional(container) {
  container.innerHTML = `
    <p><strong>${optionalQuestion}</strong></p>
    <input type="text" id="optionalInput" style="width: 100%; padding: 8px; margin-top: 5px" />
    <button onclick="submitFinalAnswer()" style="margin-top: 10px">Finish</button>
  `;
}

function submitFinalAnswer() {
  const optional = document.getElementById("optionalInput").value.trim();
  if (optional) {
    answers.push(optional);
  }

  const container = document.getElementById("volta-questions");
  container.innerHTML = "<p>✅ Thank you! Volta is reviewing your answers...</p>";

  const resultBox = document.getElementById("volta-result");
  setTimeout(() => {
    resultBox.innerHTML = `
      <h2>📘 Recommended Path:</h2>
      <p><strong>Topic:</strong> ${answers[0]}</p>
      <p><strong>Skill Level:</strong> ${answers[1]}</p>
      <p><strong>Course Length:</strong> ${answers[2]}</p>
      <p><strong>Subtitles in Portuguese:</strong> ${answers[3]}</p>
      <p><strong>Preferred Format:</strong> ${answers[4]}</p>
      ${answers[5] ? `<p><strong>Main Goal:</strong> ${answers[5]}</p>` : ""}
      <p>🔎 Based on this, Volta will soon suggest the best free courses. Stay tuned!</p>
    `;
  }, 1200);
}
