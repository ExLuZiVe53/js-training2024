//! Деструктуризація(destructuring assignment) - за допомогою даної функції можливо в об'єкті створити зміну та присвоїти їй значення в одній стрічці

const userProfile = {
  name: "Billy",
  commentsQty: 50,
  hasSignedAgreement: false,
};

const { name, commentsQty, hasSignedAgreement } = userProfile;

console.log(name);
console.log(hasSignedAgreement);
