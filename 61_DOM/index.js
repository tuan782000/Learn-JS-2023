/**
 * DOM = Document Object Model
 * Object { } that represents the page you see in the web browser and provides you with an API to interact with it
 * Web browser constructs the DOM when it looks an HTML document, and structures all the elements in tree-like representation
 * JavaScript can access the DOM dynamically change the content, structure, and style of a web page.
 * 
 * 
 * * DOM = Mô hình đối tượng tài liệu
Đối tượng { } đại diện cho trang bạn nhìn thấy trong trình duyệt web và cung cấp cho bạn API để tương tác với trang đó. Trình duyệt web xây dựng DOM khi nó trông giống một tài liệu HTML và cấu trúc tất cả các phần tử theo dạng biểu diễn dạng cây. JavaScript có thể truy cập DOM một cách linh hoạt để thay đổi nội dung, cấu trúc và kiểu dáng của trang web.
 * 
*/

console.log(document.title)

document.title = 'Learn DOM'
console.log(document.title)

document.body.style.backgroundColor = 'hsl(0,0%,15%)'

console.dir(document)

const userName = ""
const welcomeMessage = document.querySelector('#welcome-msg')

welcomeMessage.textContent += userName === "" ? "Guest" : userName
welcomeMessage.style.color = "white"