// JavaScript ARRAYS of OBJECTS are easy! 🍎

// array of objects
// access object properties
// push()
// pop()
// splice()
// forEach()
// map()
// filter()
// reduce()

const fruits = [
    { name: "apple", color: "red", calories: 95 },
    { name: "orange", color: "orange", calories: 45 },
    { name: "banana", color: "yellow", calories: 105 },
    { name: "coconut", color: "white", calories: 159 },
    { name: "pineapple", color: "yellow", calories: 37 }
];
// Đây là 1 mảng có chứa các object 

// Access properties of a fruit object: Truy cập các thuộc tính một đối tượng trái cây
// Truy cập đến đối tượng trái cây
console.log(fruits[0])
// Truy cập đến thuộc tính cụ thể
console.log(fruits[0].name)
console.log(fruits[0].color)
console.log(fruits[0].calories)

// test
for (const i in fruits) {
    console.log(fruits[i])
}
console.log("----------------------")



// Add a new fruit object: Thêm 1 đối tượng trái cây mới vào cuối mảng
fruits.push({ name: "strawberry", color: "red", calories: "70" })

// test
for (const i in fruits) {
    console.log(fruits[i])
}
console.log("----------------------")





// Remove the last fruit object: Xóa đối tượng trái cây cuối cùng trong mảng
fruits.pop();
// test
for (const i in fruits) {
    console.log(fruits[i])
}
console.log("----------------------")




// Remove fruit objects by indices: Loại bỏ các đối tượng trái cây theo chỉ số
fruits.splice(1, 2) // cắt từ vị trí của phần tử thứ 2 và số lượng cắt là 2 object || trường hợp 1 tham số thì chỉ là vị trí cắt từ đó cho đến hết
// test
for (const i in fruits) {
    console.log(fruits[i])
}
console.log("----------------------")





// ---------- forEach() ----------
fruits.forEach(fruit => console.log(fruit)); // Lặp từng đối tượng
fruits.forEach(fruit => console.log(fruit.name)); // Lặp riêng tên
fruits.forEach(fruit => console.log(fruit.color)); // Lặp riêng màu
fruits.forEach(fruit => console.log(fruit.calories)); // Lặp riêng calories



console.log("-------------------------------")

// ---------- map() ----------
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames); // lấy ra tên của các đối tượng xong cho vào mảng
console.log(fruitColors); // lấy ra màu của đối tượng xong cho vào mảng
console.log(fruitCalories); // lấy ra calories của đối tượng xong cho vào mảng

console.log("-------------------------------")


// ---------- filter() ----------
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow"); // lọc ra các name thỏa điều kiện cho vào mảng
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // lọc ra các đối tượng có thỏa điều kiện cho vào mảng
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100); // lọc ra các đối tượng có thỏa điều kiện cho vào mảng

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

console.log("-------------------------------")

// ---------- reduce() ----------
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(maxFruit);
console.log(minFruit);

