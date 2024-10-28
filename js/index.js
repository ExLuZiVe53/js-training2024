//! Вираз! - Будь-який вираз завжди повертає значення

// console.log();

//* функція log являється методом об'єкта console

// ("abc");
// 10;
// 5 + 2;
// c = 10;
// "Good" + "Evening";
// a <= b || c !== d;
// myFunction(c, d);
// myFunction - функція, (c, d) - аргументи функії

//==============================================================================
//? Вираз присвоєння

// a = 20;

//? Вираз з побічними діями - це вираз який не тільки повертає значення, а й виконує другі дії

// a = 5;
// b++;
// myFunction(c, d);

// =============================================================================
//! Змінні - дають можливість повторного використання значення

// Імена змінних:
//* -- PascalCase - Типи та класи
//* -- DB_PASSWORD - Значення, які відомі до запуску програми та які не змінюються;
//* -- camelCase - Всі інші змінні

// ========================================================================
//? Оголошення змінних:
//* -- let
//* -- const
//* -- var

// let a = 10;
// a = 20;
// let b;
// b = false;

// const c = 10;
// c = 20;

//*TypeError: Assignment to constant variable.
// ===========================================================

//? Оголошення і присвоювання значення

// console.log(a);
//* ReferenceError: a is not defined
// let a;

//? Оголошення змінної

// console.log(a);
//* undefined
// a = true;

//? Присвоювання змінній
// console.log(a);
//* true
// let myName;
// console.log(myName);
// myName = "Pedro";
// console.log(myName);
// console.log(console.log(10));
//*10

//*! undefined - завжди повертає метод log об'єкта console;
// ==========================================================
// const myName = "Pedro";
// myName = "";
// console.log(myName);
