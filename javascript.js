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

        if (rounds === 5) {
            humanScore = 0
            computerScore = 0
            rounds = 0
            winner.textContent = ""
        }

        yourAction.textContent = `You chose ${humanChoice.toLowerCase()}.`
        computerAction.textContent = `The computer chose ${computerChoice.toLowerCase()}.`

        if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
            roundResult.textContent = "You draw! No points awarded."
        } else if ((humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSORS") || (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK") || (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "PAPER")) {
            roundResult.textContent = `You win! ${humanChoice.toUpperCase().slice(0, 1) + humanChoice.toLowerCase().slice(1)} beats ${computerChoice.toLowerCase()}.`
            humanScore += 1
        } else {
            roundResult.textContent = `You lose! ${computerChoice.toUpperCase().slice(0, 1) + computerChoice.toLowerCase().slice(1)} beats ${humanChoice.toLowerCase()}.`
            computerScore += 1
        }

        rounds += 1

        humanResult.textContent = `Human: ${humanScore}`
        computerResult.textContent = `Computer: ${computerScore}`
        roundCounter.textContent = `Round: ${rounds}`

        if (rounds === 5) {
            if (humanScore === computerScore) {
                winner.textContent = `You both scored ${humanScore} times, it's a draw!`
            } else if (humanScore > computerScore) {
                winner.textContent = `You win ${humanScore} to ${computerScore}! :)`
            } else {
                winner.textContent = `You lose ${computerScore} to ${humanScore}... :(`
            }
        }
        
    }

    let humanScore = 0
    let computerScore = 0
    let rounds = 0

    const yourAction = document.querySelector("#yourAction")
    const computerAction = document.querySelector("#computerAction")
    const roundResult = document.querySelector("#roundResult")

    const humanResult = document.querySelector("#humanResult")
    const computerResult = document.querySelector("#computerResult")
    const roundCounter = document.querySelector("#round")

    const winner = document.querySelector("#winner")

    const buttonList = document.querySelectorAll("#buttons > button")
    console.log(buttonList)

    buttonList.forEach((button) => {
        button.addEventListener("click", (e) => {
            let humanChoice = e.target.getAttribute("id")
            playRound(humanChoice, getComputerChoice())
        })
    })
}

playGame()