//create a start button
//create a timer 
//create a series of multiple choice questions
//when one questioned is answered another is presented 
//when question is answered incorectly, time is subtracted from clock 
//When all questions are answered or the timer reaches 0 the game is over
//When the game is over then I can save my intial score 
var questionsArr = [{
    prompt: "What is JavaScript",
    options: [{
        value: "",
        correct: true
    }, {
        value: "The same as Java",
        correct: false
    }, {
        value: "",
        correct: false
    }, {
        value: "Arthur",
        correct: false
    }
    ]
}, {
    prompt: "What's my last name",
    options: [{
        value: "Ja234ck",
        correct: false
    }, {
        value: "Al324ex",
        correct: false
    }, {
        value: "Killeen",
        correct: true
    }, {
        value: "Arth234ur",
        correct: false
    }
    ]
}
]
var currentIndex;

function startQuiz(){
    //start your timer
    startButton.addEventListener("click", function() {
        chosenWord = (words[Math.floor(Math.random() * words.length)]).split("");
        numBlanks = chosenWord.map(char => "_");

        wordBlank.textContent = numBlanks.join(" ");

        timer = setInterval(function() {
            timerCount--;
            timerElement.textContent = timerCount;
    
        }, 1000)
    });
    //adjust any elements (show or hide)

    currentIndex = 0
    showQuestion()
}

function showQuestion(){
    var currentQuestion = questionsArr[currentIndex].prompt
    console.log(currentQuestion)
    for(let i=0; i< questionsArr[currentIndex].options.length; i++){
        var button = document.createElement("button")
        button.innerHTML = questionsArr[currentIndex].options[i].value
        if(questionsArr[currentIndex].options[i].correct === true){
            button.setAttribute("correct", "true")    
        }
        button.addEventListener("click", checkAnswer)
}

 
}
function checkAnswer(event){
    event.preventDefault()
    console.log(event)
    console.log(event.target)
    console.log(this)

    //if this and event.target are an HTML node, how can we check for our custom attribute to see if it's right or wrong?

    if(questionsArr.length - 1 === currentIndex){
        endQuiz()
    } else {
        currentIndex++
        showQuestion()
    }
}


function endQuiz(){
    console.log("Ending quiz!")
}

startQuiz()