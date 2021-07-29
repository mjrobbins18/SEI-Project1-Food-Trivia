
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
    console.log(res.text)
})
.catch(err => {
	console.error(err);
});

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
        answerBTN.innerHTML = ` Answer ${[i]}`
    }
    ////Right Modal
    let rightModal = document.createElement('div');
    document.body.appendChild(rightModal);
    rightModal.setAttribute('class', 'right');
    //random trivia/joke from api
    let randJoke = document.createElement('p');
    rightModal.appendChild(randJoke);
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
    //next question
    let next2 = document.createElement('button');
    wrongModal.appendChild(next2);
    next2.innerHTML = "Next Question!";
    next2.setAttribute('class', 'button next wrongBTN')
    //score board modal
    let scoreBoard = document.createElement('div');
    document.body.appendChild(scoreBoard);
    scoreBoard.setAttribute('class', 'scoreBoard');
    scoreBoard.innerHTML = `<strong>Score</strong>`;
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


    console.log(body)

    //game logic





