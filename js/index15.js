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

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));
