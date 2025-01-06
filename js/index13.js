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

const myFirstName = () => {
  console.log("Bil");
};

export default myFirstName;
// ===========================================================================
//? moduleTwo.js

import printMyName from "./moduleOne.js";
printMyName(); // Bil;
// ===========================================================================
