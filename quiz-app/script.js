const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ],
    },

    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari (Southern Africa)", correct: false },
            { text: "Gobi (Central Asia)", correct: false },
            { text: "Sahara (North Africa)", correct: false },
            { text: "The Antarctic Desert (Antarctica)", correct: true },
        ],
    },

    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican", correct: true },
            { text: "Sierra Leone", correct: false },
            { text: "New Zealand", correct: false },
            { text: "Switzerland", correct: false },
        ],
    },

    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Africa", correct: false },
            { text: "South America", correct: false },
            { text: "Australia", correct: true },
            { text: "Asia", correct: false },
        ],
    }

];

const quizQuestion = document.getElementById("quiz-question"); 
const answerButtons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() { 
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    showQuestion();
}

function showQuestion() { 
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    quizQuestion.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-button");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);

        answerButtons.appendChild(button);        
    });
}

function resetState() {
    nextButton.hidden = true;
    answerButtons.replaceChildren();
}

function selectAnswer(e) {
    const selectedBtn = e.target;

    if (selectedBtn.dataset.correct === "true")  score++;
    else selectedBtn.classList.add("incorrect");

    // Check the buttons for right/wrong answers, and disable choosing other options:
    answerButtons.querySelectorAll("button").forEach(button => {
        if(button.dataset.correct === "true") button.classList.add("correct");
        button.disabled = true;
    });
    nextButton.hidden = false;
}

function showScore() {
    resetState();
    quizQuestion.textContent = `You scored ${score} out of ${questions.length}!`;
    nextButton.textContent = "Play again";
    nextButton.hidden = false;
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) showQuestion();
    else showScore();
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) handleNextButton();
    else startQuiz();
});

startQuiz();

