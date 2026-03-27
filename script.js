const questions = [
  { question: "You receive an email asking for your password. Is it phishing?", options: ["Yes", "No"], answer: "Yes" },
  { question: "A website URL starts with https://. Is it always safe?", options: ["Yes", "No"], answer: "No" },
  { question: "You won a lottery you never entered. Is it real?", options: ["Yes", "No"], answer: "No" },
  { question: "Checking sender email helps detect phishing?", options: ["Yes", "No"], answer: "Yes" },
  { question: "Clicking unknown links is safe if they look real?", options: ["Yes", "No"], answer: "No" },
  { question: "Phishing happens only through email?", options: ["Yes", "No"], answer: "No" },
  { question: "Spelling mistakes indicate phishing?", options: ["Yes", "No"], answer: "Yes" },
  { question: "Banks ask OTP via email?", options: ["Yes", "No"], answer: "No" },
  { question: "Hovering link shows real URL?", options: ["Yes", "No"], answer: "Yes" },
  { question: "Urgent messages are phishing signs?", options: ["Yes", "No"], answer: "Yes" }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => {
      checkAnswer(option);
    };

    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showCertificate();
  }
}
function showCertificate() {
  const name = localStorage.getItem("userName") || "User";
  const today = new Date().toLocaleDateString();

  document.querySelector(".quiz-container").innerHTML = `
    <div class="certificate">
      <h1>🏆 Certificate of Completion 🏆</h1>

      <h2>KAMAL'S WORLD</h2>
      <p>Cyber With Kamal</p>

      <p>This certifies that</p>

      <h2 class="cert-name">${name}</h2>
      <p>Date: ${today}</p>

      <p>has successfully completed the Phishing Awareness Training</p>

      <h3>Score: ${score} / ${questions.length}</h3>

      <p class="footer">Stay Safe | Stay Secure 🔐</p>
    </div>
  `;
}

loadQuestion();