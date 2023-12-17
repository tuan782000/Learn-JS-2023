/*
    Function = A section of reusable code. Declare code once, use it whenever you want. Call the function to execute that code.

    Hàm = một khối lệnh. Được định nghĩa, sử dụng bất cứ khi nào bạn muốn. Bạn chỉ việc gọi hàm đó đoạn code đó sẽ thực thi
*/


// Đây là 1 hàm do bạn định nghĩa
function happyBirthDay () {
    console.log("Happy Birth Day to you")
    console.log("Happy Birth Day to you")
    console.log("Happy Birth Day")
    console.log("Happy Birth Day")
    console.log("Happy Birth Day to you")
};

// Gọi lại hàm đó thực hiện các đoạn code trong đó, thay vì lặp rất nhiều code
happyBirthDay();
happyBirthDay();
happyBirthDay();

// Hàm này có nhận tham số truyền vào
// parameter
function happyBirthDayAdvance(name, age) {
    console.log(`Happy Birth Day to ${name}`)
    console.log(`Happy Birth Day to ${name}`)
    console.log("Happy Birth Day")
    console.log("Happy Birth Day")
    console.log(`Happy Birth Day to ${name}`)
    console.log(`Congratulations ${age}`)
}

// Gọi hàm và thực hiện truyền dối số
// arguments
happyBirthDayAdvance("Tuan", 24);
happyBirthDayAdvance("Nguyen", 21);
happyBirthDayAdvance("Thai", 22);


// Hàm có return

function sumNumber (a ,b) {
    // Cách 1:
    // return a + b;

    // Cách 2:
    let result = a + b;
    return result;
}

let answer = sumNumber(3, 5) // Kết quả trả về: 8

console.log(answer); // Nhiệm vụ in ra


function subtraction (a, b) {
    let result = a - b;
    return result
}

console.log(subtraction(3, 1))

function multiply (a, b) {
    return a * b;
}

console.log(multiply(2, 2))

function divide (x, y) {
    return x /y
}

console.log(divide (4, 2))

function isEven (number) {
    if(number % 2 === 0) {
        console.log(`Number: ${number} is even`)
    } else {
        console.log(`Number: ${number} is not even`)
    }
}

isEven(2);

// Kiểm tra số chẵn

function isEvenAdvance (number) {
    return number % 2 === 0 ? `${number} is even` : `${number} is not even`;
}

let resultNumber = isEvenAdvance(2);

console.log(resultNumber)

// Check email addresses

function isValidEmail (email) {
    let validEmail = email.indexOf("@");

    if(validEmail === -1) {
        return 'Invalid email address'
    }

    return email
}

let emailValid = isValidEmail('email@gmail.com')

console.log(`Your email address is ${emailValid}`)