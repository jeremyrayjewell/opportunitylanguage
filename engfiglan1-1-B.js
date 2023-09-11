document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "\"___ a leg!\" (said to actors before a performance to wish them good luck)",
            correctAnswer: "break",
        },
        {
            question: "\"This new car is going to ___ an arm and a leg.\" (said when something is very expensive)",
            correctAnswer: "cost",
        },
        {
            question: "\"I thought this math problem would be difficult, but it was a ___ of cake.\" (said when something is easy)",
            correctAnswer: "piece",
        },
        {
            question: "\"You weren't supposed to tell anyone about the surprise party! You ___ the cat out of the bag.\" (said when someone reveals a secret)",
            correctAnswer: "let",
        },
        {
            question: "\"Is he really that strong, or is he just ___ your leg?\" (said when someone is joking or not being serious)",
            correctAnswer: "pull",
        },
        {
            question: "\"I'm sorry, I didn't mean to ___ on your parade.\" (said when someone's plans are ruined or their mood is spoiled)",
            correctAnswer: "rain",
        },
        {
            question: "\"I was going to propose, but I got ___ feet at the last minute.\" (said when someone becomes nervous or hesitant about something)",
            correctAnswer: "get",
        },
        {
            question: "\"She really ___ over backwards to help me with the project.\" (said when someone goes above and beyond to do something)",
            correctAnswer: "bend",
        },
        {
            question: "\"I took on too many responsibilities at work and ___ off more than I could chew.\" (said when someone takes on more than they can handle)",
            correctAnswer: "chew",
        },
        {
            question: "\"We've been talking about starting this project for weeks, but we need someone to ___ the ball rolling.\" (said when someone needs to take the first step or get something started)",
            correctAnswer: "roll",
        },
    ];

    const wordBank = [
        "break", "piece", "let", "pull", "rain", "get", "bend", "chew", "roll",
    ];

    function shuffleArray(array) {
        // Shuffle the array using Fisher-Yates algorithm
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function populateOptions(questionIndex) {
        const question = questions[questionIndex];
        const optionsContainer = document.getElementById(`q${questionIndex + 1}-options`);
        shuffleArray(wordBank);

        for (const word of wordBank) {
            const button = document.createElement("button");
            button.textContent = word;
            button.classList.add("word-choice"); // Add a class to the button
            button.addEventListener("click", function () {
                checkAnswer(questionIndex, word);
            });
            optionsContainer.appendChild(button);
        }
    }

    function checkAnswer(questionIndex, selectedWord) {
        const question = questions[questionIndex];
        const feedback = document.getElementById(`q${questionIndex + 1}-feedback`);
        
        if (selectedWord === question.correctAnswer) {
            feedback.textContent = "Correct!";
        } else {
            feedback.textContent = "Incorrect. Try again.";
        }
    }

    // Populate options for each question
    for (let i = 0; i < questions.length; i++) {
        populateOptions(i);
    }

    // Populate word bank options
    const wordBankOptionsContainer = document.getElementById("word-bank-options");
    for (const word of wordBank) {
        const button = document.createElement("button");
        button.textContent = word;
        button.addEventListener("click", function () {
            checkAnswer(i, word);
        });
        wordBankOptionsContainer.appendChild(button);
    }
});