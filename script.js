//questions
const questionsEasy = [{
    "question": "Clam Chowder originated in which country?",
    "answer": ["Australia", "United Kingdom", "USA", "Spain"],
    "final": "USA"
},
{
    "question": "What fast food restaurant boasts that you can \"Have it your way\"?",
    "answer": ["Hardees", "In and Out", "Burger King", "Mickey D's"],
    "final": "Burger King"
},
{
    "question": "How many secret herbs and spices are there in the Colonel's recipe?",
    "answer": ["11", "At least a million", "Infinity", "Zero"],
    "final": "11"
},
{
    "question": "What essential nutrient do you get from meat, poultry, eggs, and fish?",
    "answer": ["Brawndo", "Protein", "Peanut Butter", "Gainz"],
    "final": "Protein"
},
{
    "question": "What bean that originated in East Asia is used for miso, oil, and tofu?",
    "answer": ["Lima Bean", "Magic Bean", "Peanut", "Soy Bean"],
    "final": "Soy Bean"
},
{
    "question": "Who is the celebrity Chef that is the host of Hell's Kitchen?",
    "answer": ["Max Robbins", "Gordon Ramsay", "The Swedish Chef", "Emeril Lagasse"],
    "final": "Gordon Ramsay"
},
{
    "question": "What is the main ingredient in an omelette?",
    "answer": ["Egg", "Love", "Sugar", "Egg Shells"],
    "final": "Egg"
},
{
    "question": "Who is the famous mascot for McDonald's?",
    "answer": ["Ronald McDonald", "Wendy Thomas", "Caillou", "Naruto"],
    "final": "Ronald McDonald"
},
]
const questionsMed = [{
    "question": "What is the most consumed manufactured drink in the world?",
    "answer": ["Tea", "Beer", "Coca-cola", "Pepsi"],
    "final": 0
},
{
    "question": "A macaron is typically made using which nut?",
    "answer": ["Almonds", "Pistachios", "Peanuts", "Cashews"],
    "final": 0
},
{
    "question": "In which country did Tea originate?",
    "answer": ["Japan", "Thailand", "United Kingdom", "China"],
    "final": 3
},
{
    "question": "Where did Mulligatawny soup originate?",
    "answer": ["Malaysia", "India", "Thailand", "China"],
    "final": 1
},
{
    "question": "Which country has the wine making region known as the Barossa Valley?",
    "answer": ["France", "Australia", "Germany", "Italy"],
    "final": 1
},
{
    "question": "What is actually a fruit, not a veggie?",
    "answer": ["Broccoli", "Tomato", "Potato", "Cauliflower"],
    "final": 1
},
{
    "question": "What ingredient makes a Martini \"Dirty\"",
    "answer": ["Finesse", "Olive Brine", "Onion Juice", "Bleu Cheese"],
    "final": 1
},
]
const questionsHard = [{
    "question": "If you were in Australia and eating a 'sinker' what would you be having?",
    "answer": ["Spaghetti", "Pie", "Fries", "Soup"],
    "final": 1
},
{
    "question": "If you were having a cocktail of Guinness and Champagne what would it be called?",
    "answer": ["Red Velvet", "Blue Velvet", "Black Velvet", "Gold Velvet"],
    "final": 2
},
{
    "question": "What fruit is traditionally used in an Eve's Pudding?",
    "answer": ["Pineapples", "Oranges", "Strawberries", "Apples"],
    "final": 3
},
{
    "question": "Which country is the origin of the beef stew known as Daube?",
    "answer": ["Austria", "Sweden", "France", "Germany"],
    "final": 2
},
{
    "question": "What fast food restaurant is credited with introducing the first modern-day drive-thru window?",
    "answer": ["Mickey D's", "Wendy's", "Burger King", "Taco Bell"],
    "final": 1
},
{
    "question": "Which of the following is in the cruciferous vegetable family?",
    "answer": ["Cabbage", "Tomato", "Cucumber", "Potato"],
    "final": 0
},
{
    "question": "What is the common name for Allium sativum?",
    "answer": ["Tomato", "Garlic", "Kale", "Watermelon"],
    "final": 1
},
{
    "question": "Which of the following is not considered a \"Mother Sauce\"?",
    "answer": ["Hollandaise", "Bechamel", "Veloute", "Bearnaise"],
    "final": 3
},
{
    "question": "Where did \"Spam\" originate?",
    "answer": ["Hawaii", "Mars", "Minnesota", "Tennessee"],
    "final": 2
},
]




