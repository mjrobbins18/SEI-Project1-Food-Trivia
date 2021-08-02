//questions
const questionsEasy = [{
    "question": "Clam Chowder originated in which country?",
    "answer": ["Australia", "United Kingdom", "USA", "Spain"],
    "final": "USA",
    "image": "/images/Earth.png"
},
{
    "question": "What is this cut of meat called?",
    "answer": ["Chop", "Wing", "Nugget", "Steak"],
    "final": "Steak",
    "image": "/images/Meat.png" 
},
{
    "question": "How many secret herbs and spices are there in the Colonel's recipe?",
    "answer": ["Eleven", "At least a million", "Infinity", "Zero"],
    "final": "Eleven",
    "image": "/images/KFC.png"
},
{
    "question": "What essential nutrient do you get from meat, poultry, eggs, and fish?",
    "answer": ["Caffeine", "Protein", "Peanut Butter", "Gainz"],
    "final": "Protein",
    "image": "/images/MeatFish.png"
},
{
    "question": "What bean that originated in East Asia is used for miso, oil, and tofu?",
    "answer": ["Lima Bean", "Magic Bean", "Peanut", "Soy Bean"],
    "final": "Soy Bean",
    "image": "/images/Ramen.png"
},
{
    "question": "Who is this celebrity chef?",
    "answer": ["Max Robbins", "Gordon Ramsay", "The Swedish Chef", "Emeril Lagasse"],
    "final": "The Swedish Chef",
    "image": "/images/SC.png"
},
{
    "question": "What is the main ingredient in an omelette du fromage?",
    "answer": ["Cheese", "Love", "Peppers", "Egg Shells"],
    "final": "Cheese",
    "image": "/images/Eggs.png"
},
{
    "question": "Who is the famous mascot for McDonald's?",
    "answer": ["Ronald McDonald", "Jon Snow", "Caillou", "Naruto"],
    "final": "Ronald McDonald",
    "image": "/images/RM.png"
},
{
    "question": "What is the name of this vegetable?",
    "answer": ["Broccoli", "Bok-Choy", "Carrot", "Hearty Radish"],
    "final": "Bok-Choy",
    "image": "/images/Bok.png"
},
{
    "question": "What is this ingredient called?",
    "answer": ["No Idea", "Chicken of the Sea", "Scallops", "Bananas"],
    "final": "Scallops",
    "image": "/images/Scallops.png"
},
]


//////create all elements
    let body = document.querySelector('body');
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
//leaderboard button
let toLead = document.createElement('button');
homePage.appendChild(toLead);
toLead.setAttribute('class', 'button start');
toLead.innerHTML = "Leaderboard"
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
easyDes.innerHTML = `Easy Questions Everyone Should Know". `
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
////////leaderboard container
let lBC = document.createElement('div');
document.body.appendChild(lBC);
lBC.setAttribute('class', 'container lBC')
//leaderboard Modal
let leaderBoard = document.createElement('div');
lBC.appendChild(leaderBoard);
leaderBoard.setAttribute('class', 'content leaderBoard')
//leaderboard heading
let lBHeading = document.createElement('h1');
leaderBoard.appendChild(lBHeading);
lBHeading.setAttribute('class', 'heading');
lBHeading.innerHTML = "Leaderboard"
//total-leaderboard
let totalLB = document.createElement('div');
leaderBoard.appendChild(totalLB);
totalLB.setAttribute('class', 'score totalLB');
totalLB.innerHTML = `<strong>Total Points</strong>`;
//player- leaderboard
let playerLB = document.createElement('div');
leaderBoard.appendChild(playerLB);
playerLB.setAttribute('class', 'playerLB');
playerLB.innerHTML = "Player"
//date- leaderboard
let dateLB = document.createElement('div');
leaderBoard.appendChild(dateLB);
dateLB.setAttribute('class', 'dateLB');
dateLB.innerHTML = "Date"
//back to homepage button
let lBButton = document.createElement('button');
leaderBoard.appendChild(lBButton);
lBButton.setAttribute('class', 'button start hPLB');
lBButton.innerHTML = "Back to Home";
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
rightPic.src = "/images/Gordon1.png"
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
//image- good/bad
let endImage = document.createElement('img');
winScreen.appendChild(endImage);
endImage.setAttribute('class', 'endImage');
//button for play again- brings back to home
let playAgain = document.createElement('button');
winScreen.appendChild(playAgain);
playAgain.innerHTML = "Play Again!"
playAgain.setAttribute('class', 'button playAgain');





