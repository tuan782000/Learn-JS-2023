/*

// arrow functions = a concise way to write function expressions good for simple functions that you use only once
//                                (parameters) => some code

Hàm mũi tên = một cách ngắn gọn để viết các biểu thức hàm phù hợp với các hàm đơn giản mà bạn chỉ sử dụng một lần

*/


const gretting = (name, age) => {
    console.log(`Hello ${name}`)
    if (age < 18) {
        console.log(`You are ${age} old, You too young`)
    } else {
        console.log(`You are ${age} old, You too old`)
    }
}
gretting("Tuan", 23)

// setTimeout(callback, 1000)

setTimeout(() => {
    console.log("Hello world")
}, 1000)

const numbers = [1, 2, 3, 4, 5, 6]

// map bốc mảng cũ cho vào mảng mới

const squares = numbers.map((number) => Math.pow(number, 2))
console.log(squares)

const cubes = numbers.map((number) => Math.pow(number, 3))
console.log(cubes)


// filter là lọc kết quả cho vào mảng mới

// Cách 1:
const evenNum = numbers.filter((number) => {
    if (number % 2) {
        return number
    }
})

console.log(evenNum)

// Cách 2:
const evenNumber = numbers.filter((number) => number % 2 === 0)
console.log(evenNum)

// Cách 1:
const oddNum = numbers.filter((number) => {
    if (!(number % 2)) {
        return number
    }
})
console.log(oddNum)

// Cách 2:
const oddNumber = numbers.filter((number) => number % 2 === 0)
console.log(oddNum)

const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 10)
console.log(total)

/*
    reduce(callback, 10) // hàm thực hiện, 10 là giá trị khởi tạo
    reduce(() => {}, 10)
*/

// accumulator: Tham số tích lũy: || Ngoài ta nó còn phụ thược tham số thứ 2 truyền trong reduce
// currentValue: Tham số hiện tại: trong mảng đó
// initialValue: giá trị khởi tạo || tham số này là optional có thể có hoặc có thể không