//////create all elements
    let body = document.querySelector('body');
    ////homepage modal
    let homePage = document.createElement('div');
    document.body.appendChild(homePage);
    homePage.setAttribute('class', 'homePage');
    //welcome message
    let welcomeMessage = document.createElement('h1');
    homePage.appendChild(welcomeMessage);
    welcomeMessage.setAttribute('class', 'welcome');
    welcomeMessage.innerHTML = "Welcome to Max's Food Trivia Game"
    //game description
    let gameDes = document.createElement('h2');
    homePage.appendChild(gameDes);
    gameDes.setAttribute('class', 'description');
    gameDes.innerHTML = "This game will test your food knowledge and hopefully teach you something in the process!"
    //enter name
    let nameInput = document.createElement('input');
    homePage.appendChild(nameInput);
    nameInput.setAttribute('class', 'input');
    nameInput.setAttribute('placeHolder', 'Enter Your Name');
    //start game button
    let startGame = document.createElement('button');
    homePage.appendChild(startGame);
    startGame.setAttribute('class', 'start');
    startGame.innerHTML = "Let's Get Started!"
    ////Trivia Modal
    let trivia = document.createElement('div');
    document.body.appendChild(trivia);
    trivia.setAttribute('class', 'trivia');
    //question - inserted randomly from questions.js
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
    answerCont.setAttribute('class', 'container');
    //answer buttons - inserted with question
    for(let i =0; i < 4; i++) {
        let answerBTN = document.createElement('button');
        answerCont.appendChild(answerBTN);
        answerBTN.setAttribute('class', 'answer');
    }
    //nodelist with buttons in it
    let answerButtons = document.querySelectorAll('.answer')
    console.log(answerButtons.length)
    ////Right Modal
    let rightModal = document.createElement('div');
    document.body.appendChild(rightModal);
    rightModal.setAttribute('class', 'right');
    //random trivia/joke from api
    let randJoke = document.createElement('p');
    randJoke.setAttribute('class', 'joke');
    //image
    let rightPic = document.createElement('img');
    rightModal.appendChild(rightPic);
    rightPic.setAttribute('class', 'rightPic');
    //you got it right!
    let rightMess = document.createElement('h1');
    rightModal.appendChild(rightMess);
    rightMess.setAttribute('class', 'rightMess');
    rightMess.innerHTML = "You Got it Right, Nice Job!"
    //next question
    let next1 = document.createElement('button');
    rightModal.appendChild(next1);
    next1.innerHTML = "Next Question!";
    next1.setAttribute('class', 'button next rightBTN');
    ////Wrong Modal
    let wrongModal = document.createElement('div');
    document.body.appendChild(wrongModal);
    wrongModal.setAttribute('class', 'wrong');
    //image
    let wrongPic = document.createElement('img');
    wrongModal.appendChild(wrongPic);
    wrongPic.setAttribute('class', 'wrongPic');
    //sorry, you missed that one
    let wrongMess = document.createElement('h1');
    wrongModal.appendChild(wrongMess);
    wrongMess.setAttribute('class', 'wrongMess');
    wrongMess.innerHTML = "Nice Try, You'll Get it Next time!"
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
    //round over modal
    let roundOver = document.createElement('div');
    document.body.appendChild(roundOver)
    roundOver.setAttribute('class', 'roundOver');
    //Round over message
    let roundOverMess = document.createElement('h1');
    roundOver.appendChild(roundOverMess);
    roundOverMess.setAttribute('class', 'rOMess');
    roundOverMess.innerHTML = "Great Job, This Round is Over!"
    //button to go to win screen when round is over
    let goToWin = document.createElement('button');
    roundOver.appendChild(goToWin);
    goToWin.setAttribute('class', 'button')
    goToWin.innerHTML = "Show Final Score!"
    //score board modal
    let scoreBoard = document.createElement('div');
    document.body.appendChild(scoreBoard);
    scoreBoard.setAttribute('class', 'scoreBoard');
    scoreBoard.innerHTML = `<strong>Score</strong>`;
    //player name
    let playerName = document.createElement('div');
    scoreBoard.appendChild(playerName);
    playerName.setAttribute('class', 'player');
    playerName.innerHTML = "Player 1"
    //score-Right
    let scoreRight = document.createElement('div');
    scoreBoard.appendChild(scoreRight);
    scoreRight.setAttribute('class', 'score rightScore');
    scoreRight.innerHTML = `<strong>Right</strong>`;
    //score-Wrong
    let scoreWrong = document.createElement('div');
    scoreBoard.appendChild(scoreWrong);
    scoreWrong.setAttribute('class', 'score wrongScore');
    scoreWrong.innerHTML = `<strong>Wrong</strong>`;
    ////Win Screen Modal
    let winScreen = document.createElement('div');
    document.body.appendChild(winScreen);
    winScreen.setAttribute('class', 'winScreen');
    //Nice Job/Better Luck Next Time Message
    let endMessage = document.createElement('h1');
    winScreen.appendChild(endMessage);
    endMessage.setAttribute('class', 'endMessage');
    endMessage.innerHTML = "Nice Job/Better Luck Next Time!"
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

