// let arr = [1,2,3,4,5,6];
// arr.forEach((val) => {
// console.log(val + 45);
// })
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = arr.map((val, num) => {
//  const newVal = val + num * 2;
//  return newVal;
// });
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let newarr = arr.filter((val) => {
//     return val % 2 === 0;
// })
// console.log(newarr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array = arr.find((val) => {
//     return val === 5;
// })
// console.log(array);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(arr.indexOf(23));

// obkect practice
// obj are key value pairs
// objects are used to store data in a structured way 

// let obj = {
//     name : 'basit',
//     age : 20 ,
//     city : 'karachi',
//     hobbies : ['cricket', 'football', 'coding'],
//     education : {   
//         degree : 'BSCS',
//         university : 'UoK',
//         year : 2023
//     }
// }
// // Object.freeze(obj);
// obj.name = 'ali';
// console.log(obj.name);

// fuction practice
// console.log(add());

// function add() {
//     return 78;
// }

// console.log(add());

// function add(a, b) {
    //     return a + b;
    // }
    // console.log(add(5, 10));
    // console.log(add(20, 30));
    
    
    // console.log(add());

    // started aysnc programming
    // line by line code ko synchronous code kehte hain
    // jab hum kisi aise task ko perform karte hain jo time leta hai to usko asynchronous code kehte hain
    // asynchronous code me hum callback, promises, async/await ka use karte hain or iska code sidestack me chalta hai
    // callback function ek function hota hai jo kisi dusre function ke andar pass kiya jata hai or jab wo dusra function execute hota hai to callback function bhi execute hota hai
    // promises ek object hota hai jo asynchronous operation ke result ko represent karta hai or uske 3 state hoti hain pending, fulfilled, rejected
    // async/await ek syntax sugar hai jo promises ko use karne ke liye use hota hai or isse hum asynchronous code ko synchronous code ki tarah likh sakte hain

//    async function getUser() {
//     try {
//         const response = await fetch('https://randomuser.me/api/');
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// getUser();
