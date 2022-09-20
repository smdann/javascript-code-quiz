// Document selectors
var startQuizEl = document.querySelector("#start");
var timerEl = document.getElementById("time-left");
var currentScore = 0;
var h1Tags = document.querySelector(".h1-tag");
var pToButtons = document.querySelector("#para");

// Question Variables
var h1Initial =  "JavaScript Coding Quiz"


var questions = [
    // Question 1
    {   
      question: "Commonly used data types DO NOT include:",
      answers: [
        "strings",
        "booleans",
        "alerts",
        "numbers"
      ]      
    },
    // Question 2
    {
      question: "The condition in an if / else statement is enclosed within ______.",
      answers: [
        "quotes",
        "curly brackets",
        "parentheses",
        "square brackets"
      ]
    }
  ]

// Timer Function
function countdown() {
    var timeLeft = 120;
    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining";
        if(timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

// Question Function
function showQuestion() {
    var currentQuestionObj = questions[i];
    var section = document.createElement("section");
    var h2Tag = document.createElement("h2");
    var ulTag = document.createElement("ul");
    console.log (document)
    

}



// Click start button
    // Add event listener to Start Quiz button
startQuizEl.addEventListener("click", function(event) {
    console.log("start quiz")
    // If Start button is clicked, timer starts counting down
    if (event.target.getAttribute("id") === "start") {
        countdown();
        // and a question is presented
        showQuestion(questions[0]);
        
    }  
})


    
        


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

    
    // Questions will be held as an array of objects (with questions and answers)
