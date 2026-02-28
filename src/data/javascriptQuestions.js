export const javascriptData = {
  id: "javascript",
  title: "JavaScript Interview Questions",
  level: "Freshers-to-Advanced",
  totalQuestions: 82,
  questions: [
    {
      id: "js-1",
      questionNumber: 1,
      question: "What are the different data types present in JavaScript?",
      difficulty: "freshers",
      tags: ["fundamentals"],
      answer:
        "In JavaScript, data types are broadly categorized into two groups: Primitives and Non-Primitives (Reference types). There are seven primitive types: String, Number, BigInt, Boolean, Undefined, Null, and Symbol. These are immutable and stored directly by value in memory. The non-primitive type is the Object (which also includes Arrays and Functions). Objects are mutable and stored by reference, meaning variables hold a memory address pointing to the actual data.",
      codeSnippet:
        "// Primitives (Stored by value)\nconst str = 'Hello';\nconst num = 42;\nconst isTrue = false;\nconst notAssigned = undefined;\nconst emptyValue = null;\nconst bigNum = 9007199254740991n;\nconst sym = Symbol('unique');\n\n// Non-Primitives (Stored by reference)\nconst obj = { name: 'Alice' };\nconst arr = [1, 2, 3];\nconst func = () => console.log('I am an object too');",
    },
    {
      id: "js-2",
      questionNumber: 2,
      question: "Explain Hoisting in JavaScript.",
      difficulty: "freshers",
      tags: ["execution-context"],
      answer:
        "Hoisting is a default behavior in JavaScript where variable and function declarations are conceptually moved to the top of their execution context during the compilation phase, before the code is executed. It's important to clarify to an interviewer that only the declarations are hoisted, not the initializations. Function declarations are fully hoisted, allowing you to call them before they appear in code. Variables declared with 'var' are hoisted with a value of 'undefined'. However, 'let' and 'const' are hoisted but remain in a 'Temporal Dead Zone' until initialized, meaning accessing them too early throws a ReferenceError.",
      codeSnippet:
        '// 1. Function Declaration (Fully hoisted)\nsayHi(); // Outputs: "Hi!"\nfunction sayHi() { console.log("Hi!"); }\n\n// 2. var (Hoisted, but uninitialized -> undefined)\nconsole.log(myVar); // Outputs: undefined\nvar myVar = 10;\n\n// 3. let/const (Hoisted, but in Temporal Dead Zone)\n// console.log(myLet); // ❌ ReferenceError!\nlet myLet = 20;',
    },
    {
      id: "js-3",
      questionNumber: 3,
      question: "Why do we use the word debugger in JavaScript?",
      difficulty: "freshers",
      tags: ["debugging"],
      answer:
        "The 'debugger' keyword is used to set a programmatic breakpoint in our code. If the browser's Developer Tools are open, execution will pause exactly at the 'debugger' statement. This allows developers to step through the code line-by-line, inspect the Call Stack, and check the current state of variables in the scope. It's a much more powerful and precise debugging approach than relying solely on console.log().",
      codeSnippet:
        "function calculateTotal(price, tax) {\n  const total = price + (price * tax);\n  \n  // If DevTools is open, execution pauses here.\n  // You can hover over 'price', 'tax', and 'total' to inspect them.\n  debugger; \n  \n  return total;\n}\n\ncalculateTotal(100, 0.05);",
    },
    {
      id: "js-4",
      questionNumber: 4,
      question: "Difference between == and === operators.",
      difficulty: "freshers",
      tags: ["operators"],
      answer:
        "The double equals (==) is the loose equality operator. It performs 'type coercion', meaning if the values are of different types, JavaScript will attempt to convert them to a common type before comparing them (e.g., 5 == '5' is true). The triple equals (===) is the strict equality operator. It checks both the value and the exact data type without any conversion (e.g., 5 === '5' is false). As a best practice, I always use strict equality (===) to prevent unexpected bugs caused by implicit coercion.",
      codeSnippet:
        "// Loose Equality (==) - Coerces types\nconsole.log(5 == '5');   // true (string '5' becomes number 5)\nconsole.log(0 == false); // true (false becomes number 0)\nconsole.log(null == undefined); // true\n\n// Strict Equality (===) - NO coercion\nconsole.log(5 === '5');   // false (Number vs String)\nconsole.log(0 === false); // false (Number vs Boolean)\nconsole.log(null === undefined); // false",
    },
    {
      id: "js-5",
      questionNumber: 5,
      question: "Difference between var and let keyword in JavaScript.",
      difficulty: "freshers",
      tags: ["variables"],
      answer:
        "The primary differences lie in scoping and hoisting. Variables declared with 'var' are function-scoped, meaning they are accessible anywhere within the function they are declared in, and they can be re-declared without throwing an error. They are also hoisted as 'undefined'. 'let', introduced in ES6, is block-scoped, meaning it is confined to the specific curly braces {} it was defined in (like loops or if-statements). 'let' cannot be re-declared in the same scope, and it resides in the Temporal Dead Zone until execution reaches its declaration, making it much safer and more predictable to use.",
      codeSnippet:
        'function testScope() {\n  if (true) {\n    var functionScoped = "I escape the block!";\n    let blockScoped = "I am trapped in the block!";\n  }\n  \n  console.log(functionScoped); // Outputs: "I escape the block!"\n  // console.log(blockScoped); // ❌ ReferenceError: blockScoped is not defined\n\n  var x = 1;\n  var x = 2; // ✅ var allows redeclaration\n  \n  let y = 1;\n  // let y = 2; // ❌ let throws SyntaxError on redeclaration\n}',
    },
    {
      id: "js-6",
      questionNumber: 6,
      question: "Explain Implicit Type Coercion in JavaScript.",
      difficulty: "freshers",
      tags: ["type-system"],
      answer:
        "Implicit type coercion is when the JavaScript engine automatically converts one data type to another to successfully execute an operation. A classic example is string concatenation with a number, like `5 + '5'`, which results in the string '55' because JS coerces the number 5 into a string. However, with subtraction like `'5' - 2`, JS coerces the string to a number, resulting in 3. Understanding coercion is vital for debugging unexpected behaviors in comparisons and arithmetic.",
      codeSnippet:
        "// Example 1: The '+' operator prefers Strings\nconsole.log(5 + '5'); // '55' (Number 5 is coerced to String '5')\n\n// Example 2: Other math operators prefer Numbers\nconsole.log('5' - 2); // 3 (String '5' is coerced to Number 5)\nconsole.log('10' * '2'); // 20\n\n// Example 3: Boolean coercion in if-statements\nif (\"hello\") { \n  // This runs because non-empty strings are coerced to 'true'\n  console.log('Truthy!'); \n}",
    },
    {
      id: "js-7",
      questionNumber: 7,
      question:
        "Is JavaScript a statically typed or dynamically typed language?",
      difficulty: "freshers",
      tags: ["type-system"],
      answer:
        "JavaScript is a dynamically typed language. This means variables are not bound to a specific data type at compile-time. The type of a variable is determined and evaluated at runtime. For example, I can initialize a variable as a Number, and later reassign it to a String without the JavaScript engine throwing an error. While this offers flexibility, it can lead to type-related bugs, which is why tools like TypeScript have become popular to add static typing.",
      codeSnippet:
        '// Dynamically typed: The type can change at runtime without errors\nlet myData = 42;           // Currently a Number\nconsole.log(typeof myData); // "number"\n\nmyData = "Hello World";    // Now it\'s a String\nconsole.log(typeof myData); // "string"\n\nmyData = true;             // Now it\'s a Boolean\nconsole.log(typeof myData); // "boolean"',
    },
    {
      id: "js-8",
      questionNumber: 8,
      question: "What is NaN property in JavaScript?",
      difficulty: "freshers",
      tags: ["numbers"],
      answer:
        "NaN stands for 'Not-a-Number'. It represents the result of an invalid or undefined mathematical operation, such as dividing zero by zero, or attempting to parse a completely alphabetical string into an integer. Interestingly, the `typeof NaN` actually returns 'number'. Another quirk to mention is that NaN is the only value in JavaScript that is not equal to itself, meaning `NaN === NaN` returns false. We use `Number.isNaN()` to safely check for it.",
      codeSnippet:
        "const result1 = 0 / 0;        // NaN\nconst result2 = parseInt('abc'); // NaN\n\nconsole.log(typeof result1); // \"number\" (ironically)\n\n// NaN is never equal to NaN\nconsole.log(NaN === NaN); // false\n\n// ✅ How to correctly check for NaN\nconsole.log(Number.isNaN(result2)); // true",
    },
    {
      id: "js-9",
      questionNumber: 9,
      question: "Explain passed by value and passed by reference.",
      difficulty: "freshers",
      tags: ["memory-management"],
      answer:
        "This relates to how variables are stored and manipulated. Primitive data types (like Strings and Numbers) are 'passed by value'. When you assign a primitive to a new variable or pass it to a function, a complete, independent copy of that value is created. Non-primitives (Objects, Arrays) are 'passed by reference'. Instead of copying the actual data, JavaScript passes a reference (a pointer) to the original memory location. Modifying the object through the new reference will mutate the original object.",
      codeSnippet:
        "// --- Pass by Value (Primitives) ---\nlet a = 10;\nlet b = a; // b gets a fresh copy of 10\nb = 20; \nconsole.log(a); // 10 (Original is unaffected)\n\n// --- Pass by Reference (Non-Primitives) ---\nlet obj1 = { name: 'Alice' };\nlet obj2 = obj1; // obj2 points to the EXACT same memory location as obj1\nobj2.name = 'Bob'; \nconsole.log(obj1.name); // 'Bob' (Original IS mutated!)",
    },
    {
      id: "js-10",
      questionNumber: 10,
      question: "What is an Immediately Invoked Function in JavaScript?",
      difficulty: "freshers",
      tags: ["functions"],
      answer:
        "An IIFE (Immediately Invoked Function Expression) is a function that is executed exactly at the moment it is defined. It is created by wrapping an anonymous function in parentheses, followed by an execution pair of parentheses `(function() { ... })();`. Historically, it was a crucial pattern used to create a private, isolated scope for variables to prevent polluting the global namespace before block-scoped variables (let/const) and ES6 Modules were introduced.",
      codeSnippet:
        '// The outer parentheses convert the function into an expression.\n// The trailing () invoke it immediately.\n(function() {\n  var privateVar = "I am hidden from the global scope";\n  console.log("IIFE executed immediately!");\n})();\n\n// console.log(privateVar); // ❌ ReferenceError: not defined\n\n// Arrow function IIFE variant:\n(() => {\n  console.log("Arrow IIFE");\n})();',
    },
    {
      id: "js-11",
      questionNumber: 11,
      question: "What do you mean by strict mode in JavaScript?",
      difficulty: "freshers",
      tags: ["javascript-engine"],
      answer:
        "Strict mode is a way to opt into a restricted, more secure variant of JavaScript. By placing the string literal 'use strict' at the top of a script or function, the engine will enforce stricter parsing and error handling. For instance, it eliminates 'silent errors' by throwing exceptions, prevents accidental creation of global variables by assigning values to undeclared variables, and disables features that are confusing or deprecated. It essentially forces developers to write cleaner code.",
      codeSnippet:
        '"use strict";\n\ntry {\n  // In normal JS, this silently creates a global window.badVariable\n  // In strict mode, it throws a ReferenceError because it lacks let/const/var\n  badVariable = 9;\n} catch(e) {\n  console.log(e); // ReferenceError: badVariable is not defined\n}\n\n// Strict mode also prevents deleting undeletable properties\n// delete Object.prototype; // Throws TypeError',
    },
    {
      id: "js-12",
      questionNumber: 12,
      question: "Explain Higher Order Functions in JavaScript.",
      difficulty: "freshers",
      tags: ["functions"],
      answer:
        "A Higher-Order Function is a function that does at least one of two things: it either takes one or more functions as arguments, or it returns a function as its result. This is possible because functions in JS are 'First-Class Citizens' and can be treated like any other variable. Array methods like `.map()`, `.filter()`, and `.reduce()` are common examples, as they take callback functions to process data arrays, promoting a declarative and functional programming style.",
      codeSnippet:
        "// Example 1: Taking a function as an argument (like Array.map)\nconst numbers = [1, 2, 3];\n// 'map' is the higher-order function, the arrow function is the callback\nconst doubled = numbers.map(num => num * 2); \n\n// Example 2: Returning a function\nfunction multiplyBy(factor) {\n  return function(number) {\n    return number * factor;\n  }\n}\nconst tripler = multiplyBy(3);\nconsole.log(tripler(10)); // 30",
    },
    {
      id: "js-13",
      questionNumber: 13,
      question: "Explain this keyword.",
      difficulty: "freshers",
      tags: ["this-keyword"],
      answer:
        "The 'this' keyword refers to the object that is currently executing the code. Its value is dynamic and depends on the 'Execution Context' (how the function is called). If a function is called as a method of an object, 'this' refers to that parent object. If called as a regular function in the global scope, 'this' points to the global object (or undefined in strict mode). Arrow functions are unique; they do not have their own 'this' binding but inherit it lexically from their surrounding scope.",
      codeSnippet:
        "const user = {\n  name: 'Alice',\n  // 1. Method context: 'this' refers to the 'user' object\n  greet: function() {\n    console.log(`Hello, ${this.name}`); \n  },\n  // 2. Arrow function: 'this' inherits from outer scope (Window/Global)\n  greetArrow: () => {\n    console.log(`Hello, ${this.name}`); \n  }\n};\n\nuser.greet();      // \"Hello, Alice\"\nuser.greetArrow(); // \"Hello, undefined\"",
    },
    {
      id: "js-14",
      questionNumber: 14,
      question: "What do you mean by Self Invoking Functions?",
      difficulty: "freshers",
      tags: ["functions"],
      answer:
        "A Self-Invoking Function is essentially another name for an Immediately Invoked Function Expression (IIFE). It refers to an anonymous function that executes itself automatically right after it is declared, without needing an explicit call statement. It relies on the trailing parentheses `()` to trigger the invocation.",
      codeSnippet:
        '// Self-Invoking Function (IIFE)\n(function(name) {\n  console.log("Auto-running for: " + name);\n})("Avinash"); // Arguments can be passed directly into the trailing parentheses',
    },
    {
      id: "js-15",
      questionNumber: 15,
      question: "Explain call(), apply() and bind() methods.",
      difficulty: "freshers",
      tags: ["function-methods"],
      answer:
        "These three methods are used to manually set the context of the 'this' keyword inside a function. `call()` invokes the function immediately and passes arguments one by one separated by commas. `apply()` also invokes the function immediately but takes arguments as an array. `bind()` does not invoke the function right away; instead, it returns a new copy of the function with 'this' permanently bound to the specified object, which can be executed later.",
      codeSnippet:
        "const person = { name: 'John' };\nfunction introduce(greeting, punctuation) {\n  console.log(`${greeting}, I'm ${this.name}${punctuation}`);\n}\n\n// 1. call: Arguments passed individually\nintroduce.call(person, 'Hello', '!'); // \"Hello, I'm John!\"\n\n// 2. apply: Arguments passed as an array\nintroduce.apply(person, ['Hi', '.']); // \"Hi, I'm John.\"\n\n// 3. bind: Returns a new function to be called later\nconst boundIntroduce = introduce.bind(person, 'Hey');\nboundIntroduce('...'); // \"Hey, I'm John...\"",
    },
    {
      id: "js-16",
      questionNumber: 16,
      question:
        "What is the difference between exec() and test() methods in JavaScript?",
      difficulty: "freshers",
      tags: ["regex"],
      answer:
        "Both are methods used with Regular Expressions, but they serve different purposes. The `test()` method is used to check if a pattern exists within a string; it simply returns a boolean (true if a match is found, false otherwise). The `exec()` method is more detailed; it searches the string and, if a match is found, returns an array containing detailed information about the match (such as the matched text and its index). If no match is found, `exec()` returns null.",
      codeSnippet:
        'const regex = /hello/i;\nconst text = "Well, hello there!";\n\n// test() - Returns a simple boolean\nconsole.log(regex.test(text)); // true\n\n// exec() - Returns an array with match details or null\nconst match = regex.exec(text);\nconsole.log(match[0]);     // "hello"\nconsole.log(match.index);  // 6',
    },
    {
      id: "js-17",
      questionNumber: 17,
      question: "What is currying in JavaScript?",
      difficulty: "freshers",
      tags: ["functional-programming"],
      answer:
        "Currying is a functional programming concept where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument. Instead of calling a function like `multiply(2, 3, 4)`, currying allows you to call it as `multiply(2)(3)(4)`. This is highly useful for function composition and creating reusable, partially-applied functions where some arguments are pre-configured.",
      codeSnippet:
        "// Normal function\nfunction add(a, b, c) { return a + b + c; }\n\n// Curried version\nfunction curriedAdd(a) {\n  return function(b) {\n    return function(c) {\n      return a + b + c;\n    }\n  }\n}\n\n// Usage\nconsole.log(curriedAdd(1)(2)(3)); // 6\n\n// Practical use: Creating partially applied functions\nconst addFive = curriedAdd(5);\nconst addFiveAndTen = addFive(10);\nconsole.log(addFiveAndTen(2)); // 17",
    },
    {
      id: "js-18",
      questionNumber: 18,
      question: "What are advantages of using External JavaScript?",
      difficulty: "freshers",
      tags: ["architecture"],
      answer:
        "Using external JavaScript files (linking via the src attribute) provides several architectural benefits. Primarily, it separates the HTML structure from the application logic, making both files cleaner, easier to read, and simpler to maintain. Furthermore, browsers cache external JS files. When a user navigates to different pages on the same site, the browser doesn't have to re-download the script, which drastically improves page load times.",
      codeSnippet:
        '\n<!DOCTYPE html>\n<html>\n<head>\n  <title>External JS Demo</title>\n  \n  <script src="app.js" defer></script>\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>\n</html>',
    },
    {
      id: "js-19",
      questionNumber: 19,
      question: "Explain Scope and Scope Chain in JavaScript.",
      difficulty: "freshers",
      tags: ["scope"],
      answer:
        "Scope determines the accessibility and visibility of variables in a specific part of your code. JS has Global Scope, Function Scope, and Block Scope. The Scope Chain is the mechanism the JS engine uses to resolve a variable. If a variable isn't found in the current immediate scope, the engine looks outwards into the parent scope, and continues looking layer by layer until it reaches the Global Scope. If it's still not found, a ReferenceError is thrown.",
      codeSnippet:
        "const globalVar = 'I am Global';\n\nfunction outerFunc() {\n  const outerVar = 'I am Outer';\n  \n  function innerFunc() {\n    const innerVar = 'I am Inner';\n    \n    // Scope Chain in action: \n    // JS looks in innerFunc -> outerFunc -> Global Scope to find variables.\n    console.log(innerVar);  // Found locally\n    console.log(outerVar);  // Reaches up one level\n    console.log(globalVar); // Reaches up two levels\n  }\n  innerFunc();\n}\nouterFunc();",
    },
    {
      id: "js-20",
      questionNumber: 20,
      question: "Explain Closures in JavaScript.",
      difficulty: "freshers",
      tags: ["closures"],
      answer:
        "A closure is created when a function 'remembers' its lexical scope even when that function is executed outside its original scope. In practice, this happens when an outer function returns an inner function. The inner function maintains access to the variables declared in the outer function's scope, even after the outer function has finished executing and returned. Closures are heavily used in JavaScript for data encapsulation and creating private variables.",
      codeSnippet:
        "function createCounter() {\n  let count = 0; // Private variable\n  \n  return function() {\n    // This inner function forms a closure.\n    // It \"remembers\" the 'count' variable even after createCounter finishes.\n    count++;\n    return count;\n  }\n}\n\nconst counter1 = createCounter();\nconsole.log(counter1()); // 1\nconsole.log(counter1()); // 2\n// 'count' is completely protected from direct external modification.",
    },
    {
      id: "js-21",
      questionNumber: 21,
      question: "Mention some advantages of JavaScript.",
      difficulty: "freshers",
      tags: ["overview"],
      answer:
        "JavaScript has several major advantages that make it the dominant language of the web. It executes on the client-side, providing immediate user feedback and reducing server load. It is incredibly versatile; with Node.js, you can write Full-Stack applications using a single language. It also boasts a massive ecosystem of libraries, frameworks (like React or Angular), and community support, making development faster and more standardized.",
      codeSnippet:
        "// Advantage 1: Client-Side DOM interaction (Immediate feedback)\ndocument.getElementById('btn').addEventListener('click', () => {\n  alert('Clicked!'); \n});\n\n// Advantage 2: Full-Stack capability (Same language for backend via Node.js)\nconst http = require('http');\nhttp.createServer((req, res) => res.end('JS on the Server!')).listen(3000);",
    },
    {
      id: "js-22",
      questionNumber: 22,
      question: "What are object prototypes?",
      difficulty: "freshers",
      tags: ["prototypes"],
      answer:
        "In JavaScript, prototypes are the mechanism by which objects inherit properties and methods from one another. Every JavaScript object has a hidden internal property called `[[Prototype]]` that points to another object. When you try to access a property on an object, and it doesn't exist, the JavaScript engine traverses up this 'Prototype Chain' to look for it on the prototype object. This is the foundation of Prototypal Inheritance.",
      codeSnippet:
        "const animal = {\n  eats: true,\n  walk() { console.log(\"Animal walks\"); }\n};\n\nconst rabbit = {\n  jumps: true\n};\n\n// Setting 'animal' as the prototype of 'rabbit'\nObject.setPrototypeOf(rabbit, animal);\n\n// rabbit doesn't have 'eats', so JS looks up the prototype chain to 'animal'\nconsole.log(rabbit.eats); // true\nrabbit.walk(); // \"Animal walks\"",
    },
    {
      id: "js-23",
      questionNumber: 23,
      question: "What are callbacks?",
      difficulty: "freshers",
      tags: ["async"],
      answer:
        "A callback is simply a function that is passed as an argument to another function and is executed after some operation has been completed. They are the foundational method for handling asynchronous operations in JavaScript, like fetching data from an API or listening for user click events. While powerful, deeply nested callbacks can lead to 'Callback Hell', which is why Promises and async/await were introduced in modern JS.",
      codeSnippet:
        'function fetchData(callback) {\n  console.log("Fetching data...");\n  // Simulating an async operation like an API call\n  setTimeout(() => {\n    const data = { id: 1, name: \'Alice\' };\n    // Execute the callback function once the data is ready\n    callback(data);\n  }, 1000);\n}\n\n// Calling the function and passing an anonymous arrow function as the callback\nfetchData((result) => {\n  console.log("Data received:", result);\n});',
    },
    {
      id: "js-24",
      questionNumber: 24,
      question: "What are the types of errors in JavaScript?",
      difficulty: "freshers",
      tags: ["errors"],
      answer:
        "JavaScript has several standard error types. The most common include: `SyntaxError` (when the code breaks language rules, like a missing bracket), `ReferenceError` (when referencing a variable that hasn't been declared), `TypeError` (when a value is not of the expected type, like trying to call a string as a function), and `RangeError` (when a numeric variable or parameter is outside its valid range).",
      codeSnippet:
        'try {\n  // 1. ReferenceError\n  console.log(nonExistentVar);\n} catch (e) { console.error(e.name); } // "ReferenceError"\n\ntry {\n  // 2. TypeError\n  const num = 10;\n  num(); // Trying to invoke a number as a function\n} catch (e) { console.error(e.name); } // "TypeError"\n\ntry {\n  // 3. RangeError\n  const arr = new Array(-1); // Array size cannot be negative\n} catch (e) { console.error(e.name); } // "RangeError"',
    },
    {
      id: "js-25",
      questionNumber: 25,
      question: "What is memoization?",
      difficulty: "freshers",
      tags: ["performance"],
      answer:
        "Memoization is a specific optimization technique used to speed up computer programs by caching the results of expensive function calls. If a memoized function is called later with the exact same inputs, it bypasses the complex calculations and simply returns the cached result from memory. It essentially trades memory space for execution speed and is highly effective in recursive algorithms like calculating Fibonacci sequences.",
      codeSnippet:
        'function memoizedAddTo256() {\n  const cache = {}; // The closure holds the cache memory\n  \n  return function(num) {\n    if (num in cache) {\n      console.log("Fetching from cache");\n      return cache[num];\n    } else {\n      console.log("Calculating result");\n      const result = num + 256; // Expensive operation\n      cache[num] = result;\n      return result;\n    }\n  }\n}\n\nconst memo = memoizedAddTo256();\nmemo(20); // "Calculating result" -> 276\nmemo(20); // "Fetching from cache" -> 276 (Instant)',
    },
    {
      id: "js-26",
      questionNumber: 26,
      question: "What is recursion in a programming language?",
      difficulty: "freshers",
      tags: ["algorithms"],
      answer:
        "Recursion is a programming pattern where a function calls itself to solve a smaller instance of the same problem. It's often used for traversing complex data structures like trees or solving mathematical sequences. To prevent a 'Stack Overflow' (an infinite loop of function calls), every recursive function must have a clearly defined 'base case'—a condition under which the function stops calling itself and begins returning values.",
      codeSnippet:
        "// Calculating factorial: 5! = 5 * 4 * 3 * 2 * 1\nfunction factorial(n) {\n  // Base Case: Stops the recursion to prevent Stack Overflow\n  if (n === 0 || n === 1) {\n    return 1; \n  }\n  // Recursive Call: The function calls itself with a smaller input\n  return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5)); // 120",
    },
    {
      id: "js-27",
      questionNumber: 27,
      question: "What is the use of a constructor function in JavaScript?",
      difficulty: "freshers",
      tags: ["objects"],
      answer:
        "A constructor function is a specialized function used to create and initialize multiple objects with the same structure and behavior. It acts as a blueprint. By convention, constructor names are capitalized. When invoked using the `new` keyword, the constructor automatically creates a new empty object, binds the `this` keyword to that new object, assigns properties to it, and finally returns the populated object.",
      codeSnippet:
        "// Constructor Function (capitalized by convention)\nfunction Car(make, model) {\n  this.make = make;\n  this.model = model;\n  this.start = function() {\n    console.log(`${this.make} engine started.`);\n  };\n}\n\n// Using 'new' creates a fresh instance\nconst car1 = new Car('Toyota', 'Corolla');\nconst car2 = new Car('Honda', 'Civic');\n\ncar1.start(); // \"Toyota engine started.\"",
    },
    {
      id: "js-28",
      questionNumber: 28,
      question: "What is DOM?",
      difficulty: "freshers",
      tags: ["dom"],
      answer:
        "DOM stands for Document Object Model. It is a programming interface created by the browser that represents the HTML document as a structured tree of objects (nodes). Because the DOM represents elements as objects, JavaScript can hook into it to dynamically read, create, modify, or delete HTML elements and CSS styles, making the web page interactive.",
      codeSnippet:
        "// HTML: <div id=\"app\">Hello</div>\n\n// 1. Reading from the DOM\nconst appDiv = document.getElementById('app');\n\n// 2. Modifying the DOM (changing text and style)\nappDiv.innerText = 'Hello, JavaScript!';\nappDiv.style.color = 'blue';\n\n// 3. Creating and appending new DOM nodes\nconst newParagraph = document.createElement('p');\nnewParagraph.innerText = 'I was added dynamically!';\nappDiv.appendChild(newParagraph);",
    },
    {
      id: "js-29",
      questionNumber: 29,
      question: "Which method retrieves a character from a certain index?",
      difficulty: "freshers",
      tags: ["strings"],
      answer:
        "To retrieve a character from a specific index within a string, you can use the built-in `charAt()` method, passing the zero-based index as the argument (e.g., `str.charAt(0)`). However, in modern JavaScript, it is also highly common and accepted to use bracket notation, treating the string almost like an array: `str[0]`.",
      codeSnippet:
        'const greeting = "Hello World";\n\n// Method 1: Using charAt()\nconsole.log(greeting.charAt(0)); // "H"\nconsole.log(greeting.charAt(6)); // "W"\n\n// Method 2: Using modern bracket notation\nconsole.log(greeting[0]); // "H"\nconsole.log(greeting[6]); // "W"',
    },
    {
      id: "js-30",
      questionNumber: 30,
      question: "What do you mean by BOM?",
      difficulty: "freshers",
      tags: ["browser"],
      answer:
        "BOM stands for Browser Object Model. While the DOM allows JS to interact with the document's content, the BOM allows JavaScript to interact with the browser window itself. It includes the global `window` object and its properties, allowing you to manipulate browser history, access geolocation via the `navigator` object, trigger alerts, or check screen width using the `screen` object.",
      codeSnippet:
        '// Interacting with the BOM (Browser Object Model)\n\n// 1. Window features\nwindow.alert("Welcome to the site!");\nconsole.log("Window width:", window.innerWidth);\n\n// 2. Navigator object (Browser/OS info)\nconsole.log("Browser language:", navigator.language);\n\n// 3. Location object (URL details & navigation)\nconsole.log("Current URL:", window.location.href);\n// window.location.assign("https://google.com"); // Redirects the page',
    },
    {
      id: "js-31",
      questionNumber: 31,
      question:
        "What is the distinction between client-side and server-side JavaScript?",
      difficulty: "freshers",
      tags: ["architecture"],
      answer:
        "The main distinction lies in the host environment where the JavaScript engine is running. Client-side JS runs within the user's web browser, and it is focused on UI interaction, DOM manipulation, and handling user events. Server-side JS, powered by environments like Node.js, runs on a backend server. It does not have a DOM; instead, it accesses the file system, communicates with databases, and handles HTTP requests and API routing.",
      codeSnippet:
        "// --- Client-Side JS (Runs in Chrome/Firefox/etc.) ---\n// Has access to DOM and Window.\ndocument.querySelector('button').addEventListener('click', () => {\n  console.log(\"User clicked a button on the webpage!\");\n});\n\n// --- Server-Side JS (Runs in Node.js) ---\n// NO access to DOM. Has access to OS features.\nconst fs = require('fs');\nfs.readFile('database-config.txt', 'utf8', (err, data) => {\n  console.log(\"Read a file securely on the server:\", data);\n});",
    },
    {
      id: "js-exp-1",
      questionNumber: 32,
      question: "What are arrow functions?",
      difficulty: "intermediate",
      tags: ["es6", "functions", "this"],
      answer:
        "Arrow functions provide a concise syntax for writing function expressions, but more importantly, they fundamentally change how 'this' is bound. Unlike regular functions, arrow functions do not have their own 'this' context; they inherit 'this' lexically from the enclosing execution context. Furthermore, they cannot be used as constructor functions (they lack the [[Construct]] method and 'prototype' property) and do not have access to the local 'arguments' object.",
      codeSnippet:
        "class Counter {\n  constructor() {\n    this.count = 0;\n  }\n  start() {\n    // ✅ Arrow function inherits 'this' from the start() method.\n    // A regular function here would bind 'this' to the Window/Global object.\n    setInterval(() => {\n      this.count++;\n      console.log(this.count);\n    }, 1000);\n  }\n}\nnew Counter().start();",
    },
    {
      id: "js-exp-2",
      questionNumber: 33,
      question: "What do you mean by prototype design pattern?",
      difficulty: "advanced",
      tags: ["prototype", "inheritance", "patterns", "design-patterns"],
      answer:
        "The Prototype pattern is a creational design pattern where new objects are created by cloning an existing object (the prototype) rather than instantiating them via a constructor class. In JavaScript, this is inherently supported via 'Object.create()'. It is highly memory-efficient because methods and properties are shared via the prototype chain rather than being duplicated in memory for every single instance.",
      codeSnippet:
        "// The Prototype Object\nconst carPrototype = {\n  wheels: 4,\n  startEngine() {\n    console.log(`Starting the ${this.make} engine!`);\n  }\n};\n\n// Creating new objects based on the prototype\nconst myCar = Object.create(carPrototype);\nmyCar.make = 'Honda'; // Assigning instance-specific property\n\nmyCar.startEngine(); // Output: \"Starting the Honda engine!\"\nconsole.log(myCar.wheels); // Output: 4 (Inherited from prototype)",
    },
    {
      id: "js-exp-3",
      questionNumber: 34,
      question:
        "Differences between declaring variables using var, let and const.",
      difficulty: "intermediate",
      tags: ["scope", "hoisting", "es6", "variables"],
      answer:
        "'var' is function-scoped, hoisted with an 'undefined' initialization, and attaches to the global object when declared globally. 'let' and 'const' are block-scoped and do not attach to the global window object. While 'let' and 'const' are hoisted, they remain in a Temporal Dead Zone (TDZ) and cannot be accessed before their declaration. 'const' specifically creates an immutable binding, meaning the identifier cannot be reassigned, though the contents of an object or array declared with 'const' can still be mutated.",
      codeSnippet:
        "if (true) {\n  var v = 1; // Function-scoped\n  let l = 2; // Block-scoped\n  const c = 3; // Block-scoped, Immutable binding\n\n  // c = 4; // ❌ TypeError: Assignment to constant variable.\n  \n  const obj = { name: 'Alice' };\n  obj.name = 'Bob'; // ✅ Mutating contents of const is allowed\n}\n\nconsole.log(v); // 1 (Escaped the block)\n// console.log(l); // ❌ ReferenceError\n// console.log(c); // ❌ ReferenceError",
    },
    {
      id: "js-exp-4",
      questionNumber: 35,
      question: "What is the rest parameter and spread operator?",
      difficulty: "intermediate",
      tags: ["spread", "rest", "arrays", "es6-features"],
      answer:
        "Both utilize the '...' syntax but serve opposite purposes depending on context. The Spread operator 'expands' iterables (like arrays or objects) into individual elements, commonly used for shallow cloning or merging objects/arrays. The Rest parameter 'condenses' multiple standalone elements into a single array. It is strictly used in function signatures to gather an indefinite number of arguments into an array, replacing the need for the older 'arguments' object.",
      codeSnippet:
        "// 1. SPREAD (Expanding)\nconst arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst merged = [...arr1, ...arr2, 5]; // [1, 2, 3, 4, 5]\n\nconst obj1 = { a: 1 };\nconst objClone = { ...obj1, b: 2 }; // { a: 1, b: 2 }\n\n// 2. REST (Condensing)\n// Gathers remaining arguments into a 'numbers' array\nfunction sum(multiplier, ...numbers) {\n  return numbers.reduce((acc, curr) => acc + (curr * multiplier), 0);\n}\nconsole.log(sum(2, 10, 20, 30)); // 120",
    },
    {
      id: "js-exp-5",
      questionNumber: 36,
      question:
        "In JavaScript, how many different methods can you make an object?",
      difficulty: "intermediate",
      tags: ["object-creation", "oop", "objects"],
      answer:
        "There are several ways to create an object, each serving different architectural needs: 1) Object Literals '{}' for simple data structures. 2) 'new Object()' built-in constructor. 3) Constructor Functions using 'new' for ES5-style classical instantiation. 4) 'Object.create(prototype)' to create an object with a specific prototype chain (useful for 'Object.create(null)' to make pure dictionaries). 5) ES6 Classes. 6) Factory Functions which return objects without needing the 'new' keyword, often leveraging closures for privacy.",
      codeSnippet:
        "// 1. Object Literal (Most common)\nconst obj1 = { name: 'Alice' };\n\n// 2. Object.create (Prototypal Inheritance)\nconst obj2 = Object.create(obj1);\n\n// 3. Constructor Function\nfunction Person(name) { this.name = name; }\nconst obj3 = new Person('Bob');\n\n// 4. ES6 Class\nclass Animal { constructor(type) { this.type = type; } }\nconst obj4 = new Animal('Dog');\n\n// 5. Factory Function\nconst createCar = (make) => ({ make, wheels: 4 });\nconst obj5 = createCar('Ford');",
    },
    {
      id: "js-exp-6",
      questionNumber: 37,
      question: "What is the use of promises in JavaScript?",
      difficulty: "intermediate",
      tags: ["promises", "async", "event-loop", "async-programming"],
      answer:
        "Promises are objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value. They solve the 'Inversion of Control' problem associated with callback hell by providing a standardized, chainable API (.then, .catch, .finally). Under the hood, resolved Promises are pushed to the Microtask Queue, which is processed before the Macrotask Queue (like setTimeout), giving them higher execution priority in the Event Loop.",
      codeSnippet:
        'const checkWeather = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    const isSunny = true;\n    if (isSunny) resolve("Go to the beach!");\n    else reject("Stay home.");\n  }, 1000);\n});\n\n// Chainable API solves callback hell\ncheckWeather\n  .then((message) => console.log(message)) // Runs on resolve\n  .catch((error) => console.error(error))  // Runs on reject\n  .finally(() => console.log("Weather check complete."));',
    },
    {
      id: "js-exp-7",
      questionNumber: 38,
      question: "What are classes in JavaScript?",
      difficulty: "intermediate",
      tags: ["classes", "es6", "constructor", "oop"],
      answer:
        "Introduced in ES6, Classes are essentially syntactic sugar over JavaScript's existing prototypal inheritance pattern. Under the hood, a class is a special function, and its methods are appended to the function's prototype property. They provide a much cleaner, more 'classical OOP' syntax for creating blueprints of objects, supporting features like constructors, static methods, getters/setters, and inheritance via the 'extends' and 'super' keywords.",
      codeSnippet:
        "class Vehicle {\n  constructor(make) {\n    this.make = make;\n  }\n  start() { console.log(`${this.make} starting...`); }\n}\n\n// Inheritance using 'extends'\nclass Car extends Vehicle {\n  constructor(make, model) {\n    super(make); // Calls parent constructor\n    this.model = model;\n  }\n  honk() { console.log(\"Beep!\"); }\n}\n\nconst myCar = new Car('Honda', 'Civic');\nmyCar.start(); // Inherited method\nmyCar.honk();",
    },
    {
      id: "js-exp-8",
      questionNumber: 39,
      question: "What are generator functions?",
      difficulty: "advanced",
      tags: ["generators", "iterators", "yield", "functions"],
      answer:
        "Generators are special functions defined with 'function*' that can pause and resume their execution. When called, they do not execute immediately; instead, they return an Iterator object. By calling the '.next()' method on this iterator, the function runs until it hits a 'yield' statement, which returns a value and pauses execution, saving its state. They are incredibly powerful for creating custom iterables, implementing state machines, or handling infinite data streams lazily.",
      codeSnippet:
        "// Defined with an asterisk (*)\nfunction* idMaker() {\n  let index = 1;\n  while (true) {\n    // Function pauses here until .next() is called again\n    yield index++; \n  }\n}\n\nconst gen = idMaker(); // Returns an iterator\n\nconsole.log(gen.next().value); // 1\nconsole.log(gen.next().value); // 2\nconsole.log(gen.next().value); // 3 (Can run infinitely on demand)",
    },
    {
      id: "js-exp-9",
      questionNumber: 40,
      question: "Explain WeakSet in JavaScript?",
      difficulty: "advanced",
      tags: ["weakset", "garbage-collection", "memory-management"],
      answer:
        "A WeakSet is a collection similar to a Set, but with two key differences: it can only contain Objects (no primitives), and the object references are held 'weakly'. This means if there are no other references to an object stored in a WeakSet, the garbage collector will remove it from memory. Because its contents are subject to garbage collection at any time, a WeakSet is not enumerable (no 'size' property, no 'forEach' loop). It is primarily used to track object metadata without causing memory leaks.",
      codeSnippet:
        'let user1 = { name: "Alice" };\nlet user2 = { name: "Bob" };\n\nconst visitedUsers = new WeakSet();\nvisitedUsers.add(user1);\nvisitedUsers.add(user2);\n\nconsole.log(visitedUsers.has(user1)); // true\n\n// If we remove the only reference to user1...\nuser1 = null;\n\n// The Garbage Collector will automatically remove the object \n// from the WeakSet entirely, preventing a memory leak.\n// (Note: WeakSets do not have a .size property to check this)',
    },
    {
      id: "js-exp-10",
      questionNumber: 41,
      question: "Why do we use callbacks?",
      difficulty: "intermediate",
      tags: ["callbacks", "async", "async-programming"],
      answer:
        "Because JavaScript functions are first-class citizens, we use callbacks—passing a function as an argument to another function—to handle asynchronous operations or to execute logic only after a specific task completes (like network requests or DOM events). While essential, relying strictly on callbacks can lead to 'Callback Hell' (pyramid of doom) and trust issues (inversion of control), which is why Promises and async/await are preferred for complex async flows today.",
      codeSnippet:
        '// Common callback pattern in Node.js / Browser\nfunction downloadFile(url, onComplete) {\n  console.log(`Downloading from ${url}...`);\n  \n  setTimeout(() => {\n    console.log("Download finished.");\n    // Execute the callback ONLY when the async task completes\n    onComplete(); \n  }, 2000);\n}\n\ndownloadFile(\'https://image.png\', () => {\n  console.log("File is ready to be displayed on UI!");\n});',
    },
    {
      id: "js-exp-11",
      questionNumber: 42,
      question: "Explain WeakMap in JavaScript?",
      difficulty: "advanced",
      tags: ["weakmap", "gc", "memory-management"],
      answer:
        "A WeakMap is a collection of key-value pairs where the keys MUST be objects, and the references to those keys are held 'weakly'. If a key object loses all other references in the application, it gets garbage collected, and the corresponding value in the WeakMap is also removed automatically. Like WeakSets, WeakMaps are not iterable. They are the ideal data structure for maintaining private object properties or caching data related to DOM nodes without risking memory leaks.",
      codeSnippet:
        "const cache = new WeakMap();\n\nfunction processDOMNode(node) {\n  if (!cache.has(node)) {\n    // Compute some heavy data for this node\n    const data = { clicks: 0, heavyCalculations: true };\n    cache.set(node, data);\n  }\n  return cache.get(node);\n}\n\nlet div = document.createElement('div');\nprocessDOMNode(div);\n\n// When the div is removed from the DOM and nulled:\ndiv = null; \n// The entry in the WeakMap is automatically Garbage Collected.",
    },
    {
      id: "js-exp-12",
      questionNumber: 43,
      question: "What is Object Destructuring?",
      difficulty: "intermediate",
      tags: ["destructuring", "objects", "es6-features"],
      answer:
        "Object destructuring is an ES6 syntax that allows us to unpack properties from objects directly into distinct variables. It makes code cleaner and more readable. Advanced usage includes assigning default values to handle undefined properties, renaming/aliasing variables during extraction (e.g., 'const { originalName: aliasName } = obj'), and deeply nested destructuring to pull specific data points out of complex API responses in a single line.",
      codeSnippet:
        "const user = {\n  id: 42,\n  displayName: 'jdoe',\n  profile: { age: 30 }\n};\n\n// 1. Basic destructuring\nconst { id, displayName } = user;\n\n// 2. Renaming variables and setting defaults\nconst { displayName: username, role = 'Guest' } = user;\n\n// 3. Deep nested destructuring\nconst { profile: { age } } = user;\n\nconsole.log(username); // 'jdoe'\nconsole.log(role);     // 'Guest' (Default applied)\nconsole.log(age);      // 30",
    },
    {
      id: "js-exp-13",
      questionNumber: 44,
      question: "Difference between prototypal and classical inheritance.",
      difficulty: "advanced",
      tags: ["prototype", "oop", "inheritance"],
      answer:
        "Classical inheritance (like Java) uses rigid blueprints (Classes) to instantiate objects. An object is a copy of the class definition. Prototypal inheritance (JavaScript) does not use blueprints; objects inherit directly from other objects via the prototype chain (delegation). Prototypal is much more flexible because prototypes can be mutated at runtime, and it easily supports patterns like concatenative inheritance (mixins) which sidestep the classical 'Gorilla/Banana' problem of tight coupling.",
      codeSnippet:
        "// CLASSICAL (Conceptual representation in JS via ES6 sugar)\nclass Animal { walk() { return true; } }\nclass Dog extends Animal {}\nconst dog1 = new Dog(); \n\n// PROTOTYPAL (Actual JS behavior - Delegation)\nconst animalObj = { walk: () => true };\nconst dogObj = Object.create(animalObj);\n\n// Prototypal flexibility: Mutating the prototype at runtime\nanimalObj.run = () => true; \nconsole.log(dogObj.run()); // true (Inherits dynamic changes instantly)",
    },
    {
      id: "js-exp-14",
      questionNumber: 45,
      question: "What is a Temporal Dead Zone?",
      difficulty: "advanced",
      tags: ["tdz", "let", "const", "execution-context"],
      answer:
        "The Temporal Dead Zone (TDZ) is the specific period during execution from the moment a block scope is entered until a 'let' or 'const' variable is actually declared and initialized. While these variables are technically hoisted to the top of their block, accessing them within the TDZ throws a ReferenceError. The engine enforces this to catch bugs, ensuring that variables are not read before their lexical binding is formally evaluated.",
      codeSnippet:
        "{\n  // Block scope starts here. 'myVar' is immediately hoisted.\n  // -> Temporal Dead Zone (TDZ) for 'myVar' STARTS.\n  \n  // console.log(myVar); // ❌ ReferenceError: Cannot access before initialization\n  \n  let myVar = \"Hello\"; // Declaration reached.\n  // -> Temporal Dead Zone (TDZ) for 'myVar' ENDS.\n  \n  console.log(myVar); // ✅ Outputs: \"Hello\"\n}",
    },
    {
      id: "js-exp-15",
      questionNumber: 46,
      question: "What do you mean by JavaScript Design Patterns?",
      difficulty: "advanced",
      tags: ["patterns", "architecture", "design-patterns"],
      answer:
        "JavaScript Design Patterns are generalized, reusable solutions to commonly occurring software architecture problems. They provide a standardized vocabulary for developers. They are broadly categorized into Creational (e.g., Singleton, Factory, Builder), Structural (e.g., Facade, Decorator, Proxy), and Behavioral (e.g., Observer, Mediator, Strategy). For instance, the Module pattern, which utilizes closures to emulate private and public API access, is historically one of the most vital JS patterns.",
      codeSnippet:
        "// Example: The Singleton Pattern (Creational)\n// Ensures a class has only one instance, providing global access to it.\nclass Database {\n  constructor(data) {\n    if (Database.instance) {\n      return Database.instance; // Return existing instance\n    }\n    this.data = data;\n    Database.instance = this;\n  }\n}\n\nconst db1 = new Database('MongoDB');\nconst db2 = new Database('PostgreSQL');\n\nconsole.log(db1 === db2); // true (db2 points to db1's instance)",
    },
    {
      id: "js-exp-16",
      questionNumber: 47,
      question: "Is JavaScript a pass-by-reference or pass-by-value language?",
      difficulty: "advanced",
      tags: ["reference", "value", "memory-management"],
      answer:
        "JavaScript is strictly 'pass-by-value', but it behaves specifically as 'call-by-sharing' for objects. When passing a primitive, the actual value is copied. When passing an object, the 'value' being copied and passed is the memory reference (pointer) to the object. Therefore, mutating the object's properties inside a function affects the original object. However, completely reassigning the parameter inside the function just breaks the pointer link; it does not overwrite the original object outside the function.",
      codeSnippet:
        'function modifyObjects(obj1, obj2) {\n  // 1. Mutating the object\'s properties affects the original (Call-by-sharing)\n  obj1.name = "Alice"; \n  \n  // 2. Reassigning the parameter completely DOES NOT affect the original\n  obj2 = { name: "Charlie" }; \n}\n\nconst person1 = { name: "John" };\nconst person2 = { name: "Bob" };\n\nmodifyObjects(person1, person2);\n\nconsole.log(person1.name); // "Alice" (Mutated!)\nconsole.log(person2.name); // "Bob" (Original unaffected by reassignment)',
    },
    {
      id: "js-exp-17",
      questionNumber: 48,
      question:
        "Difference between Async/Await and Generators usage to achieve the same functionality.",
      difficulty: "advanced",
      tags: ["async-await", "generators", "async-programming"],
      answer:
        "Both allow writing asynchronous code in a synchronous-looking style. Generators ('function*') yield Promises but require a third-party executor utility (like the 'co' library) to resolve those promises and push the iterator forward manually using '.next()'. 'Async/await' is essentially a native wrapper over generators and Promises built directly into the JS engine. It automatically handles the execution and resolution of the yielded Promises, making the code significantly cleaner and standardized.",
      codeSnippet:
        "// 1. Generators (Old Way - Needs a manual executor runner)\nfunction* fetchUserGen() {\n  const user = yield fetch('/user/1').then(r => r.json());\n  console.log(user);\n}\n// runner(fetchUserGen); // Needs a complex wrapper to resolve the yield\n\n// 2. Async/Await (Modern Way - Built-in engine support)\nasync function fetchUserAsync() {\n  // The engine automatically pauses, waits for promise, and resumes.\n  const user = await fetch('/user/1').then(r => r.json());\n  console.log(user);\n}",
    },
    {
      id: "js-exp-18",
      questionNumber: 49,
      question: "What are the primitive data types in JavaScript?",
      difficulty: "intermediate",
      tags: ["primitive-types", "fundamentals"],
      answer:
        "JavaScript has seven primitive data types: String, Number, Boolean, Undefined, Null, Symbol (introduced in ES6 for unique object keys), and BigInt (introduced in ES2020 for handling integers larger than the Number safe limit). The key defining characteristics of primitives are that they are immutable (cannot be altered once created, only reassigned) and they do not have properties or methods inherently (JavaScript temporarily wraps them in Object counterparts like 'String()' when methods are called).",
      codeSnippet:
        '// The 7 Primitives:\nconst stringType = "text";\nconst numberType = 3.14;\nconst booleanType = true;\nconst undefType = undefined;\nconst nullType = null;\nconst symbolType = Symbol(\'id\');\nconst bigIntType = 9007199254740991n;\n\n// Primitives are immutable\nlet str = "hello";\nstr[0] = "H"; // Fails silently, string is immutable\nconsole.log(str); // Still "hello"',
    },
    {
      id: "js-exp-19",
      questionNumber: 50,
      question: "What is the role of deferred scripts in JavaScript?",
      difficulty: "advanced",
      tags: ["defer", "loading", "browser-performance"],
      answer:
        "Adding the 'defer' attribute to a script tag instructs the browser to download the script asynchronously in the background while the HTML parser continues to build the DOM. Crucially, unlike the 'async' attribute, 'defer' guarantees that scripts are executed in the exact order they appear in the document, and execution only begins after the HTML parsing is completely finished, but right before the 'DOMContentLoaded' event fires. It's the optimal approach for performance and preventing render-blocking.",
      codeSnippet:
        '\n<script src="heavy.js"></script>\n\n\n<script async src="analytics.js"></script>\n\n\n<script defer src="react-app.js"></script>',
    },
    {
      id: "js-exp-20",
      questionNumber: 51,
      question:
        "What has to be done in order to put Lexical Scoping into practice?",
      difficulty: "advanced",
      tags: ["lexical-scope", "closures", "scope"],
      answer:
        "Lexical scoping simply means variable access is determined by physical placement in the source code at compile time. To put this to practical use, we create Closures. By defining an inner function inside an outer function, and returning or passing that inner function elsewhere, the inner function permanently 'closes over' and retains access to the outer function's scope. This is practically used for data hiding, state management in React hooks, and implementing the Module pattern.",
      codeSnippet:
        "// Practical application of Lexical Scoping (Closure)\nfunction secureVault(initialPassword) {\n  let password = initialPassword; // Protected variable\n  \n  // Returns an object of inner functions that lexically retain access to 'password'\n  return {\n    verify: (guess) => guess === password,\n    update: (oldPw, newPw) => {\n      if (oldPw === password) password = newPw;\n    }\n  }\n}\n\nconst myVault = secureVault(\"secret123\");\nconsole.log(myVault.verify(\"secret123\")); // true\n// 'password' cannot be accessed directly via myVault.password",
    },
    {
      id: "js-exp-21",
      questionNumber: 52,
      question: "What is the purpose of the following JavaScript code?",
      difficulty: "advanced",
      tags: ["debugging", "analysis", "code-analysis"],
      answer:
        "(Note: As an arbitrary code snippet wasn't provided, here is how an experienced dev answers). When presented with code analysis, the goal is to identify underlying engine mechanics. For example, if given a 'for-loop' with 'var' and a 'setTimeout', the purpose is to demonstrate an understanding of closures and the Event Loop (the loop finishes before the timeouts run, all logging the final 'var' value). If given a nested function returning another function, the purpose is to identify a 'currying' pattern or a closure ensuring data privacy.",
      codeSnippet:
        "// Classic Interview Code Analysis Example:\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n// Purpose: Tests knowledge of closures, 'var' function-scoping, and the Event Loop.\n// Output: 3, 3, 3 (Because the loop completes synchronously before timeouts execute,\n// and 'var' shares a single memory binding).\n\n// Fix: Replace 'var' with 'let' to create block-scoped bindings per iteration.",
    },
    {
      id: "js-senior-1",
      questionNumber: 53,
      question: "Explain microtasks vs macrotasks with a real example.",
      difficulty: "advanced",
      tags: ["event-loop", "microtasks", "macrotasks", "async"],
      answer:
        "The Event Loop prioritizes the microtask queue over the macrotask (task) queue. After the current synchronous call stack clears, the engine processes *all* pending microtasks (e.g., Promise.then/catch/finally, queueMicrotask, MutationObserver) until the microtask queue is entirely empty. Only then does it render the UI or pick up the next macrotask (e.g., setTimeout, setInterval, DOM events). For example, if you schedule a `setTimeout(cb, 0)` and a `Promise.resolve().then(cb)`, the Promise callback strictly runs first. An important architectural caveat: if microtasks continuously recursively queue more microtasks, the event loop becomes 'starved', blocking the main thread and freezing the UI. Recursive macrotasks do not cause this, as the browser can render between them.",
      codeSnippet:
        "console.log('1. Script start (Sync)');\n\n// Macrotask\nsetTimeout(() => console.log('4. setTimeout (Macrotask)'), 0);\n\n// Microtask\nPromise.resolve().then(() => console.log('3. Promise (Microtask)'));\n\nconsole.log('2. Script end (Sync)');\n\n/* Output Order:\n   1. Script start\n   2. Script end\n   3. Promise \n   4. setTimeout\n*/",
    },
    {
      id: "js-senior-2",
      questionNumber: 54,
      question: "How does the JS engine optimize code at a high level?",
      difficulty: "advanced",
      tags: ["v8", "jit", "optimization", "js-engine"],
      answer:
        "Modern JS engines like V8 use a Just-In-Time (JIT) compilation pipeline. Code is first parsed into an AST and interpreted by the Ignition interpreter, which simultaneously collects profiling data (type feedback). 'Hot' functions (code executed repeatedly) are sent to the TurboFan optimizing compiler. TurboFan uses this profiling data to generate highly optimized, raw machine code. It relies heavily on techniques like 'Inline Caching' (caching the memory offsets of object properties) and 'Hidden Classes' (creating predictable C++-like memory layouts for dynamic JS objects). This allows dynamic JavaScript to approach the speed of compiled languages.",
      codeSnippet:
        '// How to write "Optimizable" code for JIT compilers:\n\nfunction processPoint(point) {\n  return point.x + point.y;\n}\n\n// GOOD: Passing objects with identical shapes (Hidden Classes)\nprocessPoint({ x: 1, y: 2 });\nprocessPoint({ x: 5, y: 6 }); \n// V8 optimizes this heavily using Inline Caching.\n\n// BAD: Breaking the Hidden Class predictability\nprocessPoint({ y: 2, x: 1 }); // Same properties, but different initialization order!\nprocessPoint({ x: 1, y: 2, z: 3 }); // Extra properties\n// V8 is forced to de-optimize the function.',
    },
    {
      id: "js-senior-3",
      questionNumber: 55,
      question: "What causes memory leaks in JS apps? How do you detect them?",
      difficulty: "advanced",
      tags: ["memory-leaks", "profiling", "performance", "memory-management"],
      answer:
        "Memory leaks occur when objects are no longer needed by the application but are still retained by active references, preventing the Garbage Collector from freeing the memory. Common culprits include: undeclared global variables, forgotten `setInterval` or `setTimeout` callbacks, event listeners not removed during component unmounts, closures unnecessarily capturing large outer scopes, and 'detached DOM nodes' (keeping a JS reference to a deleted HTML element). To detect leaks, I use Chrome DevTools Memory profiling. I take multiple 'Heap Snapshots'—forcing garbage collection between them—and compare them to identify objects growing linearly over time. The 'Allocation Timeline' is also crucial for spotting repetitive leak patterns during UI interactions.",
      codeSnippet:
        "// Classic Memory Leak: Detached DOM Node\nlet detachedNodes = [];\n\nfunction removeElement() {\n  const el = document.getElementById('huge-div');\n  document.body.removeChild(el); \n  \n  // ❌ LEAK: The DOM node is removed from the view,\n  // but this array keeps a JavaScript reference to it.\n  // The Garbage Collector CANNOT free the memory.\n  detachedNodes.push(el); \n}\n\n// ✅ FIX: Do not store references to removed elements globally,\n// or use a WeakMap if metadata tracking is required.",
    },
    {
      id: "js-senior-4",
      questionNumber: 56,
      question: "What is garbage collection in V8 (mark-and-sweep)?",
      difficulty: "advanced",
      tags: ["garbage-collection", "v8", "mark-and-sweep", "memory-management"],
      answer:
        "V8 utilizes a generational garbage collector based on the 'Generational Hypothesis': most objects die young. Memory is split into the Young Generation (small, fast allocation, managed by a minor GC using the Scavenger algorithm) and the Old Generation (long-lived objects). The major GC manages the Old Generation using 'Mark-and-Sweep' (and Compact). It starts at the 'roots' (global object, local variables in the active call stack) and traverses all references, 'marking' reachable objects. In the 'sweep' phase, unmarked (unreachable) memory is freed. To prevent UI frame drops, V8's Orinoco project optimizes this by performing marking and sweeping concurrently and in parallel on background threads, minimizing 'stop-the-world' main thread pauses.",
      codeSnippet:
        "// V8 Mark-and-Sweep visual concept\nlet rootObject = { a: { b: 1 } };\nlet danglingObject = { c: 2 };\n\n// 'rootObject' is reachable from the global scope -> MARKED (Kept)\n// 'danglingObject' is reachable -> MARKED (Kept)\n\ndanglingObject = null; \n\n// GC runs:\n// 1. Starts at root.\n// 2. Traverses and marks rootObject and rootObject.a.\n// 3. { c: 2 } has no references. It is UNMARKED.\n// 4. Sweep phase: Memory for { c: 2 } is freed.",
    },
    {
      id: "js-senior-5",
      questionNumber: 57,
      question: "What are deoptimizations (deopts) and what causes them?",
      difficulty: "advanced",
      tags: ["deopt", "v8", "optimization", "js-engine"],
      answer:
        "Deoptimizations ('deopts') happen when the JIT compiler's speculative assumptions about your code become invalid during execution. When compiling 'hot' code, the engine assumes variable types and object shapes ('Hidden Classes') will remain consistent (monomorphism). If a function previously called with Integers is suddenly called with a String, or if an object is mutated in a way that alters its Hidden Class (e.g., adding properties dynamically or changing property declaration order), the engine must throw away the highly optimized machine code and 'deoptimize' back to the slower, interpreted bytecode. To prevent this, developers should initialize all object properties in constructors and maintain predictable data types.",
      codeSnippet:
        'function addNumbers(a, b) {\n  return a + b;\n}\n\n// V8 sees this called 10,000 times with Numbers. \n// It compiles highly optimized machine code assuming a & b are always Numbers.\nfor(let i=0; i<10000; i++) addNumbers(1, 2); \n\n// 🚨 DEOPT TRIGGER!\n// Suddenly passing Strings breaks V8\'s assumption. \n// The optimized code is thrown out, and V8 falls back to the slow interpreter.\naddNumbers("Hello", "World"); ',
    },
    {
      id: "js-senior-6",
      questionNumber: 58,
      question: "What are TypedArrays and when would you use them?",
      difficulty: "advanced",
      tags: ["typedarrays", "binary-data", "performance"],
      answer:
        "TypedArrays (like Int32Array, Float64Array) are array-like views that provide a mechanism for reading and writing raw binary data in memory buffers. Standard JavaScript arrays are dynamic, hash-map-like objects capable of holding mixed types, which is memory-heavy and slow for intensive math. TypedArrays are backed by a fixed-length `ArrayBuffer` and enforce strict typing, resulting in highly predictable, contiguous memory layouts. I use them for high-performance use cases: manipulating audio/video data, processing raw WebSockets binary payloads, handling complex 3D math for WebGL, or sharing memory instantly between the main thread, Web Workers, and WebAssembly.",
      codeSnippet:
        '// 1. Allocate a contiguous block of memory (16 bytes)\nconst buffer = new ArrayBuffer(16);\n\n// 2. Create a view to read/write 32-bit integers in that buffer\n// 16 bytes / 4 bytes per Int32 = Array of length 4\nconst int32View = new Int32Array(buffer);\n\nint32View[0] = 42;\nint32View[1] = 99;\n// int32View[2] = "Hello"; // ❌ TypeError or converted to 0\n\nconsole.log(int32View); // Int32Array(4) [42, 99, 0, 0]\n// Super fast, memory efficient, used heavily in WebGL.',
    },
    {
      id: "js-senior-7",
      questionNumber: 59,
      question: "How does structured clone differ from JSON serialization?",
      difficulty: "advanced",
      tags: ["structuredClone", "serialization", "data-handling"],
      answer:
        "Historically, developers used `JSON.parse(JSON.stringify(obj))` for deep cloning. However, this serialization method is deeply flawed: it strips out functions, ignores `undefined` and Symbols, mutates `Date` objects into strings, fails entirely on circular references, and cannot process complex types like Maps or Sets. `structuredClone()` is a native modern Web API that solves this by utilizing the structured clone algorithm. It produces a true deep copy, successfully maintaining circular references and correctly duplicating Dates, Maps, Sets, ArrayBuffers, and Blobs. It is the standard for robust state cloning and is the same algorithm used to pass data to Web Workers.",
      codeSnippet:
        "const original = { \n  date: new Date(), \n  set: new Set([1, 2]),\n  undef: undefined\n};\n// Circular reference setup\noriginal.self = original;\n\n// ❌ JSON Method: Fails completely on circular references.\n// let jsonClone = JSON.parse(JSON.stringify(original)); // Throws TypeError\n\n// ✅ structuredClone Method:\nconst deepClone = structuredClone(original);\n\nconsole.log(deepClone.date instanceof Date); // true (JSON would make it a string)\nconsole.log(deepClone.set instanceof Set);   // true (JSON would strip it)\nconsole.log(deepClone.self === deepClone);   // true (Circular link maintained)",
    },
    {
      id: "js-senior-8",
      questionNumber: 60,
      question: "What is event delegation and why does it matter?",
      difficulty: "intermediate",
      tags: ["event-delegation", "performance", "dom"],
      answer:
        "Event delegation is a design pattern that leverages the Event Bubbling phase of the DOM. Instead of attaching individual event listeners to thousands of child elements (like every `<li>` in a massive list), you attach a single listener to their common parent container. When a child is clicked, the event bubbles up to the parent, where you inspect `event.target` to identify exactly which child triggered the action. This matters massively for performance and memory scaling. Furthermore, it inherently supports dynamic DOM nodes; if you inject new child elements into the list after page load, the parent listener will automatically intercept their events without needing new bindings.",
      codeSnippet:
        "// HTML: <ul id=\"todo-list\"> <li>Task 1</li> <li>Task 2</li> </ul>\n\nconst list = document.getElementById('todo-list');\n\n// ✅ Attaching ONE listener to the parent instead of many to the children\nlist.addEventListener('click', (event) => {\n  // event.target is the specific element clicked\n  if (event.target.tagName === 'LI') {\n    console.log('Completed:', event.target.innerText);\n    event.target.classList.add('done');\n  }\n});\n\n// New dynamic elements instantly benefit from the listener\nlist.innerHTML += '<li>Task 3</li>';",
    },
    {
      id: "js-senior-9",
      questionNumber: 61,
      question: "How do you prevent expensive reflows and repaints?",
      difficulty: "advanced",
      tags: ["reflow", "repaint", "rendering", "browser-performance"],
      answer:
        "A reflow (layout calculation) occurs when an element's geometric properties change (width, position), forcing the browser to recalculate the layout of the entire document tree. A repaint occurs on visual changes (color, shadows) without layout shifts. Both block the main thread. To optimize, I avoid 'layout thrashing' (forced synchronous layouts) by batching DOM reads and writes separately so the browser doesn't recalculate layout mid-execution. I use `DocumentFragments` for bulk DOM insertions. Crucially, for animations, I exclusively use CSS `transform` and `opacity`; these properties can be handled directly by the GPU compositor thread, bypassing the layout and paint phases entirely.",
      codeSnippet:
        "// ❌ BAD: Layout Thrashing (Interleaving reads and writes)\nfor (let i = 0; i < elements.length; i++) {\n  // Read (forces layout calculation), then Write (invalidates layout)\n  elements[i].style.width = container.offsetWidth + 'px'; \n}\n\n// ✅ GOOD: Batching Reads and Writes\nconst width = container.offsetWidth; // Read ONCE\nfor (let i = 0; i < elements.length; i++) {\n  elements[i].style.width = width + 'px'; // Write in bulk\n}\n\n// ✅ GOOD: Animate with Transform (GPU Accelerated, no reflow/repaint)\n// .box { transition: transform 0.3s; transform: translateX(100px); }",
    },

    {
      id: "js-senior-10",
      questionNumber: 62,
      question: "How would you design a concurrency limiter for async tasks?",
      difficulty: "advanced",
      tags: ["concurrency", "async", "queue", "system-design"],
      answer:
        "I would implement a Queue-based class to throttle execution. The class maintains a `limit` integer, an `activeCount` integer, and a `queue` array holding the `resolve` functions of deferred Promises. When a task is added: if `activeCount < limit`, I immediately increment the counter and run the task. If the limit is hit, I instantiate a new Promise, push its `resolve` function into the `queue`, and await it—essentially pausing execution. Whenever an active task completes (using a `.finally()` block), I decrement `activeCount`. Then, if the queue has pending items, I `.shift()` the oldest `resolve` function and call it, unpausing the next task in line. This protects backend APIs from rate limits and keeps client-side memory stable.",
      codeSnippet:
        "class AsyncQueue {\n  constructor(limit) {\n    this.limit = limit;\n    this.active = 0;\n    this.queue = [];\n  }\n\n  async add(task) {\n    if (this.active >= this.limit) {\n      // Pause execution here until the promise is resolved by a finishing task\n      await new Promise(resolve => this.queue.push(resolve));\n    }\n    \n    this.active++;\n    try {\n      return await task(); // Execute the actual async task\n    } finally {\n      this.active--;\n      // Unpause the next waiting task in line\n      if (this.queue.length > 0) this.queue.shift()();\n    }\n  }\n}",
    },
    {
      id: "js-int-1",
      questionNumber: 63,
      question:
        "What is the difference between null and undefined? When do you get each one?",
      difficulty: "intermediate",
      tags: ["null", "undefined", "types", "fundamentals"],
      answer:
        "Both represent the absence of a value, but they are used differently. 'undefined' means a variable has been declared but has not yet been assigned a value, or a function didn't return anything. It is JavaScript's default uninitialized state. 'null', on the other hand, is an intentional assignment representing 'no value' or an empty object reference. A quirky detail to mention is that typeof undefined is 'undefined', but typeof null is 'object' due to a legacy bug in JavaScript.",
      codeSnippet:
        "// 1. undefined: JavaScript's default empty state\nlet user;\nconsole.log(user); // undefined (declared, but no value yet)\n\nfunction noReturn() {}\nconsole.log(noReturn()); // undefined (functions return undefined by default)\n\n// 2. null: Developer's intentional empty state\nlet activeSession = null; \n// We know a session variable exists, but we explicitly wiped the data.",
    },
    {
      id: "js-int-2",
      questionNumber: 64,
      question: 'What is truthy and falsy in JavaScript? Why is "0" truthy?',
      difficulty: "intermediate",
      tags: ["truthy", "falsy", "type-coercion", "type-system"],
      answer:
        "In JavaScript, every value has an inherent boolean equivalent used in logical contexts (like if-statements). 'Falsy' values evaluate to false. There are exactly six primary falsy values: false, 0, \"\" (empty string), null, undefined, and NaN (plus 0n in BigInt). Everything else is 'truthy'. The string \"0\" is truthy because it is a non-empty string; JavaScript evaluates all non-empty strings as true, regardless of the characters they contain.",
      codeSnippet:
        '// The 6 Falsy Values:\nif (!false && !0 && !"" && !null && !undefined && !NaN) {\n  console.log("All of these evaluate to false");\n}\n\n// "0" is a String with a length of 1. All non-empty strings are Truthy.\nif ("0") {\n  console.log("This block WILL run!");\n}\n\n// Be careful with empty arrays/objects, they are TRUTHY!\nif ([] && {}) { console.log("Truthy!"); }',
    },
    {
      id: "js-int-3",
      questionNumber: 65,
      question: "What is hoisting? What gets hoisted?",
      difficulty: "intermediate",
      tags: ["hoisting", "scope", "execution-context"],
      answer:
        "Hoisting is JavaScript's default behavior of conceptually moving declarations to the top of their current scope during the compilation phase, before execution. Function declarations are fully hoisted, meaning you can call them before they are written in the code. Variables declared with 'var' are hoisted but initialized with 'undefined'. Variables declared with 'let' and 'const' are technically hoisted, but remain uninitialized in the Temporal Dead Zone, throwing an error if accessed early.",
      codeSnippet:
        '// 1. Function Declarations: Fully Hoisted\nhello(); // Outputs: "Hello!"\nfunction hello() { console.log("Hello!"); }\n\n// 2. var Variables: Hoisted but initialized to undefined\nconsole.log(score); // Outputs: undefined\nvar score = 100;\n\n// 3. let/const: Hoisted to TDZ (Throws error)\n// console.log(name); // ❌ ReferenceError\nlet name = "Alice";',
    },
    {
      id: "js-int-4",
      questionNumber: 66,
      question: "What is the Temporal Dead Zone (TDZ)?",
      difficulty: "intermediate",
      tags: ["tdz", "let", "const", "execution-context"],
      answer:
        "The Temporal Dead Zone (TDZ) is the period during execution from the start of a block until a 'let' or 'const' variable is formally declared and initialized. While these variables are technically hoisted to the top of the block, accessing them while they are in the TDZ will result in a ReferenceError. The engine enforces this to catch bugs and ensure that variables are not read before their lexical binding is evaluated.",
      codeSnippet:
        "{\n  // ---- TDZ for 'myVar' STARTS here ----\n  const a = 10;\n  \n  // console.log(myVar); // ❌ ReferenceError! Accessing inside TDZ\n\n  let myVar = 20; \n  // ---- TDZ for 'myVar' ENDS here ----\n\n  console.log(myVar); // ✅ 20\n}",
    },
    {
      id: "js-int-5",
      questionNumber: 67,
      question: "What is the difference between var, let, and const?",
      difficulty: "intermediate",
      tags: ["var", "let", "const", "scope", "variables"],
      answer:
        "'var' is function-scoped, can be re-declared in the same scope, and is hoisted with a value of 'undefined'. 'let' and 'const' were introduced in ES6 and are block-scoped (confined to {}). They cannot be re-declared in the same scope and are hoisted into the Temporal Dead Zone. The key difference between 'let' and 'const' is that 'const' creates an immutable binding—the variable cannot be reassigned to a new value (though if it's an object or array, its contents can still be mutated).",
      codeSnippet:
        "// 1. Scope differences\nif (true) {\n  var v = 1; // Leaks out of the block\n  let l = 2; // Trapped in the block\n}\nconsole.log(v); // 1\n// console.log(l); // ❌ ReferenceError\n\n// 2. Const mutation vs reassignment\nconst arr = [1, 2, 3];\narr.push(4); // ✅ Allowed (mutating the contents)\n// arr = [10]; // ❌ TypeError (cannot reassign the pointer)",
    },
    {
      id: "js-int-6",
      questionNumber: 68,
      question: "What is a closure?",
      difficulty: "intermediate",
      tags: ["lexical-scope", "functions", "closures"],
      answer:
        "A closure is a function that 'remembers' its lexical environment even after the outer function has finished executing. Practically, this happens when a function returns an inner function. The inner function maintains access to the variables and arguments of its parent function's scope. Closures are heavily used in JavaScript for data encapsulation (creating private variables), event handlers, and functional programming patterns like currying.",
      codeSnippet:
        "function bankAccount(initialBalance) {\n  let balance = initialBalance; // Private state\n  \n  // The returned object/functions form a closure over 'balance'\n  return {\n    deposit: (amount) => balance += amount,\n    getBalance: () => balance\n  };\n}\n\nconst myAccount = bankAccount(100);\nmyAccount.deposit(50);\nconsole.log(myAccount.getBalance()); // 150\n// console.log(myAccount.balance); // undefined (Hidden from outside)",
    },
    {
      id: "js-int-7",
      questionNumber: 69,
      question: "What does this refer to in JavaScript?",
      difficulty: "intermediate",
      tags: ["this", "context", "binding", "this-keyword"],
      answer:
        "The 'this' keyword refers to the object that is currently executing the code. Its value is determined by its execution context—how the function is called, not where it's defined. In an object method, 'this' refers to the object itself. In a regular global function, it refers to the global object (window in browsers) or undefined in strict mode. The major exception is Arrow Functions, which do not have their own 'this' binding and instead inherit it from their surrounding lexical scope.",
      codeSnippet:
        "const car = {\n  brand: 'Toyota',\n  \n  // Regular method: 'this' = the object that called it (car)\n  getBrand: function() {\n    return this.brand;\n  },\n  \n  // Arrow method: 'this' = surrounding scope (Window), so it fails\n  getBrandArrow: () => {\n    return this.brand; \n  }\n};\n\nconsole.log(car.getBrand()); // \"Toyota\"\nconsole.log(car.getBrandArrow()); // undefined",
    },
    {
      id: "js-int-8",
      questionNumber: 70,
      question: "What is the difference between map() and forEach()?",
      difficulty: "intermediate",
      tags: ["map", "foreach", "arrays"],
      answer:
        "Both are array methods used for iteration, but they differ in their return values. 'forEach()' simply executes a provided function once for each array element and always returns undefined. It is used when you want to perform side effects (like logging or updating DOM elements). 'map()' executes a provided function on each element and returns a brand new array populated with the results of those function calls, leaving the original array unchanged.",
      codeSnippet:
        "const nums = [1, 2, 3];\n\n// forEach: Returns undefined. Used for side effects.\nconst result1 = nums.forEach(n => console.log(n * 2));\nconsole.log(result1); // undefined\n\n// map: Returns a NEW array. Used for transforming data.\nconst result2 = nums.map(n => n * 2);\nconsole.log(result2); // [2, 4, 6]\nconsole.log(nums);    // [1, 2, 3] (Original is untouched)",
    },
    {
      id: "js-int-9",
      questionNumber: 71,
      question: "What is the difference between slice() and splice()?",
      difficulty: "intermediate",
      tags: ["slice", "splice", "mutation", "arrays"],
      answer:
        "'slice()' returns a shallow copy of a portion of an array into a new array. It does not modify the original array (it is immutable). It takes a start and end index. 'splice()', on the other hand, mutates the original array in place by adding, removing, or replacing elements. It takes a start index, a delete count, and optional items to insert, and returns an array containing any deleted elements.",
      codeSnippet:
        "const arr1 = ['a', 'b', 'c', 'd', 'e'];\n\n// SLICE: (startIndex, endIndexExclusive)\n// Extracts a copy, leaves original alone.\nconst sliced = arr1.slice(1, 3); \nconsole.log(sliced); // ['b', 'c']\nconsole.log(arr1);   // ['a', 'b', 'c', 'd', 'e']\n\nconst arr2 = ['a', 'b', 'c', 'd', 'e'];\n\n// SPLICE: (startIndex, deleteCount, ...itemsToAdd)\n// Mutates original array, returns removed items.\nconst spliced = arr2.splice(1, 2, 'X'); \nconsole.log(spliced); // ['b', 'c'] (Removed items)\nconsole.log(arr2);    // ['a', 'X', 'd', 'e'] (Original array altered!)",
    },
    {
      id: "js-int-10",
      questionNumber: 72,
      question: "What is the difference between push/pop and shift/unshift?",
      difficulty: "intermediate",
      tags: ["push", "pop", "shift", "unshift", "arrays"],
      answer:
        "These are all mutator methods used to add or remove elements from an array. 'push()' adds elements to the end of an array, while 'pop()' removes the last element. 'unshift()' adds elements to the beginning of the array, while 'shift()' removes the first element. From a performance perspective, push/pop are generally faster because shift/unshift require the engine to re-index every single remaining element in the array.",
      codeSnippet:
        "let queue = ['b', 'c'];\n\n// End of array (Fast O(1) performance)\nqueue.push('d'); // Adds to end: ['b', 'c', 'd']\nqueue.pop();     // Removes from end: ['b', 'c']\n\n// Beginning of array (Slower O(N) performance due to re-indexing)\nqueue.unshift('a'); // Adds to beginning: ['a', 'b', 'c']\nqueue.shift();      // Removes from beginning: ['b', 'c']",
    },
    {
      id: "js-int-11",
      questionNumber: 73,
      question:
        "What is event bubbling vs event capturing? What is event delegation and when is it useful?",
      difficulty: "intermediate",
      tags: ["event-bubbling", "event-capturing", "dom"],
      answer:
        "Event Capturing (trickling) is when an event travels down the DOM tree from the root to the target element. Event Bubbling is when the event travels back up from the target element to the root. By default, most listeners trigger on the bubbling phase. Event Delegation takes advantage of bubbling: instead of attaching listeners to multiple child elements (like list items), you attach a single listener to their parent. The parent catches the bubbled event and uses 'event.target' to see which child was clicked. This saves memory and automatically handles dynamic elements added later.",
      codeSnippet:
        "// Event Delegation Example\n// Instead of attaching a click listener to 100 <li> elements...\ndocument.getElementById('parent-ul').addEventListener('click', (e) => {\n  // We listen on the <ul> and catch the event as it bubbles up\n  if (e.target.tagName === 'LI') {\n    console.log('You clicked on list item:', e.target.textContent);\n  }\n});\n\n// Stopping the bubble (if needed on specific children)\n// e.stopPropagation();",
    },
    {
      id: "js-int-12",
      questionNumber: 74,
      question:
        "What is the difference between synchronous and asynchronous code?",
      difficulty: "intermediate",
      tags: ["sync", "async", "event-loop", "async-programming"],
      answer:
        "Synchronous code executes line-by-line, top-to-bottom. Each operation must finish before the next one starts, which can block the main thread and freeze the UI during heavy computations. Asynchronous code allows operations (like network requests or timers) to execute in the background without blocking the main thread. Once an async task finishes, a callback, Promise, or async/await mechanism handles the result via the Event Loop, allowing the rest of the application to remain responsive.",
      codeSnippet:
        "// Synchronous (Runs in order, blocks execution)\nconsole.log('1. Start');\n// Heavy math loop here would freeze the browser until done\nconsole.log('2. Middle'); \n\n// Asynchronous (Offloaded to Web APIs, doesn't block)\nconsole.log('A. Start');\nsetTimeout(() => {\n  console.log('C. Finished fetching data'); \n}, 1000); // Happens in the background\nconsole.log('B. End'); \n\n// Output: A. Start -> B. End -> C. Finished fetching data",
    },
    {
      id: "js-int-13",
      questionNumber: 75,
      question:
        "What is the difference between Promise.all() and Promise.allSettled()?",
      difficulty: "intermediate",
      tags: [
        "promises",
        "promise-all",
        "promise-allsettled",
        "async-programming",
      ],
      answer:
        "'Promise.all()' takes an array of promises and resolves only when all of them resolve. Crucially, it 'fails fast': if even a single promise rejects, the entire Promise.all immediately rejects. 'Promise.allSettled()' waits for all promises to finish, regardless of whether they succeed or fail. It resolves to an array of objects describing the outcome (status and value/reason) of each promise. It is the better choice when you have multiple independent async tasks and you want them all to complete even if some fail.",
      codeSnippet:
        "const p1 = Promise.resolve('Success 1');\nconst p2 = Promise.reject('Error occurred');\nconst p3 = Promise.resolve('Success 3');\n\n// 1. Promise.all -> Fails immediately because p2 fails\nPromise.all([p1, p2, p3])\n  .then(res => console.log(res))\n  .catch(err => console.error(\"All rejected:\", err)); // \"All rejected: Error occurred\"\n\n// 2. Promise.allSettled -> Waits for everything, returns status array\nPromise.allSettled([p1, p2, p3]).then(results => {\n  console.log(results);\n  /* Output:\n  [\n    { status: 'fulfilled', value: 'Success 1' },\n    { status: 'rejected', reason: 'Error occurred' },\n    { status: 'fulfilled', value: 'Success 3' }\n  ]\n  */\n});",
    },
    {
      id: "js-sr-1",
      questionNumber: 76,
      question:
        "What is the difference between hoisting for var vs let vs const?",
      difficulty: "advanced",
      tags: ["var", "let", "const", "execution-context", "tdz", "hoisting"],
      answer:
        "All three are hoisted during the creation phase of the Execution Context, meaning memory is allocated for them before the code runs. However, the difference lies in initialization. Variables declared with 'var' are explicitly initialized with the value 'undefined' during hoisting. Variables declared with 'let' and 'const' are hoisted but remain uninitialized. This uninitialized state is known as the Temporal Dead Zone (TDZ). Accessing a 'var' before declaration returns 'undefined', while accessing a 'let' or 'const' throws a ReferenceError.",
      codeSnippet:
        "// var: Hoisted and initialized to undefined\nconsole.log(a); // Output: undefined\nvar a = 10;\n\n// let/const: Hoisted, but uninitialized (TDZ)\ntry {\n  console.log(b); \n} catch (e) {\n  console.log(e.name); // Output: ReferenceError\n}\nlet b = 20;",
    },
    {
      id: "js-sr-2",
      questionNumber: 77,
      question:
        "Do function declarations hoist differently than function expressions?",
      difficulty: "advanced",
      tags: [
        "function-declaration",
        "function-expression",
        "execution-context",
        "hoisting",
      ],
      answer:
        "Yes, fundamentally. Function declarations are 'fully hoisted', meaning both the function's name and its entire body are placed into memory during the creation phase. You can invoke them safely before they appear in the source code. Function expressions (e.g., `var myFunc = function() {}`), however, are treated as variable declarations. The variable name ('myFunc') is hoisted, but the assignment of the function to that variable happens at runtime. Calling it early results in a TypeError (e.g., 'myFunc is not a function') because you are trying to invoke 'undefined'.",
      codeSnippet:
        '// 1. Function Declaration (Fully Hoisted)\nworksFine(); // Outputs: "Yes!"\nfunction worksFine() { console.log("Yes!"); }\n\n// 2. Function Expression (Only the variable is hoisted)\n// throwsError(); // ❌ TypeError: throwsError is not a function\n\nvar throwsError = function() {\n  console.log("Nope.");\n};',
    },
    {
      id: "js-sr-3",
      questionNumber: 78,
      question: "Are arrow functions hoisted? Why or why not?",
      difficulty: "advanced",
      tags: ["arrow-functions", "functions", "variables"],
      answer:
        "Arrow functions themselves are not hoisted because they are always function expressions, never function declarations. Their hoisting behavior is entirely dictated by the variable keyword used to declare them. If assigned to a 'var', the identifier is hoisted and initialized to 'undefined'. If assigned to a 'let' or 'const', the identifier is hoisted into the Temporal Dead Zone. In either case, you cannot execute the arrow function before its definition line.",
      codeSnippet:
        '// Arrow functions behave exactly like the variable holding them\n\n// 1. var arrow function -> throws TypeError (calling undefined)\n// myArrow1(); \nvar myArrow1 = () => console.log("Test");\n\n// 2. const arrow function -> throws ReferenceError (TDZ)\n// myArrow2();\nconst myArrow2 = () => console.log("Test");',
    },
    {
      id: "js-sr-4",
      questionNumber: 79,
      question:
        "Are class declarations hoisted? What error do you get if you access them early?",
      difficulty: "advanced",
      tags: ["class", "tdz", "hoisting", "classes"],
      answer:
        "Yes, class declarations are hoisted—the JavaScript engine registers the class identifier in the lexical environment before execution. However, unlike function declarations, classes are not initialized when hoisted. They are subject to the exact same Temporal Dead Zone (TDZ) rules as 'let' and 'const'. Attempting to instantiate or access the class before its declaration line will throw a ReferenceError: Cannot access 'ClassName' before initialization.",
      codeSnippet:
        "// Instantiating before declaration:\ntry {\n  const user = new UserProfile(); \n} catch (e) {\n  // ❌ ReferenceError: Cannot access 'UserProfile' before initialization\n  console.log(e.message);\n}\n\n// Declaration reached, TDZ ends here.\nclass UserProfile {\n  constructor() { this.active = true; }\n}",
    },
    {
      id: "js-sr-5",
      questionNumber: 80,
      question:
        "Why does accessing a let variable before declaration throw an error, but var becomes undefined?",
      difficulty: "advanced",
      tags: ["tdz", "hoisting", "execution-context"],
      answer:
        "This is a deliberate design choice in ES6 to catch silent bugs. In the compilation phase, when the engine encounters 'var', it allocates memory and immediately sets the pointer to a primitive 'undefined' value. When it encounters 'let' or 'const', it allocates memory but explicitly marks the binding as 'uninitialized'. The engine enforces the Temporal Dead Zone strictly: any read/write operation on an uninitialized binding causes the engine to throw a ReferenceError, forcing developers to declare variables before using them.",
      codeSnippet:
        "// Historical JS Bug Source:\nconsole.log(taxRate); // undefined - Math might result in NaN quietly.\nvar taxRate = 0.05;\n\n// Modern JS Solution:\n// console.log(discount); // ❌ ReferenceError - Engine explicitly protects you.\nlet discount = 0.1;",
    },
    {
      id: "js-sr-6",
      questionNumber: 81,
      question:
        "What happens when you declare the same var twice? What about let?",
      difficulty: "advanced",
      tags: ["redeclaration", "scope", "var", "let", "variables"],
      answer:
        "With 'var', redeclaring the same variable within the same scope is perfectly valid; the engine simply ignores the duplicate declaration and treats it as a reassignment, which can lead to accidental data overwrites. With 'let' or 'const', redeclaring the same identifier in the same lexical scope is strictly forbidden. The JavaScript parser will throw a SyntaxError ('Identifier has already been declared') before the code even begins to execute.",
      codeSnippet:
        "// var allows redeclaration (can cause confusing bugs in large files)\nvar x = 10;\nvar x = 20; \nconsole.log(x); // 20\n\n// let prevents redeclaration (caught at parse time)\nlet y = 10;\n// let y = 20; // ❌ SyntaxError: Identifier 'y' has already been declared",
    },
    {
      id: "js-sr-7",
      questionNumber: 82,
      question:
        "How does hoisting behave inside blocks {} and inside functions?",
      difficulty: "advanced",
      tags: ["block-scope", "function-scope", "execution-context", "scope"],
      answer:
        "Hoisting boundaries depend on the keyword. 'var' and function declarations are function-scoped; they hoist to the top of the nearest enclosing function (or the global context), completely ignoring block statements like 'if' or 'for'. Conversely, 'let' and 'const' are block-scoped; they hoist only to the top of the nearest enclosing block '{}'. This means a 'let' variable inside an 'if' block has a Temporal Dead Zone that starts at the opening brace of that 'if' statement, not at the top of the function.",
      codeSnippet:
        "function testHoisting() {\n  if (true) {\n    var a = 1; // Hoists to top of testHoisting()\n    let b = 2; // Hoists to top of this 'if' block (TDZ starts here)\n  }\n  \n  console.log(a); // 1 (Successfully escaped the block)\n  // console.log(b); // ❌ ReferenceError (b does not exist out here)\n}",
    },
    {
      id: "js-sr-8",
      questionNumber: 83,
      question:
        "In interviews, how do you quickly identify whether a bug is hoisting-related?",
      difficulty: "advanced",
      tags: ["debugging", "hoisting", "interview"],
      answer:
        "I look for specific error signatures and shadowing behaviors. A 'TypeError: x is not a function' often means a function expression ('var x = ...') was hoisted but called before assignment. A 'ReferenceError: Cannot access X before initialization' is a guaranteed TDZ/hoisting issue with 'let'/'const'/'class'. Another classic pattern is a variable unexpectedly returning 'undefined' inside a function despite a global variable existing with the same name; this usually means a 'var' declaration further down in the function has hoisted its name to the top, shadowing the global variable.",
      codeSnippet:
        'var name = "Global Name";\n\nfunction printName() {\n  // Interview trick: Why is this undefined instead of "Global Name"?\n  console.log(name); // undefined\n  \n  // Answer: The var declaration below hoists to the top of printName,\n  // shadowing the global variable, but its initialization stays here.\n  var name = "Local Name"; \n}\nprintName();',
    },
    {
      id: "dsa-sr-1",
      questionNumber: 84,
      question: "Detect a cycle in a linked list.",
      difficulty: "advanced",
      tags: ["cycle-detection", "two-pointers"],
      answer:
        "The optimal approach is Floyd's Cycle-Finding Algorithm, also known as the 'Tortoise and Hare' method. You initialize two pointers, 'slow' and 'fast', both pointing to the head of the list. In a loop, move 'slow' by one node (`slow = slow.next`) and 'fast' by two nodes (`fast = fast.next.next`). If the linked list has a cycle, the fast pointer will eventually lap the slow pointer, and they will point to the exact same node (`slow === fast`), returning true. If the 'fast' pointer or 'fast.next' reaches null, the list terminates, meaning there is no cycle (return false). This operates in O(N) time complexity and O(1) auxiliary space.",
      codeSnippet:
        "function hasCycle(head) {\n  let slow = head;\n  let fast = head;\n  \n  // Traverse list. Fast moves 2x speed.\n  while (fast !== null && fast.next !== null) {\n    slow = slow.next;\n    fast = fast.next.next;\n    \n    // If they meet, there is an infinite loop (cycle)\n    if (slow === fast) {\n      return true;\n    }\n  }\n  \n  // Fast hit the end of the list\n  return false;\n}",
    },
    {
      id: "js-closure-1",
      questionNumber: 85,
      question: "What is a closure in JavaScript (in your own words)?",
      difficulty: "intermediate",
      tags: ["closure", "scope", "functions", "closures"],
      answer:
        "A closure is a fundamental feature in JavaScript where an inner function retains access to the outer (enclosing) function's variables and scope chain, even after that outer function has finished executing and returned. It essentially 'closes over' its lexical environment. Every time a function is created in JavaScript, a closure is implicitly created alongside it, bundling the function with references to its surrounding state.",
      codeSnippet:
        'function greetingCreator(greeting) {\n  // The inner function "remembers" the \'greeting\' parameter\n  // long after greetingCreator() has finished running.\n  return function(name) {\n    console.log(`${greeting}, ${name}!`);\n  }\n}\n\nconst sayHello = greetingCreator("Hello");\nsayHello("Alice"); // "Hello, Alice!"\n\nconst sayHowdy = greetingCreator("Howdy");\nsayHowdy("Bob");   // "Howdy, Bob!"',
    },
    {
      id: "js-closure-2",
      questionNumber: 86,
      question: "Why do closures exist? What problem do they solve?",
      difficulty: "intermediate",
      tags: [
        "lexical-scope",
        "data-encapsulation",
        "execution-context",
        "closures",
      ],
      answer:
        "Closures exist because JavaScript uses 'lexical scoping'—meaning functions resolve variables based on where they are authored in the code, not where they are invoked. They solve several critical architectural problems: they allow for data encapsulation (simulating 'private' variables), they enable functions to maintain persistent state between calls without polluting the global namespace, and they are the backbone of asynchronous programming, allowing callbacks to access the scope in which they were originally defined.",
      codeSnippet:
        "// Without closures, we would need to pollute the global scope:\nlet count = 0; \nfunction globalCounter() { return ++count; }\n\n// With closures, we encapsulate state privately:\nconst makePrivateCounter = () => {\n  let privateCount = 0; // Protected from external tampering\n  return () => ++privateCount;\n};\nconst myCounter = makePrivateCounter();\nconsole.log(myCounter()); // 1\nconsole.log(myCounter()); // 2",
    },
    {
      id: "js-closure-3",
      questionNumber: 87,
      question: "How would you use closures to create private variables?",
      difficulty: "intermediate",
      tags: ["private-state", "encapsulation", "module-pattern", "closures"],
      answer:
        "You can create a private variable by defining a local variable inside an outer function, and then returning an inner function (or an object with methods) that interacts with it. Because the variable is scoped only to the outer function, it is completely inaccessible from the outside world. The returned methods form a closure over that variable, acting as a 'privileged' API. For example, a `createCounter` function can hold a `count` variable and return `increment` and `decrement` methods; the `count` is completely shielded from direct external modification.",
      codeSnippet:
        "function createWallet(initialBalance) {\n  let balance = initialBalance; // Private\n  \n  return {\n    deposit: (amount) => {\n      balance += amount;\n      console.log(`Deposited ${amount}.`);\n    },\n    getBalance: () => balance // Read-only access\n  };\n}\n\nconst wallet = createWallet(100);\nwallet.deposit(50);\nconsole.log(wallet.getBalance()); // 150\n// console.log(wallet.balance); // undefined (Can't hack the balance)",
    },
    {
      id: "js-closure-4",
      questionNumber: 88,
      question:
        "What is a common closure bug with loops, and how do you fix it?",
      difficulty: "advanced",
      tags: ["loop-bug", "async", "callbacks", "closures"],
      answer:
        "The classic bug occurs when setting up asynchronous callbacks (like `setTimeout`) inside a `for` loop using the `var` keyword. Because `var` is function-scoped, the loop doesn't create a new scope for each iteration. By the time the async callbacks execute, the loop has already completed, and every callback references the exact same mutated `var` at its final value. The modern and simplest fix is to use `let` instead of `var` in the loop header, as `let` is block-scoped and forces the engine to create a fresh, unique binding for every single iteration. Historically, this was solved using an IIFE to manually force a new closure scope per iteration.",
      codeSnippet:
        "// ❌ The Bug (Prints 3, 3, 3)\n// 'var' scopes 'i' to the whole function. Timeouts run AFTER loop finishes.\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n\n// ✅ The Modern Fix (Prints 0, 1, 2)\n// 'let' creates a new block scope closure for each iteration.\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 100);\n}",
    },
    {
      id: "js-closure-5",
      questionNumber: 89,
      question: "How can closures help in memoization? When can it backfire?",
      difficulty: "advanced",
      tags: ["memoization", "performance", "memory-leaks", "closures"],
      answer:
        "Closures power memoization by encapsulating a private `cache` object (usually a plain object or a Map) within a higher-order outer function. The returned inner function checks this cache before performing expensive computations. If the result exists, it returns it instantly; otherwise, it computes, stores, and returns the result. However, this can backfire by causing memory leaks. Because the closure holds onto the cache object indefinitely, if the function is called with thousands of unique, large inputs (or DOM nodes), the cache will grow unbounded. In advanced cases, using an LRU (Least Recently Used) cache strategy or a `WeakMap` is necessary to allow garbage collection.",
      codeSnippet:
        "function memoize(fn) {\n  const cache = {}; // Closure holds memory forever\n  \n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache[key]) {\n      return cache[key]; // Fast return\n    }\n    const result = fn(...args);\n    cache[key] = result; \n    return result;\n  };\n}\n\nconst slowMath = (num) => num * 1000;\nconst fastMath = memoize(slowMath);\n// Warning: If called with millions of unique args, 'cache' causes OOM crash.",
    },
    {
      id: "js-closure-6",
      questionNumber: 90,
      question: "How do closures relate to currying and partial application?",
      difficulty: "advanced",
      tags: ["currying", "partial-application", "functional-js"],
      answer:
        "Both currying and partial application rely entirely on closures to function. Currying transforms a function of multiple arguments into a sequence of nested functions, each taking a single argument. Each returned inner function acts as a closure, 'remembering' the arguments passed to the outer functions until all arguments are collected and the final evaluation occurs. Partial application uses a closure to 'bake in' a few initial arguments ahead of time, returning a new function that waits for the remaining arguments before executing.",
      codeSnippet:
        "// Currying relying on closures to remember 'a' and 'b'\nconst add3 = (a) => (b) => (c) => a + b + c;\nconsole.log(add3(1)(2)(3)); // 6\n\n// Partial Application using closures\nfunction multiply(a, b) {\n  return a * b;\n}\n\n// Closure remembers 'a=2' forever\nfunction double(b) {\n  return multiply(2, b); \n}\nconsole.log(double(5)); // 10",
    },
    {
      id: "js-closure-7",
      questionNumber: 91,
      question:
        "Explain the module pattern using closures and why it is useful.",
      difficulty: "advanced",
      tags: ["module-pattern", "encapsulation", "closures"],
      answer:
        "The Revealing Module Pattern uses an Immediately Invoked Function Expression (IIFE) to create an isolated lexical environment. Variables and functions defined inside the IIFE are kept entirely private. At the end of the IIFE, it returns an object literal containing references only to the functions or variables you wish to expose. This is incredibly useful for code organization, avoiding global namespace pollution, and strictly enforcing the separation of a public API interface from internal implementation details—essentially mimicking classical access modifiers before ES6 classes and ES Modules existed.",
      codeSnippet:
        "const ShoppingCart = (function() {\n  // 🔒 Private State & Functions\n  let _cart = [];\n  const _calculateTax = (amount) => amount * 0.05;\n\n  // 🔓 Public API (Returned as object)\n  return {\n    addItem: function(item, price) {\n      _cart.push({ item, price: price + _calculateTax(price) });\n    },\n    getTotals: function() {\n      return _cart.reduce((sum, item) => sum + item.price, 0);\n    }\n  };\n})(); // IIFE executes immediately\n\nShoppingCart.addItem('Apple', 1.00);\n// ShoppingCart._cart is completely undefined to the outside world.",
    },
    {
      id: "js-closure-8",
      questionNumber: 92,
      question: "In real applications, where do closures commonly appear?",
      difficulty: "intermediate",
      tags: ["react-hooks", "event-handlers", "async-code", "closures"],
      answer:
        "Closures are ubiquitous in modern development. In React, functional components and Hooks (like `useEffect` or `useState`) rely heavily on closures to 'capture' state and props for a specific render cycle. They are the standard for DOM event listeners, allowing the handler function to access variables from the component that registered it. They are also heavily used in utility functions (like `debounce` and `throttle` capturing timer IDs), Promise `.then()` chains resolving with outer-scope data, and in setting up state stores like Redux.",
      codeSnippet:
        '// Real-world React Hook closure example\nimport { useState, useEffect } from \'react\';\n\nfunction Timer() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    // The interval callback is a closure. \n    // It "captures" the state from when useEffect ran.\n    const intervalId = setInterval(() => {\n      // Using the updater function avoids "stale closure" bugs\n      setSeconds(prevSeconds => prevSeconds + 1);\n    }, 1000);\n\n    return () => clearInterval(intervalId);\n  }, []); \n\n  return <div>{seconds}</div>;\n}',
    },
  ],
};
