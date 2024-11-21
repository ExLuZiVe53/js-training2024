//! Інструкції (Кожну "інструкцію" потрібно обов'язково завершувати ";". Крім умовних інструкцій "if else" та циклів, які закінчуються на "{}". Тому що, це блок інструкцій)

//* Вираз - завжди повертає значення(наприклад "=")

//* Інструкції - наприклад коли оголошуємо зміну за допомогою "let a"(Виконує деякі дії)

// let a;
// const b = 5;

// if (a > b) {
//   console.log("a is larger");
// }

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

//* Вираз-інструкція(expression-statements)

// "abc";
// a = a + 3;
// c = a + b;
// d = "Good" + "Evening";
// myFunction(c, d);
// console.log("Hey");

//! Крапку з комою(";") можна пропускати

// Вираз може бути інструкцією

//* Вираз може бути використане як аргумент у виклику функції

// function myFn(a) {
//   console.log(a);
// }

// const b = true;
// let c = 10;

// myFn(2 + 3); // 5
// myFn(b); // true
// myFn((c = c + 1)); 11 // Присвоювання значення змінній це - вираз, який повертає значення
// =============================================================
//? Uncaught syntax error: Unexpected token ";"

// myFn((c = c + 1;) // функцію не можна викликати з інструкцією в якості аргументу, в яку при конвертації використали ";"
// myFn(let d)

//?=====================================================================
//! Масиви(Array)

//* Масив - це об'єкт з числовими іменами властивостей

// Формат запису масивів

// const myArray = [1, 2, 3];
// console.log(myArray); // [1, 2, 3]

// Створення масиву за допомогою створення екземпляру класу "Array" методом "new"
// const myArray1 = new Array(4, 5, 6);
// console.log(myArray1);

// Копіювання масиву по посиланню

// const myArray2 = myArray;
// console.log(myArray2 === myArray);

//? Структура масиву

/* 
    (3) [1, 2, 3] i
        0: 1
        1: 2
        2: 3
        length: 3
            __proto__: Array(0)
*/

//! Порівняння масиву та об'єкта

// const myObject = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
// };

// console.log(myObject); // {0: 1, 1: 2, 2: 3, length: 3}
//? Вивід у консоль браузера
/* 
     {0: 1, 1: 2, 2: 3, Length: 3}
        0: 1
        1: 2
        2: 3
        length: 3
            [[Prototype]]: Object <==
*/
// console.log(typeof myObject);
// ==============================================================

// const myArray4 = [1, 2, 3];
// console.log(myArray4); // [1, 2, 3]
// ?Вивід у консоль браузера
/* 
    (3) [1, 2, 3] i
        0: 1
        1: 2
        2: 3
        length: 3
            [[Prototype]]: Array(0) <==
*/

// console.log(Array.isArray(myArray4));
// =========================================================

//* Читання значення масиву

// const myArray5 = [2, false, "b"];
// console.log(myArray5); // [2, false, 'b']
// console.log(myArray5[0]); // 2
// console.log(myArray5[1]); // false
// console.log(myArray5[2]); // b
// console.log(myArray5.length); // 3

//! Довжина масиву

// const myArray6 = [7, 8, 9, 10];
// console.log(myArray6); // [7, 8, 9, 10]
// console.log(myArray6.length); // 4

// myArray6[2] = "cde";

// console.log(myArray6); // [7, 8, 'cde', 10]
// console.log(myArray6[2]); // 'cde'

// myArray6[4] = false;
// console.log(myArray6); // [7, 8, 'cde', 10, false];
// console.log(myArray6.length); // 5

//! Методи масивів:

//* push
//* pop
//* shift
//* unshift
//* forEach
//* map
//* reduce
//* filter
//* soft

//! Функції вищого порядку в масивах, або методи прототипів

//? Кожний масив який ви створюєте являється екземпляром масиву

// ========================================================================

// const myArray7 = [11, 12, 13];
// console.log(myArray7); // [11, 12, 13]
/* 
    (3) [11, 12, 13] i
        0: 11
        1: 12
        2: 13
        length: 3
            [[Prototype]]: Array(0) <==
                => at: f at()
                => concat: f concat()
                => constructor: f Array()
                => copyWithin: f copyWithin()
                => entries: f entries()
                => every: f every()
                => fill: f fill()
                => filter: f filter()
                => find: f find()
                => findIndex: f findIndex()
                => findLast: f findLast()
                => findLastIndex: f findLastIndex()
                => flat: f flat()
                => flatMap: f flatMap()
                => forEach: f forEach()
                => includes: f includes()
                => indexOf: f indexOf()
                => join: f join()
                => keys: f keys()
                => lastIndexOf: f lastIndexOf()
                    length: 0
                => map: f map()
                => pop: f pop()
                => push: f push()
                => reduce: f reduce()
                => reduceRight: f reduceRight()
                => reverse: f reverse()
                => shift: f shift()
                => slice: f slice()
                => some: f some()
                => sort: f sort()
                => splice: f splice()
                => toLocaleString; f toLocaleString()
                => toReversed: f toReversed()
                => toSorted: f toSorted()
                => toSpliced: f toSpliced()
                => toString: f toString()
                => unShift: f unShift()
                => values: f values()
                => with: f with()

                => Symbol(Symbol.iterator); f values()
                => Symbol(Symbol.unscopables): 
                {
                    at: true, 
                    copyWithin: true, 
                    entries: true, 
                    fill: true, 
                    find: true, 
                    findIndex: true, 
                    findLast: true, 
                    findLastIndex: true, 
                    flat: true, 
                    flatMap: true, 
                    includes: true, 
                    keys: true, 
                    toReversed: true,
                    toSorted: true,
                    toSpliced: true,
                    values: true,
                }
*/

//* Метод push - додає елемент у кінець масиву

// myArray7.push(14);
// console.log(myArray7); // [11, 12, 13, 14]

// myArray7.push(true);
// console.log(myArray7); // [11, 12, 13, 14, true]

// ======================================================================

//* Метод pop - видаляє елемент з кінця масиву

// const myArray8 = ["a", "b", "c", "d"];

// myArray8.pop();
// console.log(myArray8); // ['a', 'b', 'c']

// const removedElement = myArray8.pop();
// console.log(myArray8); // ['a',' b']
// console.log(removedElement); // 'c'

// =========================================================================

//* Метод unshift - додає елемент на початок масиву

// const myArray9 = ["BMW", "AUDI", "TESLA"];
// console.log(myArray9); //["BMW", "AUDI", "TESLA"];

// myArray9.unshift(true);
// console.log(myArray9); // [true ,"BMW", "AUDI", "TESLA"]

// myArray9.unshift(1);
// console.log(myArray9); // [1 ,true ,"BMW", "AUDI", "TESLA"]

// =========================================================================

//* Метод shift - видаляє елемент з початку масиву

const myArray10 = ["English", "French", "Polish"];
console.log(myArray10); // ["English", "French", "Polish"]

myArray10.shift();
console.log(myArray10); // ["French", "Polish"]

const removedShiftEl = myArray10.shift();
console.log(myArray10); // ["Polish"];
console.log(removedShiftEl); // "French"
