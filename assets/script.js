// Global Variables
var startQuizEl = document.querySelector("#start");
var timerEl = document.getElementById("time-left");
var mainSection = document.querySelector("main");

var currentScore = 0;


// Array of questions containing individual questions with answer choices
var questions = [
    // Question 1
    {   
      question: "Commonly used data types DO NOT include:",
      answers: ["strings", "booleans", "alerts", "numbers"],
      correct: "alerts"      
    },
    // Question 2
    {
      question: "The condition in an if / else statement is enclosed within ______.",
      answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
      correct: "parentheses"
    }
  ]

// console.log(questions[0]) //entire array
// console.log(questions[0].question) //just question
// console.log(questions[0].answers[0]) //first answer in string
// console.log(questions[0].correct)

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


// Tells the function which question to use from the questions array
var questionNumber = questions[0];

// Question Function
function showQuestion() {
    // Clear all elements in main
    mainSection.innerHTML = "";
    
    // Loop through the questions array
    //  for (var i = 0; i < questions.length; i++){
      currentQuestion = questionNumber;
      
      
      // Creates elements that will house question data
      var section = document.createElement("section");
      var h2Tag = document.createElement("h2");
      var buttonDiv = document.createElement("div")
      var button1 = document.createElement("button");
      var button2 = document.createElement("button");
      var button3 = document.createElement("button");
      var button4 = document.createElement("button");
      var answerFeedback = document.createElement("h4");

      // Adds questions data to each element
      h2Tag.textContent = currentQuestion.question;
      button1.textContent = currentQuestion.answers[0];
      button2.textContent = currentQuestion.answers[1];
      button3.textContent = currentQuestion.answers[2];
      button4.textContent = currentQuestion.answers[3];
      
      // Adds each element to the DOM
      document.body.appendChild(section);
      document.body.appendChild(h2Tag);
      document.body.appendChild(buttonDiv);
      document.body.appendChild(button1);
      document.body.appendChild(button2);
      document.body.appendChild(button3);
      document.body.appendChild(button4);

      // Adds an event listener to each button. Compares the text of the answer choice selected to the text of the correct answer. Provides feedback.
      button1.addEventListener("click", function(event){
        if ((event.target.textContent) == (questions[0].correct)){
          answerFeedback.textContent = ("Correct!");
          document.body.appendChild(answerFeedback);
        } else {
          answerFeedback.textContent = ("Incorrect");
          document.body.appendChild(answerFeedback);
        }
      })
      button2.addEventListener("click", function(){
        if ((event.target.textContent) == (questions[0].correct)){
          answerFeedback.textContent = ("Correct!");
          document.body.appendChild(answerFeedback);
        } else {
          answerFeedback.textContent = ("Incorrect");
          document.body.appendChild(answerFeedback);
        }
      })
      button3.addEventListener("click", function(){
        if ((event.target.textContent) == (questions[0].correct)){
          answerFeedback.textContent = ("Correct!");
          document.body.appendChild(answerFeedback);
        } else {
          answerFeedback.textContent = ("Incorrect");
          document.body.appendChild(answerFeedback);
        }
      })
      button4.addEventListener("click", function(){
        if ((event.target.textContent) == (questions[0].correct)){
          answerFeedback.textContent = ("Correct!");
          document.body.appendChild(answerFeedback);
        } else {
          answerFeedback.textContent = ("Incorrect");
          document.body.appendChild(answerFeedback);
        }
      })

     
     
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
})