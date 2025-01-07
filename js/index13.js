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

// ============================================================================
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
