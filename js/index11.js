//! Деструктуризація(destructuring assignment) - за допомогою даної функції можливо в об'єкті створити зміну та присвоїти їй значення в одній стрічці

//* Деструктуризація об'єктів

// const userProfile = {
//   nameMe: "Billy",
//   commentsQty: 50,
//   hasSignedAgreement: false,
// };

// const { nameMe, commentsQty, hasSignedAgreement } = userProfile;

// console.log(nameMe);
// console.log(hasSignedAgreement);

//* Деструктуризація масивів

// const fruits = ["Orange", "Kiwi"];

// // Деструктуризація першого та другого елемента в масиві з присвоюванням імені

// const [fruitOne, fruitTwo] = fruits;

// console.log(fruitOne);
// console.log(fruitTwo);

//* Деструктуризація у функціях

// const userProfile1 = {
//   myName: "Charley",
//   myComments: 25,
//   myGender: "male",
// };

// const userInfo = ({ myName, myComments }) => {
//   if (!myComments) {
//     return `User ${myName} has no comments`;
//   } else {
//     return `User ${myName} has ${myComments} comments`;
//   }
// };

// console.log(userInfo(userProfile1)); // User Charley has 25 comments

//! Умовні конструкції

//? -Інструкції
//* -1) If
//* -2) If...else
//* -3) Switch
//? -Вираз
//* -4) Тернарний оператор - використовується у виразах

//==============================================================================
//* Інструкція "If"

// if (умова) {
//     блок кода який виконується один раз, якщо умова "правдива"
// }

// let value = 21;

// if (value > 15) {
//   value += 10; // value = value + 10;
// }

// console.log(value); //31

// const myPerson = {
//   age: 10,
//   //   name: "",
// };

// if (!myPerson.name) {
//   console.log("Ім'я зазначено"); // інші дії, якщо властивості "name" у об'єкта "myPerson" немає
// }

// // console.log(!myPerson.name);

//* Інструкція "If else"

// if(умова){
//     блок кода який виконається лише один раз, якщо умова правдива
// } else{
//     блок кода який виконається лише один раз, якщо умова неправдива
// }

// let val = 30;

// if (val < 10) {
//   val += 5;
// } else {
//   val -= 5;
// }

// console.log(val); //25

//* Інструкція "If else if"

// if(Умова 1){
//     Блок кода, який виконається одноразово, якщо "умова 1" правдива
// } else if(Умова 2){
//     Блок кода, який виконається одноразово, якщо "умова 2" правдива
// } else {
//     Блок кода, який виконається одноразово, якщо жодна з умов не була правдива
// }

//* Переважний формат запису "If" з багатьма умовами

// if(Умова 1){
//     Блок коду, який виконається одноразово, якщо "умова 1" правдива
// }

// if(Умова 2){
//     Блок коду, який виконається одноразово, якщо "умова 2" правдива
// }

// if(Умова 3){
//     Блок коду, який виконається одноразово, якщо "умова 3" правдива
// }
