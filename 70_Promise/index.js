// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"

/*
   Lời hứa = Một đối tượng quản lý các hoạt động không đồng bộ. Bao bọc Đối tượng hứa hẹn xung quanh {mã không đồng bộ} "Tôi hứa sẽ trả về một giá trị"
*/

// PENDING => RESOLVE or REJECTED
// new Promise((resolve, reject) => {asynchronous code}) 

// DO THESE CHORES IN ORDER - Làm những công việc này theo thứ tự

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH


// Mô phỏng lại callback hell

// function walkDog(callback) {
//     setTimeout(() => {
//         console.log("You walk the dog 🐕")
//         callback()
//     }, 1500)
// }


// function cleanTheKitchen(callback) {
//     setTimeout(() => {
//         console.log("You clean the kitchen 🧹")
//         callback()
//     }, 2500)
// }

// function takeOutTrash(callback) {
//     setTimeout(() => {
//         console.log("You take out the trash ♻")
//         callback()
//     }, 500)
// }

// // Dẫn tới callbacks hell

// walkDog(() => {
//     cleanTheKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all the chores!")
//         })
//     })
// })

// chores: công việc nhà (chor sịt)


// function doWalkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You walk the dog 🐕")
//         }, 1500)
//     })
// }

// function doCleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You clean the kitchen 🧹")
//         }, 2500)
//     })
// }

// function doTakeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You take out the trash ♻")
//         }, 500)
//     })
// }

// doWalkDog().then((value) => { console.log(value); return doCleanKitchen() })
//     .then(value => { console.log(value); return doTakeOutTrash() })
//     .then(value => { console.log(value); return console.log('You finished all the chores!') })


// Gọi hàm này. Nếu thành công thì thực hiện then, vì then sẽ có value cho nên đem value vào hàm arrowFucntion thực hiện in kết quả đồng thời mình trả về một cái gọi hàm cho công việc tiếp theo.



function doWalkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkDog = true;
            if (walkDog) {
                resolve("You walk the dog 🐕")
            } else {
                reject("You DIDN't walk the dog")
            }
        }, 1500)
    })
}

function doCleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanKitchen = true;
            if (cleanKitchen) {
                resolve("You clean the kitchen 🧹")
            } else {
                reject("You DID NOT cleaning the kitchen")
            }
        }, 2500)
    })
}

function doTakeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takeOutTrash = true;
            if (takeOutTrash) {
                resolve("You take out the trash ♻")
            } else {
                reject("You DID NOT take out the trash")
            }
        }, 500)
    })
}

doWalkDog().then((value) => { console.log(value); return doCleanKitchen() })
    .then(value => { console.log(value); return doTakeOutTrash() })
    .then(value => { console.log(value); return console.log('You finished all the chores!') })
    .catch(error => { console.error(error) })