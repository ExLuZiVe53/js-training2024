//! Функцїї (Functions)
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
// Використвовуйте console.dir - для того щоб відобразити властивості об'єкта
// console.dir(myFn);
// length - показує кількість параметрів у функції(2)

//* Функція - починаяється з ключового слова "function"
//* myFn - ім'я функції
//* a, b - параментри функції. Ці параметри ведуть себе як зміні всередині функції
//* {} - тіло функції
// При виклику функції ми передаємо аргументи
//* return - ключове слово, яке повертає результат виконання функції. Після цього слова функція зупиняє виконання

// Функція повертає "undefined" - якщо немає ключового слова "return"

//! Виклик функції
function myFy(par1, par2) {
  let result;
  par1 = par1 + 1;
  result = par1 + par2;
  return result;
}
console.log(myFy(10, 5));
