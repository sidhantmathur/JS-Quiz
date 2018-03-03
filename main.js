document.getElementById("submitbtn").addEventListener("click", submitQuiz);

function submitQuiz() {
    var ans1 = document.quiz.quest1.value;
    var ans2 = document.quiz.quest2.value;
    var score = 0;

    if (ans1 == "D") {
        score++;
    }
    if (ans2 == "C") {
        score++;
    }

    if (score === 0) {
        document.getElementById("message").textContent = "You're not smart";
    }

    if (score === 1) {
        document.getElementById("message").textContent = "You're kinda smart";
    }

    if (score > 1) {
        document.getElementById("message").textContent = "You're smart";
    }
};