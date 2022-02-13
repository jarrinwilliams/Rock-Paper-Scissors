//computer choice
const computerPlay = () => {
    let choices = ["Rock", "Paper", "Scissors"];
    random = Math.floor(Math.random() * choices.length);
    return choices[random];
};
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
const playGame = () => {
    // regex for testing if the user won
    let winTest = /win/;
    // regex for testing if the user lost
    let loseTest = /lose/;
    // user score
    let userWin = 0;
    //computer score
    let computerWin = 0
    for (let round = 1; round <= 5; round++) {
        let computerChoice = computerPlay();
        let userChoice = prompt("Rock, Paper, or Scissors");
        let oneRound = playRound(userChoice, computerChoice);
        console.log(oneRound);
        //checking to see the result of the playRound function
        if (winTest.test(oneRound)) {
            userWin++;
        } else if (loseTest.test(oneRound)) {
           computerWin++;
        };
        console.log(`User: ${userWin} Computer ${computerWin}`);
        console.log(`Round: ${round}`);
    }
    // checking to see who had the higher score after the rounds are up
    if (userWin > computerWin) {
        return "Congrats! You Win";
    } else if (userWin < computerWin) {
        return "Sorry! You lose";
    } else {
        return "Try again! You tied";
    }
};
console.log(playGame());