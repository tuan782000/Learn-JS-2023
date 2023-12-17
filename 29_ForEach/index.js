// // forEach() = method used to iterate over the elements 
//                     of an array and apply a specified function (callback)
//                     to each element

//                     array.forEach(callback)
//                     element, index, array are provided

// element và index được mảng cung cấp



/*
forEach() = phương thức được sử dụng để lặp lại các phần tử của một mảng và áp dụng một hàm đã chỉ định (gọi lại) cho từng phần tử
*/


// Example 1:

let numbers = [1, 2, 3, 4, 5, 6, 7]

numbers.forEach(function (number) {
    console.log(number)
    document.getElementById('myP').innerHTML += `${number} </br>`
})

numbers.forEach(function (number, index, array) {
    let result = array[index] = number * 2
    document.getElementById('myP2').innerHTML += `${result} </br>`
})

numbers.forEach(function (number, index, array) {
    let result = array[index] = number * 3
    document.getElementById('myP3').innerHTML += `${result} </br>`
})

numbers.forEach(function (number, index, array) {
    let result = array[index] = Math.pow(number, 2)
    document.getElementById('myP4').innerHTML += `${result} </br>`
})

// Example 2

let fruits = ["apple", "banana", "coconut", "strawberry", "orange", "pineapple"]

fruits.forEach(function(fruit){
    console.log(fruit)
    document.getElementById('myP5').innerHTML += `${fruit} </br>`
})

fruits.forEach(function(fruit){
    let result = fruit.toUpperCase();
    document.getElementById('myP6').innerHTML += `${result} </br>`
})

fruits.forEach(function(fruit){
    let result = fruit.toLowerCase();
    document.getElementById('myP7').innerHTML += `${result} </br>`
})

// Viết hoa chữ cái đầu
fruits.forEach(function(fruit){
    // Logic ở đây là: 
    // Step 1: mình cắt từ khóa đầu của từng thằng fruit ra 
    // Step 2: sau đó viết hoa chữ đó lên, 
    // Step 3: sau đó dùng slice cắt từ vị trí thứ 2 cho đến hết của thằng fruit
    // Step 4: Ghép cả 2 thành 1 từ (bằng cách cộng chuỗi)
    let result = fruit.charAt(0).toUpperCase() + fruit.slice(1)
    document.getElementById('myP8').innerHTML += `${result} </br>`
})
