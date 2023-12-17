// ES6 Module = An external file that contains reusable code
//                          that can be imported into other JavaScript files
//                          Can contain variables, classes, functions ... and more
//                          Introduced as part of ECMAScript 2015 update

/*

Một tệp bên ngoài chứa mã có thể sử dụng lại có thể được nhập vào các tệp JavaScript khác. 
Có thể chứa các biến, lớp, hàm ... và hơn thế nữa. Được giới thiệu như một phần của bản cập nhật ECMAScript 2015


Nói đơn giản là lất các hàm biến,... từ file js này sang dùng cho file js khác.

Điều này có thể code các tính năng chính ở các file, xong gom về các file index.js sau đó đem file index.js link tới html
*/

// ---------- index.js ----------

// Cách import nhập
import { PI, getCircumference, getArea, getVolume } from './mathutil';

console.log(PI);
// Gọi hàm truyền tham số cho hàm xử lý, sau đó tạo ra biến và lưu nó vào biến 
const circumference = getCircumference(10);
// Gọi hàm truyền tham số cho hàm xử lý, sau đó tạo ra biến và lưu nó vào biến 
const area = getArea(10);
// Gọi hàm truyền tham số cho hàm xử lý, sau đó tạo ra biến và lưu nó vào biến 
const volume = getVolume(10);

// gọi in ra sau đó dùng hàm có sẵn toFixed để làm giữ 2 số phía sau .
console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);


