//! Проміси
//* Проміси дозволяють обробляти відкладені в часі події

// Promise - це обіцянка надати результат пізніше
// Promise може повернути помилку, якщо результат надати неможливо

//? Promise має три стани:

// 1) Очікування(Pending)
// 2) Виконанний(Fulfilled)
// 3) Відхилений(Rejected)

//* Створення promise

// const myPromise = new Promise((resolve, reject) => {
//   /**
//    * Виконання асинхронних операцій
//    *
//    * Всередині ціє функії потрібно в результаті викликати одну із функцій resolve або reject
//    */
// });

//? Отримання результату promise

// myPromise
//   .then((value) => {
//     /**
//      * Дії у випадку завершення успішного виконання Promise
//      * Значення value - це значення передане у виклику функції resolve всередині Promise
//      */
//     console.log(value);
//   })
//   .catch((error) => {
//     /**
//      * Дії у випадку відхилення Promise
//      * Значення error - це значення передане виклику функції reject всередині Promise
//      */
//     console.log(error);
//   });

//! Використання даних за допомогою fetch API

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.error(error));

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error.message));

//*  fetch працював лише у браузері, та тільки на завантаженій сторінці.
//* У новій версії node.js вже функцію fetch вмонтували поза межами браузера
// Якщо відкрити console на пустій сторінці - він працювати не буде

// const getData = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => resolve(json))
//       .catch((error) => reject(error));
//   });
// };

// getData("https://jsonplaceholder.typicode.com/todos/3/")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

//! ASYNC/AWAIT - це спеціальний синтаксис для спрощення роботи з promise

//? Асинхронна функція ASYNC

// async function asyncFn() {
//   // Завжди повертає promise
// }

// const asyncFn = async () => {
//   // Завжди повертає promise
// };

// ============================================================================
//* Приклад 1

// const asyncFn = async () => {
//   return "Success!";
// };

// console.log(asyncFn());

//* Приклад 1(Продовження)

// const asyncFunction = async () => {
//   return "Success!";
// };

// asyncFunction().then((value) => console.log(value));

//* Приклад 2

// const asyncFunction = async () => {
//   throw new Error("There was an error!");
// };

// console.log(asyncFunction());

//* Приклад 2(Продовження)

// const asyncFunction = async () => {
//   throw new Error("There was an error!");
// };

// asyncFunction()
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error.message));

//? Асинхронна функція ASYNC/AWAIT

// const asyncFn = async () => {
//   await <Promise>;
// };

// asyncFn();

//* Приклад 3(Очікування результату Await)

// const timerPromise = () =>
//   new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

// const asyncFn = async () => {
//   console.log("Timer starts");
//   await timerPromise();
//   console.log("Timer ended");
// };

// asyncFn();

//* Приклад 3(Продовження)

// const timerPromise = () =>
//   new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

// const asyncFn = async () => {
//   console.log("Timer starts");
//   const startTime = performance.now(); // метод performance.now() - запускає відлік часу
//   await timerPromise();
//   const endTime = performance.now();
//   console.log("Timer ended", (endTime - startTime).toFixed());
// };

// asyncFn();

//* Перехід з promise на Async/Await

const getData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
};

getData("https://jsonplaceholder.typicode.com/todos/")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
