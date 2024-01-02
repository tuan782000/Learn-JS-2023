// Lấy danh sách các ảnh (slides) và khởi tạo biến:
const slides = document.querySelectorAll('.slides img')
let slideIndex = 0
let intervalId = null
/*
slides: Là một NodeList chứa tất cả các phần tử <img> bên trong phần tử có class là 'slides'.
slideIndex: Biến để theo dõi index của slide hiện tại.
intervalId: Biến để lưu trữ ID của interval, sử dụng để dừng hoặc bắt đầu interval.
*/

console.log(slides)
initaializeSlider()

// Gọi hàm initializeSlider khi DOM đã được tải:
document.addEventListener('DOMContentLoaded', initaializeSlider)
// Sự kiện này đảm bảo rằng đoạn mã sẽ chạy khi toàn bộ DOM đã được tải xong.

// Hàm initializeSlider:
function initaializeSlider() {
    if(slides.length > 0 ) {
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000)
    }
}

// Nếu có ít nhất một slide, thì thêm class 'displaySlide' cho slide đầu tiên và bắt đầu một interval để tự động chuyển slide sau mỗi 5000 milliseconds (5 giây).

function showSlide(index) {
    if(index >= slides.length){
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    })
    slides[slideIndex].classList.add("displaySlide")
}

/*
Hàm này được sử dụng để hiển thị slide ứng với index truyền vào. Nếu index vượt quá số lượng slides, nó sẽ quay lại slide đầu tiên. Nếu index là số âm, nó sẽ quay lại slide cuối cùng.
*/

function prevSlide() {
    clearInterval(intervalId)
    slideIndex--
    showSlide(slideIndex)
}

function nextSlide() {
    slideIndex++
    showSlide(slideIndex)
    clearInterval(intervalId)
}

/*
Hàm prevSlide và nextSlide được sử dụng để chuyển đến slide trước đó và slide tiếp theo, tương ứng. Interval sẽ được dừng trước khi chuyển slide và bắt đầu lại sau đó.
*/
