// destructuring =  extract values from arrays and objects, then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring


// 


// destructuring = trích xuất các giá trị từ mảng và đối tượng, sau đó gán chúng cho các biến một cách thuận tiện
// [] = để thực hiện việc phá hủy mảng
// {} = để thực hiện việc phá hủy đối tượng


// Ex 1:

// SWAP THE VALUE OF TWO VARIABLES: Chuyển đổi giá trị giữa 2 biến

let value1 = 10;
let value2 = 20;

[value1, value2] = [value2, value1]

console.log(value1)
console.log(value2)

// Ex 2:

// SWAP 2 ELEMENTS IN AN ARRAY: Chuyển đổi 2 giá  trị trong một mảng

const colors = ['red', 'green', 'blue', 'black', 'white'];

console.log(colors);

[colors[0], colors[4]] = [colors[4], colors[0]]
[colors[1], colors[3]] = [colors[3], colors[1]]

console.log(colors);


// Ex 3:
// ASSIGN ARRAY ELEMENTS TO VARIABLES: Gán mảng có chứa các phần tử vào biến

// Mảng đầu tiên
const colorsArr = ['red', 'green', 'blue', 'black', 'white'];

// Gán từng các elements vào biến

// Trường hợp 1: gán 1 giá trị vào cho 1 biến (chỉ chứa 1 giá trị, không phải mảng)
// Trường hợp 2: gán 2 giá trị vào cho 1 biến (tạo thành mảng con mới)

// Nhưng chỉ được đặt ở cuỗi cùng trường hợp 2 xảy ra

const [firstColor, secondColor, thirdColor, ...extraColor] = colorsArr;

console.log(firstColor) // rơi vào trường hợp 1
console.log(secondColor)
console.log(thirdColor)

console.log(extraColor) // rơi vào trường hợp 2

// Ex 4:
// EXTRACT VALUES FROM OBJECTS: trích xuất giá trị từ đối tượng

const person1 = {
    firstName: "Tuan",
    lastName: "Nguyen",
    age: 23,
    job: "IT"
}
const person2 = {
    firstName: "An",
    lastName: "Thien",
    age: 21,
    job: "BA"
}

// Lấy các cặp key value trong đối tượng person1 gán vào từng biến sau, trong quá trình gán này mình cũng có thể chỉnh sửa dữ liệu vẫn được
const { firstName, lastName, age, job = "Unemployee" } = person1

console.log(firstName)
console.log(lastName)
console.log(age)
console.log(job)


// Ex 5:
// DESTRUCTURING IN FUNCTION PARAMETERS: Destructuring tham số trong hàm

// Chỉ khi nào thằng đối tượng đó không có thì giá trị mặc định sẽ được gán vòa tham số, nó ngược lại với ở trên

function displayPerson({ name, price, type = "hard shit", desc }) {
    console.log(`name: ${name} price: ${price} type: ${type} desc: ${desc}`);
}

const product1 = {
    name: "T-shrit",
    price: 5.00,
    type: "coton",
    desc: "This is T-shrit"
}

const product2 = {
    name: "Jeans",
    price: 9.99,
    desc: "This is Jean"
}

displayPerson(product1)
displayPerson(product2)


