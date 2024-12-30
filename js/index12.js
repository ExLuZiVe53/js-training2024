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

//! Типи циклів

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
