
// function generatorPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
//     let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
//     let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let numberCaseChars = "0123456789"
//     let speacilChars = "!@#$%^&*()_+-="

//     let allowedChars = ""
//     let finalPassword = ""

//     allowedChars += includeLowercase ? lowerCaseChars : ""
//     allowedChars += includeUppercase ? upperCaseChars : ""
//     allowedChars += includeNumbers ? numberCaseChars : ""
//     allowedChars += includeSymbols ? speacilChars : ""

//     if (length <= 0) {
//         return `password length must be at least 1`;
//     }

//     if (allowedChars.length < 0) {
//         return `At least 1 set of character needs to be selected`;
//     }

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         finalPassword += allowedChars[randomIndex]
//     }

//     return finalPassword
// }

// document.getElementById('submit').addEventListener('click', function () {
//     event.preventDefault(); // Ngăn chặn hành động mặc định của form
//     const passwordLength = document.getElementById('passwordLength').value
//     const includeLowercase = document.getElementById('includeLowercase').checked
//     const includeUppercase = document.getElementById('includeUppercase').checked
//     const includeNumbers = document.getElementById('includeNumbers').checked
//     const includeSymbols = document.getElementById('includeSymbols').checked

//     // if(includeLowercase.checked) {
//     //     console.log("đã chọn")
//     // }


//     const password = generatorPassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)

//     document.getElementById("result").innerHTML = `Password tự động là: ${password}`
// })

import { generatorPassword } from './process.js';

document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();

    const passwordLength = document.getElementById('passwordLength').value
    // "checked" là chỉ dành cho input type là "checkbox" hoặc "radio", có check thì true, không check thì false
    const includeLowercase = document.getElementById('includeLowercase').checked
    const includeUppercase = document.getElementById('includeUppercase').checked
    const includeNumbers = document.getElementById('includeNumbers').checked
    const includeSymbols = document.getElementById('includeSymbols').checked

    const password = generatorPassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)

    document.getElementById('result').innerHTML = password
})


