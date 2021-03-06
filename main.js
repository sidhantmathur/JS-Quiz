document.getElementById("submitbtn").addEventListener("click", submitQuiz);

function submitQuiz() {
    //collect scores
    var ans1 = document.quiz.quest1.value;
    var ans2 = document.quiz.quest2.value;
    var ans3 = document.quiz.quest3.value;
    var ans4 = document.quiz.quest4.value;
    
    //set baseline score
    var score = 50;

    //set question values
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

    //set value results
    if (score < 50) {
        document.getElementById("message").textContent = "You scored " + score + " out of 100 & lean Republican";
    }

    else if (score > 50) {
        document.getElementById("message").textContent = "You scored " + score + " out of 100 & lean Democrat";
    }

    else if (score == 50) {
        document.getElementById("message").textContent = "You scored " + score + " out of 100 & are a moderate";
    }

    else if (score > 100) {
        document.getElementById("message").textContent = "You're... interesting";
    }
    
    else {
        document.getElementById("message").textContent = "Something went wrong with your score";
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