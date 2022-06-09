// Global Variables

var iconList = ["fa-dice-one",
            "fa-dice-two",
            "fa-dice-three",
            "fa-dice-four",
            "fa-dice-five",
            "fa-dice-six"];

// Functions

function random() {
    // returns a list of two random numbers
    var randomList = [1, 1];
    randomList[0] = Math.floor(Math.random() * 6);
    randomList[1] = Math.floor(Math.random() * 6);
    return randomList;
}

function winner(randomList) {
    // selects a winner out of both players
    var condition1 = randomList[0] > randomList[1]
    var condition2 = randomList[0] < randomList[1]
    if (condition1) {
        playerOneWinner();
    } else {
        if (condition2) {
            playerTwoWinner();
        } else {
            draw();
        }
    }
}

function playerOneWinner() {
    var list = document.querySelector("#sect").classList;
    var head = document.querySelector(".heading");
    var temp = list[1];

    list.replace(temp, "playerOneWins");
    head.innerHTML = "Player One Wins";
}

function playerTwoWinner() {
    var list = document.querySelector("#sect").classList;
    var head = document.querySelector(".heading");
    var temp = list[1];

    list.replace(temp, "playerTwoWins");
    head.innerHTML = "Player Two Wins";
}

function draw() {
    var list = document.querySelector("#sect").classList;
    var head = document.querySelector(".heading");
    var temp = list[1];

    list.replace(temp, "draw");
    head.innerHTML= "It's a Draw";
}

function rollDice() {
    var D1 = document.querySelector("#D1").classList;
    var D2 = document.querySelector("#D2").classList;
    var c1 = D1[1];
    var c2 = D2[1];
    
    var randomList = random();

    winner(randomList);

    D1.replace(c1, iconList[randomList[0]]);
    D2.replace(c2, iconList[randomList[1]]);
}