let userScore = 0;
let compScore = 0;
// test
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw.")
    msg.innerText = "Game was draw.";
    msg.style.backgroundColor = "#081b31";
}

const userWin = () => {
    console.log("You win!")
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You win!";
    msg.style.backgroundColor = "green";
}

const compWin = () => {
    console.log("You lose.")
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You lose.";
    msg.style.backgroundColor = "red";
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice)
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice)

    if (userChoice === compChoice) {
        drawGame();
    } else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        userWin();
    } else {
        compWin();
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
