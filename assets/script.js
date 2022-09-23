// Global Variables
var startQuizEl = document.querySelector("#start");
var timerEl = document.getElementById("time-left");
var startContainer = document.querySelector(".startContainer");
var questionContainer = document.querySelector(".questionContainer");
var questionDiv = document.querySelector("#question");
var buttonGrid = document.querySelector("#btngrid");
var initialsContainer = document.querySelector(".initialsContainer");
var scoreArea = document.querySelector("#score");
var scoreDisplay = document.querySelector("#finalScore");
var completeDiv = document.querySelector("#completeH1");
var scoreDiv = document.querySelector("#scoreHere");
var initialsP = document.querySelector("#enterInitials");
var initialsInput = document.querySelector("#initials");
var submitScore = document.querySelector("#submit");
var highscoreContainer = document.querySelector("highscoreContainer");
var scoresH1 = document.querySelector("#scoresH1");
var scoresList = document.querySelector("#scoresList");
var timeLeft = 60;
var timeInterval;
var currentScore = 0;
var finalScore;
var highScoreArr = [];

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
      question: "Arrays in JavaScript can be used to store ______.",
      answer1: "numbers and strings", 
      answer2: "other arrays", 
      answer3: "booleans", 
      answer4: "all of the above",
      correct: "all of the above"  
    },
    // Question 4
    {
      question: "String values must be enclosed within ______ when being assigned to variables",
      answer1: "commmas", 
      answer2: "curly brackets", 
      answer3: "quotes", 
      answer4: "parentheses",
      correct: "quotes" 
    },
    // Question 5
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      answer1: "JavaScript", 
      answer2: "Terminal/Bash", 
      answer3: "for loops", 
      answer4: "console.log",
      correct: "console.log" 
    }
    
  ]
   
// Timer Function
function countdown() {
    timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if(timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Time's Up!";
        }
    }, 1000);
}

// Tells the showQuestion function which question to use from the questions array
var questionNumber = 0;

// Question Function
function showQuestion() {
  
  // Initiates endQuiz function after the last question has been answered  
  if (questionNumber === questions.length){
      endQuiz();
  }
  // Hides the start container
  startContainer.classList.add("hide")
  
  // Creates elements that will house question data
  var h2Tag = document.createElement("h2");
  var button1 = document.createElement("button");
  var button2 = document.createElement("button");
  var button3 = document.createElement("button");
  var button4 = document.createElement("button");

  // Adds question and answer data to each element
  h2Tag.textContent = questions[questionNumber].question;
  button1.textContent = questions[questionNumber].answer1;
  button2.textContent = questions[questionNumber].answer2;
  button3.textContent = questions[questionNumber].answer3;
  button4.textContent = questions[questionNumber].answer4;
  
  button1.setAttribute("value", questions[questionNumber].answer1)
  button2.setAttribute("value", questions[questionNumber].answer2)
  button3.setAttribute("value", questions[questionNumber].answer3)
  button4.setAttribute("value", questions[questionNumber].answer4)
  
  // Adds created elements to appropriate div so they can be displayed to the user
  questionDiv.appendChild(h2Tag);
  buttonGrid.append(button1, button2, button3, button4);
} 
  
function checkAnswer (userChoice){
  // Answer question correctly
  if (userChoice === questions[questionNumber].correct){
    // Clears question and buttons
    questionDiv.innerHTML = "";
    buttonGrid.innerHTML = "";
    // Selects next question in the array
    questionNumber ++;
    // Adds a point to the score
    currentScore ++;
    console.log(currentScore);
    // Displays next question and buttons
    showQuestion();
    

  // Answer question incorrectly -- does same as above + time deduction  
  } else {
    questionDiv.innerHTML = ""
    buttonGrid.innerHTML = ""
    questionNumber ++;
    // Deducts 10 seconds from the timer
    timeLeft = timeLeft - 10;
    console.log(timeLeft)
    showQuestion();
  }
}

function endQuiz (){
  // Hides the question container
  questionContainer.classList.add("hide");
  // Shows the initials container
  initialsContainer.classList.replace("hide,", "show");
  // Final score
  finalScore = currentScore;
 
  // Creates and displays initials container content
  var h1Tag = document.createElement("h1");
  var h2Tag = document.createElement("h2");
  var pTag = document.createElement("p");
  h1Tag.textContent = ("Quiz Complete!");
  h2Tag.textContent = ("Your final score is " + finalScore + ".");
  pTag.textContent = ("Enter your initials and hit submit.");
  completeDiv.appendChild(h1Tag);
  scoreDiv.appendChild(h2Tag);
  initialsP.appendChild(pTag);

  // Creates and displays initials input
  var initialsIn = document.createElement("input");
  initialsIn.setAttribute("type", "text");
  initialsIn.setAttribute("id", "enterInitials");
  initialsIn.textContent = "";
  initialsInput.appendChild(initialsIn);
  
  // Creates and displays submit button
  var submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submit");
  submit.textContent = ("Submit")
  submitScore.appendChild(submit);
  
  // Final event listener: submit score/initials button
  submitScore.addEventListener("click", function() {
  // Grab initials
  var userInitials = initialsIn.value
  console.log(userInitials)
  
  // Object containing user's initials and score
  var userScore = {
    initials: userInitials,
    score: finalScore
  }

  // Set items to local storage
  localStorage.setItem("initials", userInitials);
  localStorage.setItem("score", finalScore);

  // Hide initials container
  initialsContainer.classList.add("hide");
 
  // Add Highscore container elements
  var scoreh1 = document.createElement("h1");
  var scoreUl = document.createElement("ul");
  var scoreItem = document.createElement("li");
  scoreh1.textContent = ("Highscores:");
  scoreUl.textContent = ("");
  scoreItem.textContent = ("");
  scoresH1.appendChild(scoreh1);
  scoresList.appendChild(scoreUl);

  // Get items from local storage
  highScoreArr=JSON.parse(localStorage.getItem("finalScore")) || []
  highScoreArr=JSON.parse(localStorage.getItem("userInitials")) || []

  // Display highscores
  if (highScoreArr !== null) {
    for (var i = 0; i < highScoreArr.length; i++) {
      var scoreLi = document.createElement("li");
      scoreLi.textContent = highScoreArr[i].userInitials + "" + highScoreArr[i].finalScore;
      scoreItem.appendChild(scoreLi);
      console.log(scoreItem)
    }
  }
})
}


// First event listener: start button to start quiz
startQuizEl.addEventListener("click", function(event) {
  // After click, timer starts
  countdown();
  // And a question is displayed
  showQuestion();
})

// Second event listener: answer choice buttons
buttonGrid.addEventListener("click", () => {
  // Adds the value attribute associated with the button that was clicked to the buttonClick variable
  var userChoice = this.event.target.value
  // Initiates function to check the value attribute against the correct answer
  
  checkAnswer(userChoice);
})