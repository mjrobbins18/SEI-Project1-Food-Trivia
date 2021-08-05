const questionsMed = [{
    "question": "What is the most consumed manufactured drink in the world?",
    "answer": ["Tea", "Beer", "Coca-cola", "Pepsi"],
    "final": "Tea",
    "image": "./images/Beverages.png"
},
{
    "question": "A macaron is typically made using which nut?",
    "answer": ["Almonds", "Pistachios", "Peanuts", "Cashews"],
    "final": "Almonds",
    "image": "./images/Macaron.png"
},
{
    "question": "In which country did Tea originate?",
    "answer": ["Japan", "Thailand", "United Kingdom", "China"],
    "final": "China",
    "image": "./images/Tea.png"
},
{
    "question": "Where did Mulligatawny soup originate?",
    "answer": ["Malaysia", "India", "Thailand", "China"],
    "final": "India",
    "image": "./images/Mulligatawny.jpeg"
},
{
    "question": "Which country has the wine making region known as the Barossa Valley?",
    "answer": ["France", "Australia", "Germany", "Italy"],
    "final": "Australia",
    "image": "./images/Wine.png"
},
{
    "question": "What is actually a fruit, not a veggie?",
    "answer": ["Broccoli", "Tomato", "Potato", "Cauliflower"],
    "final": "Tomato",
    "image": "./images/FV.png"
},
{
    "question": "What ingredient makes a Martini \"Dirty\"",
    "answer": ["Finesse", "Olive Brine", "Onion Juice", "Bleu Cheese"],
    "final": "Olive Brine",
    "image": "./images/Martini.png"
},
]

//////create all elements
let body = document.querySelector('body');
//homepage modal container
let hPContainer = document.createElement('div');
document.body.appendChild(hPContainer);
hPContainer.setAttribute('class', 'container hP');
////homepage modal
let homePage = document.createElement('div');
hPContainer.appendChild(homePage);
homePage.setAttribute('class', 'content homePage');
//welcome message
let welcomeMessage = document.createElement('h1');
homePage.appendChild(welcomeMessage);
welcomeMessage.setAttribute('class', 'welcome');
welcomeMessage.innerHTML = "Welcome to Max's Food Trivia Game"
//game description
let gameDes = document.createElement('h2');
homePage.appendChild(gameDes);
gameDes.setAttribute('class', 'description');
gameDes.innerHTML = `Moderately Difficult Questions for People That Call Themselves "Foodies". `
//enter name
let nameInput = document.createElement('input');
homePage.appendChild(nameInput);
nameInput.setAttribute('class', 'input');
nameInput.setAttribute('placeHolder', 'Enter Your Name');
//start game button div
let startDiv = document.createElement('div');
homePage.appendChild(startDiv);
startDiv.setAttribute('class', 'buttonBox');
//start game button
let startGame = document.createElement('button');
startDiv.appendChild(startGame);
startGame.setAttribute('class', 'button start');
startGame.innerHTML = "Start Questions"
//back to Home button
let backHome = document.querySelector('.home')
startDiv.appendChild(backHome);
/////Trivia Modal Container
let tContainer = document.createElement('div');
document.body.appendChild(tContainer);
tContainer.setAttribute('class', 'container tRCont')
////Trivia Modal
let trivia = document.createElement('div');
tContainer.appendChild(trivia);
trivia.setAttribute('class', 'content trivia');
//question - inserted randomly 
let question = document.createElement('h1');
trivia.appendChild(question);
question.setAttribute('class', 'question');
question.innerHTML = "Sample Question Here"
//picture - inserted with question
let questionPic = document.createElement('img');
trivia.appendChild(questionPic);
questionPic.setAttribute('class', 'questionPic');
//answer button div
let answerCont = document.createElement('div');
trivia.appendChild(answerCont);
answerCont.setAttribute('class', 'ansCont');
//answer buttons - inserted with question
for(let i =0; i < 4; i++) {
    let answerBTN = document.createElement('button');
    answerCont.appendChild(answerBTN);
    answerBTN.setAttribute('class', 'button answer');
}
//nodelist with buttons in it
let answerButtons = document.querySelectorAll('.answer')
/////Right Modal Container
let rMContainer = document.createElement('div');
document.body.appendChild(rMContainer);
rMContainer.setAttribute('class', 'container rMCont');
////Right Modal
let rightModal = document.createElement('div');
rMContainer.appendChild(rightModal);
rightModal.setAttribute('class', 'content right');
//random trivia/joke from api
let randJoke = document.createElement('p');
randJoke.setAttribute('class', 'joke');
//you got it right!
let rightMess = document.createElement('h1');
rightModal.appendChild(rightMess);
rightMess.setAttribute('class', 'rightMess');
//image
let rightPic = document.createElement('img');
rightModal.appendChild(rightPic);
rightPic.setAttribute('class', 'rightPic');
rightPic.src = "/images/Gordon1.png"
//next question
let next1 = document.createElement('button');
rightModal.appendChild(next1);
next1.innerHTML = "Next Question!";
next1.setAttribute('class', 'button next wrongBTN');
//Wrong Modal Container
let wMContainer = document.createElement('div');
document.body.appendChild(wMContainer);
wMContainer.setAttribute('class','container wMCont')
////Wrong Modal
let wrongModal = document.createElement('div');
wMContainer.appendChild(wrongModal);
wrongModal.setAttribute('class', 'content wrong');
 //sorry, you missed that one
 let wrongMess = document.createElement('h1');
 wrongModal.appendChild(wrongMess);
 wrongMess.setAttribute('class', 'wrongMess');
