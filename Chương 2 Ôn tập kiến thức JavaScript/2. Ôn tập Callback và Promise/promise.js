//Promise
//Tạo một Promise mới
// const promise = new Promise((resolve, reject) => {
//     console.log('chạy lần 1'); // In ra thông điệp "chạy lần 1"
//     resolve('thành công'); // Giải quyết Promise thành công với giá trị "thành công"
// });

// // Xử lý kết quả của Promise khi nó được giải quyết thành công
// promise.then((ketqua) => {
//     console.log('chạy lần 3', ketqua); // In ra thông điệp "chạy lần 3" cùng với giá trị "thành công"
// });

// console.log('chạy lần 2'); // In ra thông điệp "chạy lần 2"

// callback
// function callback(){
//     console.log("xin chào bạn")
// }
// setTimeout(callback,2000)

// // ví dụ chuyển từ callback sang Promise
// // Tạo một Promise mới có tên là getData
// const getData = new Promise((resolve, reject) =>{
//     // Sử dụng setTimeout để giả định một tác vụ bất đồng bộ, trong trường hợp này là đợi 1 giây
//     setTimeout(() =>{
//         // Khi tác vụ hoàn thành thành công, gọi hàm resolve với giá trị là '1'
//         resolve('1')
//     }, 1000)
// })

// // Xử lý kết quả trả về từ Promise getData
// getData.then((res) => {
//     // In ra giá trị trả về từ Promise khi nó đã được giải quyết
//     console.log(res)
// })


