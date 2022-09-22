// Global Variables
var startQuizEl = document.querySelector("#start");
var timerEl = document.getElementById("time-left");
var mainSection = document.querySelector("main");
var questionContainer = document.querySelector(".questionContainer");
var questionDiv = document.querySelector("#question");
var buttonGrid = document.querySelector("#btngrid");
var startContainer = document.querySelector(".startContainer")
var timeLeft = 120;
var timeInterval;
var score = 0;
var finalScore;





// Array of objects (question, answer choices, and a correct answer)
var questions = [
    // Question 1
    {   
      question: "Commonly used data types DO NOT include:",
      answer1: "strings", 
      answer2: "booleans", 
      answer3: "alerts", 
      answer4: "numbers",
      correct: "alerts"      
    },
    // Question 2
    {
      question: "The condition in an if / else statement is enclosed within ______.",
      answer1: "quotes", 
      answer2:"curly brackets", 
      answer3:"parentheses", 
      answer4:"square brackets",
      correct: "parentheses"
    },
    // Question 3
    {
      question: "Commonly used data types DO NOT include:",
      answer1: "strings", 
      answer2: "booleans", 
      answer3: "alerts", 
      answer4: "numbers",
      correct: "alerts"  
    },
    // Question 4
    {
      question: "Commonly used data types DO NOT include:",
      answer1: "strings", 
      answer2: "booleans", 
      answer3: "alerts", 
      answer4: "numbers",
      correct: "alerts" 
    }
  ]

// console.log(questions[0]) //entire array
// console.log(questions[0].question) //just question
// console.log(questions[0].answers[0]) //first answer in string
// console.log(questions[0].correct)

// Timer Function
function countdown() {
    
    timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if(timeLeft === 0) {
            clearInterval(timeInterval);
            // Finished
            timerEl.textContent = "Time's Up!";
        }
    }, 1000);
}


// Tells the function which question to use from the questions array
var questionNumber = 0;

// Question Function
function showQuestion() {
    if (questionNumber === questions.length){
      endQuiz()
    }
    // Clear all elements in main
    startContainer.classList.add("hide")
    
      
      // Creates elements that will house question data
      var h2Tag = document.createElement("h2");
      var button1 = document.createElement("button");
      var button2 = document.createElement("button");
      var button3 = document.createElement("button");
      var button4 = document.createElement("button");
      var answerFeedback = document.createElement("h4");

      // Adds questions data to each element
      h2Tag.textContent = questions[questionNumber].question;
      button1.textContent = questions[questionNumber].answer1;
      button2.textContent = questions[questionNumber].answer2;
      button3.textContent = questions[questionNumber].answer3;
      button4.textContent = questions[questionNumber].answer4;
      
      button1.setAttribute("value", questions[questionNumber].answer1)
      button2.setAttribute("value", questions[questionNumber].answer2)
      button3.setAttribute("value", questions[questionNumber].answer3)
      button4.setAttribute("value", questions[questionNumber].answer4)
      // Adds each element to the DOM
      
      questionDiv.appendChild(h2Tag);
      buttonGrid.append(button1, button2, button3, button4);
      

      // Adds an event listener to each button. 
      // Compares the text of the answer choice selected to the text of the correct answer. 
      // Provides feedback.
      // Time deduction for incorrect answers
      // button1.addEventListener("click", function(event){
      //   if ((event.target.textContent) == (questions[0].correct)){
      //     answerFeedback.textContent = ("Correct!");
      //     document.body.appendChild(answerFeedback);
      //   } else {
      //     answerFeedback.textContent = ("Incorrect");
      //     document.body.appendChild(answerFeedback);
      //     timerEl.textContent = timerEl.textContent - 10;
      //     console.log(timerEl.textContent)
      //   }
      // })
      // button2.addEventListener("click", function(event){
      //   if ((event.target.textContent) == (questions[0].correct)){
      //     answerFeedback.textContent = ("Correct!");
      //     document.body.appendChild(answerFeedback);
      //   } else {
      //     answerFeedback.textContent = ("Incorrect");
      //     document.body.appendChild(answerFeedback);
      //   }
      // })
      // button3.addEventListener("click", function(event){
      //   if ((event.target.textContent) == (questions[0].correct)){
      //     answerFeedback.textContent = ("Correct!");
      //     document.body.appendChild(answerFeedback);
      //   } else {
      //     answerFeedback.textContent = ("Incorrect");
      //     document.body.appendChild(answerFeedback);
      //   }
      // })
      // button4.addEventListener("click", function(event){
      //   if ((event.target.textContent) == (questions[0].correct)){
      //     answerFeedback.textContent = ("Correct!");
      //     document.body.appendChild(answerFeedback);
      //   } else {
      //     answerFeedback.textContent = ("Incorrect");
      //     document.body.appendChild(answerFeedback);
      //   }
      // } 
      //  )
} 
  
// Answer question correctly
  // Present a new question

// Answer question incorrectly
  // Time deduction and present new question

// When all questions are answered or the timer reaches 0
  // Quiz is over
  // Enter initials 
  // Submit score to score board

// Highscores will be stored in local storage (initials and score)

// Highscores will be retrieved from local storage and displayed on the screen
   
function checkAnswer (userChoice){
  if (userChoice === questions[questionNumber].correct){
    buttonGrid.innerHTML = ""
    questionNumber ++;
    score ++;
    console.log(score)
    showQuestion()
  } else {
    buttonGrid.innerHTML = ""
    questionNumber ++;
    timeLeft = timeLeft - 10;
    console.log(timeLeft)
    showQuestion()
  }
}

function endQuiz (){

}

// Click start button
    // Add event listener to Start Quiz button
startQuizEl.addEventListener("click", function(event) {
    console.log("start quiz")
    // If Start button is clicked, timer starts counting down
        countdown();
        // and a question is presented
        showQuestion();
        
        


})

buttonGrid.addEventListener("click", () => {
  var buttonClick = this.event.target.value
  console.log(buttonClick)
  checkAnswer(buttonClick)
})


// highScoreArr=JSON.parse(localStorage.getItem("highScores")) || []

// highScoreArr=JSON.parse(localStorage.getItem("highScores")) || []
