// Document selectors
var startQuizEl = document.querySelector("#start");
var timerEl = document.getElementById("time-left");
var currentScore = 0;
var mainSection = document.querySelector("main");
var questionArea = document.querySelector("h1-tag");
var answerArea = document.createElement("ul");



// Array of questions containing individual questions with answer choices
var questions = [
    // Question 1
    {   
      question: "Commonly used data types DO NOT include:",
      answers: ["strings", "booleans", "alerts", "numbers"],
      correct: 2      
    },
    // Question 2
    {
      question: "The condition in an if / else statement is enclosed within ______.",
      answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
      correct: 2
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

var questionIndex = 0;

// Question Function
function showQuestion() {
    // Clear all elements in main
    
    mainSection.innerHTML = "";
    
    
    
    // Loop through the questions array
     for (var i = 0; i < questions.length; i++){
      var currentQuestion = questions[i];
      var section = document.createElement("section");
      var h2Tag = document.createElement("h2");
      // var ulTag = document.createElement("ul");
      // var li1 = document.createElement("li");
      // var li2 = document.createElement("li");
      // var li3 = document.createElement("li");
      // var li4 = document.createElement("li");

      h2Tag.textContent = currentQuestion.question;
      
  

      document.body.appendChild(h2Tag);
      
  
      
    }
  
 }
   


// Click start button
    // Add event listener to Start Quiz button
startQuizEl.addEventListener("click", function(event) {
    console.log("start quiz")
    // If Start button is clicked, timer starts counting down
    if (event.target.getAttribute("id") === "start") {
        countdown();
        // and a question is presented
        showQuestion();
        
    }  
});

