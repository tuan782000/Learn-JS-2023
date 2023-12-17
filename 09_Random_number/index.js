// Random Number Generator

// Math.random() nó cho ra 1 số từ 0 đến 0.9
// Nhân 10 để làm tròn lên thành các số tự nhiên từ 0 đến 9
// Mình dùng hàm round để làm tròn xuống hoặc làm tròn lên

let number = Math.round(Math.random() * 10);

console.log(number);


let min = 50;
let max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);



const myButton = document.getElementById('myButton');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const minNumber = 1;
const maxNumber = 6;

let randomNumber1;
let randomNumber2;
let randomNumber3;

myButton.onclick = function() {
    // tạo ra số từ 0 đến 5.99 và làm tròn xuống sau đó + 1 để min là 1, max là 6
    randomNumber1 = Math.floor(Math.random() * maxNumber) + minNumber
    randomNumber2 = Math.floor(Math.random() * maxNumber) + minNumber
    randomNumber3 = Math.floor(Math.random() * maxNumber) + minNumber
    // thêm số đó vào trong nội dung nhãn
    label1.textContent = randomNumber1
    label2.textContent = randomNumber2
    label3.textContent = randomNumber3
}




