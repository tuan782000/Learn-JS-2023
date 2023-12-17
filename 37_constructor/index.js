/*
// constructor = special method for defining the
//                          properties and methods of objects


// Hàm khởi tạo = một cái phương thức đặc biệt định nghĩa các thuộc tính và phương thức của đối tượng
*/

// Problem

const car1 = {
    make: "Ford",
    model: "Mustang",
    year: 2024,
    color: "red",
    drive: function () { console.log(`You drive the ${this.model}`) }
}

const car2 = {
    make: "Chevorlet",
    model: "Camaro",
    year: 2025,
    color: "blue",
    drive: function () { console.log(`You drive the ${this.model}`) }
}

const car3 = {
    make: "Dodge",
    model: "Changer",
    year: 2026,
    color: "silver",
    drive: function () { console.log(`You drive the ${this.model}`) }
}


// Bạn thấy code lặp khác nhiều

// Chính lý do đó mình sẽ tạo cho nó 1 cái khuôn để tạo ra các đối tượng
// Rút gọn thành công
function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function () { console.log(`You drive the ${this.model}`) }
}

const car4 = new Car("Honda", "Prologue", 2024, "red");
const car5 = new Car("Tesla", "Tesla S", 2024, "white")
const car6 = new Car("Vinfast", "VF6", 2024, "blue")

console.log(car4)
console.log(car4.make, car4.model, car4.year, car4.color)
car4.drive()

console.log(car5)
console.log(car5.make, car5.model, car5.year, car5.color)
car5.drive()


console.log(car6)
console.log(car6.make, car6.model, car6.year, car6.color)
car6.drive()