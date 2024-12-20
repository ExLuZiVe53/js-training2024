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

//* Скорочення в стрілкових функціях

// 1. Якщо один параметр то можна круглі дужки не писати

// (a) => {
//   // тіло функції
// };

// 2. Фігурні дужки які знаходяться в тілі функції можна не писати якщо вона складається з одного виразу

// (b, c) => b + c;

// В цьому випадку стрілкова функція неявно повертає результат виразу(без ключового слова "return")

// =============================================================================

//! Значення параметрів функції по замовчуванню

// function multiplicationByFactor(value, multiplier = 2) {
//   return value * multiplier;
// }

// multiplicationByFactor(2, 10); //20
// multiplicationByFactor(4); //8

// ============================================================================
//* "({})" - неявне повернення об'єкта пишеться через "()". Бо якщо явно повертати значення потрібно використовувати ключове слово "return"

// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt,
// });

// const firstPost = {
//   id: 1,
//   author: "Lesley",
// };

// console.table(newPost(firstPost));
// ======================================================================
//* Явне повернення об'єкта за допомогою "return"

// const onePost = (date, addedDate = Date()) => {
//   return {
//     ...date,
//     addedDate: addedDate,
//   };
// };

// const secondPost = {
//   id: 2,
//   author: "Bob",
// };

// console.table(onePost(secondPost));

//! Обробка помилок

//* Що трапляється у випадку помилок

// Виконання коду зупиниться після слова "Uncaught" - не відловлена помилка
// const fnWithError = () => {
//   throw new Error("Some error");
// };

// fnWithError();
// // uncaught error: "Some error"

// console.log("Continue...");
// ============================================================================

//! TRY/CATCH - відловлені помилки за допомогою конструкції

// try {
//   // Виконання блока кода
// } catch (error) {
//   // Цей блок виконується у випадку виникнення помилок у блоку "try"
// }
// ==========================================================================

// const fnWithError = () => {
//   throw new Error("Some error");
// };

// try {
//   fnWithError();
// } catch (error) {
//   console.error(error);
//   console.log(error.message);
// }

// console.log("Continue...");
