

function getComputerChoice()
{
    let choice;
    let number =  Math.floor(Math.random() * 3);

    if(number === 0)
    {
        return "rock";
    }else if(number === 1)
    {
        return  "paper";
    }else if(number === 2)
    {
        return "scissors"
    }


    

    return choice;
}




function getHumanChoice()
{
    let userInput = prompt("Enter your choice: Rock, Paper, Scissors");

    return userInput.toLowerCase();

}












    function playGame()
    {
        let humanScore = 0;
        let computerScore = 0;



        
            function playRound(humanChoice,computerChoice)
            {

                if(humanChoice === "rock" && computerChoice === "scissors"
                || humanChoice === "paper" && computerChoice === "rock"
                || humanChoice === "scissors" && computerChoice === "paper"
                )
                {
                    alert("You win " + humanChoice + " beats " + computerChoice);
                    humanScore++;

                }else if(humanChoice === computerChoice)
                {
                    console.log("Draw");
                    alert("Draw: You picked " + humanChoice + " Computer picked " + computerChoice );
                }else
                {
                    alert("You lose " + computerChoice + " beats " + humanChoice);
                    computerScore++;
                }

                console.log("Game Score: " + (humanScore + computerScore) + "\n" + "Your Score: " +humanScore + "\n" + "Computer Score: " + computerScore);
                
            }


        for(let i = 0;i < 5;i++)
        {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            
            playRound(humanSelection, computerSelection);
        }

        if(computerScore > humanScore)
        {
            console.log("You lose ");
        }else{console.log("You win")}

        if(computerScore == humanScore)
        {
            playRound(humanSelection, computerSelection);
        }

    }

    
    
        playGame();
    



console.log();