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

function startQuiz () { 
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    showQuestion();
}

function showQuestion () { 
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    quizQuestion.textContent = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach (answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-button");
        answerButtons.appendChild(button);
    });
}

startQuiz();

