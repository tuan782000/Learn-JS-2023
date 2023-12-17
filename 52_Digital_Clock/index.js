// function updateClock(){

//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     const dateString = `${hours}:${minutes}:${seconds}`;

//     document.getElementById('clock').textContent = dateString;
// }

// updateClock();
// setInterval(updateClock, 1000);

// Cách 2:

// setInterval(function () {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0')
//     const minutes = now.getMinutes().toString().padStart(2, '0')
//     const seconds = now.getSeconds().toString().padStart(2, '0')

//     const times = `${hours}:${minutes}:${seconds}`

//     document.getElementById('clock').innerHTML = times
// }, 1000);


// Cách 3:
setInterval(() => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // .toString(): Chuyển đổi số nguyên giờ thành chuỗi ký tự.
    // .padStart(2, '0'): Thêm ký tự '0' vào đầu chuỗi nếu chiều dài của chuỗi là ít hơn 2. Mục đích là để đảm bảo rằng chuỗi ký tự biểu diễn giờ luôn có ít nhất 2 ký tự. Điều này hữu ích để đảm bảo rằng các giờ từ 0 đến 9 sẽ có dạng "01", "02", ..., "09" thay vì "1", "2", ..., "9".
    const timesNow = `${hours}:${minutes}:${seconds}`

    document.getElementById('clock').innerHTML = timesNow
    // console.log(date)
}, 1000)






