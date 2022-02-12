//computer choice
const computerPlay = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    random = Math.floor(Math.random() * choices.length);
    return choices[random];
};
//user choice
const userPlay = () => {
    return prompt("Rock, Paper, or Scissors?")
};
//a single round
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return `You: ${playerSelection.toLowerCase()} computer: ${computerSelection} You lose`;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return `You: ${playerSelection.toLowerCase()} computer: ${computerSelection} You win`;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return `You: ${playerSelection.toLowerCase()} computer: ${computerSelection} You win`;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection ==="Scissors") {
        return `You: ${playerSelection.toLowerCase()} computer: ${computerSelection} You lose`;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return `You: ${playerSelection.toLowerCase()} computer: ${computerSelection} You lose`;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        return `You: ${playerSelection.toLowerCase()} computer: ${computerSelection} You win`;
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return `You: ${playerSelection.toLowerCase()} computer: ${computerSelection} You tie`;
    }
};
//test to see the result of each round
const checkResult = (round) => {
    const winTest = /win/;
    const loseTest = /lose/;
    const tieTest = /tie/;
    userWin = 0;
    computerWin = 0;
    if (winTest.test(round)) {
         userWin += 1;
    } else if (loseTest.test(round)) {
        computerWin += 1;
    } return userWin;
}
console.log(checkResult(playRound(userPlay(), "Scissors")));
/* a game with 5 rounds that keeps the score and reports who won */
//loop through the play round 5 times
// keep score through a count and display it after every loop
// after 5 rounds declare a winner
// console.log(playRound(userPlay(), computerPlay()));
const game = () => {
    for (let round = 1; round <= 5; round++) {
        const userChoice = userPlay();
        console.log(playRound(userChoice, computerPlay()));
        console.log(`round count: ${round}`);
        
    
        
}};
// console.log(game())