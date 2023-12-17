// let number = 0

// Lấy phần tử div để hiển thị kết quả
// let resultDiv = document.createElement('div');
// resultDiv.innerHTML = `${number}`;
// document.body.appendChild(resultDiv);

// let cong = document.getElementById('addition').onclick = function () {
//     number++
//     updateResult()
// }

// let tru = document.getElementById('subtraction').onclick = function () {
//     number--
//     updateResult()
// }

// let reset = document.getElementById('reset').onclick = function () {
//     number = 0
//     updateResult()
// }

// Hàm cập nhật hiển thị kết quả
// function updateResult() {
//     resultDiv.innerHTML = `${number}`;
// }


// Cách 2

// const increaseBtn = document.getElementById("increaseBtn");
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }


const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const countLabel = document.getElementById('countLabel');
let counter = 0;

increaseBtn.onclick = function () {
    counter++
    countLabel.textContent = counter;
}

decreaseBtn.onclick = function () {
    counter--;
    countLabel.textContent = counter;
}

resetBtn.onclick = function () {
    counter = 0;
    countLabel.textContent = counter;
}




