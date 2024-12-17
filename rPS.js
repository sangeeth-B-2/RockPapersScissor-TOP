let human = 0;
let computer = 0;
let tie = 0;

let options = ["ROCK", "PAPER", "SCISSORS"];
let results = ["you win", 'computer win', 'Its a Tie, Go Again']
let humanChoice;
let computerChoice; 
let touchRock = document.getElementById('optionOne');
let touchPaper = document.getElementById('optionTwo');
let touchScissor = document.getElementById('optionThree');
let ourChoiceNow;

function PlaySingleRound(humanChoice, computerChoice) {
    document.getElementById('ourChoice').textContent = '    '+ humanChoice;
    document.getElementById('compChoice').textContent = '    '+ computerChoice;
    const winCondition = {
        "ROCK": "SCISSORS",
        "PAPER": "ROCK",
        "SCISSORS": "PAPER"
    };

     
        if (humanChoice === computerChoice) {
            document.getElementById('currentRoundWinner').textContent = results[2];
            tie += 1;
        } else if (winCondition[humanChoice] === computerChoice) {
            document.getElementById('currentRoundWinner').textContent = results[0] + " " + 'This Round😏';
            human += 1;
        } else {
            document.getElementById('currentRoundWinner').textContent = results[1] + " " + 'This Round😲';
            computer += 1;
        }
        document.getElementById('ourScore').textContent = human;
        document.getElementById('compScore').textContent = computer;
    
        if (human === 5 || computer === 5) {
            // resetGame();
            document.querySelector('.scoreBoard').style.display = 'none';
            if (human===5){
                document.querySelector('#whoWon').style.display='block';
                document.querySelector('#whoWon').textContent='HUMAN WON !😎 CHEERS BUDDY🎉';
            } else if(computer===5){
                document.querySelector('#whoWon').style.display='block';
                document.querySelector('#whoWon').textContent='OH NO COMPUTER WON !😱 \nGET READY TO MEET GOD💀';
            }
        }  
} 




    function allMouseClick(button, choice, imgUrl) {

        button.textContent = '';
        button.style.backgroundImage = `url(${imgUrl})`;
        button.classList.add('btnOpp', 'btnImg',);
        humanChoice = choice;

        setTimeout(() => {
            button.style.backgroundImage = '';
            button.textContent = choice;
            button.classList.add('btn')
            button.classList.remove('btnOpp', 'btnImg');
        }, 750);
        computerChoice = options[(Math.floor(Math.random() * options.length))];
        PlaySingleRound(humanChoice, computerChoice);
    };
touchRock.addEventListener('click', () => allMouseClick(touchRock, options[0], "./img/rock.jpeg"));
touchPaper.addEventListener('click', () => allMouseClick(touchPaper, options[1], "./img/paper.jpeg"));
touchScissor.addEventListener('click', () => allMouseClick(touchScissor, options[2], "./img/scissors.jpg"));


let reset= document.querySelector('#resetButton');
reset.addEventListener('click',() => {

    human =0;
    computer=0;
    document.getElementById('currentRoundWinner').textContent='';
    document.getElementById('ourScore').textContent = '';
    document.getElementById('compScore').textContent = '';
    document.querySelector('.scoreBoard').style.display = 'block';
    document.getElementById('currentRoundWinner').textContent ='';
})