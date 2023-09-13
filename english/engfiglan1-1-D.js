document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "1",
            correctAnswers: ["break a leg"],
        },
        {
            question: "2",
            correctAnswers: ["cost an arm and a leg"],
        },
        {
            question: "3",
            correctAnswers: ["a piece of cake"],
        },
        {
            question: "4",
            correctAnswers: ["let the cat out of the bag"],
        },
        {
            question: "5",
            correctAnswers: ["pulling their leg", "pulling their legs"],
        },
        {
            question: "6",
            correctAnswers: ["rained on his parade"],
        },
        {
            question: "7",
            correctAnswers: ["got cold feet"],
        },
        {
            question: "8",
            correctAnswers: ["bent over backwards"],
        },
        {
            question: "9",
            correctAnswers: ["bitten off more than she could chew"],
        },
        {
            question: "10",
            correctAnswers: ["start the ball rolling", "get the ball rolling"],
        },
    ];

    function checkAnswer(questionIndex, selectedWord) {
    const question = questions[questionIndex];
    const feedback = document.getElementById(`q${questionIndex + 1}-feedback`);
    const userAnswerInput = document.getElementById(`q${questionIndex + 1}-answer`);

    const userAnswer = userAnswerInput.value.trim().toLowerCase();

    if (question.correctAnswers.includes(userAnswer)) {
        feedback.textContent = "Correct!";
        feedback.classList.remove("incorrect-answer");
        feedback.classList.add("correct-answer");

        userAnswerInput.disabled = true;

        if (areAllAnswersCorrect()) {
            enableContinueButton(); // Enable "Continue" button when all answers are correct
        }
    } else {
        feedback.textContent = "Incorrect. Try again.";
        feedback.classList.add("incorrect-answer");
    }
}


    function areAllAnswersCorrect() {
        for (let i = 0; i < questions.length; i++) {
            const userAnswerInput = document.getElementById(`q${i + 1}-answer`);
            if (userAnswerInput && userAnswerInput.disabled === false) {
                return false; // There is an unanswered question
            }
        }
        return true; // All questions have been answered correctly
    }

    function enableContinueButton() {
        const continueButton = document.querySelector("#cont-if-fin");
        continueButton.style.backgroundColor = "blue"; // Change to blue
        continueButton.style.pointerEvents = "auto"; // Enable clicking
    }

    function disableContinueButton() {
        const continueButton = document.querySelector("#cont-if-fin");
        continueButton.style.backgroundColor = "gray";
        continueButton.style.pointerEvents = "none"; // Disable clicking
    }

    // Disable "Continue" button initially
    disableContinueButton();

    // Add event listeners for Enter key press on input fields
    for (let i = 0; i < questions.length; i++) {
        const userAnswerInput = document.getElementById(`q${i + 1}-answer`);
        if (userAnswerInput) {
            userAnswerInput.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    checkAnswer(i, userAnswerInput.value);
                }
            });
        }
    }
        // Add event listeners for "Check Answer" buttons
        const checkAnswerButtons = document.querySelectorAll(".continue2");
        checkAnswerButtons.forEach(function (button, index) {
            button.addEventListener("click", function () {
                checkAnswer(index, document.getElementById(`q${index + 1}-answer`).value);
            });
        });
});
