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
    question: "João precisa alcançar uma janela que está a 4 metros de altura. Ele usa uma escada que está encostada na parede, formando um triângulo retângulo com o chão. A base da escada (a parte que toca o chão) está a 3 metros da parede seguindo uma linha reta pelo chão para a direita. Pergunta: Qual é o comprimento da escada que João está usando? ",
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
      { id: 1, text:"3/5", correct:false},
      { id: 2, text:"3/2", correct:false},
      { id: 3, text:"5", correct:false},
      { id: 4, text:"5/3", correct:true},
    ],
  },
  {
    question: "Uma bicicleta custa R$ 1.800,00 e está com 15% de desconto. Qual é o valor do desconto?",
    answers: [
      { id: 1, text:"R$ 180,00", correct:false},
      { id: 2, text:"R$ 225,00", correct:false},
      { id: 3, text:"R$ 240,00", correct:false},
      { id: 4, text:"R$ 270,00", correct:true},
    ],
  },
  {
    question: "Um laboratório precisa preparar 90 litros de uma solução química composta por três substâncias: A, B e C. A proporção entre as quantidades deve ser de: A : B : C = 2 : 3 : 5 Pergunta: Quantos litros de cada substância devem ser usados para manter essa proporção corretamente?",
    answers: [
      { id: 1, text:" A = 18 L | B = 27 L | C = 45 L", correct:true},
      { id: 2, text:"A = 15 L | B = 30 L | C = 45 L", correct:false},
      { id: 3, text:"A = 16 L | B = 24 L | C = 50 L", correct:false},
      { id: 4, text:"A = 20 L | B = 30 L | C = 40 L", correct:false},
    ],
  },
  {
    question: "Em uma loja, um casaco de inverno custa R$ 500,00. Durante uma promoção, ele recebeu dois descontos consecutivos: Primeiro, 20% de desconto no valor original. Depois, mais 10% de desconto sobre o valor com o primeiro desconto já aplicado. Qual foi o valor final pago pelo casaco?",
    answers: [
      { id: 1, text:"R$ 350,00", correct:true},
      { id: 2, text:"R$ 360,00", correct:false},
      { id: 3, text:"R$ 370,00", correct:false},
      { id: 4, text:"R$ 375,00", correct:false},
    ],
  },
  {
    question: "Em um triângulo retângulo, a hipotenusa mede 13 cm e um dos catetos mede 5 cm. Qual é o comprimento do outro cateto?",
    answers: [
      { id: 1, text:"13", correct:false},
      { id: 2, text:"10", correct:false},
      { id: 3, text:"12", correct:true},
      { id: 4, text:"8", correct:false},
    ],
  },
  {
    question: "Três amigos — Ana, Bruno e Carla — ganharam juntos um prêmio de R$ 1.200,00. Eles decidiram dividir o prêmio em proporção ao número de rifas que cada um vendeu: Ana vendeu 4 rifas Bruno vendeu 6 rifas Carla vendeu 10 rifas Pergunta: Quanto cada um vai receber?",
    answers: [
      { id: 1, text:"Ana: R$ 200,00 | Bruno: R$ 400,00 | Carla: R$ 600,00", correct:false},
      { id: 2, text:"Ana: R$ 300,00 | Bruno: R$ 400,00 | Carla: R$ 500,00", correct:false},
      { id: 3, text:"Ana: R$ 270,00 | Bruno: R$ 330,00 | Carla: R$ 600,00", correct:false},
      { id: 4, text:"Ana: R$ 240,00 | Bruno: R$ 360,00 | Carla: R$ 600,00", correct:true},
    ],
  },
  {
    question: "Uma escada de 13 metros está encostada em um muro vertical. A base da escada está a 5 metros de distância do muro, sobre o chão plano. Para garantir a segurança, o topo da escada precisa estar pelo menos 12 metros acima do chão. Pergunta: Com a escada posicionada dessa forma, ela é segura para uso, segundo essa regra?",
    answers: [
      { id: 1, text:" Não é possível saber, pois falta a inclinação", correct:false},
      { id: 2, text:"Sim, porque a altura exata é 12 metros", correct:true},
      { id: 3, text:"Sim, porque a altura da escada ultrapassa 12 metros", correct:false},
      { id: 4, text:"A escada forma um triângulo equilátero, então não se aplica o Teorema de Pitágoras", correct:false},
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
        if (button.dataset.id == correctAnswer.id) {
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
