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
//grabbing the table from the html
let leaderTable = document.querySelector('table')
leaderBoard.appendChild(leaderTable)
let body = document.querySelector('body');
//back to homepage button
let lBButton = document.createElement('button');
leaderBoard.appendChild(lBButton);
lBButton.setAttribute('class', 'button start hPLB');
lBButton.innerHTML = "Back to Home";
//leaderboard button
let toLead = document.createElement('button');
homePage.appendChild(toLead);
toLead.setAttribute('class', 'button start');
toLead.innerHTML = "Leaderboard"

//leaderboard button event handler
const toggleLB = () => {
    lBC.classList.toggle('show-modal')
    hPContainer.classList.toggle('show-modal');
}
//leaderboard button event listener
toLead.addEventListener('click', toggleLB);
//back to home from leaderboard
lBButton.addEventListener('click', toggleLB);


//object to hold the player data
let playerObject = [[playerName.innerHTML,pointsPlus]]
console.log(playerObject)
//sorting the leaderboard to display the highest score on top
const sortBoard = () => {
    playerObject.sort((a,b) => (b.Points - a.Points))
}
sortBoard()
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


//storing the points and player name in the local storage

localStorage.setItem("Player",playerName.innerHTML)
localStorage.setItem("Points", pointsPlus)

