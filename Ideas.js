//leaderboard button
let toLead = document.createElement('button');
homePage.appendChild(toLead);
toLead.setAttribute('class', 'button start');
toLead.innerHTML = "Leaderboard"
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
//back to homepage button
let lBButton = document.createElement('button');
leaderBoard.appendChild(lBButton);
lBButton.setAttribute('class', 'button start hPLB');
lBButton.innerHTML = "Back to Home";



//Trying to sort the list

  function sortList(){
    let allRows = document.querySelectorAll('.leaderBoardRow')
        let listArray = [];
        allRows.forEach(item => listArray.push(item.innerHTML))
        // listArray.push(leaderBoardRow.innerHTML);
        listArray.sort(function(a,b) {
            let aa = parseInt(a.innerHTML);
            let bb = parseInt(b.innerHTML);
        return aa <bb ? -1 : (aa > bb ? 1 : 0);
        });
        listArray.reverse()
        for (let i = 0; i<listArray.length; i++) {
            leaderBoardRow[i] = listArray[i];
            
        }
    }
    function setLeaderboard () {
        const data = JSON.parse(localStorage.getItem('leaderboard'));
        if (!Array.isArray(data)) return;
        data.forEach((item) => {
            addLeaderBoardRow(item.player, item.pointsPlus)
        });
        }

//object to hold the player data
let lBArray = [];
console.log(playerObject)
//sorting the leaderboard to display the highest score on top
const sortBoard = () => {
    lBArray.sort((a,b) => (b.pointsPlus - a.pointsPlus))
}
sortBoard()
//filling the table head with the keys of the player object 
let data = Object.keys(lBArray[0])
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
fillLeaderBoard(leaderTable,lBArray);


//storing the points and player name in the local storage

localStorage.setItem("Player",playerName.innerHTML)
localStorage.setItem("Points", pointsPlus)

