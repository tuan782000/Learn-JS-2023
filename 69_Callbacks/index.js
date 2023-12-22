// Callback Hell = Situation in JavaScript where callbacks 
//                            are nested within other callbacks to the
//                            degree where the code is difficult to read.
//                            Old pattern to handle asynchronous functions.
//                            Use Promises + async/await to avoid Callback Hell

/*

Tình huống trong JavaScript trong đó các lệnh gọi lại (callbacks) được lồng trong các lệnh gọi lại (callbacks) khác đến mức khó đọc mã. Mẫu cũ để xử lý các hàm không đồng bộ. Sử dụng Promises + async/await để tránh Callback Hell.

*/


// // Task 1
// function Task1() {
//     console.log("Task 1 completed")
// }
// // Task 2
// function Task2() {
//     console.log("Task 2 completed")
// }
// // Task 3
// function Task3() {
//     console.log("Task 3 completed")
// }
// // Task 1
// function Task4() {
//     console.log("Task 4 completed")
// }

// Task1()
// Task2()
// Task3()
// Task4()

// console.log("All tasks completed")



// // Task 1
// function Task1() {
//     setTimeout(() => {
//         console.log("Task 1 completed")
//     }, 2000)
// }
// // Task 2
// function Task2() {
//     setTimeout(() => {
//         console.log("Task 2 completed")
//     }, 1000)
// }
// // Task 3
// function Task3() {
//     setTimeout(() => {
//         console.log("Task 3 completed")
//     }, 3000)
// }
// // Task 4
// function Task4() {
//     setTimeout(() => {
//         console.log("Task 4 completed")
//     }, 1500)
// }

// Task1()
// Task2()
// Task3()
// Task4()

// console.log("All tasks completed")


//2 4 1 3



// Task 1
function Task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completed")
        callback();
    }, 2000)
}
// Task 2
function Task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completed")
        callback();
    }, 1000)
}
// Task 3
function Task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completed")
        callback()
    }, 3000)
}
// Task 4
function Task4(callback) {
    setTimeout(() => {
        console.log("Task 4 completed")
        callback()
    }, 1500)
}

// Nó sẽ thực hiện xong task 1 rồi mới thực hiện task 2 tương tự cho 3 và 4
Task1(() => {
    Task2(() => {
        Task3(() => {
            Task4(() => {
                console.log("All tasks completed")
            })
        })
    })
})