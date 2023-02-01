//Spaceman

//grab dom elements and assign to variables
const gameImage = document.querySelector('.game-image')
const word = document.querySelector('.word')
const input = document.querySelector('.input')
const guessButton = document.querySelector('.guess-button')
const incorrectLetters = document.querySelector('.incorrect-letters')
const message = document.querySelector('.message')
const newGameButton = document.querySelector('.new-game-button')

//add event listeners
guessButton.addEventListener('click', guessLetter)
newGameButton.addEventListener('click', resetGame)
window.addEventListener('load', initializeGame)

//create game variables
const wordBank = ['toyota','honda','nissan','suzuki','mazda','subaru','mitsubishi','kawasaki','yamaha',]
let wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)]
let wordArray = []
let underscoreArray = []
let incorrectArray = []
// Magic Numbers should be in all caps and snake case
let guesses = 0
const maxGuesses = 6

//initialize game
function initializeGame() {
    //create word array from word to guess and display underscores
    wordArray = wordToGuess.split('')
    for (let i = 0; i < wordArray.length; i++) {
        underscoreArray.push('_')
    }
    word.innerHTML = underscoreArray.join(' ')
    //reset game variables
    guesses = 0
    incorrectArray = []
    incorrectLetters.innerHTML = incorrectArray
    message.innerHTML = ''
    //reset image
    gameImage.src = 'images/0.png'
    //reset input
    input.value = ''
}

//guess letter
function guessLetter() {
    //get input value
    let letter = input.value
    //check if letter is in word
    if (wordArray.includes(letter)) {
        //replace underscore with letter
        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === letter) {
                underscoreArray[i] = letter
            }
        }
        word.innerHTML = underscoreArray.join(' ')
        //check if word has been guessed
        if (!underscoreArray.includes('_')) {
            message.innerHTML = 'You win!'
        }
        //check if player is out of guesses
        } else if (guesses === maxGuesses) {
        message.innerHTML = 'You lose!'
        //add letter to incorrect array
        } else {
        incorrectArray.push(letter)
        incorrectLetters.innerHTML = incorrectArray
        //increment guesses
        guesses++
        //update image
        gameImage.src = `images/${guesses}.png`
        }
    //reset input
    input.value = ''
}

//reset game
function resetGame() {
    //reset word to guess
    wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)]
    //reset word array
    wordArray = []
    //reset underscore array
    underscoreArray = []
    //reset incorrect array
    incorrectArray = []
    //reset guesses
    guesses = 0
    //initialize game
    initializeGame()
}