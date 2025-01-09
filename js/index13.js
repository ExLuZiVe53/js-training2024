//! Модулі(Modules)

//* Модулі дозволяють структурувати код

/* -- app
    -- src
        index.js;
        -- modules
            calc.js
            dataRequests.js
            user.js
    index.html
 */

// Модулі допомагають уникати дублювання коду

//* EXPORT/IMPORT синтаксис з'явився в ES6

//* =================Example 1(default)=======================================
//? moduleOne.js

// const myFirstName = () => {
//   console.log("Bil");
// };

// export default myFirstName;
// ===========================================================================
//? moduleTwo.js

// import printMyName from "./moduleOne.js";
// printMyName(); // Bil;
// ===========================================================================
// Назви змінних можуть буди довільними при дефолтному імпорті
// Створили через термінал files folder з назвою "modules" та два mjs-файли. Для того щоб не створювати ще "index.htm", назва саме mjs - означає "module js"

//* =================Example 2(Named export)=================================
// Декілька експортів

// ==========================================================================
//? moduleThree.js

// const tenNumber = 10;
// const elevenNumber = "11";

// export { tenNumber, elevenNumber };

// ==========================================================================
//? moduleFour.js

// import { tenNumber, elevenNumber } from "./moduleFour.js";

// console.log(tenNumber); //10
// console.log(elevenNumber); // '11'

// ==========================================================================

//* ===============Example 3(Named import and rename him)====================

// ==========================================================================
//? moduleFive.js

// const a = "Toyota";
// const b = 2;

// export { a, b };
// ==========================================================================
//? moduleSix.js

// import { a as carName, b } from "./moduleFive.js";

// console.log(carName); //"Toyota"
// console.log(b); //2

// ==========================================================================

//! Правила роботи з модулями

// 1) Модулі мають мати одну задачу
// 2) Розміщуйте усі "export" інструкції внизу файлу
// 3) Всі інструкції "import" розташовуйте вгорі файлу
// 4) По можливості використовуйте "export default"

// ===========================================================

//* Example 4(many exports with module)

// const sum = (j, k) => j + k;
// const multi = (j, k) => j * k;

// export { sum, multi };

// ===========================================================

// //* Example 4(many imports with module)

// import { sum, multi as multiplication } from "./moduleOne.mjs";

// console.log(sum(2, 5));
// console.log(multiplication(4, 7));

// ===========================================================