//image
let wrongPic = document.createElement('img');
wrongModal.appendChild(wrongPic);
wrongPic.setAttribute('class', 'wrongPic');
wrongPic.src = "/images/Wrong.gif"
//random joke/trivia for wrong modal
let randJoke1 = document.createElement('p');
randJoke1.setAttribute('class', 'joke');
//next question
let next2 = document.createElement('button');
wrongModal.appendChild(next2);
next2.innerHTML = "Next Question!";
next2.setAttribute('class', 'button next wrongBTN')
//grab both of the next buttons
let nextBTN = document.querySelectorAll('.next')
//round over modal container
let rOContainer = document.createElement('div');
document.body.appendChild(rOContainer);
rOContainer.setAttribute('class', 'container rOCont')
//round over modal
let roundOver = document.createElement('div');
rOContainer.appendChild(roundOver)
roundOver.setAttribute('class', 'content roundOver');
//Round over message
let roundOverMess = document.createElement('h1');
roundOver.appendChild(roundOverMess);
roundOverMess.setAttribute('class', 'rOMess');
roundOverMess.innerHTML = "Round Over"
//button to go to win screen when round is over
let goToWin = document.createElement('button');
roundOver.appendChild(goToWin);
goToWin.setAttribute('class', 'button showFinal')
goToWin.innerHTML = "Show Final Score!"
//scoreboard container
let sCContainer = document.createElement('div');
tContainer.appendChild(sCContainer);
sCContainer.setAttribute('class', 'sCCont')
//score board modal
let scoreBoard = document.createElement('div');
sCContainer.appendChild(scoreBoard);
scoreBoard.setAttribute('class', 'content scoreBoard');
//player name
let playerName = document.createElement('div');
scoreBoard.appendChild(playerName);
playerName.setAttribute('class', 'player');
playerName.innerHTML = "Player 1"
//total points div
let points = document.createElement('div');
scoreBoard.appendChild(points);
points.setAttribute('class', 'score points');
points.innerHTML = `<strong>Total Points</strong>`;
//total points number
let pointsNum = document.createElement('div');
points.appendChild(pointsNum);
pointsNum.setAttribute('class', 'pointsNum')
pointsNum.innerHTML = 0;
/////Win Screen Container
let wSContainer = document.createElement('div');
document.body.appendChild(wSContainer);
wSContainer.setAttribute('class', 'container wSCont')
////Win Screen Modal
let winScreen = document.createElement('div');
wSContainer.appendChild(winScreen);
winScreen.setAttribute('class', 'content winScreen');
//Nice Job/Better Luck Next Time Message
let endMessage = document.createElement('h1');
winScreen.appendChild(endMessage);
endMessage.setAttribute('class', 'endMessage');
//button for play again- brings back to home
let playAgain = document.createElement('button');
winScreen.appendChild(playAgain);
playAgain.innerHTML = "Play Again!"
playAgain.setAttribute('class', 'button playAgain');
//all buttons element
let allButtons = document.querySelectorAll('.button')
//sound for right answer
let rightAudio = document.querySelector('#right');
//sound for wrong answer
let wrongAudio = document.querySelector('#wrong');
//variable for show-modal class
let showModalClass = 'show-modal'







//modal functionality  

// random food joke generator!//got API to log and render
function generateJoke () {
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random", {
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "82af09fd1emsh8ef1df922508a8bp1beb9ajsn7f726e7510b4",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
    .then(res => {
            return res.json()
    })
    .then(res => {
            randJoke.innerHTML = res.text;
            randJoke1.innerHTML = res.text;
    })
    .catch(err => {
            console.error(err);
    });
    rightModal.appendChild(randJoke1);
    wrongModal.appendChild(randJoke);
    }




//question counter
let counter = 0;
//score counter
let pointsPlus = 0;
//array to hold numbers for random question generator
let questionArray = [];
//modal functionality 

