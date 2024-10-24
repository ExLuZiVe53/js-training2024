//! Мутація в JS
//* Значення примітивних типів

// const a = 10;
//* Копіювання значення(copy by value);
// let b = a;
// b = 30;
// console.log(a);
// console.log(b);

//* Значення типів по посиланню

// const person = {
//   name: "Bob",
//   age: 21,
// };

//* Мутація об'єкта на який посилається зміна (person)
// person.age = 22;
// person.isAdult = true;

// console.log(person.age);
// console.log(person.isAdult);

//* Мутація копій

// const person1 = {
//   name: "Vasyl",
//   age: 30,
// };

//Копіювання по посиланню(copy by reference)
// const person2 = person1;
// Мутація об'єкта на який посилається об'єкт (person2)
// person2.age = 35;
// person2.isNormal = true;

// console.log(person1);
// console.log(person1.age);
// console.log(person1.isNormal);

//* Як уникнути мутації
//! Variant 1
// const person3 = {
//   name: "Isabella",
//   age: 1,
// };

//* Якщо у об'єкта є вкладений об'єкти, то посилання на них зберігаються
// const person4 = Object.assign({}, person3);
// person4.age = 2;

// console.log(person4.age);
// console.log(person3.age);

//! Variant 2
// const person5 = {
//   name: "Basya",
//   age: 33,
// };

//* "..." - spred - оператор розділення об'єкта на властивості
// const person6 = { ...person5 };
// Посилання на вкладені об'єкти також зберігаються
// person6.name = "Lena";

// console.log(person6.name);
// console.log(person5.name);

//! Varian3
const person7 = {
  name: "Got",
  age: 40,
};

// Із-за подвійної конвертації (JSON.stringify - об'єкт в строку, та JSON.parse()- строку в об'єкт) посилання на вкладені об'єкти не зберігаються
const person8 = JSON.parse(JSON.stringify(person7));
// 1 Виконуємо дію в дужках JSON.stringify(person7);
// 2 Підставляємо у метод JSON.parse(JSON.stringify(person7)) -як аргумент метода parse
// 3 Присвоюємо результат зміній person8

person8.name = "Lena";

console.log(person8.name);
console.log(person7.name);
