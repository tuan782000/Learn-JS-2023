/*
    Date objects = Objects that contain values that represent dates and times These date objects can be changed and formatted

    Đối tượng ngày = Các đối tượng chứa các giá trị biểu thị ngày và giờ. Các đối tượng ngày tháng này có thể được thay đổi và  định dạng
*/

// Date(year, month, day, hour, minute, second, ms)
const date = new Date()

console.log(date)

const example = new Date(2024, 1, 2, 3, 4, 5);

console.log(example)

const example1 = new Date("2024-01-02T12:00:00Z");

// Lấy năm hiện tại
const year = date.getFullYear();
console.log(year)

// Lấy tháng hiện tại
const month = date.getMonth() + 1;
console.log(month)

const day = date.getDate();
console.log(day)

const hour = date.getHours()
console.log(hour)

const minutes = date.getMinutes()
console.log(minutes)

const seconds = date.getSeconds()
console.log(seconds)

const dayOfWeek = date.getDay()
console.log(dayOfWeek)

const example2 = new Date();

example2.setFullYear(2024);
example2.setMonth(0);
example2.setDate(1);
example2.setHours(2);
example2.setMinutes(3);
example2.setSeconds(4);

console.log(example2)

const date1 = new Date("2023-12-31")
const date2 = new Date("2024-01-01")
// const date2 = new Date("2023-12-30")

if(date2 > date1) {
    console.log("Happy New Year!")
}
