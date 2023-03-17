// Run the game loop
// Store a move choice from a user (rock, paper, or scissors) in a variable
// Randomly generate the computer's move and store that in a variable
// Compare the two moves using the rock, paper, scissors rules to decide who won
// Rock beats scissors
// Scissors beats paper
// Paper beats rock
// Alert the winner and update the scores accordingly (wins, losses, and draws)
// Ask the player whether they want to play again

// console.log("Task 1");
// let playerMove = "scissors";
// let computerMove = "paper";


// if(playerMove === "rock" && computerMove === "paper"){
//     console.log("Computer wins")
// }

// if(playerMove === "rock" && computerMove === "scissors"){
//     console.log("Player wins")
// }

// if(playerMove === "rock" && computerMove === "rock"){
//     console.log("It's a draw")
// }

// if(playerMove === "scissors" && computerMove === "paper"){
//     console.log("Player wins")
// }

// if(playerMove === "scissors" && computerMove === "rock"){
//     console.log("Computer wins")
// }

// if(playerMove === "scissors" && computerMove === "scissors"){
//     console.log("It's a draw")
// }

// if(playerMove === "paper" && computerMove === "paper"){
//     console.log("It's a draw")
// }

// if(playerMove === "paper" && computerMove === "scissors"){
//     console.log("Computer wins")
// }

// if(playerMove === "paper" && computerMove === "rock"){
//     console.log("Player wins")
// }

//console.log("Task 2");

function getWinner(player1, player2) {
    if (player1 === player2) {
        return 0;
    }

    if (player1 === "rock" && player2 === "paper") {
        return -1;
  }

    if(player1 === "rock" && player2 === "scissors"){
        return 1;
    }

    if (player1 === "scissors" && player2 === "paper") {
        return 1;
        
    }

    if (player1 === "scissors" && player2 === "rock") {
        return -1;
        
    }

    if (player1 === "paper" && player2 === "scissors") {
        return -1;
        
    }

    if (player1 === "paper" && player2 === "rock") {
        return 1;
        
    }

}


  //let result = getWinner("paper", "scissors");

  //console.log(result); //tells us score

//   Using prompt, get a user-inputted value for the player move. Then call your function with that value as the player move and the hard-coded computer move. Display the result using alert.

// This will be deemed as complete when you can input any move for the player move and hard-code any move for the computer move and see the correct result (1, 0, or -1) in the alert.


min = 0
max = 3

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

 // console.log(getRandomInt(min,max));


  let arrayMoves = { 0:"rock", 
                     1:"paper",
                     2:"scissors"
};


// let userMove = prompt("What is your move? rock, paper or scissors?"); //human
// let botMove = arrayMoves[getRandomInt(min,max)];
// alert(`Your score is: ${getWinner(userMove, botMove)}`);
// console.log("task 4")
// console.log(botMove);

let playOn = true


let gamesPlayed = 0;
let numOfWins = 0;
let numOfLosses = 0;
let numOfDraws = 0;

let text = "Do you want to play again?"

//games played, wins, losses and draws.

//Task 5
let roundResult;

function checkMove(userMove) {
    if(userMove === null){
        return false;
   } 

   if(userMove == "rock"){
     return true;
   }
   else if(userMove == "paper"){
       return true; 
   }
   else if(userMove == "scissors"){
       return true; 
   }

   else {
       return false;
   }

}
let nameInvalid = true

function firstLetterCapital(str) {
    return /^[A-Z]/.test(str); //capital first letter-return true or false

  }

function onlyLetters(str) {
    return /^[A-Za-z]*$/.test(str);// checks letter- return true or false
  }

while (nameInvalid){

var username = prompt("Please enter a username. You cannot enter a username longer than 10 characters")

if (username.length > 10){
    alert ("Username is too long")
    playOn = false
} 

else if(!onlyLetters(username)){ //only letters
    alert("Please enter only letters");
}

else if(!firstLetterCapital(username)){ //check if username starts with a letter and it is capitalised
    alert("First letter needs to be capitalised");
} 

else {
    nameInvalid = false
    playOn = true
}
}


while(playOn){
    let userMove = prompt("What is your move? rock, paper or scissors?"); //human //if cancel then exit while loop
            // ! false == true
    if(!checkMove(userMove)){ //true when move is invalid
        alert("Move is invalid. Please try again.");

    } else {
   

    let botMove = arrayMoves[getRandomInt(min,max)];
    let result = getWinner(userMove, botMove)
    
    gamesPlayed++;

    if (result === -1) {
    numOfLosses ++;
    roundResult = "lost"
    }

    if (result === 0) {
    numOfDraws ++;
    roundResult = "drawn"
    }

    if (result === 1) {
    numOfWins ++;
    roundResult = "won"
    }

    alert(`
           ${username} you have ${roundResult} !
           Your opponent played ${botMove}
    
           You have played ${gamesPlayed} rounds 
           You have won ${numOfWins} rounds
           You have drawn ${numOfDraws} rounds
           You have lost ${numOfLosses} rounds`
    
    ); //getWinner returns us -1,0,1

    if (confirm(text) === true){
    playOn = true
    } else {
    playOn = false
    }

    }
}

//end of round



console.log("End of game")