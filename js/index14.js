//! Класи та прототипи

//* Синтаксис класів з'явився в ES6

// Класи дозволяють створювати "прототипи" для об'єктів
// На основі прототипів створюються "екземпляри" класів
// "Екземпляри" можуть мати свою власні властивості та методи
// "Екземпляри" наслідують властивості та методи "прототипів"

// ========Example===========================================

// class Comment {
//   constructor(text) {
//     this.text = text;
//     this.votesQty = 0;
//   }

//   upvote() {
//     this.votesQty = this.votesQty + 1;
//   }

//   downvote() {
//     this.votesQty = this.votesQty - 1;
//   }
// }

//! Створення кілька екземплярів класу

// const firstComment = new Comment("First comment");
// firstComment.upvote();
// const secondComment = new Comment("Second comment");
// secondComment.upvote();
// secondComment.upvote();
// const thirdComment = new Comment("Third comment");
// thirdComment.upvote();
// thirdComment.upvote();
// thirdComment.upvote();

// console.log(firstComment);
// console.log(secondComment);
// console.log(thirdComment);

//* Виклик методів

// firstComment.upvote();
// console.log(firstComment.votesQty); // 1
// firstComment.upvote();
// console.log(firstComment.votesQty); // 2
// firstComment.downvote();
// console.log(firstComment.votesQty); // 1

// "constructor" - викликається тільки тоді, коли ми створюємо новий екземпляр(New) класу
// Проте інші методи будуть наслідувати
// зміна "this" вказує на екземпляр класу

//* Створити новий коментар можливо викликавши метод "New" на екземплярі класу

//* Наслідуванні властивості екземпляра класу (upvote(), downvote())
//* Наслідування по ланцюжку

// "firstComment" => "Comment" => "Object"

// Якщо у консолі браузера написати зміну "firstComment" - ми побачимо усі власні та наслідуванні властивості даного екземпляру

// - Comment {text: "First Comment", votesQty: 0} i
//   text: "First Comment"
//   votesQty: 0
//   - [[Prototype]]: Object
//     + constructor: class Comment
//     + downvote: f downvote()
//     + upvote: f upvote()
//     - [[Prototype]]: Object
//       + constructor: f Object()
//       + hasOwnProperty: f hasOwnProperty()
//       + isPrototypeOf: f isPrototypeOf()
//       + propertyIsEnumerable: f propertyIsEnumerable()
//       + toLocaleString: f toLocaleString()
//       + toString: f toString()
//       + valueOf: f valueOf()
//         __proto__:(...)

//* Для перевірки тої чи іншої приналежності можливо за допомогою бінарного оператора "instanceof"

// console.log(firstComment instanceof Comment); //true
// console.log(firstComment instanceof Object); //true

//! Перевірити чи дана властивість є власною чи наслідуваною можливо за допомогою методу "hasOwnProperty"

// firstComment.hasOwnProperty("text"); // true
// firstComment.hasOwnProperty("votesQty"); // true
// firstComment.hasOwnProperty("upvote"); // false
// firstComment.hasOwnProperty("hasOwnProperty"); // false

//! Статичні методи

// class User {
//   static mergeUser(ork, elf) {
//     return `${ork} ${elf}`;
//   }
//   constructor(player) {
//     this.player = player;
//     this.skills = { ATTACK: "attack", HEALTH: "health" };
//   }
//   upSkills() {
//     this.skills = this.skills + skills.ATTACK;
//   }
// }

// console.log(User.mergeUser("Mermaid.", "WhiteBear"));

// ===========================================================================
//! В консолі ми побачимо такий код

// console.dir(User)
// VM292:1
// + class User
//     length: 1
//     mergeUser: ƒ mergeUser(ork, elf)
//     name: "User"
//     + prototype: {upSkills: ƒ}
//       arguments: (...)
//       caller: (...)
//       [[FunctionLocation]]: VM124:5
//       [[Prototype]]: ƒ ()
//       [[Scopes]]: Scopes[2]
// undefined
//

// ===========================================================================
//! Розширення інших класів

// class NumbersArray extends Array {
//   sum() {
//     return this.reduce((element, accumulator) => (accumulator += element), 0);
//   }
// }

// const myArray = new NumbersArray(7, 8, 9);
// console.log(myArray);
// myArray.sum();

//* Ланцюжок прототипів

// myArray   =>   NumbersArray   =>    Array   =>    Object

//! __proto__ - прихована властивість, тому і такий синтаксис

//! Строки та числа в js ведуть себе як об'єкти

// const myName = "Bil"; // undefined
// myName; // 'Bil' string
// myName.toUpperCase(); // 'BIL'
// const mySecondName = new String("Book"); // undefined
// mySecondName; // String{"Book"};
