/*

"The Fisher–Yates shuffle is an algorithm for shuffling a finite sequence. 
The algorithm takes a list of all the elements of the sequence, 
and continually determines the next element in the shuffled sequence 
by randomly drawing an element from the list until no elements remain. 
The algorithm produces an unbiased permutation: every permutation is equally likely. 
The modern version of the algorithm takes time proportional to the number of items being shuffled and shuffles them in place."

 - Eberl, Manuel (2016). "Fisher–Yates shuffle". Archive of Formal Proofs. Retrieved 28 September 2023.



"Xáo trộn Fisher–Yates là một thuật toán xáo trộn một chuỗi hữu hạn. 
Thuật toán lấy danh sách tất cả các phần tử của chuỗi 
và liên tục xác định phần tử tiếp theo trong chuỗi được xáo trộn bằng cách vẽ ngẫu nhiên một phần tử từ danh sách 
cho đến khi không còn phần tử nào . Thuật toán tạo ra một hoán vị không thiên vị: mọi hoán vị đều có khả năng như nhau. 
Phiên bản hiện đại của thuật toán cần có thời gian tỷ lệ thuận với số mục được xáo trộn và xáo trộn chúng tại chỗ."

  - Eberl, Manuel (2016). "Fisher-Yates xáo trộn". Lưu trữ các bằng chứng chính thức. Truy cập ngày 28 tháng 9 năm 2023.

*/


// Fisher-Yates algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards)

// cards.sort(() => Math.random() - 0.5);
console.log(cards)

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]]
    }
}




