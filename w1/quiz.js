// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#score");
const dom_start = document.querySelector("#start");


// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
    element.style.display='none';
    
}

function show(element) {
  // TODO
   element.style.display='block';
}

function onStart() {
  // Render the current question
  // Display the quiz view,
   
    renderQuestion();
    hide(dom_start);
    show(dom_quiz);
}

function renderQuestion() {
  // Render the current question on the quiz view
    let question = questions[runningQuestionIndex];

        dom_question.textContent=question.title;
        dom_choiceA.textContent=question.choiceA;
        dom_choiceB.textContent=question.choiceB;
        dom_choiceC.textContent=question.choiceC;
        dom_choiceD.textContent=question.choiceD;
     

  
}


function renderScore() { 
  let scorePercent = Math.round((score / questions.length) * 100); 
  let emoji;
  if(scorePercent<=100){
    emoji="100.png"
  }
  if(scorePercent<=80){
        emoji="100.png"

  }
  if(scorePercent<=60){
        emoji="60.png"

  }
  if(scorePercent<=40){
        emoji="40.png"

  }
  if(scorePercent<=20){
        emoji="20.png"

  }
  hide(dom_quiz)
  show(dom_score); 
  dom_score.innerHTML = ` 
  <h2 style="color:red">Quiz Finished</h2> 
  <img src="./img/${emoji}" alt="emoji">
  <p>Your Score is ${score}</p> 
  <p>Your Score percentage is ${scorePercent}%</p> `; 
}

function checkAnswer(answer){
   if(answer===questions[runningQuestionIndex].correct){
      score++;
  }
  console.log(score)
  if(runningQuestionIndex < questions.length-1){
    runningQuestionIndex++;
    renderQuestion();
  }else{
    renderScore();
  }
}

// FUNCTIONS ---------------------------------------------------------
show(dom_start)
hide(dom_quiz)
dom_start.addEventListener("click",(e)=>{
   renderQuestion()
   hide(dom_start)   
   show(dom_quiz)
})