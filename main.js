document.getElementById("submitbtn").addEventListener("click", submitQuiz);

function submitQuiz() {
    var ans1 = document.quiz.quest1.value;
    var ans2 = document.quiz.quest2.value;
    var ans3 = document.quiz.quest3.value;
    var ans4 = document.quiz.quest4.value;
    
    var score = 50;

    if (ans1 === "A") {
        score++;
    } else if (ans1 === "B") {
        score--;
    }

    if (ans2 === "A") {
        score++;
    } else if (ans2 === "B") {
        score--;
    }

    if (ans3 === "A") {
        score++;
    } else if (ans3 === "B") {
        score--;
    }

    if (ans4 === "A" || ans4 === "C") {
        score++;
    } else if (ans4 === "B" || ans4 === "D"){
        score--;
    }


    if (score < 50) {
        document.getElementById("message").textContent = "You scored " + score + " out of 100 & lean Republican";
    }

    if (score > 50) {
        document.getElementById("message").textContent = "You scored " + score + " out of 100 & lean Democrat";
    }

    if (score > 100) {
        document.getElementById("message").textContent = "You're... interesting";
    }
    
};

//Accordian Function

var acc = document.getElementsByClassName("expand");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
