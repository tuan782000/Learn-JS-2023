// let tempInput = document.getElementById('tempInput')
// const submitBtn = document.getElementById('submitBtn')
// let result = document.getElementById('result')

// const Fa = document.getElementById('Fa')
// const Ce = document.getElementById('Ce')

// submitBtn.onclick = function() {
    
//     tempInput = Number(tempInput.value)
//     // if(isNaN(tempInput.value)) {
//     //     return result.innerText = "Something is wrong"
//     // }
        
//     console.log(tempInput)
//     if(Fa.checked) {
//         functionFA(tempInput)
//         clearInput()
//     } 
    
//     if (Ce.checked){
//         functionC(tempInput)
//         clearInput()
//     }
// }

// function functionFA (tempInput) {
//     let a = ((tempInput * 9/5) + 32).toFixed(2)
//     return result.innerHTML = `${a} F`;
// }

// function functionC (tempInput) {
//     let b = ((tempInput - 32) * 5/9).toFixed(2)
//     return result.innerHTML = `${b} C`
// }

// function clearInput () {
//     document.getElementById("myForm").reset()
// }



const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit"; 
    }
}