//! Типи змінних
//* Тип змінної визначається типом присвоєного йому значення

// const a = 10;
// //* 10 - це число(number)
// const b = "abc";
// //* abc - це стрічка(string)

//! Усі типи змінних поділяється на: примітивні та посилальний
// -- примітивні типи(number, string, boolean, null, undefined, symbol)
// -- посилальний тип(object)

//* Змінна
//* Має значення
//* Значення має тип

//* Значення примітивних типів
// Пам'ять
//"Hello world" | undefined
//true          | 25
// Коли ми записуємо такі змінні то в пам'яті ПК вони будуть містити значення

//* Посилальний тип
// Тобто при присвоєні змінній об'єкта, вона буде зберігати в собі лише посилання на даний об'єкт. Тобто сам об'єкт буде зберігатись в іншій комірці пам'яті ПК

// Пам'ять
// 0x3151       | {a:10, b:true}
// 0x7213       | [1,2,3]

// 0x3151       | {a:10, b:true}
// 0x7213       |

// const objectCars = { Tesla: "B50", Toyota: "Prius" };

// const copyOfCars = objectCars;

//* Доступ до даного об'єкта можливо через метод "."
// copyOfCars.Tesla = "B70";

// Додавати нові властивості можливо у такий спосіб
// copyOfCars.Bentley = "Continental";
// console.log(objectCars);

//! Якщо працюємо з консоллю браузера, потрібно завжди очищати її за допомогою комбінації клавіш (Ctrl + R), або закривати її і повторно відкривати. Тому що за допомогою значка у браузері, очищається лише дана консоль. Тобто при використанні однакових імен змінних, браузер видасть помилку,через те що консоль зберігає сесію яка триває.
