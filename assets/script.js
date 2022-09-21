// Document selectors
var startQuizEl = document.querySelector("#start");
var timerEl = document.getElementById("time-left");
var currentScore = 0;
var mainSection = document.querySelector("main");




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

console.log(questions[0]) //entire array
console.log(questions[0].question) //just question
console.log(questions[0].answers[0]) //first answer in string

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
      console.log(currentQuestion)
      
      // Creates elements that will house question data
      var section = document.createElement("section");
      var h2Tag = document.createElement("h2");
      var ulTag = document.createElement("ul");
      var li1 = document.createElement("li");
      var li2 = document.createElement("li");
      var li3 = document.createElement("li");
      var li4 = document.createElement("li");

      // Adds questions data to each element
      h2Tag.textContent = currentQuestion.question;
      li1.textContent = currentQuestion.answers[0];
      li2.textContent = currentQuestion.answers[1];
      li3.textContent = currentQuestion.answers[2];
      li4.textContent = currentQuestion.answers[3];
      
      // Adds each element to the DOM
      document.body.appendChild(section);
      document.body.appendChild(h2Tag);
      document.body.appendChild(ulTag);
      document.body.appendChild(li1);
      document.body.appendChild(li2);
      document.body.appendChild(li3);
      document.body.appendChild(li4);
    }
  
//  }
   


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

