const blanks = document.querySelectorAll('.blank-button');
const optionButtons = document.querySelectorAll('.option-button');
const feedback = document.getElementById('feedback');
const continueButton = document.querySelector("#cont-if-fin");

let selectedBlank = null;
let selectedOption = null;

// Add click event listeners to option buttons
optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (selectedBlank && !selectedBlank.getAttribute('data-answer')) {
            const answer = button.getAttribute('data-value');
            selectedBlank.setAttribute('data-answer', answer);
            selectedBlank.innerText = answer;
            selectedBlank.classList.remove('highlight');
            selectedBlank = null;
            checkAnswers();
        } else if (!selectedOption) {
            selectedOption = button;
            selectedOption.classList.add('highlight');
        }
    });
});

// Add click event listeners to blank buttons
blanks.forEach(blank => {
    blank.addEventListener('click', () => {
        if (!blank.getAttribute('data-answer')) {
            if (selectedOption) {
                const answer = selectedOption.getAttribute('data-value');
                blank.setAttribute('data-answer', answer);
                blank.innerText = answer;
                selectedOption.classList.remove('highlight');
                selectedOption = null;
                checkAnswers();
            } else if (!selectedBlank) {
                selectedBlank = blank;
                selectedBlank.classList.add('highlight');
            }
        }
    });
});

// Check if all answers are correct
function checkAnswers() {
    const answers = Array.from(blanks).map(blank => blank.getAttribute('data-answer'));
    if (answers.every(answer => answer !== null)) {
        const correctAnswers = [
            'break a leg',
            'cost an arm and a leg',
            'get the ball rolling',
            'get cold feet',
            'a piece of cake',
            'let the cat out of the bag',
            'bend over backwards',
            'pull her leg',
            'rain on her parade',
            'biting off more than she could chew'
        ];

        answers.forEach((answer, index) => {
            const blank = blanks[index];
            if (answer === correctAnswers[index]) {
                blank.style.backgroundColor = '#d9ffd9'; // Light green
            } else {
                blank.style.backgroundColor = '#ffb2b2'; // Light red
                setTimeout(() => {
                    // Reset the background color after 1000 milliseconds (1 second)
                    blank.style.backgroundColor = '';
                    blank.setAttribute('data-answer', ''); // Reset the answer
                    blank.innerText = '';
                }, 1000);
            }
        });

        if (answers.every((answer, index) => answer === correctAnswers[index])) {
            feedback.textContent = 'Congratulations! You matched all the blanks correctly!';
            enableContinueButton();
        } else {
            feedback.textContent = 'Sorry, some answers are incorrect. Please try again.';
            disableContinueButton();
        }
    }
}

// Enable continue button
function enableContinueButton() {
    continueButton.style.backgroundColor = "#007bff"; // Set the background color to blue
    continueButton.style.color = "#fff"; // Set the text color to white
    continueButton.style.pointerEvents = "auto"; // Enable clicking
}

// Disable continue button
function disableContinueButton() {
    continueButton.style.backgroundColor = "gray"; // Set the background color to gray
    continueButton.style.color = "#ccc"; // Set the text color to light gray
    continueButton.style.pointerEvents = "none"; // Disable clicking
}
