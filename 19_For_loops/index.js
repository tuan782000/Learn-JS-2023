// for loop = repeat some code a LIMITED amount of times

for (i = 0; i < 3; i++) {
    console.log(i)
    console.log("Hello world");
}

for (i = 2; i <= 10; i += 2) {
    console.log(i)
}

// Đếm ngược

for (i = 10; i > 0; i--) {
    console.log(i)
}

console.log("Happy New Year!!!")


for (i = 10; i > 0; i -= 2) {
    console.log(i)
}

for (i = 10; i > 0; i--) {
    if (i === 8) {
        continue // bỏ qua này tiếp tục chạy
    } else {
        console.log(i)
    }
}

for (i = 10; i > 0; i--) {
    if (i === 4) {
        break; // tới đây ngưng không chạy nữa tạm dừng
    } else {
        console.log(i)
    }
}
