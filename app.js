let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let beatsMsg = document.querySelector("#msg-beats");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);  // Math.random is a class used to generate random numbers.
    return options[randIdx];                       // Math.floor is a class used to convet decimel numbers to non-decimel numbers.
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userscore++;
        userScorePara.innerHTML = userscore;
        msg.innerHTML = "You Win!";
        msg.style.backgroundColor = "rgba(47, 249, 47, 0.788)";
        msg.style.color = "white";
        beatsMsg.innerHTML = `Your ${userChoice} beats Computers ${compChoice}`;
    }
    else {
        compscore++;
        compScorePara.innerHTML = compscore;
        msg.innerHTML = "You Lose";
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        beatsMsg.innerHTML = `Computers ${compChoice} beats your ${userChoice}`;
    }

}

const playGame = (userChoice) => {
    // Generate Computer Choice
    const compChoice = genCompChoice();
    // Game Draw
    if(userChoice === compChoice){
        msg.innerHTML = "Game Was Draw. Play Again.";
        msg.style.backgroundColor = "#F8EDE3";
        msg.style.color = "black";
        beatsMsg.innerHTML = `Your choice ${userChoice} same as computers choice ${compChoice}`; 
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {  // userWin === "scissors"
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playGame(userChoice);
    });
});