//function that shows the homepage when it is loaded
const loadHome = () => {
    homePage.style.opacity = 1;
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
question.innerHTML = questionsEasy[val].question
for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].innerHTML = questionsEasy[val].answer[i]
} 
}



//event handler for starting the game
////enter's name into playerName
////pulls up first question
const getStarted = () => {
    playerName.innerHTML = nameInput.value;
    homePage.style.opacity = "0";
    trivia.style.opacity = "1";
    scoreBoard.style.opacity = "1";
    //populate first question into trivia modal
    randomQuestion()
    //if triva.style.opacity === 1 then generate random question
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
    //logic for if right answer == question.final
for (let i = 0; i < questionsEasy.length; i++){
    if (event.target.innerHTML == questionsEasy[i].final) {
        rightModal.style.opacity = "1";
    } else {
        wrongModal.style.opacity = "1"
    }
}


console.log(questionsEasy)




    //goes within logic- either brings up right modal or wrong modal
    trivia.style.opacity = "0";
    //inserts the random trivia/joke into the right/wrong modal
    wrongModal.appendChild(randJoke1);
    rightModal.appendChild(randJoke);
    //if right/wrong modal opacity = 1 then generate random trivia

}
answerButtons.forEach(button => button.addEventListener('click',chooseAnswer))













//question counter
let counter = 0;
//event handler to bring you from the right/wrong screen to the next question
const nextQuestion = () => {
    rightModal.style.opacity = "0";
    wrongModal.style.opacity = "0";
    trivia.style.opacity = "1";
    randomQuestion()
   //add to the counter every time an answer is chosen
   counter += 1
   //if we've done 5 quesionts then bring up winner screen
  if(counter > 4) {
      roundOver.style.opacity = "1";
      trivia.style.opacity = "0";
      rightModal.style.opacity = "0";
      wrongModal.style.opacity = "0";
      counter = 0
  }
}
//event listener for next question buttons
nextBTN.forEach(button => button.addEventListener('click',nextQuestion))


//event handler to go to the win screen from the round over screen
const winner = () => {
    roundOver.style.opacity = "0";
    winScreen.style.opacity = "1";
}
//event listener to go to the win screen button
goToWin.addEventListener('click', winner)










//event handler to bring you from win screen back to homepage
const replay = () => {
    homePage.style.opacity = "1";
    winScreen.style.opacity = "0";
    scoreBoard.style.opacity = "0";
}

//event listener for play again button to bring you back to homepage
playAgain.addEventListener('click',replay)





















  //game logic
  