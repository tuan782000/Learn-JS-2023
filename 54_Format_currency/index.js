// .toLocaleString() = returns a string with a language 
//                                  sensitive representation of a number
//                                  .toLocaleString("locale", {options});

let number = 123456.789;

// number = number.toLocaleString("en-US");
// number = number.toLocaleString("hi-IN");
// number = number.toLocaleString("de-DE");
// number = number.toLocaleString(undefined);

// number = number.toLocaleString("en-US", {style: "currency", currency: "USD"});
// number = number.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// number = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

//  Gọi phương thức toLocaleString trên số number để định dạng nó thành chuỗi ký tự theo quy tắc ngôn ngữ và định dạng số được chỉ định.

// "de-DE": Là mã ngôn ngữ tiếng Đức (Đức). Điều này xác định cách ngôn ngữ được sử dụng cho việc định dạng số và ngôn ngữ hiển thị.

// {style: "currency", currency: "EUR"}: Là một đối tượng cấu hình, trong đó:

// - style: "currency": Đặt kiểu định dạng là tiền tệ, tức là số sẽ được biểu diễn như một số tiền.
// - currency: "EUR": Đặt đơn vị tiền tệ là Euro (mã tiền tệ là EUR).


console.log(number);