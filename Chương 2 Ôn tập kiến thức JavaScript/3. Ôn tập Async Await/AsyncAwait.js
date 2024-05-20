
//const p = Promise.reject('loi1234');
// // muốn dùng async await cho cái promis trên thì phải tạo 1 function
// // vì async chỉ dùng cho function
// // main là 1 functiuon return về promise 

// const main = async () => {
//     const data = await p
//     console.log(data)
// }
// main()

// const main = async () => {
//     try {
//         const data = await p;
//         console.log(data);
//     } catch (error) {
//         console.log(new Error(error));
//     }
// };
// main();



const promise1 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Promise 1`), 2000)
    })

const promise2 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() =>resolve(`Promise 2`), 1000)
    })

const promise3 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() =>resolve(`Promise 3`), 1500)
    })

Promise.all([promise1(), promise2(), promise3()])
.then((results) => {
    console.log('Results', results)
})
.catch((error) => {
    console.log('Error:', error)
})