# Projects Related to DOM

## project link
[](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1 - Color changer

```javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button)
  button.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id
    }
  
  });
});

```

## Project 2 - BMI
```javascript
  const form = document.querySelector('form')

// this use case will give empty value 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit' , function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value) //to get value from input we get string value
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === ''|| height<0 || isNaN(height) ){
    results.innerHTML = `Please give a valid height ${height}`
  }
  else if(weight === ''|| weight<0 || isNaN(weight) ){
    results.innerHTML = `Please give a valid weight ${weight}`
  }
  else {
    const bmi = (weight /((height*height)/10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`
  }
})
```


## Project 3 - Clock

```javascript
// document.querySelector('#clock')
const clock = document.getElementById('clock')

let date = new Date()
console.log(date.toLocaleTimeString())

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
} , 1000)

```


## Project 4 - Number Guessing Game
 
```javascript
let randomNumber = parseInt(Math.random()*100+1)

const sumbit  = document.querySelector('#subt')
const userInput = document.getElementById('guessField')
const guessSlot  = document.querySelector('.guesses')
const remaining  = document.querySelector('.lastResult')
const lowOrHi  = document.querySelector('.lowOrHi')
const startOver  = document.querySelector('.resultParas') 

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame ){
  sumbit.addEventListener('click',function(e){
    e.preventDefault() //because it is a form we have to prevent values from going to server 
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  }) 
}

function validateGuess(guess){
   if(isNaN(guess)){
    alert("Please enter a valid number")
   }else if(guess<1){
    alert("Please enter a number greater than 1")
   }
   else if(guess>100){
    alert("Please enter a number less than 100")
   }else{
     prevGuess.push(guess)
     if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over , random numer was ${randomNumber}`)
      endGame()
     }
     else{
       displayGuess(guess)
       checkGuess(guess)
     }
   }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You Guessed it right`)
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`Number is tooo Low`)
  }else if(guess > randomNumber){
    displayMessage(`Number is tooo High`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess} ,` 
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame= false
  newGame()

}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    //now we have to reset all variables
    randomNumber =parseInt(Math.random()*100+1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
    lowOrHi.innerHTML = ''

  })
}


```