const generatorPassword = (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) => {
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

    if (allowedChars === "") {
        return 'Nên chọn ít nhất là 1 phương thức tạo passwords'
    }

    if (length <= 0) {
        return 'Nên nhập con số lớn hơn 0 vào ô input'
    }

    for (let i = 0; i < length; i++) {
        // Biến này lưu cái giá trị được lấy tự động
        // Chọn 1 số tự động 0 - 0.9 sau đó nhân với độ dài của chuỗi "allowedChars"
        // cuối cùng là làm tròn số đó lên
        const randomIndex = Math.floor(Math.random() * allowedChars.length)

        // Việc lấy ra 1 con số cụ thể, để dùng chọn ra ký tự

        // gán kết quả cuối cùng vào trong finalPassword
        finalPassword += allowedChars[randomIndex]

        // cứ mỗi lần vòng lăp chạy nó sẽ chọn ra đc 1 index cụ thể, sau đó += vào finalPassword cho đến khi nào vòng lặp kết thúc
    }

    return finalPassword

}

export { generatorPassword }