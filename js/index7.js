//! Області видимості(scope)
//* Область видимості визначає границі дії змінної

//* 1. Глобальна
//* 2. Блокова(локальна)
//* 3. Функціональна

// Глобальна область видимості(Змінні "a", "b", "c") - можуть мати таке саме ім'я як і в локальній області видимості. Проте - це будуть різні змінні
// Локальна область видимості 1 || Локальна область видимості 2
// Змінна "a", "c"              || Змінна "b"

// Області видимості

// let a;
// let b;                       //== 1 step.

// function myFunc() {
//   let b;                     //== 3 step.
//   a = true;
//   b = 10;                    //== 4 step.
//   console.log(b); // 10;     //== 5 step
// }
// myFunc();                    //== 2 step.
// console.log(a); //true
// console.log(b); //undefined; //== 6 step

//! Життєвий цикл змінної "b"
//* 1. Оголошуємо "b" в глобальній області видимості. Її значення - "undefined"
//* 2. Викликаємо функцію "myFn()"
//* 3. Оголошуємо "b" в області видимості функції
//* 4. Чи оголошена "b" в області функції? Так. Присвоєння цій змінній "b" значення "10"
//* 5. Виводимо значення змінної "b" в консоль
//* 6. "b" все так же має значення "undefined" у глобальній області видимості

//* Ланцюжок областей видимості

// const a = 5;

// function myFn() {
//   function innerFn() {
//     console.log(a); //5
//   }
//   innerFn();
// }
// myFn();

// 1. Global scope
// 2. myFn scope
// 3. inner scope(a?)
