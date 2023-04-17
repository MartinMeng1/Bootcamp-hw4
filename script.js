//Set up my question in an object.
var questions= [
    {
        question: "Who is the richest man in the world right now?",
        options : ["Elon Musk","Bernard Arnault","Jeff Bezos","Larry Ellison"],
        correctAnswer :"b" ,
    },
    {
        question: "Who won the 2018 MSI League of Legend game",
        options : ["FNC","FW","RNG","KZ"],
        correctAnswer:"c",
    },
    {
        question : "Who developed the idea that underpinned the basis of the first computer",
        options : ["Tim Berners-Lee","Ray Tomlinson","Jogh McCarthy","Alan Turing"],
        correctAnswer: "d",
    },
    {
        question : "Which country has the largest pollution in the world in 2023?",
        options : ["China","India","United States","Japen"],
        correctAnswer :"b" ,
    },
]
   


    var startButton = document.querySelector("#start-button");
    var answers = document.querySelector("#answers");


    //Get the lastsaved grade and initial
    var savedscores = localStorage.getItem("score");
    document.getElementById("saved-score").innerHTML = savedscores;
    var savedinitials = localStorage.getItem("Initial");
    document.getElementById("saved-initial").innerHTML = savedinitials;
   
    //A function that loads question to the page

    function loadquestion(numberOfQuestion)
    {
       var questionL = questions[numberOfQuestion].question;
       document.querySelector("#question-text").textContent = questionL;
       document.querySelector("#option1").textContent= questions[numberOfQuestion].options[0];
       document.querySelector("#option2").textContent= questions[numberOfQuestion].options[1];
       document.querySelector("#option3").textContent = questions[numberOfQuestion].options[2];
       document.querySelector("#option4").textContent = questions[numberOfQuestion].options[3];
    }

//Set to timer to 40s, and if the time reaches to zero, the quiz-block will be terminated and the score-block will appear.
    var secondsLeft = 40;
    function startTimer()
    {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            document.querySelector("#timer").textContent = secondsLeft + "seconds left until the quiz end";
         if(secondsLeft === 0) {
             clearInterval(timerInterval);
             document.querySelector("#quiz-block").setAttribute("class","hide");
             document.querySelector("#score-block").setAttribute("class",""); 
             document.querySelector("#score-count").children[1].value = score;
            


    }
        },1000);
    }

    

   var numberindex = 0;

// Show the quiz-block while hiding the start-block;Load to the page the first question and its options and starts the timer.
 startButton.addEventListener("click", function() {
    document.querySelector("#start-block").setAttribute("class","hide1");
    document.querySelector("#quiz-block").setAttribute("class","");
    loadquestion(numberindex);
    startTimer();
 })


 var score = 0;

 var textareaEl = document.querySelector("#textarea");

//Check to see if there is no questions left.
 function checkQuestionLeft()
 {
    if(numberindex == questions.length)
    {
        document.querySelector("#quiz-block").setAttribute("class","hide");
        document.querySelector("#score-block").setAttribute("class",""); 
        document.querySelector("#score-count").children[1].value = score;
       


        
    }
 }

 //Get the userInput through keydown and automatically go to the next question.
textareaEl.addEventListener("keydown",function(event)
{
    event.preventDefault();
    var userChoice = event.key.toLowerCase()
    if(userChoice === questions[numberindex].correctAnswer )
    {
        score++;
        numberindex++;
        checkQuestionLeft();
        loadquestion(numberindex);
    }
    else
    {   
        secondsLeft-3;
        startTimer()
        numberindex++;
        checkQuestionLeft();
        loadquestion(numberindex);
        
        

    }
}
)

var saveButton = document.querySelector("#save");

saveButton.addEventListener("click",function(){
    localStorage.setItem("score", score);
    localStorage.setItem("Initial",document.querySelector("#initialform").children[1].value);
}
)

















