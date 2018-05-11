/*
GAME FUNCTION:
-Player must guess a number between a min and max
-Player gets a certain amount of guesses
-Notify player of gusses remaining
-Notify the player of the correct answer if looses
-Let player choose to play again
*/
/* // My code :) :) :) :) :)
// define the event of submit button
document.getElementById('guess-value').addEventListener('click',checkResult);




// define the checkResult function
function checkResult(e){
  const guessNumber = parseInt(document.querySelector('#guess-input').value);
  
  if(count>1 && guessNumber===5){
    alert('great...')
  }
  else if(count>1){
    count= count-1;
  }
  else
  {
    document.getElementById('guess-input').style.display= 'btn-danger';
  }

  e.preventDefault();
}



// select a guess number

const randGuess = Math.floor(Math.random()*10+1);
let count =3;

*/


// game values
let min = 1, max=10;
let winnigNum = Math.floor(Math.random()*(max-min+1)+min);
let guessleft = 3;

// UI element
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// create an event listner

guessBtn.addEventListener('click',function(){
let guess = parseInt(guessInput.value);
//validate
if(isNaN(guess) || guess< min|| guess> max){
  setMessage('Please enter a number between ${min} and ${max}', 'red')
}
// check if won
if(guess === winnigNum){
// disable the inout
guessInput.disabled = true;
// change the border color
guessInput.style.borderColor = 'green';
//set messege
setMessage('${winnigNum} is correct,you Win!','green');
}
else{
// wrong number
guessleft -= 1;
if(guessleft===0){
  // Game over -lost
// disable the input
guessInput.disabled = true;
// change the border color
guessInput.style.borderColor = 'red';
//set messege
setMessage('You lost.. the correct number was ${winningNum}','red');

}
else {
// Game continue - answer wrong
// disable the inout
guessInput.disabled = false;
// change the border color
guessInput.style.borderColor = 'red';
//set messege
setMessage('you have ${guessleft} guess Left','red');
// clear input
guessInput.value = '';

}

}

});

// set messege
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}