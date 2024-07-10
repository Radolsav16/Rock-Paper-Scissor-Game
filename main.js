const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const resetBtn = document.querySelector('.reset-game');
//Gets buttons from DOM

const pickedPersonText = document.querySelector('.pick-something-person');
const pickedComputerText = document.querySelector('.pick-something-computer');

// Gets text that shows picked choices


const resultP = document.querySelector(".result-p");

// Get p element  that shows the result

const   computerWins = document.querySelector('.computer-count');
const   personWins = document.querySelector('.person-count');

// get score p from DOM

const wins = {
    person:0,
    computer:0
}

//Create Object which will safe a wins of computer and person

const computerMove = ()=> {
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = '';
    
    if(randomNumber === 0){
        choice = 'rock';
    }else if(randomNumber === 1){
        choice = 'paper';
    }else {
        choice = 'scissor'
    }

    return choice;
    
    
}

// Make random choice function for computer choice



const resetGame = () => {
    pickedPersonText.innerHTML = `You picked : `
    pickedComputerText.innerHTML = `Computer pick : `
    wins.person = 0;
    wins.computer = 0;
    computerWins.textContent = wins.computer;
    personWins.textContent= wins.person;
     resultP.textContent = '';
}

// this is the function that restart the game

const makeChanges = (personChoice)=>{
    const computerChoice = computerMove();
    pickedPersonText.innerHTML += `<img src="images/${personChoice}.jfif"></img>`;
    pickedComputerText.innerHTML += `<img src="images/${computerChoice}.jfif"></img>`;
    let result = '';
    if(personChoice === 'paper' && computerChoice === 'rock'){
        result = 'win'
    }else if(personChoice === 'rock' && computerChoice === 'scissor'){
        result = 'win'
    }else if(personChoice === 'scissor' && computerChoice === 'paper'){
        result = 'win'
    }else if(personChoice === computerChoice){
        result = 'draw'
    }else{
        result = 'lose';
    }

    if(result === 'win'){
        resultP.textContent = 'You Win !!!!!!!!!'
        wins.person++;
    }else if(result === 'lose'){
        resultP.textContent = 'You lose !!!!!!!!'
        wins.computer++;;
    }else{
        resultP.textContent = 'Draw !!!!!!!!'
    }

    computerWins.textContent = wins.computer;
    personWins.textContent= wins.person;


}

// this is the main function that takes the input and makes changes in the page



rockBtn.addEventListener('click',()=>{
const personChoice = 'rock';
makeChanges(personChoice);
})

paperBtn.addEventListener('click',()=>{
const personChoice = 'paper';
makeChanges(personChoice);
})

scissorBtn.addEventListener('click',()=>{
const personChoice = 'scissor';
makeChanges(personChoice);
})


resetBtn.addEventListener('click',resetGame);





// Here is the functionality of the page