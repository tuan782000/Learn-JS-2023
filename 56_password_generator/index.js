// // RANDOM PASSWORD GENERATOR

// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+-=";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     if(length <= 0){
//         return `(password length must be at least 1)`;
//     }
//     if(allowedChars.length === 0){
//         return `(At least 1 set of character needs to be selected)`;
//     }

//     for(let i = 0; i < length; i++){
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }

//     return password;
// }

// const passwordLength = 10;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength, 
//                                  includeLowercase, 
//                                  includeUppercase, 
//                                  includeNumbers, 
//                                  includeSymbols);

// console.log(`Generated password: ${password}`);


// Tự code lại


// Bước 1: khai báo ra các trường hợp password sẽ có
// Bước 2: viết hàm nhận vào tất cả các trường tương ứng
// Bước 3: gọi hàm và truyền tham số tương ứng
// Bước 4: khai báo các rule chữ thường, chữ hoa, số, ký tự đặc biệt, lưu kết quả sau và kết quả cuối cùng
// Bước 5: cộng dồn các option nếu có, kiểm tra có hay không bẳng toán tử 3 ngôi
// Bước 6: check điều kiện cái ký có rơi vào các trường hợp như độ dài = 0 hoặc số ký tự nhận nhỏ hơn 0, nếu bị thông báo lỗi ngay
// Bước 7: Dùng vòng lặp để trạo ra các passowrd ngẫu nhiên
// Bước 8: trả về password

// B2: viết hàm nhận vào tất cả các trường tương ứng
// function generatePassword(passwordLength, passwordLowerCase, passwordUppercase, passwordNumber, passwordSpecialCharacter) {
//     // Bước 4: khai báo các rule chữ thường, chữ hoa, số, ký tự đặc biệt, lưu kết quả sau và kết quả cuối cùng
//     let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
//     let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let numberChars = "0123456789"
//     let speacilChars = "!@#$%^&*()_+-="

//     let allowedChars = ""
//     let password = ""
//     // Bước 5:
//     allowedChars += passwordLowerCase ? lowerCaseChars : ""
//     allowedChars += passwordUppercase ? upperCaseChars : ""
//     allowedChars += passwordNumber ? numberChars : ""
//     allowedChars += passwordSpecialCharacter ? speacilChars : ""
//     // Bước 6:
//     if(passwordLength <= 0){
//         return `(password length must be at least 1)`;
//     }

//     if(allowedChars.length === 0){
//         return `(At least 1 set of character needs to be selected)`;
//     }
//     // Bước 7:
//     for (let i = 0; i < passwordLength; i++) {
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex]
//     }
//     // Bước 8:
//     return password
// }

// // B1: khai báo ra các trường hợp password sẽ có
// const passwordLength = 10;
// const passwordLowerCase = true;
// const passwordUppercase = true;
// const passwordNumber = true;
// const passwordSpecialCharacter = true

// // B3: gọi hàm và truyền tham số tương ứng, đồng thời gán vào biến, sau này lấy cái biến này đại diện cho password có thể dùng nhiều nơi
// const resultPassword = generatePassword(passwordLength, passwordLowerCase, passwordUppercase, passwordNumber, passwordSpecialCharacter)

// console.log(`${resultPassword}`)


function generatorPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numberCaseChars = "0123456789"
    let speacilChars = "!@#$%^&*()_+-="

    let allowedChars = ""
    let finalPassword = ""

    allowedChars += includeLowercase ? lowerCaseChars : ""
    allowedChars += includeUppercase ? upperCaseChars : ""
    allowedChars += includeNumbers ? numberCaseChars : ""
    allowedChars += includeSymbols ? speacilChars : ""

    if (length <= 0) {
        return `password length must be at least 1`;
    }

    if (allowedChars.length < 0) {
        return `At least 1 set of character needs to be selected`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        finalPassword += allowedChars[randomIndex]
    }

    return finalPassword
}

document.getElementById('submit').addEventListener('click', function () {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    const passwordLength = document.getElementById('passwordLength').value
    const includeLowercase = document.getElementById('includeLowercase').checked
    const includeUppercase = document.getElementById('includeUppercase').checked
    const includeNumbers = document.getElementById('includeNumbers').checked
    const includeSymbols = document.getElementById('includeSymbols').checked

    // if(includeLowercase.checked) {
    //     console.log("đã chọn")
    // }


    const password = generatorPassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)

    document.getElementById("result").innerHTML = `Password tự động là: ${password}`
})