// function that shows the homepage when it is loaded
function loadHome () {
       hPContainer.classList.toggle(showModalClass)
       generateJoke()
}


//randomquestion function that does not repeat questions
function randomQuestion () {
    if (!questionArray.length) {
        for (let i = 0; i < questionsMed.length; i ++) {
            questionArray.push(i);
    }
}
let random = Math.floor(Math.random() * questionArray.length);
let val = questionArray[random];
        questionArray.splice(random, 1);
        question.innerHTML = questionsMed[val].question;
        questionPic.src = questionsMed[val].image;
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerHTML = questionsMed[val].answer[i]
}   
}

////enter's name into playerName
////pulls up first question
function getStarted () {
        playerName.innerHTML = nameInput.value;
        player = playerName.innerHTML;
        if (!nameInput.value){
            alert('Please put in your name')
        }else if(nameInput.value){
//puts the players name into the player object, which puts it into the table
        tContainer.classList.toggle(showModalClass)
        hPContainer.classList.toggle(showModalClass)
//message for right and wrong guesses
        wrongMess.innerHTML = `Woops! Missed That One, ${playerName.innerHTML}.`
        rightMess.innerHTML = `Nailed It,              ${playerName.innerHTML}!`
        }
//populate first question into trivia modal
        randomQuestion()


}




//answer buttons take you to the right answer modal if it is the right answer
function chooseAnswer (event) {

//logic for guessing right or wrong answer and increases numbers on scoreboard
//either brings up right modal or wrong modal
let isCorrect = questionsMed.map(item => event.target.innerHTML == item.final)
        if (isCorrect.includes(true)) {
            rMContainer.classList.toggle(showModalClass)
            rightAudio.play()
            pointsPlus += 2
    }   else {
            wMContainer.classList.toggle(showModalClass)
            wrongAudio.play()
            pointsPlus -= 1
    }
//adds the points to the scoreboard
        pointsNum.innerHTML = pointsPlus;
//inserts the random trivia/joke into the right/wrong modal



//displays the right or wrong message modal based on the guess
        if((counter >= 5) && (isCorrect.includes(true))) {
            rMContainer.classList.toggle(showModalClass)
            rOContainer.classList.toggle(showModalClass)
            roundOver.appendChild(rightMess)
            rightMess.innerHTML = "You Got The Last One Right!"
            counter = 0
}       else if ((counter >= 5) && (isCorrect.includes(true) == false)){
            wMContainer.classList.toggle(showModalClass)
            rOContainer.classList.toggle(showModalClass)
            roundOver.appendChild(wrongMess)
            wrongMess.innerHTML = "You Almost Had It On That Last One"
            counter = 0
} 
//add to the question counter every time an answer is chosen
        counter ++
tContainer.classList.toggle(showModalClass)
}




//function to bring you from the right/wrong screen to the next question
function nextQuestion  (event)  {
    tContainer.classList.toggle(showModalClass)
        if (event.target == next1){
            rMContainer.classList.toggle(showModalClass)
    }   else if (event.target == next2) {
            wMContainer.classList.toggle(showModalClass)
    }
    randomQuestion()
    generateJoke()
}



//function to go to the win screen from the round over screen
function winner  ()  {
    wSContainer.classList.toggle(showModalClass)
    sCContainer.classList.toggle(showModalClass)
    rOContainer.classList.toggle(showModalClass)
  
   
    wSContainer.appendChild(sCContainer)
    if (pointsNum.innerHTML > 10) {
        endMessage.innerHTML = `Great Job ${playerName.innerHTML}, You Scored ${pointsNum.innerHTML} Points!`
    } else if(pointsNum.innerHTML < 5) {
        endMessage.innerHTML = `Yikes ${playerName.innerHTML}, You Scored ${pointsNum.innerHTML} Points. Hit the Books`
    }
}


//function to bring you from win screen back to homepage
function replay () {
    loadHome()
    wSContainer.classList.toggle(showModalClass);
    rightModal.appendChild(rightMess);
    wrongModal.appendChild(wrongMess);
    tContainer.appendChild(sCContainer);
    pointsNum.innerHTML = 0;
    pointsPlus = 0;
    
}


//event propagation for all buttons
function moveModal (event) {

    if(event.target === startGame) {
        getStarted()
    }else if(event.target === goToWin) {
        winner()
    }else if(event.target === playAgain) {
        replay()
    }
    }
    
//event listeners
document.addEventListener('load',loadHome())
allButtons.forEach(button => button.addEventListener('click', moveModal))
answerButtons.forEach(button => button.addEventListener('click',chooseAnswer))
nextBTN.forEach(button => button.addEventListener('click',nextQuestion))