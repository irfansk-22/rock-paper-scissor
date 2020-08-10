var p1 = "player 1";
var p2 = "player 2";

var selectP1 = document.querySelector(".player1");
var selectP2 = document.querySelector(".player2");
var selectImg1 = document.querySelector(".img1");
var selectImg2 = document.querySelector(".img2");

//get dynamic year for copyright
var currentYear = document.querySelector(".year");
var year = new Date().getFullYear();
currentYear.innerHTML = year;

//function for editing names
function editNames() {

    p1 = prompt("Player 1, What is your Name?");
    p2 = prompt("Player 2, What is your Name?");

    const check1 = ((p1.length === 0) && (p2.length === 0));
    const check2 = ((p1.length > 0) && (p2.length === 0));
    const check3 = ((p1.length === 0) && (p2.length > 0));

    if (check1) {
        selectP1.innerHTML = "player 1";
        selectP2.innerHTML = "player 2";
    } else if (check2) {
        selectP1.innerHTML = p1;
        selectP2.innerHTML = "player 2";
    } else if (check3) {
        selectP1.innerHTML = "player 1";
        selectP2.innerHTML = p2;
    } else {
        selectP1.innerHTML = p1;
        selectP2.innerHTML = p2;
    }
}

//The game logic goes in this function
function play() {

    const stone = 1, paper = 2, scissor = 3;

    var randomNumber1 = Math.floor((Math.random() * 3) + 1);
    var randomNumber2 = Math.floor((Math.random() * 3) + 1);
    selectImg1.setAttribute("src", "images/rps" + randomNumber1 + ".png");
    selectImg2.setAttribute("src", "images/rps" + randomNumber2 + ".png");

    if (randomNumber1 == stone && randomNumber2 == paper) {
        player2Wins();
    }
    else if (randomNumber1 == paper && randomNumber2 == stone) {
        player1Wins();
    }
    else if (randomNumber1 == stone && randomNumber2 == scissor) {
        player1Wins();
    }
    else if (randomNumber1 == scissor && randomNumber2 == stone) {
        player2Wins();
    }
    else if (randomNumber1 == scissor && randomNumber2 == paper) {
        player1Wins();
    }
    else if (randomNumber1 == paper && randomNumber2 == scissor) {
        player2Wins();
    }
    else
        draw();
}

function player1Wins() {
    document.querySelector("h1").innerHTML = (p1 + " Wins! 🚩");
    selectImg1.classList.add("winner");
    selectImg2.classList.remove("winner");
}

function player2Wins() {
    document.querySelector("h1").innerHTML = (p2 + " Wins! 🚩");
    selectImg2.classList.add("winner");
    selectImg1.classList.remove("winner");
}


function draw() {
    document.querySelector("h1").innerHTML = " Draw! 🤝";
    selectImg1.classList.remove("winner");
    selectImg2.classList.remove("winner");
}