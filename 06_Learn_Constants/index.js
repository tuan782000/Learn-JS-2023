// const = a variable that can't be changed

// const = là một hằng số, biến đó không thể thay đổi

const PI = 3.14159; // định nghĩa số PI
let radius; // tạo biến bán kính
let circumference; // đường tròn

radius = window.prompt("Enter the radius of a circle"); // cho người dùng nhập cái bán kính
radius = Number(radius); // chuyển đổi dữ liệu người dùng nhập từ chuỗi thành số

circumference = 2 * PI * radius; // Công thức tính Chu vi của một vòng tròn.

circumference = circumference.toFixed(2); // Làm tròn các số thập phân đi 2 chữ số

console.log(circumference); // in ra đường tròn trong console

document.getElementById('result').textContent = `Circumference is ${circumference} cm` // In ra giao diện


// Diện tích Hình tròn: PI * radius^2
// PI khai báo trên, radius người nhập ở trên
// Tính diện tích xong làm tròn
let S = (PI * radius**2).toFixed(2);

// Tạo ra 1 thẻ chứa kết quả và lưu vào biến tên là result
const result = document.createElement('div')

// đưa nội dung vào bên trong thẻ
result.innerHTML = `Diện tích đường tròn là: ${S} cm`

// đưa thẻ vào trong body
document.body.appendChild(result)



// Advanced Enter input

document.getElementById('submit').onclick = function () {
    radius = document.getElementById('myText').value 
    radius = Number(radius)
    let Dien_Tich =  (PI * radius**2).toFixed(2)
    let Chu_Vi = (2 * PI * radius).toFixed(2)
    console.log(Dien_Tich)
    console.log(Chu_Vi)
    
    
    const resultDienTich = document.createElement('div')
    resultDienTich.innerHTML = (`Diện tích hình tròn là ${Dien_Tich} cm`)
    const resultChuVi = document.createElement('div')
    resultChuVi.innerHTML = (`Chu vi hình tròn là ${Chu_Vi} cm`)

    document.body.appendChild(resultChuVi);
    document.body.appendChild(resultDienTich);
}



