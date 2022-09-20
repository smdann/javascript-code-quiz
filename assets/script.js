var startQuizEl = document.querySelector("#start");
var timerEl = document.getElementById("time-left");
var h1Tags = document.querySelector(".h1-tag");
var pToButtons = document.querySelector("#para");

// Question Variables
var ques1 = "Commonly used data types DO NOT include:"


// Timer Function
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining";
        if(timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

// Question Function
function question() {
    h1Tags.replaceChildren("Commonly used data types DO NOT include:");
    pToButtons.replaceChildren("1. Strings");
    

}

// Click start button
    // Add event listener to Start Quiz button
startQuizEl.addEventListener("click", function(event) {
    console.log("start quiz")
    // If Start button is clicked, timer starts counting down
    if (event.target.getAttribute("id") === "start") {
        console.log("this worked");
        countdown();
        question();
        
    }  
})


    
        // and a question is presented


    // Question will display as question in heading
        // Multiple choice answers display as buttons

        // Each button will have the same event listener

        // The event attribute that is equal to the correct answer will cause a message that says "Correct" to display.

        // Answer question correctly
            // Presented a new question
        
        // Event attributes that do not equal the correct answer will cause a message that says "Incorrect" to display.
            // Time is subtracted from the clock
            // Presented a new question

    // When all questions are answered or the timer reaches 0
        // Game is over
        // Enter initials 
            // Submits score to score board
