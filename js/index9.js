//! Конкатенація стрічок

//* Оператор "+" для конкатенації стрічок

// "Hello " + "World"; // "Hello World"

//* Змінні в конкатенації стрічок

// const hello = "Hello";
// const world = "World";

// const greeting = hello + " " + world;
// console.log(greeting);

//! Шаблоні стрічки

// const from = "I'm from";
// const JS = "JS";

// const greeting = `${from} ${JS}`;
// console.log(greeting);

//! Функціональні вирази(Function expression)

//* Оголошена функція та функціональні вирази

// function myFun(a, b) {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// }

// function (d, e) {
//   let j;
//   d = d + 1;
//   j = d + e;
//   return j;
// };

//* Функціональні вирази завжди анонімні

//* Присвоювання функціонального виразу змінній

// const myFunction = function (arg1, arg2) {
//   let val;
//   arg1 = arg1 + 1;
//   val = arg1 + arg2;
//   return val;
// };
// myFunction(5, 6); //12

//* Функціональний вираз при виклику другої функції

// setTimeout(function () {
//   console.log("Відкладене повідомлення");
// }, 1000);

// "Відкладене повідомлення" буде викликано в консоль через 1000 мс(1 сек)

//! Стрілкові функції(Arrow function)

// (a, b) => {
//   let c;
//   a = a + 2;
//   c = a + b;
//   return c;
// };

//* Стрілкова функція - це вираз, який завжди анонімний

// Як дати ім'я функції стрілки? Присвоїти її змінній

// const myArrowFUnc = (a, b) => {
//   let c;
//   a = a + 2;
//   c = a + b;
//   return c;
// };
// myArrowFUnc(2, 7); //11

//* Стрілкова функція при виклику другої функції виглядає таким чином

// setTimeout(() => {
//   console.log("Відкладене повідомлення викликане через 2 сек");
// }, 2000);

// "Відкладене повідомлення буде викликано в консоль через 2000 мс(2 сек)"
