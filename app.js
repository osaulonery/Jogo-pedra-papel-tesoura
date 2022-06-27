const pcDisplay = document.getElementById('pc')
const userDisplay = document.getElementById('user')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let pcChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or possibleChoices.lenght
    
    if (randomNumber === 1) {
        pcChoice = '🪨'
    }
    if (randomNumber === 2) {
        pcChoice = '✂️'
    }
    if (randomNumber === 3) {
        pcChoice = '🧻'
    }
    pcDisplay.innerHTML = pcChoice
}

function getResult() {
    if (pcChoice === userChoice) {
       result = 'Empatou! 😐'     
    }
    if (pcChoice === '🪨' && userChoice === '🧻') {
       result = 'Ganhou miserávi 🤪'     
    }
    if (pcChoice === '🪨' && userChoice === '✂️') {
        result = 'Perdeu otáro 🤡'     
    }
    if (pcChoice === '🧻' && userChoice === '🪨') {
       result = 'Perdeu otáro 🤡'     
    }
    if (pcChoice === '🧻' && userChoice === '✂️') {
       result = 'Ganhou miserávi 🤪'     
    }
    if (pcChoice === '✂️' && userChoice === '🧻') {
       result = 'Perdeu otáro 🤡'     
    }
    if (pcChoice === '✂️' && userChoice === '🪨') {
       result = 'Ganhou miserávi 🤪'     
    }
    resultDisplay.innerHTML = result
        
}

