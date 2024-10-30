//! Функції (Functions)
//* Функція - це блок кода який можна виконувати багаторазово

// let a = 5;
// let b = 3;

// Однакові блоки кода
// let c = a + b;
// console.log(c);

// a = 8;
// b = 12;
// Однакові блоки кода
// c = a + b;
// console.log(c);

//* Ми можемо це оптимізувати створивши функцію

// let d = 4;
// let e = 7;

// function sum(d, e) {
//   const f = d + e;
//   console.log(f);
// }

// sum(d, e);

// d = 11;
// e = 20;

// sum(d, e);

//! Функція може бути:
//* 1 -- іменованою;
//* 2 -- присвоєна змінній;
//* 3 -- анонімна;
//* 4 -- аргументом при виклику іншої функції;
//* 5 -- значенням властивості(методу) об'єкта;

//! Функція - це об'єкт в JS

// function myFn(a, b) {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// }
// Використовуйте console.dir - для того щоб відобразити властивості об'єкта
// console.dir(myFn);
// length - показує кількість параметрів у функції(2)

//* Функція - починається з ключового слова "function"
//* myFn - ім'я функції
//* a, b - параметри функції. Ці параметри ведуть себе як зміні всередині функції
//* {} - тіло функції

// При виклику функції ми передаємо аргументи

//* return - ключове слово, яке повертає результат виконання функції. Після цього слова функція зупиняє виконання

// Функція повертає "undefined" - якщо немає ключового слова "return"

//! Виклик функції

// function myFy(par1, par2) {
//   let result;
//   par1 = par1 + 1;
//   result = par1 + par2;
//   return result;
// }
// myFy(14, 5);
// console.log(myFy(14, 5));

//* myFy(14, 5) - під час виклику функції ми передаємо аргументи(14, 5).
//* -- Аргументи функції змінюються під час кожного виклику функції.
//* -- Параметри як присвоїли вперше, так і залишились(par1, par2)

//* 1. Під час виклику функції параметрам "par1" та "par2" присвоюються значення (14 та 5)
//* 2. Оголошується зміна "result"
//* 3. Значення "par1" збільшується на (1)
//* 4. Сума значень "par1" та "par2" присвоюємо змінній "result"
//* 5. Повертаємо зміну "result" із функції за допомогою ключового слова "return"

//! Найкоротша функція

// function shortFn() {}
// console.log(shortFn()); // undefined

// ===========================================================
//! Передача значення через посилання

// const personOne = {
//   name: "Bob",
//   age: 22,
// };

// function increasePersonAge(person) {
//   person.age += 1;
//   return person;
// }

// increasePersonAge(personOne);
// console.log(personOne.age); // 23

//* Всередині функції не рекомендується мутувати зовнішній об'єкт
//* Для цього потрібно створювати копії об'єкта

// const personTwo = {
//   name: "Nona",
//   age: 30,
// };

// function increasePersonAge(person) {
//   const updatePerson = Object.assign({}, person);
//   updatePerson.age += 1;
//   return updatePerson;
// }

// const updatePersonTwo = increasePersonAge(personTwo);
// console.log(personTwo.age); // 30
// console.log(updatePersonTwo.age); //31

//! Callback функція
// Callback функція - це функція яка передається як аргумент в іншу функцію

// function anotherFunction() {
//   // Дії
// }

// function fnWithCallback(callBackFunction) {
//   callBackFunction();
// }
// fnWithCallback(anotherFunction);

// function printMyName() {
//   console.log("Kelly");
// }
// console.log("Start");
// setTimeout(printMyName, 2000);

// setTimeout - викликає Callback функцію через заданий проміжок часу

//! Правила роботи з функціями:
//* 1. Називати функції виходячи з виконуваних завдань
//* 2. Одна функція повинна виконувати одну задачу
//* 3. Не рекомендується змінювати зовнішні відносно функції змінні
