// synchronous  = Executes line by line consecutively in a sequential manner
//                             Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed
//                               concurrently without waiting. Doesn't block the execution
//                               flow and allows the program to continue.
//                               (I/O operations, network requests, fetching data)
//                               Handled with: Callbacks, Promises, Async/Await


/*
 Đồng bộ = Thực hiện từng dòng một cách tuần tự, Code ở dưới phải chờ đoạn code trên thực hiện xong mới tới thực hiện
*/ 

/*
 Bất đồng bộ = Cho phép thực hiện nhiều thao tác đồng thời mà không cần chờ đợi. 
 Không chặn luồng thực thi và cho phép chương trình tiếp tục. 
 (Hoạt động I/O, yêu cầu mạng, tìm nạp dữ liệu) Lệnh gọi lại - callbacks, Lời hứa - Promise, Không đồng bộ/Đang chờ - async/await 
*/

// SYNCHRONOUS: Code đồng bộ, thực hiện task 1 xong mới thực hiện task 2 tương tự task 3
console.log("Task 1")
console.log("Task 2")
console.log("Task 3")



// ASYNCHRONOUS: Không đồng bộ
function func1(callback){
    setTimeout(() => {
        console.log("Task 1");
        callback()
    }, 3000);
}

// SYNCHRONOUS: Code đồng bộ
function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}


func1(func2);


// SYNCHRONOUS (bất đồng bộ) giống như là một người đang du hành thời gian có thể di chuyển ra khỏi dòng thời gian đó, phần còn lại của thế giới tiếp tục vận hành.



/*

func1 là 1 hàm, func2 là callbacks được đặt vào làm tham số cho func1,

vì func1 là ASYNCHRONOUS, lý do nó là ASYNCHRONOUS là nó có setTimeout. Nó phải chờ 3s sau nó thực hiện console.log, rồi mới gọi hàm callback

Đặc trưng của ASYNCHRONOUS là làm nhiều việc cùng 1 lúc, cho nên func2 vẫn được gọi và thực thi. Tuy nhiên chỉ khi nào setTimeout hết 3s thì đồng loạt trả về console.log và cacllback()

Và func2 là 1 hàm đồng bộ

*/

/*

Dưới đây là phân tích chi tiết:

func1 là một hàm bất đồng bộ (asynchronous) do có sử dụng setTimeout. Khi được gọi, nó sẽ chờ 3 giây trước khi thực hiện nhiệm vụ trong hàm (console.log và gọi callback).

func2 là một hàm đồng bộ (synchronous). Nó chỉ thực hiện các công việc console.log liên tục mà không chờ.

Khi bạn gọi func1(func2), func1 sẽ được thực thi. Tuy nhiên, vì nó là bất đồng bộ, nó sẽ đặt một timer và tiếp tục thực hiện các công việc khác mà không chờ đến khi timer kết thúc.

Trong khoảng 3 giây đợi, func2 được gọi và thực hiện các công việc console.log ("Task 2", "Task 3", "Task 4"). Các thông báo này xuất hiện ngay lập tức mà không phải chờ đến khi func1 hoàn thành.

Sau 3 giây, "Task 1" và sau đó callback được gọi. Nếu bạn muốn thêm một số logic vào callback, nó sẽ được thực hiện sau khi "Task 1" xuất hiện.

Vì vậy, code này thực hiện công việc một cách bất đồng bộ (asynchronously) bằng cách sử dụng setTimeout, nhưng các công việc khác cũng được thực hiện trong khoảng thời gian chờ này mà không phải chờ đến khi hàm bất đồng bộ hoàn thành.

*/ 

