// Async/Await = Async = makes a function return a promise
//                            Await = makes an async function wait for a promise

//               Allows you write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue


/**
 * Async/Await = Async(không đồng bộ) = makes a function return a promise (Làm một function trả về 1 promise)
 *               Await = makes an async function wait for a promise - Chờ đợi = làm cho hàm async chờ một lời hứa
 * 
 * Cho phép bạn viết mã không đồng bộ theo cách đồng bộ Async không có tham số giải quyết hoặc từ chối Mọi thứ sau Chờ đợi được đặt trong hàng đợi sự kiện
*/

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

// Làm 1 function trả về 1 promise
async function doChores() {
    try {
        //   chờ đợi lời hứa
        const walkDog = await doWalkDog()
        console.log(walkDog)
        const cleanKitchen = await doCleanKitchen()
        console.log(cleanKitchen)
        const takeOutTrash = await doTakeOutTrash()
        console.log(takeOutTrash)
        console.log("You finsihed all the chores!");
    } catch (error) {
        console.error(error)
    }

}

doChores()