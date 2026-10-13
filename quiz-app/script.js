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
            { text: "Switzerland", correct: false },
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

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    quizQuestion.textContent = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach (answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-button");
        answerButtons.appendChild(button);

        // Add true/false from the objects:
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.replaceChildren();
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Check the buttons for right/wrong answers, and disable choosing other options:
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        } 
        button.disabled = true;
        button.style.color = "hsl(0, 0%, 30%)";
    });
    nextButton.style.display = "block";

}

startQuiz();

