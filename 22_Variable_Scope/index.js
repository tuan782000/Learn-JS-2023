/*
    variable scope =  where a variable is recognized and accessible (local vs global).

    Phạm vi của biến = trong đó một biến được nhận dạng và có thể truy cập được (cục bộ so với toàn cầu).
*/


// Nếu khai báo như này sẽ báo lỗi
// let x = 1
// let x = 2

// Không báo lỗi, vì ta thực hiện gán giá trị lại cho x, không phải khai báo biến
// let x = 1
// x = 2

let x = 5

console.log(x, "Ban đầu")

// Hoàn toàn không báo lỗi
function example () {
    // x này nằm trong { } nên nó thuộc 1 phạm vi khác
    let x = 10
    console.log("x trong phạm vi của hàm", x)
}

example()


console.log("x khai báo ngoài phạm vi của hàm",x);

// 


// Khai báo biến có cùng tên nhưng nằm ở 2 hàm khác nhau là điều được cho phép người ta gọi biến đó là biến local, phạm vi hoạt động của nó là trong nội bộ của hàm đó

function1() // 1
function2() // 2

let z = 10; // z global

function function1 () {
    let y = 1;
    console.log(y)
}


function function2 () {
    let y = 2;
    console.log(y)
    // let z = 1; // nếu này bỏ comment thì z = 1
    console.log(z) // báo lỗi ngay, vì z không được khai báo trong hàm này. Nhưng nếu bên ngoài có biến z có tầm hoạt động global sẽ không báo lỗi, lúc này z = 10
}


