// closure = A function defined inside of another function, 
//                  the inner function has access to the variables 
//                  and scope of the outer function.
//                  Allow for private variables and state maintenance
//                  Used frequently in JS frameworks: React, Vue, Angular


/*
Closure = Một hàm được định nghĩa bên trong một hàm khác, 
          hàm bên trong có quyền truy cập vào các biến và phạm vi của hàm ngoài. 
          Cho phép các biến riêng tư và bảo trì trạng thái. 
          Được sử dụng thường xuyên trong các framework JS: React, Vue, Angular
*/

// ex1

function outer() {
    let mess = "Hello" // work, vì mess này nó trong phạm vi outer và inner cũng trong phạm vi outer nên dùng được
    
    function inner() {
        console.log(mess)
    }
    inner()
}

mess = "Goodbye" // không hoạt động được vì mess không thuộc outer, nằm ngoài phạm vi hoạt động của hàm

outer();



// ex2

function createCounter() {

    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    return {increment, getCount};
}
 
const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`Current count: ${counter.getCount()}`);

// ex3

function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    
    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`The final score is ${game.getScore()}pts`);

