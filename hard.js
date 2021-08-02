const questionsHard = [{
    "question": "If you were in Australia and eating a 'sinker' what would you be having?",
    "answer": ["Spaghetti", "Pie", "Fries", "Soup"],
    "final": "Pie",
    "image": ""
},
{
    "question": "If you were having a cocktail of Guinness and Champagne what would it be called?",
    "answer": ["Red Velvet", "Blue Velvet", "Black Velvet", "Gold Velvet"],
    "final": "Black Velvet",
    "image": ""
},
{
    "question": "What fruit is traditionally used in an Eve's Pudding?",
    "answer": ["Pineapples", "Oranges", "Strawberries", "Apples"],
    "final": "Apples",
    "image": ""
},
{
    "question": "Which country is the origin of the beef stew known as Daube?",
    "answer": ["Austria", "Sweden", "France", "Germany"],
    "final": "France",
    "image": ""
},
{
    "question": "What fast food restaurant is credited with introducing the first modern-day drive-thru window?",
    "answer": ["Mickey D's", "Wendy's", "Burger King", "Taco Bell"],
    "final": "Wendy's",
    "image": ""
},
{
    "question": "Which of the following is in the cruciferous vegetable family?",
    "answer": ["Cabbage", "Tomato", "Cucumber", "Potato"],
    "final": "Cabbage",
    "image": ""
},
{
    "question": "What is the common name for Allium sativum?",
    "answer": ["Tomato", "Garlic", "Kale", "Watermelon"],
    "final": "Garlic",
    "image": ""
},
{
    "question": "Which of the following is not considered a \"Mother Sauce\"?",
    "answer": ["Hollandaise", "Bechamel", "Veloute", "Bearnaise"],
    "final": "Bearnaise",
    "image": ""
},
{
    "question": "Where did \"Spam\" originate?",
    "answer": ["Hawaii", "Mars", "Minnesota", "Tennessee"],
    "final": "Minnesota",
    "image": ""
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
gameDes.innerHTML = `Difficult Questions for True Food Geniuses`
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
//back to home
let backHome = document.querySelector('.home');
startDiv.appendChild(backHome);
//border divs
let borderDiv1 = document.createElement('div');
startDiv.appendChild(borderDiv1);
borderDiv1.setAttribute('class', 'border');
let borderDiv2 = document.createElement('div');
startDiv.appendChild(borderDiv2);
borderDiv2.setAttribute('class', 'border')
let borderDiv3 = document.createElement('div');
startDiv.appendChild(borderDiv3);
borderDiv3.setAttribute('class', 'border')
let borderDiv4 = document.createElement('div');
startDiv.appendChild(borderDiv4);
borderDiv4.setAttribute('class', 'border')
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
//Right-score div
let scoreRight = document.createElement('div');
scoreBoard.appendChild(scoreRight);
scoreRight.setAttribute('class', 'score rightScore');
scoreRight.innerHTML = `<strong>Right</strong>`;
//right score number
let scoreRightNum = document.createElement('div');
scoreRight.appendChild(scoreRightNum);
scoreRightNum.setAttribute('class', 'rightNum')
scoreRightNum.innerHTML = 0;
//Wrong score div
let scoreWrong = document.createElement('div');
scoreBoard.appendChild(scoreWrong);
scoreWrong.setAttribute('class', 'score wrongScore');
scoreWrong.innerHTML = `<strong>Wrong</strong>`;
//wrong score number
let scoreWrongNum = document.createElement('div');
scoreWrong.appendChild(scoreWrongNum);
scoreWrongNum.setAttribute('class', 'wrongNum');
scoreWrongNum.innerHTML = 0;
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
//image- good/bad
let endImage = document.createElement('img');
winScreen.appendChild(endImage);
endImage.setAttribute('class', 'endImage');
//button for play again- brings back to home
let playAgain = document.createElement('button');
winScreen.appendChild(playAgain);
playAgain.innerHTML = "Play Again!"
playAgain.setAttribute('class', 'button playAgain');









//modal functionality  

// function that shows the homepage when it is loaded
const loadHome = () => {
hPContainer.classList.toggle('show-modal')
}
body.addEventListener('load',loadHome())



//better randomquestion function that does not repeat questions
questionArray = [];
const randomQuestion = () => {
if (!questionArray.length) {
for (let i = 0; i < questionsHard.length; i ++) {
    questionArray.push(i);
}
}
let random = Math.floor(Math.random() * questionArray.length);
let val = questionArray[random];
questionArray.splice(random, 1);
question.innerHTML = questionsHard[val].question;
questionPic.src = questionsHard[val].image;
for (let i = 0; i < answerButtons.length; i++) {
answerButtons[i].innerHTML = questionsHard[val].answer[i]
} 
}



//event handler for starting the game
////enter's name into playerName
////pulls up first question
const getStarted = () => {
playerName.innerHTML = nameInput.value;
tContainer.classList.toggle('show-modal')
// sCContainer.classList.toggle('show-modal')
hPContainer.classList.toggle('show-modal')
//populate first question into trivia modal
randomQuestion()
wrongMess.innerHTML = `Woops! Missed That One, ${playerName.innerHTML}.`
rightMess.innerHTML = `Nailed It, ${playerName.innerHTML}!`
}
//event listener for startGame button
startGame.addEventListener('click',getStarted)






//right and wrong score counter
let rightAns = 0;
let wrongAns = 0;
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
let isCorrect = questionsHard.map(item => event.target.innerHTML == item.final)
if (isCorrect.includes(true)) {
    rMContainer.classList.toggle('show-modal')
    rightAns += 1
} else {
    wMContainer.classList.toggle('show-modal')
    wrongAns += 1
}
scoreWrongNum.innerHTML = wrongAns;
scoreRightNum.innerHTML = rightAns;

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