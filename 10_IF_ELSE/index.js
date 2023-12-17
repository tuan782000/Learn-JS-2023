/*
    If Statement = if a condition is true, execute some code
                   if not, do something else
                   
    Câu điều kiện = Nếu một điều kiện là true thực thi đoạn code đó
                    Nếu không thì sẽ làm đoạn code khác

*/

let age = 25;

if (age >= 18) {
    console.log("You are old enough to enter this site")
} else if (age == 0) {
    console.log("You can't enter, you were just born")
} else if (age < 0) {
    console.log("You age can't be below 0")
} else if (age >= 100) {
    console.log("You are Too Old to enter this site")
} else {
    console.log("You are must be 18+ to enter this site")
}


let yourAge = 12
let hasLicense = false

if (yourAge >= 16) {
    console.log("You can learn License to drive")
    if (hasLicense) {
        console.log("You can drive")
    } else {
        console.log("You can not drive. Because you don't have license")
    }
} else {
    console.log("You are not old enough to learn License to drive")
}


const mySubmit = document.getElementById("mySubmit")
const myText = document.getElementById("myText")
const resultElement = document.getElementById("resultElement")
let myAge;

mySubmit.onclick = function(){
    myAge = myText.value
    myAge = Number(myAge)

    if (myAge >= 18) {
        resultElement.textContent = `You are old enough to enter this site`;
    } else if (myAge == 0) {
        resultElement.textContent = `You can't enter this site. Because you were just born`;
    } else if (myAge < 0) {
        resultElement.textContent = `You age is wrong`;
    } else if (myAge >= 100) {
        resultElement.textContent = `You are TOO OLD`;
    } else {
        resultElement.textContent = `You must be 18 enter this site`;
    }
}







