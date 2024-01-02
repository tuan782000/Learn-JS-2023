/*

JSON = (JavaScript Object Notation) data-interchange format 
              Used for exchanging data between a server and a web application
              JSON files {key:value} OR [value1, value2, value3]

JSON =  (JavaScript Object Notation) Định dạng kiểu dữ liệu. 
        Được sử dụng để trao đổi dữ liệu giữa máy chủ và ứng dụng web.
        JSON files {key:value} HOẶC [value1, value2, value3]

JSON.stringify() = converts a JS object to a JSON string.
JSON.stringify() = chuyển đổi từ 1 JS object sang JSON (chuỗi).

JSON.parse() = converts a JSON string to a JS object.
JSON.parse() = chuyển đổi 1 dữ liệu chuỗi thành một JS đối tượng
*/


// ---------- JSON.stringify() ----------

// Này là 1 đối tượng theo dạng [value1, value2, value3,...]
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]; // này là 1 mảng chứa các tên

// Này là 1 đối đượng theo dạng {key:value}
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};

// Này là 1 đối tượng theo dạng hỗn hợp giữa mảng và key-value: [value1, value2, value3,...]  {key:value} 
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}];

const jsonString = JSON.stringify(people); // chuyển đổi từ "đối tượng" sang "chuỗi"
console.log(jsonString);


// ---------- JSON.parse() ----------
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`; // này là 1 chuỗi
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`; // này là 1 chuỗi
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                                     {"name": "Patrick","age": 34,"isEmployed": false},
                                     {"name": "Squidward","age": 50,"isEmployed": true},
                                     {"name": "Sandy","age": 27,"isEmployed": false}]`; // này là 1 chuỗi

// Tiến hành chuyển đổi chuỗi thành đối tượng trong js
const parsedDataNames = JSON.parse(jsonNames);
console.log(parsedDataNames);

const parsedDataPerson = JSON.parse(jsonPerson);
console.log(parsedDataPerson);

const parsedData = JSON.parse(jsonPeople); // chuyển đổi từ chuỗi sang dạng JSON object
console.log(parsedData);

// ---------- fetch() ----------
// fetch là 1 function
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error));

// Lấy ra name cụ thể từ đối tượng people
fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.name)))
.catch(error => console.error(error));


// Lất ra age cụ thể từ đối tượng people
fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.age)))
.catch(error => console.error(error));


// đọ dữ liệu names.json sau đó lấy kết quả trả về dạng json
// fetch là 1 function gọi đế dữ liệu (tạo ra 1 promise), 1 promise sẽ có 2 trạng thái thành công hoặc thất bại.
// đi vào then để kiểm tra xem phải lời hứa được đảm bảo hay không, trong quá trình đó mà lỗi thì catch sẽ bắt lỗi.
// Nếu không có lỗi tiếp tục, cho đến khi nào có return thì dừng
fetch("names.json")
    .then(response => response.json())
    .then(values => values.forEach(value => {
        return console.log(value) // viết cụ thể, thường 1 dòng xóa return như ở trên
    }))
    .catch(error => console.error(error));
/*
fetch("names.json"): Hàm fetch được sử dụng để gửi một yêu cầu HTTP để tải nội dung của tệp "names.json". Hàm này trả về một Promise, chứa đối tượng Response.

.then(response => response.json()): Phương thức .then được sử dụng để xử lý kết quả của Promise trả về từ fetch. Trong trường hợp này, nó nhận đối tượng Response và sử dụng phương thức json() để chuyển đổi nội dung JSON của response thành một đối tượng JavaScript. Phương thức này trả về một Promise khác.


.then(values => values.forEach(value => console.log(value))): Phương thức .then tiếp theo được sử dụng để xử lý kết quả của Promise trả về từ bước trước đó. Nếu mọi thứ diễn ra thành công, nó nhận đối tượng JavaScript được phân tích từ JSON và sử dụng forEach để lặp qua mỗi phần tử trong mảng. Đối với mỗi phần tử, nó in giá trị ra console.

.catch(error => console.error(error)): Phương thức .catch được sử dụng để xử lý bất kỳ lỗi nào xảy ra trong quá trình gửi yêu cầu hoặc xử lý dữ liệu. Nếu có lỗi, nó sẽ in ra thông báo lỗi vào console sử dụng console.error.

Tóm lại, đoạn mã này thực hiện việc tải dữ liệu từ tệp JSON "names.json", chuyển đổi nó thành đối tượng JavaScript, và sau đó in ra từng giá trị của đối tượng đó ra console. Nếu có lỗi xảy ra trong quá trình này, nó sẽ được in ra console.
*/ 

// 



