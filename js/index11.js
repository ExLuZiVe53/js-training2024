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
