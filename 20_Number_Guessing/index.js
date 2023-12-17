const max = 100
const min = 1
let numberMachine = Math.floor(Math.random() * (max - min + 1)) + min

let attemps = 0
let guessNumber
let running = true

while(running) {
    guessNumber = window.prompt(`Guess a number between ${min} to ${max}`)
    guessNumber = Number(guessNumber)

    if(isNaN(guessNumber)){
        window.alert("Please enter a number")
    } else if (guessNumber < min || guessNumber > max) {
        window.alert("Please enter a valid number")
    } else {
        attemps++
        if (guessNumber > numberMachine) {
            window.alert("Number TOO HIGH! TRY AGAIN!")
        } else if (guessNumber < numberMachine) {
            window.alert("Number TOO LOW! TRY AGAIN!")
        } else {
            window.alert(`Congratulations, The answer was ${numberMachine}. It took you ${attemps} attempts`)
            running = false
        }
    }

}




