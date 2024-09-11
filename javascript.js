let humanScore = 0, draw = 0, computerScore = 0;

function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors" ];
    let randomNumber = Math.floor(Math.random() *3);
    return choices.at(randomNumber);
    
}

function getHumanChoice()
{
    return userChoice = prompt("your choice rock, paper or scissors").toLowerCase();
}


function playRound(humanChoice,computerChoise)
{
   
    if(  (humanChoice == "rock" && computerChoise == "scissors")
           ||(humanChoice == "paper" && computerChoise == "rock")
                ||(humanChoice == "scissors" && computerChoise == "paper"))
{
    humanScore++;
     console.log("You win " + humanChoice + " beats " + computerChoise); 
}

else if((humanChoice == "rock" && computerChoise == "rock")
    ||(humanChoice == "paper" && computerChoise == "paper")
         ||(humanChoice == "scissors" && computerChoise == "scissors"))
{
     draw++;
     console.log("draw");
}else{
    computerScore++;
     console.log("You lose " + humanChoice + " loses to " + computerChoise);
}

  
}







function playGame()
{
   
    let round = 5;
    for(let i = 0; i < round; i++)
    {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }

    
    if(humanScore > computerScore)
    {
        console.log("You win ");
    }else if(humanScore < computerScore)
    {
         console.log("You lose");
    }else{console.log("Draw");}
   
    console.log("Played 5 rounds won " + humanScore + " lost " + computerScore + " draws " + draw);
}

playGame()
