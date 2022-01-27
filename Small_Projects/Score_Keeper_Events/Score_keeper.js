//* The code we written is completed and it's working, but its contains some reduntants code, let's try to optimize it.

const p1={
    //* creating an object which contains all the property and methods in it. Grouping every thing with player 1 into the object of p1.

    score:0,
    button:document.querySelector('#p1Score'),
}

const p2={
    score:0,
    button:document.querySelector('#p2Score'),
}

let isGameOver = false;
const winningScoreSelect = document.querySelector("#playto");
let playingTo = 5;

function updateScores(player, opponent){
    if ((playingTo !== player.score) && (isGameOver === false)) {
      player.score++;
      player.button.textContent =player.score;
    } 
    else{
        isGameOver=true;
        player.button.classList.add('winner'); //* adding a winner class.
        opponent.button.classList.add('loser');
    }
}

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const resetButton=document.querySelector('#reset')
player1.addEventListener('click', function(){
    updateScores(p1,p2)
})

player2.addEventListener("click", function () {
  updateScores(p2, p1);
});

resetButton.addEventListener('click', resetGame);


function resetGame() {
  p1.score=0;
  p2.score=0;
  p1.button.textContent = p2.button.textContent = 0;
  isGameOver = false;
  //* Reseting the color classes which we applied when a rest button is pressed.
  p1.button.classList.remove("winner", "loser");
  p2.button.classList.remove("winner", "loser");
  //* disabling button when completed.
  p1.button.disabled=false;
  p2.button.disabled=false;
}

winningScoreSelect.addEventListener("change", function () {
  //* Option and select elements return the value in string, we need to convert them into the number.
  playingTo = parseInt(this.value);
  resetGame();
});




/*
let p1Score=document.querySelector('#p1Score');
let p2Score=document.querySelector('#p2Score');

console.log('h1');

const player1=document.querySelector('#player1');
const player2=document.querySelector("#player2");
const reset=document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#playto')
let isGameOver=false;

let playingTo=5;
let value1=0;
let value2=0;

player1.addEventListener('click', function(e){
    if(playingTo!=value1 & isGameOver===false){
    value1++;
    p1Score.textContent=value1;
    }
    else{
        isGameOver=true;
        p1Score.classList.add('winner'); //* adding a winner class.
        p2Score.classList.add('loser');
    }
})

player2.addEventListener('click', function(e){
    if(playingTo!=value2 && isGameOver===false){
    value2++;
    // h1.innerText=`${value1} to ${value2}`
    //* we can also do in an different way the same line which is written above.
    p2Score.textContent=value2;
    }
    else{
        isGameOver=true;
        p2Score.classList.add('winner');
        p1Score.classList.add('loser');
    }
})

reset.addEventListener('click',resetGame)
    
function resetGame(){
    value1=value2=0;
    p1Score.textContent=p2Score.textContent=value1;
    isGameOver=false;
    //* Reseting the color classes which we applied when a rest button is pressed.
    p1Score.classList.remove('winner', 'loser');
    p2Score.classList.remove('winner', 'loser');
}


winningScoreSelect.addEventListener('change', function(){
    //* Option and select elements return the value in string, we need to convert them into the number.
    playingTo=parseInt(this.value);
    resetGame();
})

*/