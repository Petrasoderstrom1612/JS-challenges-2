/* SWITCH STATEMENT */ 

function selectItem(item) {
    let price = 0
    
    switch(item) {
      
        case 'coffee':   // item === 'coffee'
            price = 2
            break 
        case 'sandwiches':
            price = 5
            break
        case 'salad':
            price = 4
            break  
        case 'lemon cake':
            price = 3 
            break
        default:
            return `Sorry, we don't sell ${item}`
    }
    return `You selected ${item}. That will be $${price}`
}

console.log(selectItem('lemon cake'))

/* ----------------------------------------------------------------- */

// TERNARY - storing the ternary into a const variable

const age = 50

const message = age > 18 ? 'You can buy alcohol.' : 'Illegal. You are under age'

console.log(message)

/* ----*/

const age2 = 15
let message2 =""

age2 > 18 ? message2 = 'You can buy alcohol.' : message2 = 'Illegal. You are under age'

console.log(message2)

/* ----------------------------------------------------------------- */

// TERNARY - 3 conditions

const exerciseTimeMins = 330

// let message3
// if (exerciseTimeMins < 30) {
//     message3 = 'You need to try harder!'
// }
// else if(exerciseTimeMins < 60) {
//     message3 = 'Doing good!'
// }
// else {
//     message3 = 'Excellent!'
// } 

const message3 = exerciseTimeMins < 30 ? 'You need to try harder!' : 
                 exerciseTimeMins < 60 ? 'Doing good!' : 
                 'Excellent!'

console.log(message3)

// TERNARY - 3 conditions GUESS THE RIGHT NUMBER

const playerGuess = 11
const correctAnswer = 6

const hint = playerGuess === correctAnswer ? 'Correct!' : 
                playerGuess > correctAnswer ? "too high" :
                "too low"
console.log(hint)

/* ----------------------------------------------------------------- */

//HACKER CODE innerHTML <button onclick="document.getElementById('film-list-app').innerHTML='<h1>Now I own your site 😭</h1>'">Click Me ☣️</button>

const filmInput = document.getElementById('film-input')
const addBtn = document.getElementById('add-btn')
const filmList = document.getElementById('film-list')

addBtn.addEventListener('click', function() {
/*
    filmList.innerHTML += `                                   this code can get hacked with the button above
        <div class="film-item">${filmInput.value}</div>
        `
        filmInput.value = ''
*/
    const oneFilmItem = document.createElement("div") //create div
    oneFilmItem.classList.add("film-item") //add class to it
    oneFilmItem.textContent = filmInput.value //add value in between of the html tags
    filmList.appendChild(oneFilmItem) //add the entire div to a dom as a child element so it interacts with the render
    filmInput.value = '' //clear the input value field in dom
}) 

/* ----------------------------------------------------------------- */

//FUNVTION

console.log(getSpendAlert(200))

function getSpendAlert(amount) {
    return `Warning! You just spent £${amount}!`
}

/*------------------*/

//FUNCTION EXPRESSION

const getSpendAlert2 = function(amount){
    return `Warning! You just spent £${amount}!`
}

console.log(getSpendAlert2(150))