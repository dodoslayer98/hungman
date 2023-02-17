const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
"Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
"Bermuda", "Bhutan", "Bolivia", "Botswana", "Brazil", "Brunei", "Bulgaria",  "Burundi", 
"Cambodia", "Cameroon", "Canada",  "Chad", "Chile","China", "Colombia", "Croatia", "Cuba", 
"Cyprus", "Denmark", "Djibouti","Dominica", "Ecuador", "Egypt",  "Eritrea", "Estonia", "Ethiopia", 
"Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
"Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
 "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
 "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",  "Mauritania", 
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
   "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",  "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", 
   "Pakistan", "Palau", "Panama",  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
    "Rwanda","Saint Lucia", "Samoa",  "Senegal","Serbia",  "Singapore", "Slovakia", "Slovenia", "Somalia",  "Spain", "Sudan"]

const playButtonEl = document.getElementById('play-button')
const guessButtonEl = document.getElementById('guess-button')
const statusbarEl = document.getElementById('status-bar')

let activePuzzle
let incorrectGuesses = 0
let usedLetters = [];
let correctLetter = []

playButtonEl.addEventListener('click', function(){
    activePuzzle = (countries[Math.floor(Math.random() * countries.length)]).toLowerCase()
    const divContainer = document.getElementById("letter-row")
    incorrectGuesses = 0
    usedLetters.length = 0
    correctLetter.length = 0
    divContainer.innerHTML= ''
    clearHungMan()
    statusbarEl.textContent = 'ENTER YOUR GUESS'
    console.log(activePuzzle)

    for (let i = 0; i<activePuzzle.length;i++){
        const newDisplay = document.createElement('div')
        newDisplay.setAttribute('id',`${i}`)
        // console.log(`${activePuzzle.length - i}`)
        newDisplay.setAttribute('class','square')
        // const divContainer = document.getElementById("letter-row")
        divContainer.appendChild(newDisplay)
    }
})


guessButtonEl.addEventListener('click',function(){
    const inputTextEl = document.getElementById('input-textbox').value.toLowerCase()
    const letterIsUsed = usedLetters.includes(inputTextEl);
    const foundMatch = activePuzzle.includes(inputTextEl)
    // console.log(`${letterIsUsed} letter has been used`)
    // console.log(`${foundMatch} letter is in the puzzle`)

    if (correctLetter.length == activePuzzle.length){
        statusbarEl.textContent = `YOU WON! CLICK PLAY TO RESTART`
    }else if(incorrectGuesses>=5){
        statusbarEl.textContent = `YOU LoSt, tHE CoUNtRy wAS ${activePuzzle.toUpperCase()}. PRESS PLAY TO RESTART.`
    }else{
        if (!letterIsUsed && foundMatch){
            for(let i = 0;i<activePuzzle.length;i++){
                if(inputTextEl==activePuzzle[i]){
                    const squareDisplay = document.getElementById(`${i}`)
                    console.log(squareDisplay)
                    squareDisplay.textContent = activePuzzle[i]
                    correctLetter.push(inputTextEl)
                    usedLetters.push(inputTextEl)
                    console.log(correctLetter)
                }  
            }
        } else if(letterIsUsed) {
            statusbarEl.textContent = 'This letter has already been used'

        } else {
                usedLetters.push(inputTextEl)
                incorrectGuesses++
                    if(incorrectGuesses <=5){
                        const bodyParts = document.getElementById(`body${incorrectGuesses}`)
                        bodyParts.style.backgroundColor = "black"
                    }
                    // else if(incorrectGuesses>5){
                    //     statusbarEl.textContent = `You loser, the country was ${activePuzzle}. Press PLAY to restart game.`
                    // }



        }
    }
        
})

function clearHungMan(){
    for(i=1;i<6;i++){
        const bodyParts = document.getElementById(`body${i}`)
        bodyParts.style.backgroundColor = "white" 
    }
}