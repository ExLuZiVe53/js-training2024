//! Цикли(loops). Усі цикли - це "інструкції", не вирази

// Без циклів. Ми повторюємо одну і ту команду а саме 'i++'

//* Example 1

// let i = 0;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;

// ========================================================================

//* Example 2

// const myArray = [false, "jaguar", 11];

// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);

// =======================================================================

//* Example 3

// const myObj = {
//   a: true,
//   b: "honda",
//   c: 50,
// };

// console.log(myObj.a);
// console.log(myObj.b);
// console.log(myObj.c);

//! Типи циклів ==========================================================

// 1) for
// 2) for...of...
// 3) for...in...
// 4) while...
// 5) do...while

//* Цикл "for"

//? for( Початкова інструкція; Умова; Дія ітератора){
//?      Блок коду на кожній ітерації
//? }

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

// 1) 0<5 true; +1
// 2) 1<5 true; +1
// 3) 2<5 true; +1
// 4) 3<5 true; +1
// 5) 4<5 true; +1
// 6) 5<5 false; вихід з циклу

// Цикл "for" можна використовувати для перебору масиву але не рекомендується.

// Використовуйте для перебору масиву "функції вищого порядку масивів" - (forEach, map, reduce)

//* Цикл "for" для масивів

// const myNewArray = ["one", "two", "three"];

// for (let i = 0; i < myNewArray.length; i += 1) {
//   console.log(myNewArray[i]);
// }

//* Метод масивів "forEach"

// const myNewArray1 = ["red", "green", "blue"];

// myNewArray1.forEach((el, idx) => {
//   console.log(el, idx);
// });

//! Цикл "while" ==========================================================

// while (умова) {
//   // Блок коду виконуємо на кожній ітерації
// }

//* =========Example 1======================================================
// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i += 1; // зміна ітерації на кожній ітерації
// }

//* =========Example 2=======================================================
// Нескінчений цикл

// let i = 0;

// while (i < 5) {
//   console.log(i);
// }

//! Цикл "do while" ========================================================

// do {
//   // Блок коду який буде виконуватись на кожній ітерації
// } while (умова);
//* ==============Example 1===========================================

// let j = 0;

// do {
//   console.log(j);
//   j += 1;
// } while (j < 3);

//* ==============Example 2==============================================

// let k = 7;

// do {
//   console.log(k);
//   k += 1;
// } while (k < 4);

// Даний цикл виконається один раз, тому що з початку запусте цикл, а потім перевірить умову. Оскільки вона буде невірна він вийде з циклу.

//! Цикл "for...in..." ==================================================

// for (const key in object) {
//   // Дія яка виконається з кожною властивістю об'єкта[key]
//   // Значення властивості об'єкта object[key]
// }

// const myNewObj = {
//   a: 5,
//   b: false,
//   c: "ferrari",
// };

// for (const key in myNewObj) {
//   console.log(key, myNewObj[key]);
// }

//! Метод "forEach" для об'єктів

// Object.keys - метод для витягнення ключів з об'єкта у вигляді масиву
// Object.values - метод для витягнення властивостей з об'єкта у вигляді масиву

// const myObjFor = {
//   x: "lamborghini",
//   y: 100,
//   z: true,
// };

// Object.keys(myObjFor).forEach((key) => {
//   console.log(key, myObjFor[key]);
// });

// Object.values(myObjFor).forEach((value) => {
//   console.log(value);
// });

//! "For...in" цикл для масивів================================================

// const myArr = [false, "def", null, 40];

// for (const key in myArr) {
//   console.log(myArr[key]);
// }

// Такий перебір не рекомендується використовувати, адже у масивів є рідний метод "forEach"

//! Цмкл "For...of"(ES6)======================================================

// for (const Element of Iterable) {
//   // Дії з вибраним елементом
// }

//* ===============Example 1=================================================

// const str = "Happy New Year";

// for (const letter of str) {
//   // Цикл виконається 14 разів, бо стільки символів у стрічці
//   console.log(letter);
// }

//* ==============Example 2==================================================

// const arr = ["Warsaw", 10, true, undefined];

// for (const key of arr) {
//   console.log(key);
// }

// =========================================================================

// const arr2 = ["I'm", "superman", true];

// arr2.forEach((element, idx) => console.log(element));

//! for...of не перебирає об'єкти

// const myNameObj = {
//   height: 180,
//   years: 35,
// };

// for (const key of myNameObj) {
//   console.log(key);

//   // Uncaught TypeError: myNameObj is not iterable at index12.js:218:19

//   // index12.js:218:19 - файл index12.js
//   // index12.js:218:19 - 218 рядок
//   // index12.js:218:19 - 19-й символ викликав помилку
// }
