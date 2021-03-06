//questions
const questionsEasy = [{
    "question": "Clam Chowder originated in which country?",
    "answer": ["Australia", "United Kingdom", "USA", "Spain"],
    "final": "USA",
    "image": "./images/Earth.png"
},
{
    "question": "What is this cut of meat called?",
    "answer": ["Chop", "Wing", "Nugget", "Steak"],
    "final": "Steak",
    "image": "./images/Meat.png" 
},
{
    "question": "How many secret herbs and spices are there in the Colonel's recipe?",
    "answer": ["Eleven", "At least a million", "Infinity", "Zero"],
    "final": "Eleven",
    "image": "./images/KFC.png"
},
{
    "question": "What essential nutrient do you get from meat, poultry, eggs, and fish?",
    "answer": ["Caffeine", "Protein", "Peanut Butter", "Gainz"],
    "final": "Protein",
    "image": "./images/MeatFish.png"
},
{
    "question": "What bean that originated in East Asia is used for miso, oil, and tofu?",
    "answer": ["Lima Bean", "Magic Bean", "Peanut", "Soy Bean"],
    "final": "Soy Bean",
    "image": "./images/Ramen.png"
},
{
    "question": "Who is this celebrity chef?",
    "answer": ["Max Robbins", "Gordon Ramsay", "The Swedish Chef", "Emeril Lagasse"],
    "final": "The Swedish Chef",
    "image": "./images/SC.png"
},
{
    "question": "What is the main ingredient in an omelette du fromage?",
    "answer": ["Cheese", "Love", "Peppers", "Egg Shells"],
    "final": "Cheese",
    "image": "./images/Eggs.png"
},
{
    "question": "Who is the famous mascot for McDonald's?",
    "answer": ["Ronald McDonald", "Jon Snow", "Caillou", "Naruto"],
    "final": "Ronald McDonald",
    "image": "./images/RM.png"
},
{
    "question": "What is the name of this vegetable?",
    "answer": ["Broccoli", "Bok-Choy", "Carrot", "Hearty Radish"],
    "final": "Bok-Choy",
    "image": "./images/Bok.png"
},
{
    "question": "What is this ingredient called?",
    "answer": ["No Idea", "Chicken of the Sea", "Scallops", "Bananas"],
    "final": "Scallops",
    "image": "./images/Scallops.png"
},
]

// //////create all elements
///////////homepage modal container
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
gameDes.innerHTML = `Put Your Food Knowledge to the Test!`
//East Button Div
let startDiv = document.createElement('div');
homePage.appendChild(startDiv);
startDiv.setAttribute('class', 'buttonBox');
//Easy button
let easyButton = document.createElement('button');
startDiv.appendChild(easyButton);
easyButton.setAttribute('class', 'button start');
easyButton.innerHTML = "Easy";
//medium button
let medButton = document.querySelector('.medium');
startDiv.appendChild(medButton);
//hard button
let hardButton = document.querySelector('.hard');
startDiv.appendChild(hardButton);
//rapidFire Button
let rapidButton = document.querySelector('.rapid');
startDiv.appendChild(rapidButton);
////////easy modal container
let eMContainer = document.createElement('div');
document.body.appendChild(eMContainer);
eMContainer.setAttribute('class', 'container EMC');
////easy modal
let easyModal = document.createElement('div');
eMContainer.appendChild(easyModal);
easyModal.setAttribute('class', 'content EM');
//welcome message
let welcomeMessage1 = document.createElement('h1');
easyModal.appendChild(welcomeMessage1);
welcomeMessage1.setAttribute('class', 'welcome');
welcomeMessage1.innerHTML = "Welcome to Max's Food Trivia Game"
//game description
let easyDes = document.createElement('h2');
easyModal.appendChild(easyDes);
easyDes.setAttribute('class', 'description');
easyDes.innerHTML = `Easy Questions Everyone Should Know.`
//enter name
let nameInput = document.createElement('input');
easyModal.appendChild(nameInput);
nameInput.setAttribute('class', 'input');
nameInput.setAttribute('placeHolder', 'Enter Your Name');
//start game button div
let startDiv1 = document.createElement('div');
easyModal.appendChild(startDiv1);
startDiv1.setAttribute('class', 'buttonBox');
//start game button
let startGame = document.createElement('button');
startDiv1.appendChild(startGame);
startGame.setAttribute('class', 'button start');
startGame.innerHTML = "Start Questions"
//back to Home button
let backHome = document.createElement('button');
backHome.setAttribute('class', 'button start');
startDiv1.appendChild(backHome);
backHome.innerHTML = "Back to Home"
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
/////////Right Modal Container
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
rightPic.src = "./images/Gordon1.png"
//next question
let next1 = document.createElement('button');
rightModal.appendChild(next1);
next1.innerHTML = "Next Question!";
next1.setAttribute('class', 'button next wrongBTN');
///////////Wrong Modal Container
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
wrongPic.src = "./images/Wrong.gif"
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
//////////round over modal container
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
/////////scoreboard container
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
/////////////Win Screen Container
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
//grabbing all of my containers
const containers = document.querySelectorAll('.container')
let allButtons = document.querySelectorAll('.button')
//sound for right answer
let rightAudio = document.querySelector('#right');
//sound for wrong answer
let wrongAudio = document.querySelector('#wrong');
//variable for show-modal class
let showModalClass = 'show-modal'




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
        for (let i = 0; i < questionsEasy.length; i ++) {
            questionArray.push(i);
    }
}
let random = Math.floor(Math.random() * questionArray.length);
let val = questionArray[random];
        questionArray.splice(random, 1);
        question.innerHTML = questionsEasy[val].question;
        questionPic.src = questionsEasy[val].image;
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerHTML = questionsEasy[val].answer[i]
}   
}

//toggle easy modal
function openEasy () {
        eMContainer.classList.toggle(showModalClass)
        hPContainer.classList.toggle(showModalClass)

}

//back to homepage from easy modal
function backToHome () {
        eMContainer.classList.toggle(showModalClass)
        hPContainer.classList.toggle(showModalClass)
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
        eMContainer.classList.toggle(showModalClass)
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
let isCorrect = questionsEasy.map(item => event.target.innerHTML == item.final)
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
    tContainer.classList.toggle('show-modal')
        if (event.target == next1){
            rMContainer.classList.toggle('show-modal')
    }   else if (event.target == next2) {
            wMContainer.classList.toggle('show-modal')
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

    if (event.target === easyButton){
        openEasy()
    }else if(event.target === backHome) {
        backToHome()
    }else if(event.target === startGame) {
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