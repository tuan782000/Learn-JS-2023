/*
 rest parameters = (...rest) allow a function work with a variable number of arguments by building them into an array

 tham số còn lại = (...rest) cho phép hàm hoạt động với số lượng đối số thay đổi bằng cách xây dựng chúng thành một mảng

 spread = expands an array into spread elements
          mở rộng một mảng thành các phần tử trải rộng

 rest = bundles separate elements into an array
        bó các phần tử riêng biệt thành một mảng

*/


/* 
    rest parameters

    giúp bạn xử lý số lượng tham số biến đổi trong một hàm. 
    Khi bạn không biết chính xác có bao nhiêu tham số sẽ được truyền vào hàm, 
    bạn có thể sử dụng rest parameters để gom chúng lại thành một mảng.
*/

// Mình dùng rest parameters. ...foods Gom tất cả các tham số truyền vào thành 1 mảng, ở đây là mảng foods

function openFridge(...foods) {
    console.log(foods) // Kiểm tra xem nó phải là mảng hay không

    // Mình giải phóng mảng bằng spread operator
    console.log(...foods)
}

function getFood(...foods) {
    return foods
}

// Tạo ra các biến chứa các món ăn
const food1 = "pizza"
const food2 = "hamburger"
const food3 = "hotdog"
const food4 = "sushi"
const food5 = "bread"
const food6 = "ramen"

openFridge(food1, food2, food3, food4, food5, food6)

const foods = getFood(food1, food2, food3, food4, food5)
console.log(foods)



function openCar(...cars) {
    console.log(cars) // ['Mercedes', 'Toyota', 'Huyndai', 'Vinfast', 'BMW', 'Honda']
    console.log(...cars)
}

function getCar(...cars) {
    return cars
}

const car1 = "Mercedes"
const car2 = "Toyota"
const car3 = "Huyndai"
const car4 = "Vinfast"
const car5 = "BMW"
const car6 = "Honda"

openCar(car1, car2, car3, car4, car5, car6)

const cars = getCar(car1, car2, car3, car4, car5, car6)

console.log(cars)


function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

const totalSum = sum(1, 2, 3, 4, 5, 6)

console.log(totalSum);


function minus(...numbers) {
    let result = 100;
    for (let number of numbers) {
        result -= number
    }
    return result
}

const totalMinus = minus(19, 8, 7, 6)

console.log(totalMinus)


function multiline(...numbers) {
    let result = 1;
    for (let number of numbers) {
        result *= number;
    }
    return result;
}

const numMultiline = multiline(1, 2, 3, 4, 5, 6, 7);

console.log(numMultiline);


function divide(...numbers) {
    let result = 1000
    for (let number of numbers) {
        result /= number
    }

    return result
}

const numDivide = divide(1, 2, 3, 4, 5, 6, 7)

console.log(numDivide)



function getAvg(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number
    }
    return result / numbers.length
}

const numAvg = getAvg(100, 55, 33, 44, 22)
console.log(numAvg)


function bills(...items) {
    // console.log(items)
    let result = 0;
    for (let item of items) {
        result += item
    }
    return result
}

const billInRestaurant = bills(32, 56, 120, 1000);

console.log(`Your total bill is $${billInRestaurant}`)




function combineStrings(...items) {
    return items.join(' ')
}


const resultStrings = combineStrings("thai", "tuan", "7820", "@", "gmail", ".", "com")
console.log(resultStrings)
