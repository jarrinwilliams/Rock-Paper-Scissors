//computer choice
const computerPlay = () => {
    let choices = ["Rock", "Paper", "Scissors"];
    random = Math.floor(Math.random() * choices.length);
    return choices[random];
};
//let computerChoice = computerPlay();
//a single round
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return `You: ${playerSelection} computer: ${computerSelection} You lose`;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return `You: ${playerSelection} computer: ${computerSelection} You win`;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return `You: ${playerSelection} computer: ${computerSelection} You win`;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection ==="Scissors") {
        return `You: ${playerSelection} computer: ${computerSelection} You lose`;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return `You: ${playerSelection} computer: ${computerSelection} You lose`;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        return `You: ${playerSelection} computer: ${computerSelection} You win`;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `You: ${playerSelection} computer: ${computerSelection} You tie`;
    }
};
//console.log(playRound(userChoice, computerChoice));
//test to see the result of each round
const checkResult = (round) => {
    let winTest = /win/;
    let loseTest = /lose/;
    let userWin = 0;
    let computerWin = 0;
    // checks if the user wins
    if (winTest.test(round)) {
        userWin += 1;
        //checks to see if the computer wins
    } else if (loseTest.test(round)) {
       computerWin += 1;
    } return [computerWin, userWin];
};
//console.log(checkResult(playRound(userChoice, "Scissors")));
/* a game with 5 rounds that keeps the score and reports who won */
//loop through the play round 5 times
// keep score through a count and display it after every loop
// after 5 rounds declare a winner
// console.log(playRound(userPlay(), computerPlay()));

const game = () => {
    let winTest = /win/;
    let loseTest = /lose/;
    let userWin = 0;
    let computerWin = 0
    for (let round = 1; round <= 5; round++) {
        let computerChoice = computerPlay();
        let userChoice = prompt("Rock, Paper, or Scissors");
        let oneRound = playRound(userChoice, computerChoice);
        console.log(oneRound);
        if (winTest.test(oneRound)) {
            userWin++;
        } else if (loseTest.test(oneRound)) {
           computerWin++;
        };
        console.log(`User: ${userWin} Computer ${computerWin}`);
        console.log(`Round: ${round}`)



    }
    if (userWin > computerWin) {
        console.log("Congrats! You Win");
    } else if (userWin < computerWin) {
        console.log("Sorry! You lose");
    } else {
        console.log("Try again! You tied");
    }
};
console.log(game())