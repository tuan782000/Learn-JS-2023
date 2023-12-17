/**
 * arithmetic operators = operands (values, variables, etc.)
 *                        operators (+ - * /)
 *                        ex: 11 = x + 5; Find x = 11 - 5
 * 
 * Toán tử số học = toán tử (giá trị, biến,...)
 *                  Toán tử (+ - * /) addition: cộng, subtraction: trừ, multiplication: nhân, division: chia 
 *                  ex: 11 = x + 5; Find x = 11 - 5
*/

let studentInClass = 23;

// studentInClass = studentInClass + 1; // Toán tử cộng
// studentInClass = studentInClass - 1; // Toán tử trừ
// studentInClass = studentInClass * 2; // Toán tử nhân 
// studentInClass = studentInClass / 2; // Toán tử chia
// studentInClass = studentInClass ** 2; // Toán tử mũ
// studentInClass = studentInClass % 2;// Toán tử chia lấy dư (chỉ lấy (hiển thị) phần dư)

// Viết gọn lại
// agumented assignment operator - toán tử gán mở rộng 
// Nó cũng tương tự như trên thui viết ngắn gọn lại

// studentInClass += 1
// studentInClass -= 1
// studentInClass *= 2
// studentInClass /= 2
// studentInClass **= 2
// studentInClass %= 2

// studentInClass++
// studentInClass--


console.log(studentInClass)


/**
 * operator precedence: Độ ưu tiên của toán tử
 * 
 * 1. parenthesis ()
 * 2. exponents
 * 3. multiplication &  division & module
 * 4. addition & subtraction
 * 
 * Ưu tiên ngoặc trước, sau đó tới số mũ, sau đó phép nhân phép chia, cộng trừ, tính từ trái sang phải
 */

let result = 1 + 2 * 3 + 4 ** 2;

let numbers = 6 / 2 **( 2 + 5 )
            // 6/2^7 <=> 6/128 = 0.046875

console.log(result);

console.log(numbers);




