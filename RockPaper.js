//building 'Rock Paper Scissor' Game


let userScore = 0;
let computerScore = 0;

//accessing
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");



choices.forEach((choice) => 
{
       
    choice.addEventListener("click", () => 
    {
        
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
                
    });
});

//generating computer choice
const genComputerChoice = () =>
{
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () =>
{
    console.log("GAME WAS DRAW");
    msg.innerText = "DRAW . PLAY AGAIN";
    msg.style.backgroundColor = "#deb887";
}

const showWinner = (userWin, userChoice, computerChoice) =>
{
    if(userWin)
    {
        userScore++
        userScorePara.innerText = userScore;

        // console.log("YOU WON");
        msg.innerText = `YOU WON! Your ${userChoice} beats Computer ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        computerScore++
        computerScorePara.innerText = computerScore;

        // console.log("YOU LOST");
        msg.innerText = `YOU LOSE! Computers ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }


}
   
const playGame = (userChoice) =>
{
   

    const computerChoice = genComputerChoice();
    

    if(userChoice === computerChoice)
    {
        //draw
        drawGame();
        
    }
    else
    {
        let userWin = true;

        if(userChoice === "rock")
        {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = computerChoice === "scissors" ? false : true;
        }
        else if(userChoice === "scissors")
        {
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice );
    }
};
