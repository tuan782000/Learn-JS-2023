// 2D array = multi-dimensional array that stores a matrix of data in rows and columns. Useful for games, spreadsheets, or representing images 

// mảng đa chiều lưu trữ ma trận dữ liệu theo hàng và cột. Hữu ích cho trò chơi, bảng tính hoặc trình bày hình ảnh


// Mảng 2 chiều 

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/*
    [X, O, X],
    [O, X, O],
    [O, X, O]
*/

matrix[0][0] = 'X';
matrix[0][1] = 'O';
matrix[0][2] = 'X';

matrix[1][0] = 'O';
matrix[1][1] = 'X';
matrix[1][2] = 'O';

matrix[2][0] = 'O';
matrix[2][1] = 'X';
matrix[2][2] = 'O';

// Dùng vòng lặp lấy ra số dòng từ mảng matrix
for (let row of matrix) {
    // Mỗi hàng sẽ có các phần tử bên trong và thêm ' ' cho mỗi phần tử bên trong 
    const rowString = row.join(' ');
    console.log(rowString);
}


// Create telephone

const phone = [
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
    ['*', 0, '#']
]

for(let number of phone) {
    const numberOnPhone = number.join(' ')
    console.log(numberOnPhone)
}