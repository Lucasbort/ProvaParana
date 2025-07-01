const questions= [
  {
    question: "Ana foi ao shopping e viu uma loja com a seguinte promoção: 'Toda a loja com 25% de desconto!' Ela se interessou por três itens: Um tênis que custava R$ 280,00 Uma jaqueta que custava R$ 180,00 Uma mochila que custava R$ 120,00 Quanto ela economizou no total com a promoção?",
    answers: [
      { id: 1, text:"269", correct:false},
      { id: 2, text:"400", correct:false},
      { id: 3, text:"145", correct:true},
      { id: 4, text:"200", correct:false},
    ],
  },
  {
    question: "João precisa alcançar uma janela que está a 4 metros de altura. Ele usa uma escada que está encostada na parede, formando um triângulo retângulo com o chão. A base da escada (a parte que toca o chão) está a 3 metros da parede seguindo uma linha reta pelo chão para a direita. Pergunta: Qual é o comprimento da escada que João está usando? Dica para o aluno: Use o Teorema de Pitágoras, onde: a² + b² = c² a e b são os catetos (altura e base) c é a hipotenusa (a escada)",
    answers: [
      { id: 1, text:"7", correct:false},
      { id: 2, text:"5", correct:true},
      { id: 3, text:"3", correct:false},
      { id: 4, text:"8", correct:false},
    ],
  },
  {
    question: "Lucas tem 15 anos e seu irmão mais novo, Rafael, tem 9 anos. Pergunta: Qual é a razão entre a idade de Lucas e a de Rafael? Escreva a razão na forma de fração e na forma mais simples possível.",
    answers: [
      { id: 1, text:"3/5", correct:true},
      { id: 2, text:"3/2", correct:false},
      { id: 3, text:"5", correct:false},
      { id: 4, text:"5/3", correct:false},
    ],
  },
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    button.dataset.id = answer.id;

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  answers = questions[currentQuestionIndex].answers;
  const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
  nextButton.style.display = "none";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();