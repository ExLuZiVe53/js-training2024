// ! Статична та динамічна типізація

// let a = "abc";
// a = 10;

// let b = 10;
// b = true;
// b = "Yurii";
// b = undefined;

// function a() {
//   console.log("Hey there");
// }

// a();
// a = 10;
// console.log(a);
// a();

//* По можливості завжди пишемо змінні через (const).

//! const для оголошення змінних

// const a = () => {
//   console.log("Hey there");
// };
// a();
// a = 10;
// console.log(a);
// a();

//* Правила роботи зі змінними
// -- Всі змінні оголошуємо перед їх використанням
// -- Старатись використовувати (const) скрізь де це можливо

//! Об'єкт - це набір властивостей "Ім'я : значення"
// const myCity = {
//   city: "New York",
//   popular: true,
//   country: "USA",
// };

// console.log(myCity.city);
// console.log(myCity.popular);
// Dot notation(крапковий запис) - Доступ до об'єкту через крапку

//* Змінювати запис в об'єкті можливо також через крапку

// const myCity1 = {
//   city: "New York",
// };

// myCity1.city = "Las Vegas";
// console.log(myCity1);

//* Також через крапку можна створювати нові властивості в об'єкта

// const myCity2 = {
//   city: "Cupertino",
// };

// myCity2.popular = true;
// console.log(myCity2);
// myCity2.country = "USA";
// console.log(myCity2);

//* Видалення запису з об'єкту

// const myCity3 = {
//   city: "Los Angeles",
//   popular: true,
//   country: "America",
// };

// delete myCity3.country;
// console.log(myCity3);

//* Доступ до значення властивості за допомогою квадратних дужок

const myCity4 = {
  city: "Miami",
};

// Спочатку вклазуємо назву об'єкта, потім в квадратних дужках у вигляді стрічки вказуємо назву властивості та після дорівнює присвоюємо йому значення
//* Дужковий запис або (bracket notation)
myCity4["popular"] = true;
console.log(myCity4);

// Це пишеться в тому випадку, коли ми використовуємо будь-який вираз JS

const countryPropertyName = "country";
myCity4[countryPropertyName] = "USA";
console.log(myCity4);
