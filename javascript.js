function getComputerChoice() {
    let choice = ""
    let choicenum = Math.floor(Math.random() * 3)

    if (choicenum === 0) {
        choice = "Rock"
    } else if (choicenum === 1) {
        choice = "Paper"
    } else {
        choice = "Scissors"
    }

    return choice
}

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper or Scissors")

    return choice
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        console.log(`You chose ${humanChoice.toLowerCase()}.`)
        console.log(`The computer chose ${computerChoice.toLowerCase()}.`)

        if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
            console.log("You draw! No points awarded.")
        } else if ((humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSORS") || (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK") || (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "PAPER")) {
            console.log(`You win! ${humanChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}.`)
            humanScore += 1
        } else {
            console.log(`You lose! ${computerChoice.toLowerCase()} beats ${humanChoice.toLowerCase()}.`)
            computerScore += 1
        }
    }

    let humanScore = 0
    let computerScore = 0

    playRound(getHumanChoice(), getComputerChoice())
    console.log("")
    playRound(getHumanChoice(), getComputerChoice())
    console.log("")
    playRound(getHumanChoice(), getComputerChoice())
    console.log("")
    playRound(getHumanChoice(), getComputerChoice())
    console.log("")
    playRound(getHumanChoice(), getComputerChoice())
    console.log("")

    if (humanScore === computerScore) {
        console.log(`You both scored ${humanScore} times, it's a draw!`)
    } else if (humanScore > computerScore) {
        console.log(`You win ${humanScore} to ${computerScore}! :)`)
    } else {
        console.log(`You lose ${computerScore} to ${humanScore}... :(`)
    }
}

playGame()