var p1 = "player 1";
var p2 = "player 2";

function editNames() {

    p1 = prompt("Player 1, What is your Name?");
    p2 = prompt("Player 2, What is your Name?");

    var check1 = ((p1.length === 0) && (p2.length === 0));
    var check2 = ((p1.length > 0) && (p2.length === 0));
    var check3 = ((p1.length === 0) && (p2.length > 0));

    if (check1) {
        document.querySelector(".player1").innerHTML = "player 1";
        document.querySelector(".player2").innerHTML = "player 2";
    } else if (check2) {
        document.querySelector(".player1").innerHTML = p1;
        document.querySelector(".player2").innerHTML = "player 2";
    } else if (check3) {
        document.querySelector(".player1").innerHTML = "player 1";
        document.querySelector(".player2").innerHTML = p2;
    } else {
        document.querySelector(".player1").innerHTML = p1;
        document.querySelector(".player2").innerHTML = p2;
    }
}

function play() {

    const stone = 1, paper = 2, scissor = 3;

    var randomNumber1 = Math.floor((Math.random() * 3) + 1);
    var randomNumber2 = Math.floor((Math.random() * 3) + 1);
    document.querySelector(".img1").setAttribute("src", "images/rps" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/rps" + randomNumber2 + ".png");

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
    document.querySelector(".img1").classList.add("winner");
    document.querySelector(".img2").classList.remove("winner");
}

function player2Wins() {
    document.querySelector("h1").innerHTML = (p2 + " Wins! 🚩");
    document.querySelector(".img2").classList.add("winner");
    document.querySelector(".img1").classList.remove("winner");
}

function draw() {
    document.querySelector("h1").innerHTML = " Draw! 🤝";
    document.querySelector(".img1").classList.remove("winner");
    document.querySelector(".img2").classList.remove("winner");
}

