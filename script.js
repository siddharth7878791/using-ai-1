
/* DARK / LIGHT MODE */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});


/* RANDOM ENVIRONMENTAL TIP */

const tips = [
    "Carry a reusable water bottle.",
    "Switch off lights when leaving a room.",
    "Use both sides of paper.",
    "Walk or cycle for short distances.",
    "Turn off taps while brushing.",
    "Use reusable shopping bags.",
    "Separate wet and dry waste."
];

document.getElementById("newTip").addEventListener("click", function () {
    let randomTip = Math.floor(Math.random() * tips.length);

    document.getElementById("tipText").textContent = tips[randomTip];
});


/* ECO CALCULATOR */

document.getElementById("calculate").addEventListener("click", function () {

    let distance = Number(document.getElementById("distance").value);
    let result = document.getElementById("calcResult");

    if (distance < 0 || document.getElementById("distance").value === "") {
        result.textContent = "Enter a valid distance.";
        return;
    }

    let savings = distance * 0.2;

    result.textContent =
        "Estimated CO₂ avoided: " + savings.toFixed(1) + " kg/week";
});


/* DAILY GREEN CHALLENGE */

const challenges = [
    "Bring a reusable bottle today.",
    "Avoid single-use plastic today.",
    "Switch off unused appliances.",
    "Keep your campus clean.",
    "Use a reusable shopping bag.",
    "Save water whenever possible.",
    "Share an environmental fact."
];

document.getElementById("newChallenge").addEventListener("click", function () {

    let randomChallenge = Math.floor(Math.random() * challenges.length);

    document.getElementById("challengeText").textContent =
        challenges[randomChallenge];
});


/* ENVIRONMENTAL QUIZ */

const quiz = [
    {
        question: "Which energy source is renewable?",
        options: ["Coal", "Solar", "Diesel"],
        answer: "Solar"
    },
    {
        question: "Which waste is recyclable?",
        options: ["Paper", "Food leftovers", "Dirty tissues"],
        answer: "Paper"
    },
    {
        question: "What helps conserve water?",
        options: ["Open taps", "Fix leaking taps", "Waste water"],
        answer: "Fix leaking taps"
    },
    {
        question: "Which item is reusable?",
        options: ["Cloth bag", "Plastic wrapper", "Disposable cup"],
        answer: "Cloth bag"
    }
];

let questionIndex = 0;
let answered = false;

function showQuestion() {

    let current = quiz[questionIndex];

    document.getElementById("question").textContent =
        current.question;

    document.getElementById("quizResult").textContent = "";

    let options = document.getElementById("quizOptions");

    options.innerHTML = "";

    answered = false;

    current.options.forEach(function (option) {

        let button = document.createElement("button");

        button.className = "quiz-option";
        button.textContent = option;

        button.addEventListener("click", function () {

            if (answered) return;

            answered = true;

            if (option === current.answer) {
                document.getElementById("quizResult").textContent =
                    "Correct! Great eco knowledge 🌿";
            } else {
                document.getElementById("quizResult").textContent =
                    "Wrong! Answer: " + current.answer;
            }

            options.querySelectorAll("button").forEach(function (btn) {
                btn.disabled = true;
            });
        });

        options.appendChild(button);
    });
}

document.getElementById("nextQuestion").addEventListener("click", function () {

    questionIndex++;

    if (questionIndex >= quiz.length) {
        questionIndex = 0;
    }

    showQuestion();
});

showQuestion();


/* ANIMATED COUNTERS */

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            let counter = entry.target;
            let target = Number(counter.dataset.target);
            let current = 0;
            let increment = Math.ceil(target / 60);

            let timer = setInterval(function () {

                current += increment;

                if (current >= target) {
                    counter.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    counter.textContent = current.toLocaleString();
                }

            }, 25);

            observer.unobserve(counter);
        }

    });

});

counters.forEach(function (counter) {
    observer.observe(counter);
});