//working on leaderboard functionality
//object to hold the player data
let playerObject = [
    {"Player": "max",
     "Date": "1/22/33",
     "Points": 323},
     {"Player": "benji",
     "Date": "1/2/23",
     "Points": 623},
     {"Player": "jesus",
     "Date": "1/1/63",
     "Points": 123},
]
const sortBoard = () => {
    playerObject.sort((a,b) => (b.Points - a.Points))
}
sortBoard()
//grabbing the table from the html
let leaderTable = document.querySelector('table')
leaderBoard.appendChild(leaderTable)
//filling the table head with the keys of the player object 
let data = Object.keys(playerObject[0])
const fillLBH = (leaderTable) => {
    let tableHead = leaderTable.createTHead();
    return tableHead;
}
fillLBH(leaderTable);
const leaderBoardHead = (leaderTable) => {
    let leaderHead = leaderTable.createTHead();
    let row = leaderHead.insertRow();
    for (let key of data) {
        let th = document.createElement('th');
        let headText = document.createTextNode(key);
        th.appendChild(headText);
        row.appendChild(th);
    }
} 
//filling the leaderboard with the data from the player object 
const fillLeaderBoard = (leaderTable,data) => {
    for (let element of data) {
        let row = leaderTable.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
    
}
//calling the leaderboard filling functions
leaderBoardHead(leaderTable,data);
fillLeaderBoard(leaderTable,playerObject);

//sorting the leaderboard to display the highest score on top


//pushing the player data into the player object






//modal functionality  


//leaderboard button event handler
const toggleLB = () => {
    lBC.classList.toggle('show-modal')
    hPContainer.classList.toggle('show-modal');
}
//leaderboard button event listener
toLead.addEventListener('click', toggleLB);
//back to home from leaderboard
lBButton.addEventListener('click', toggleLB);



// function that shows the homepage when it is loaded
const loadHome = () => {
    hPContainer.classList.toggle('show-modal')
}
body.addEventListener('load',loadHome())




//better randomquestion function that does not repeat questions
questionArray = [];
const randomQuestion = () => {
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
let openEasy = () => {
    eMContainer.classList.toggle('show-modal')
    hPContainer.classList.toggle('show-modal')
}
easyButton.addEventListener('click', openEasy)

let backToHome = () => {
    eMContainer.classList.toggle('show-modal')
    hPContainer.classList.toggle('show-modal')
}
backHome.addEventListener('click', backToHome)

//event handler for starting the game
////enter's name into playerName
////pulls up first question
const getStarted = () => {
    playerName.innerHTML = nameInput.value;
    tContainer.classList.toggle('show-modal')
    eMContainer.classList.toggle('show-modal')
    //populate first question into trivia modal
    randomQuestion()
    wrongMess.innerHTML = `Woops! Missed That One, ${playerName.innerHTML}.`
    rightMess.innerHTML = `Nailed It, ${playerName.innerHTML}!`
}
//event listener for startGame button
startGame.addEventListener('click',getStarted)






//score counter
let pointsPlus = 0;
//answer buttons take you to the right answer modal if it is the right answer
const chooseAnswer = (event) => {
//random food joke generator!//got API to log and render
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
    console.log(res.text)
})
.catch(err => {
	console.error(err);
});


//logic for guessing right or wrong answer and increases numbers on scoreboard
//either brings up right modal or wrong modal
let isCorrect = questionsEasy.map(item => event.target.innerHTML == item.final)
    if (isCorrect.includes(true)) {
        rMContainer.classList.toggle('show-modal')
        pointsPlus += 2
    } else {
        wMContainer.classList.toggle('show-modal')
        pointsPlus -= 1
    }
pointsNum.innerHTML = pointsPlus;

//inserts the random trivia/joke into the right/wrong modal
rightModal.appendChild(randJoke1);
wrongModal.appendChild(randJoke);
//if right/wrong modal opacity = 1 then generate random trivia
tContainer.classList.toggle('show-modal')
console.log(rMContainer.classList)



if((counter > 4) && (isCorrect.includes(true))) {
    rMContainer.classList.toggle('show-modal')
    rOContainer.classList.toggle('show-modal')
    roundOver.appendChild(rightMess)
    rightMess.innerHTML = "You Got The Last One Right!"
    counter = 0
}else if ((counter > 4) && (isCorrect.includes(true) == false)){
    wMContainer.classList.toggle('show-modal')
    rOContainer.classList.toggle('show-modal')
    roundOver.appendChild(wrongMess)
    wrongMess.innerHTML = "You Almost Had It On That Last One"
    counter = 0
} 
  //add to the counter every time an answer is chosen
  counter += 1

}
answerButtons.forEach(button => button.addEventListener('click',chooseAnswer))


//question counter
let counter = 0;
//event handler to bring you from the right/wrong screen to the next question
const nextQuestion = (event) => {
    tContainer.classList.toggle('show-modal')
    if (event.target == next1){
        rMContainer.classList.toggle('show-modal')
    }else if (event.target == next2) {
        wMContainer.classList.toggle('show-modal')
    }
    randomQuestion()
 
   //if we've done 5 quesionts then bring up winner screen

}
//event listener for next question buttons
nextBTN.forEach(button => button.addEventListener('click',nextQuestion))


//event handler to go to the win screen from the round over screen
const winner = () => {
    wSContainer.classList.toggle('show-modal')
    sCContainer.classList.toggle('show-modal')
    rOContainer.classList.toggle('show-modal')
    wSContainer.appendChild(sCContainer)
    if (scoreRightNum.innerHTML > scoreWrongNum.innerHTML) {
        endMessage.innerHTML = `Great Job ${playerName.innerHTML}, You Got ${scoreRightNum.innerHTML} Questions Right!`
    } else if(scoreRightNum.innerHTML < scoreWrong.innerHTML) {
        endMessage.innerHTML = `Yikes ${playerName.innerHTML}, You Missed ${scoreWrongNum.innerHTML} Questions. Hit The Books.`
    } else {
        endMessage.innerHTML = `Pretty Good ${playerName.innerHTML}, But You Can Do Better.`
    }
}
//event listener to go to the win screen button
goToWin.addEventListener('click', winner)


//event handler to bring you from win screen back to homepage
const replay = () => {
    loadHome()
    wSContainer.classList.toggle('show-modal');
    rightModal.appendChild(rightMess);
    wrongModal.appendChild(wrongMess);
    tContainer.appendChild(sCContainer);
    scoreWrongNum.innerHTML = 0;
    scoreRightNum.innerHTML = 0;
    rightAns = 0;
    wrongAns = 0;
}

//event listener for play again button to bring you back to homepage
playAgain.addEventListener('click',replay)





















  //game logic
  