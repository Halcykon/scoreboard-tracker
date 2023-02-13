// GLOBAL VARIABLES

let Player1ScoreBoard = document.getElementById("Player1ScoreBoard")
let Player2ScoreBoard = document.getElementById("Player2ScoreBoard")

P1Score = 0
P2Score = 0

// PLAYER 1

function P1add1pt(){
    P1Score += 1
    Player1ScoreBoard.textContent = P1Score
}

function P1add2pts(){
    P1Score += 2    
    Player1ScoreBoard.textContent = P1Score
}

function P1add3pts(){
    P1Score += 3
    Player1ScoreBoard.textContent = P1Score
}

// PLAYER 2

function P2add1pt(){
    P2Score += 1
    Player2ScoreBoard.textContent = P2Score    
}

function P2add2pts(){
    P2Score += 2
    Player2ScoreBoard.textContent = P2Score    
}

function P2add3pts(){
    P2Score += 3
    Player2ScoreBoard.textContent = P2Score    
}

// RESET GAME

function resetGame() {
    P1Score = 0
    P2Score = 0
    Player1ScoreBoard.textContent = P1Score
    Player2ScoreBoard.textContent = P2Score        
}
