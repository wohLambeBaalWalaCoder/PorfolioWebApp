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
    },
    {
      id: "js-2",
      questionNumber: 2,
      question: "Explain Hoisting in JavaScript.",
      difficulty: "freshers",
      tags: ["execution-context"],
      answer:
        "Hoisting is a default behavior in JavaScript where variable and function declarations are conceptually moved to the top of their execution context during the compilation phase, before the code is executed. It's important to clarify to an interviewer that only the declarations are hoisted, not the initializations. Function declarations are fully hoisted, allowing you to call them before they appear in code. Variables declared with 'var' are hoisted with a value of 'undefined'. However, 'let' and 'const' are hoisted but remain in a 'Temporal Dead Zone' until initialized, meaning accessing them too early throws a ReferenceError.",
    },
    {
      id: "js-3",
      questionNumber: 3,
      question: "Why do we use the word debugger in JavaScript?",
      difficulty: "freshers",
      tags: ["debugging"],
      answer:
        "The 'debugger' keyword is used to set a programmatic breakpoint in our code. If the browser's Developer Tools are open, execution will pause exactly at the 'debugger' statement. This allows developers to step through the code line-by-line, inspect the Call Stack, and check the current state of variables in the scope. It's a much more powerful and precise debugging approach than relying solely on console.log().",
    },
    {
      id: "js-4",
      questionNumber: 4,
      question: "Difference between == and === operators.",
      difficulty: "freshers",
      tags: ["operators"],
      answer:
        "The double equals (==) is the loose equality operator. It performs 'type coercion', meaning if the values are of different types, JavaScript will attempt to convert them to a common type before comparing them (e.g., 5 == '5' is true). The triple equals (===) is the strict equality operator. It checks both the value and the exact data type without any conversion (e.g., 5 === '5' is false). As a best practice, I always use strict equality (===) to prevent unexpected bugs caused by implicit coercion.",
    },
    {
      id: "js-5",
      questionNumber: 5,
      question: "Difference between var and let keyword in JavaScript.",
      difficulty: "freshers",
      tags: ["variables"],
      answer:
        "The primary differences lie in scoping and hoisting. Variables declared with 'var' are function-scoped, meaning they are accessible anywhere within the function they are declared in, and they can be re-declared without throwing an error. They are also hoisted as 'undefined'. 'let', introduced in ES6, is block-scoped, meaning it is confined to the specific curly braces {} it was defined in (like loops or if-statements). 'let' cannot be re-declared in the same scope, and it resides in the Temporal Dead Zone until execution reaches its declaration, making it much safer and more predictable to use.",
    },
    {
      id: "js-6",
      questionNumber: 6,
      question: "Explain Implicit Type Coercion in JavaScript.",
      difficulty: "freshers",
      tags: ["type-system"],
      answer:
        "Implicit type coercion is when the JavaScript engine automatically converts one data type to another to successfully execute an operation. A classic example is string concatenation with a number, like `5 + '5'`, which results in the string '55' because JS coerces the number 5 into a string. However, with subtraction like `'5' - 2`, JS coerces the string to a number, resulting in 3. Understanding coercion is vital for debugging unexpected behaviors in comparisons and arithmetic.",
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
    },
    {
      id: "js-8",
      questionNumber: 8,
      question: "What is NaN property in JavaScript?",
      difficulty: "freshers",
      tags: ["numbers"],
      answer:
        "NaN stands for 'Not-a-Number'. It represents the result of an invalid or undefined mathematical operation, such as dividing zero by zero, or attempting to parse a completely alphabetical string into an integer. Interestingly, the `typeof NaN` actually returns 'number'. Another quirk to mention is that NaN is the only value in JavaScript that is not equal to itself, meaning `NaN === NaN` returns false. We use `Number.isNaN()` to safely check for it.",
    },
    {
      id: "js-9",
      questionNumber: 9,
      question: "Explain passed by value and passed by reference.",
      difficulty: "freshers",
      tags: ["memory-management"],
      answer:
        "This relates to how variables are stored and manipulated. Primitive data types (like Strings and Numbers) are 'passed by value'. When you assign a primitive to a new variable or pass it to a function, a complete, independent copy of that value is created. Non-primitives (Objects, Arrays) are 'passed by reference'. Instead of copying the actual data, JavaScript passes a reference (a pointer) to the original memory location. Modifying the object through the new reference will mutate the original object.",
    },
    {
      id: "js-10",
      questionNumber: 10,
      question: "What is an Immediately Invoked Function in JavaScript?",
      difficulty: "freshers",
      tags: ["functions"],
      answer:
        "An IIFE (Immediately Invoked Function Expression) is a function that is executed exactly at the moment it is defined. It is created by wrapping an anonymous function in parentheses, followed by an execution pair of parentheses `(function() { ... })();`. Historically, it was a crucial pattern used to create a private, isolated scope for variables to prevent polluting the global namespace before block-scoped variables (let/const) and ES6 Modules were introduced.",
    },
    {
      id: "js-11",
      questionNumber: 11,
      question: "What do you mean by strict mode in JavaScript?",
      difficulty: "freshers",
      tags: ["javascript-engine"],
      answer:
        "Strict mode is a way to opt into a restricted, more secure variant of JavaScript. By placing the string literal 'use strict' at the top of a script or function, the engine will enforce stricter parsing and error handling. For instance, it eliminates 'silent errors' by throwing exceptions, prevents accidental creation of global variables by assigning values to undeclared variables, and disables features that are confusing or deprecated. It essentially forces developers to write cleaner code.",
    },
    {
      id: "js-12",
      questionNumber: 12,
      question: "Explain Higher Order Functions in JavaScript.",
      difficulty: "freshers",
      tags: ["functions"],
      answer:
        "A Higher-Order Function is a function that does at least one of two things: it either takes one or more functions as arguments, or it returns a function as its result. This is possible because functions in JS are 'First-Class Citizens' and can be treated like any other variable. Array methods like `.map()`, `.filter()`, and `.reduce()` are common examples, as they take callback functions to process data arrays, promoting a declarative and functional programming style.",
    },
    {
      id: "js-13",
      questionNumber: 13,
      question: "Explain this keyword.",
      difficulty: "freshers",
      tags: ["this-keyword"],
      answer:
        "The 'this' keyword refers to the object that is currently executing the code. Its value is dynamic and depends on the 'Execution Context' (how the function is called). If a function is called as a method of an object, 'this' refers to that parent object. If called as a regular function in the global scope, 'this' points to the global object (or undefined in strict mode). Arrow functions are unique; they do not have their own 'this' binding but inherit it lexically from their surrounding scope.",
    },
    {
      id: "js-14",
      questionNumber: 14,
      question: "What do you mean by Self Invoking Functions?",
      difficulty: "freshers",
      tags: ["functions"],
      answer:
        "A Self-Invoking Function is essentially another name for an Immediately Invoked Function Expression (IIFE). It refers to an anonymous function that executes itself automatically right after it is declared, without needing an explicit call statement. It relies on the trailing parentheses `()` to trigger the invocation.",
    },
    {
      id: "js-15",
      questionNumber: 15,
      question: "Explain call(), apply() and bind() methods.",
      difficulty: "freshers",
      tags: ["function-methods"],
      answer:
        "These three methods are used to manually set the context of the 'this' keyword inside a function. `call()` invokes the function immediately and passes arguments one by one separated by commas. `apply()` also invokes the function immediately but takes arguments as an array. `bind()` does not invoke the function right away; instead, it returns a new copy of the function with 'this' permanently bound to the specified object, which can be executed later.",
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
    },
    {
      id: "js-17",
      questionNumber: 17,
      question: "What is currying in JavaScript?",
      difficulty: "freshers",
      tags: ["functional-programming"],
      answer:
        "Currying is a functional programming concept where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument. Instead of calling a function like `multiply(2, 3, 4)`, currying allows you to call it as `multiply(2)(3)(4)`. This is highly useful for function composition and creating reusable, partially-applied functions where some arguments are pre-configured.",
    },
    {
      id: "js-18",
      questionNumber: 18,
      question: "What are advantages of using External JavaScript?",
      difficulty: "freshers",
      tags: ["architecture"],
      answer:
        "Using external JavaScript files (linking via the src attribute) provides several architectural benefits. Primarily, it separates the HTML structure from the application logic, making both files cleaner, easier to read, and simpler to maintain. Furthermore, browsers cache external JS files. When a user navigates to different pages on the same site, the browser doesn't have to re-download the script, which drastically improves page load times.",
    },
    {
      id: "js-19",
      questionNumber: 19,
      question: "Explain Scope and Scope Chain in JavaScript.",
      difficulty: "freshers",
      tags: ["scope"],
      answer:
        "Scope determines the accessibility and visibility of variables in a specific part of your code. JS has Global Scope, Function Scope, and Block Scope. The Scope Chain is the mechanism the JS engine uses to resolve a variable. If a variable isn't found in the current immediate scope, the engine looks outwards into the parent scope, and continues looking layer by layer until it reaches the Global Scope. If it's still not found, a ReferenceError is thrown.",
    },
    {
      id: "js-20",
      questionNumber: 20,
      question: "Explain Closures in JavaScript.",
      difficulty: "freshers",
      tags: ["closures"],
      answer:
        "A closure is created when a function 'remembers' its lexical scope even when that function is executed outside its original scope. In practice, this happens when an outer function returns an inner function. The inner function maintains access to the variables declared in the outer function's scope, even after the outer function has finished executing and returned. Closures are heavily used in JavaScript for data encapsulation and creating private variables.",
    },
    {
      id: "js-21",
      questionNumber: 21,
      question: "Mention some advantages of JavaScript.",
      difficulty: "freshers",
      tags: ["overview"],
      answer:
        "JavaScript has several major advantages that make it the dominant language of the web. It executes on the client-side, providing immediate user feedback and reducing server load. It is incredibly versatile; with Node.js, you can write Full-Stack applications using a single language. It also boasts a massive ecosystem of libraries, frameworks (like React or Angular), and community support, making development faster and more standardized.",
    },
    {
      id: "js-22",
      questionNumber: 22,
      question: "What are object prototypes?",
      difficulty: "freshers",
      tags: ["prototypes"],
      answer:
        "In JavaScript, prototypes are the mechanism by which objects inherit properties and methods from one another. Every JavaScript object has a hidden internal property called `[[Prototype]]` that points to another object. When you try to access a property on an object, and it doesn't exist, the JavaScript engine traverses up this 'Prototype Chain' to look for it on the prototype object. This is the foundation of Prototypal Inheritance.",
    },
    {
      id: "js-23",
      questionNumber: 23,
      question: "What are callbacks?",
      difficulty: "freshers",
      tags: ["async"],
      answer:
        "A callback is simply a function that is passed as an argument to another function and is executed after some operation has been completed. They are the foundational method for handling asynchronous operations in JavaScript, like fetching data from an API or listening for user click events. While powerful, deeply nested callbacks can lead to 'Callback Hell', which is why Promises and async/await were introduced in modern JS.",
    },
    {
      id: "js-24",
      questionNumber: 24,
      question: "What are the types of errors in JavaScript?",
      difficulty: "freshers",
      tags: ["errors"],
      answer:
        "JavaScript has several standard error types. The most common include: `SyntaxError` (when the code breaks language rules, like a missing bracket), `ReferenceError` (when referencing a variable that hasn't been declared), `TypeError` (when a value is not of the expected type, like trying to call a string as a function), and `RangeError` (when a numeric variable or parameter is outside its valid range).",
    },
    {
      id: "js-25",
      questionNumber: 25,
      question: "What is memoization?",
      difficulty: "freshers",
      tags: ["performance"],
      answer:
        "Memoization is a specific optimization technique used to speed up computer programs by caching the results of expensive function calls. If a memoized function is called later with the exact same inputs, it bypasses the complex calculations and simply returns the cached result from memory. It essentially trades memory space for execution speed and is highly effective in recursive algorithms like calculating Fibonacci sequences.",
    },
    {
      id: "js-26",
      questionNumber: 26,
      question: "What is recursion in a programming language?",
      difficulty: "freshers",
      tags: ["algorithms"],
      answer:
        "Recursion is a programming pattern where a function calls itself to solve a smaller instance of the same problem. It's often used for traversing complex data structures like trees or solving mathematical sequences. To prevent a 'Stack Overflow' (an infinite loop of function calls), every recursive function must have a clearly defined 'base case'—a condition under which the function stops calling itself and begins returning values.",
    },
    {
      id: "js-27",
      questionNumber: 27,
      question: "What is the use of a constructor function in JavaScript?",
      difficulty: "freshers",
      tags: ["objects"],
      answer:
        "A constructor function is a specialized function used to create and initialize multiple objects with the same structure and behavior. It acts as a blueprint. By convention, constructor names are capitalized. When invoked using the `new` keyword, the constructor automatically creates a new empty object, binds the `this` keyword to that new object, assigns properties to it, and finally returns the populated object.",
    },
    {
      id: "js-28",
      questionNumber: 28,
      question: "What is DOM?",
      difficulty: "freshers",
      tags: ["dom"],
      answer:
        "DOM stands for Document Object Model. It is a programming interface created by the browser that represents the HTML document as a structured tree of objects (nodes). Because the DOM represents elements as objects, JavaScript can hook into it to dynamically read, create, modify, or delete HTML elements and CSS styles, making the web page interactive.",
    },
    {
      id: "js-29",
      questionNumber: 29,
      question: "Which method retrieves a character from a certain index?",
      difficulty: "freshers",
      tags: ["strings"],
      answer:
        "To retrieve a character from a specific index within a string, you can use the built-in `charAt()` method, passing the zero-based index as the argument (e.g., `str.charAt(0)`). However, in modern JavaScript, it is also highly common and accepted to use bracket notation, treating the string almost like an array: `str[0]`.",
    },
    {
      id: "js-30",
      questionNumber: 30,
      question: "What do you mean by BOM?",
      difficulty: "freshers",
      tags: ["browser"],
      answer:
        "BOM stands for Browser Object Model. While the DOM allows JS to interact with the document's content, the BOM allows JavaScript to interact with the browser window itself. It includes the global `window` object and its properties, allowing you to manipulate browser history, access geolocation via the `navigator` object, trigger alerts, or check screen width using the `screen` object.",
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
    },
    {
      id: "js-exp-1",
      questionNumber: 32,
      question: "What are arrow functions?",
      difficulty: "intermediate",
      tags: ["es6", "functions", "this"],
      answer:
        "Arrow functions provide a concise syntax for writing function expressions, but more importantly, they fundamentally change how 'this' is bound. Unlike regular functions, arrow functions do not have their own 'this' context; they inherit 'this' lexically from the enclosing execution context. Furthermore, they cannot be used as constructor functions (they lack the [[Construct]] method and 'prototype' property) and do not have access to the local 'arguments' object.",
    },
    {
      id: "js-exp-2",
      questionNumber: 33,
      question: "What do you mean by prototype design pattern?",
      difficulty: "advanced",
      tags: ["prototype", "inheritance", "patterns", "design-patterns"],
      answer:
        "The Prototype pattern is a creational design pattern where new objects are created by cloning an existing object (the prototype) rather than instantiating them via a constructor class. In JavaScript, this is inherently supported via 'Object.create()'. It is highly memory-efficient because methods and properties are shared via the prototype chain rather than being duplicated in memory for every single instance.",
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
    },
    {
      id: "js-exp-4",
      questionNumber: 35,
      question: "What is the rest parameter and spread operator?",
      difficulty: "intermediate",
      tags: ["spread", "rest", "arrays", "es6-features"],
      answer:
        "Both utilize the '...' syntax but serve opposite purposes depending on context. The Spread operator 'expands' iterables (like arrays or objects) into individual elements, commonly used for shallow cloning or merging objects/arrays. The Rest parameter 'condenses' multiple standalone elements into a single array. It is strictly used in function signatures to gather an indefinite number of arguments into an array, replacing the need for the older 'arguments' object.",
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
    },
    {
      id: "js-exp-6",
      questionNumber: 37,
      question: "What is the use of promises in JavaScript?",
      difficulty: "intermediate",
      tags: ["promises", "async", "event-loop", "async-programming"],
      answer:
        "Promises are objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value. They solve the 'Inversion of Control' problem associated with callback hell by providing a standardized, chainable API (.then, .catch, .finally). Under the hood, resolved Promises are pushed to the Microtask Queue, which is processed before the Macrotask Queue (like setTimeout), giving them higher execution priority in the Event Loop.",
    },
    {
      id: "js-exp-7",
      questionNumber: 38,
      question: "What are classes in JavaScript?",
      difficulty: "intermediate",
      tags: ["classes", "es6", "constructor", "oop"],
      answer:
        "Introduced in ES6, Classes are essentially syntactic sugar over JavaScript's existing prototypal inheritance pattern. Under the hood, a class is a special function, and its methods are appended to the function's prototype property. They provide a much cleaner, more 'classical OOP' syntax for creating blueprints of objects, supporting features like constructors, static methods, getters/setters, and inheritance via the 'extends' and 'super' keywords.",
    },
    {
      id: "js-exp-8",
      questionNumber: 39,
      question: "What are generator functions?",
      difficulty: "advanced",
      tags: ["generators", "iterators", "yield", "functions"],
      answer:
        "Generators are special functions defined with 'function*' that can pause and resume their execution. When called, they do not execute immediately; instead, they return an Iterator object. By calling the '.next()' method on this iterator, the function runs until it hits a 'yield' statement, which returns a value and pauses execution, saving its state. They are incredibly powerful for creating custom iterables, implementing state machines, or handling infinite data streams lazily.",
    },
    {
      id: "js-exp-9",
      questionNumber: 40,
      question: "Explain WeakSet in JavaScript?",
      difficulty: "advanced",
      tags: ["weakset", "garbage-collection", "memory-management"],
      answer:
        "A WeakSet is a collection similar to a Set, but with two key differences: it can only contain Objects (no primitives), and the object references are held 'weakly'. This means if there are no other references to an object stored in a WeakSet, the garbage collector will remove it from memory. Because its contents are subject to garbage collection at any time, a WeakSet is not enumerable (no 'size' property, no 'forEach' loop). It is primarily used to track object metadata without causing memory leaks.",
    },
    {
      id: "js-exp-10",
      questionNumber: 41,
      question: "Why do we use callbacks?",
      difficulty: "intermediate",
      tags: ["callbacks", "async", "async-programming"],
      answer:
        "Because JavaScript functions are first-class citizens, we use callbacks—passing a function as an argument to another function—to handle asynchronous operations or to execute logic only after a specific task completes (like network requests or DOM events). While essential, relying strictly on callbacks can lead to 'Callback Hell' (pyramid of doom) and trust issues (inversion of control), which is why Promises and async/await are preferred for complex async flows today.",
    },
    {
      id: "js-exp-11",
      questionNumber: 42,
      question: "Explain WeakMap in JavaScript?",
      difficulty: "advanced",
      tags: ["weakmap", "gc", "memory-management"],
      answer:
        "A WeakMap is a collection of key-value pairs where the keys MUST be objects, and the references to those keys are held 'weakly'. If a key object loses all other references in the application, it gets garbage collected, and the corresponding value in the WeakMap is also removed automatically. Like WeakSets, WeakMaps are not iterable. They are the ideal data structure for maintaining private object properties or caching data related to DOM nodes without risking memory leaks.",
    },
    {
      id: "js-exp-12",
      questionNumber: 43,
      question: "What is Object Destructuring?",
      difficulty: "intermediate",
      tags: ["destructuring", "objects", "es6-features"],
      answer:
        "Object destructuring is an ES6 syntax that allows us to unpack properties from objects directly into distinct variables. It makes code cleaner and more readable. Advanced usage includes assigning default values to handle undefined properties, renaming/aliasing variables during extraction (e.g., 'const { originalName: aliasName } = obj'), and deeply nested destructuring to pull specific data points out of complex API responses in a single line.",
    },
    {
      id: "js-exp-13",
      questionNumber: 44,
      question: "Difference between prototypal and classical inheritance.",
      difficulty: "advanced",
      tags: ["prototype", "oop", "inheritance"],
      answer:
        "Classical inheritance (like Java) uses rigid blueprints (Classes) to instantiate objects. An object is a copy of the class definition. Prototypal inheritance (JavaScript) does not use blueprints; objects inherit directly from other objects via the prototype chain (delegation). Prototypal is much more flexible because prototypes can be mutated at runtime, and it easily supports patterns like concatenative inheritance (mixins) which sidestep the classical 'Gorilla/Banana' problem of tight coupling.",
    },
    {
      id: "js-exp-14",
      questionNumber: 45,
      question: "What is a Temporal Dead Zone?",
      difficulty: "advanced",
      tags: ["tdz", "let", "const", "execution-context"],
      answer:
        "The Temporal Dead Zone (TDZ) is the specific period during execution from the moment a block scope is entered until a 'let' or 'const' variable is actually declared and initialized. While these variables are technically hoisted to the top of their block, accessing them within the TDZ throws a ReferenceError. The engine enforces this to catch bugs, ensuring that variables are not read before their lexical binding is formally evaluated.",
    },
    {
      id: "js-exp-15",
      questionNumber: 46,
      question: "What do you mean by JavaScript Design Patterns?",
      difficulty: "advanced",
      tags: ["patterns", "architecture", "design-patterns"],
      answer:
        "JavaScript Design Patterns are generalized, reusable solutions to commonly occurring software architecture problems. They provide a standardized vocabulary for developers. They are broadly categorized into Creational (e.g., Singleton, Factory, Builder), Structural (e.g., Facade, Decorator, Proxy), and Behavioral (e.g., Observer, Mediator, Strategy). For instance, the Module pattern, which utilizes closures to emulate private and public API access, is historically one of the most vital JS patterns.",
    },
    {
      id: "js-exp-16",
      questionNumber: 47,
      question: "Is JavaScript a pass-by-reference or pass-by-value language?",
      difficulty: "advanced",
      tags: ["reference", "value", "memory-management"],
      answer:
        "JavaScript is strictly 'pass-by-value', but it behaves specifically as 'call-by-sharing' for objects. When passing a primitive, the actual value is copied. When passing an object, the 'value' being copied and passed is the memory reference (pointer) to the object. Therefore, mutating the object's properties inside a function affects the original object. However, completely reassigning the parameter inside the function just breaks the pointer link; it does not overwrite the original object outside the function.",
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
    },
    {
      id: "js-exp-18",
      questionNumber: 49,
      question: "What are the primitive data types in JavaScript?",
      difficulty: "intermediate",
      tags: ["primitive-types", "fundamentals"],
      answer:
        "JavaScript has seven primitive data types: String, Number, Boolean, Undefined, Null, Symbol (introduced in ES6 for unique object keys), and BigInt (introduced in ES2020 for handling integers larger than the Number safe limit). The key defining characteristics of primitives are that they are immutable (cannot be altered once created, only reassigned) and they do not have properties or methods inherently (JavaScript temporarily wraps them in Object counterparts like 'String()' when methods are called).",
    },
    {
      id: "js-exp-19",
      questionNumber: 50,
      question: "What is the role of deferred scripts in JavaScript?",
      difficulty: "advanced",
      tags: ["defer", "loading", "browser-performance"],
      answer:
        "Adding the 'defer' attribute to a script tag instructs the browser to download the script asynchronously in the background while the HTML parser continues to build the DOM. Crucially, unlike the 'async' attribute, 'defer' guarantees that scripts are executed in the exact order they appear in the document, and execution only begins after the HTML parsing is completely finished, but right before the 'DOMContentLoaded' event fires. It's the optimal approach for performance and preventing render-blocking.",
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
    },
    {
      id: "js-exp-21",
      questionNumber: 52,
      question: "What is the purpose of the following JavaScript code?",
      difficulty: "advanced",
      tags: ["debugging", "analysis", "code-analysis"],
      answer:
        "(Note: As an arbitrary code snippet wasn't provided, here is how an experienced dev answers). When presented with code analysis, the goal is to identify underlying engine mechanics. For example, if given a 'for-loop' with 'var' and a 'setTimeout', the purpose is to demonstrate an understanding of closures and the Event Loop (the loop finishes before the timeouts run, all logging the final 'var' value). If given a nested function returning another function, the purpose is to identify a 'currying' pattern or a closure ensuring data privacy.",
    },
    {
      id: "js-senior-1",
      questionNumber: 53,
      question: "Explain microtasks vs macrotasks with a real example.",
      difficulty: "advanced",
      tags: ["event-loop", "microtasks", "macrotasks", "async"],
      answer:
        "The Event Loop prioritizes the microtask queue over the macrotask (task) queue. After the current synchronous call stack clears, the engine processes *all* pending microtasks (e.g., Promise.then/catch/finally, queueMicrotask, MutationObserver) until the microtask queue is entirely empty. Only then does it render the UI or pick up the next macrotask (e.g., setTimeout, setInterval, DOM events). For example, if you schedule a `setTimeout(cb, 0)` and a `Promise.resolve().then(cb)`, the Promise callback strictly runs first. An important architectural caveat: if microtasks continuously recursively queue more microtasks, the event loop becomes 'starved', blocking the main thread and freezing the UI. Recursive macrotasks do not cause this, as the browser can render between them.",
    },
    {
      id: "js-senior-2",
      questionNumber: 54,
      question: "How does the JS engine optimize code at a high level?",
      difficulty: "advanced",
      tags: ["v8", "jit", "optimization", "js-engine"],
      answer:
        "Modern JS engines like V8 use a Just-In-Time (JIT) compilation pipeline. Code is first parsed into an AST and interpreted by the Ignition interpreter, which simultaneously collects profiling data (type feedback). 'Hot' functions (code executed repeatedly) are sent to the TurboFan optimizing compiler. TurboFan uses this profiling data to generate highly optimized, raw machine code. It relies heavily on techniques like 'Inline Caching' (caching the memory offsets of object properties) and 'Hidden Classes' (creating predictable C++-like memory layouts for dynamic JS objects). This allows dynamic JavaScript to approach the speed of compiled languages.",
    },
    {
      id: "js-senior-3",
      questionNumber: 55,
      question: "What causes memory leaks in JS apps? How do you detect them?",
      difficulty: "advanced",
      tags: ["memory-leaks", "profiling", "performance", "memory-management"],
      answer:
        "Memory leaks occur when objects are no longer needed by the application but are still retained by active references, preventing the Garbage Collector from freeing the memory. Common culprits include: undeclared global variables, forgotten `setInterval` or `setTimeout` callbacks, event listeners not removed during component unmounts, closures unnecessarily capturing large outer scopes, and 'detached DOM nodes' (keeping a JS reference to a deleted HTML element). To detect leaks, I use Chrome DevTools Memory profiling. I take multiple 'Heap Snapshots'—forcing garbage collection between them—and compare them to identify objects growing linearly over time. The 'Allocation Timeline' is also crucial for spotting repetitive leak patterns during UI interactions.",
    },
    {
      id: "js-senior-4",
      questionNumber: 56,
      question: "What is garbage collection in V8 (mark-and-sweep)?",
      difficulty: "advanced",
      tags: ["garbage-collection", "v8", "mark-and-sweep", "memory-management"],
      answer:
        "V8 utilizes a generational garbage collector based on the 'Generational Hypothesis': most objects die young. Memory is split into the Young Generation (small, fast allocation, managed by a minor GC using the Scavenger algorithm) and the Old Generation (long-lived objects). The major GC manages the Old Generation using 'Mark-and-Sweep' (and Compact). It starts at the 'roots' (global object, local variables in the active call stack) and traverses all references, 'marking' reachable objects. In the 'sweep' phase, unmarked (unreachable) memory is freed. To prevent UI frame drops, V8's Orinoco project optimizes this by performing marking and sweeping concurrently and in parallel on background threads, minimizing 'stop-the-world' main thread pauses.",
    },
    {
      id: "js-senior-5",
      questionNumber: 57,
      question: "What are deoptimizations (deopts) and what causes them?",
      difficulty: "advanced",
      tags: ["deopt", "v8", "optimization", "js-engine"],
      answer:
        "Deoptimizations ('deopts') happen when the JIT compiler's speculative assumptions about your code become invalid during execution. When compiling 'hot' code, the engine assumes variable types and object shapes ('Hidden Classes') will remain consistent (monomorphism). If a function previously called with Integers is suddenly called with a String, or if an object is mutated in a way that alters its Hidden Class (e.g., adding properties dynamically or changing property declaration order), the engine must throw away the highly optimized machine code and 'deoptimize' back to the slower, interpreted bytecode. To prevent this, developers should initialize all object properties in constructors and maintain predictable data types.",
    },
    {
      id: "js-senior-6",
      questionNumber: 58,
      question: "What are TypedArrays and when would you use them?",
      difficulty: "advanced",
      tags: ["typedarrays", "binary-data", "performance"],
      answer:
        "TypedArrays (like Int32Array, Float64Array) are array-like views that provide a mechanism for reading and writing raw binary data in memory buffers. Standard JavaScript arrays are dynamic, hash-map-like objects capable of holding mixed types, which is memory-heavy and slow for intensive math. TypedArrays are backed by a fixed-length `ArrayBuffer` and enforce strict typing, resulting in highly predictable, contiguous memory layouts. I use them for high-performance use cases: manipulating audio/video data, processing raw WebSockets binary payloads, handling complex 3D math for WebGL, or sharing memory instantly between the main thread, Web Workers, and WebAssembly.",
    },
    {
      id: "js-senior-7",
      questionNumber: 59,
      question: "How does structured clone differ from JSON serialization?",
      difficulty: "advanced",
      tags: ["structuredClone", "serialization", "data-handling"],
      answer:
        "Historically, developers used `JSON.parse(JSON.stringify(obj))` for deep cloning. However, this serialization method is deeply flawed: it strips out functions, ignores `undefined` and Symbols, mutates `Date` objects into strings, fails entirely on circular references, and cannot process complex types like Maps or Sets. `structuredClone()` is a native modern Web API that solves this by utilizing the structured clone algorithm. It produces a true deep copy, successfully maintaining circular references and correctly duplicating Dates, Maps, Sets, ArrayBuffers, and Blobs. It is the standard for robust state cloning and is the same algorithm used to pass data to Web Workers.",
    },
    {
      id: "js-senior-8",
      questionNumber: 60,
      question: "What is event delegation and why does it matter?",
      difficulty: "intermediate",
      tags: ["event-delegation", "performance", "dom"],
      answer:
        "Event delegation is a design pattern that leverages the Event Bubbling phase of the DOM. Instead of attaching individual event listeners to thousands of child elements (like every `<li>` in a massive list), you attach a single listener to their common parent container. When a child is clicked, the event bubbles up to the parent, where you inspect `event.target` to identify exactly which child triggered the action. This matters massively for performance and memory scaling. Furthermore, it inherently supports dynamic DOM nodes; if you inject new child elements into the list after page load, the parent listener will automatically intercept their events without needing new bindings.",
    },
    {
      id: "js-senior-9",
      questionNumber: 61,
      question: "How do you prevent expensive reflows and repaints?",
      difficulty: "advanced",
      tags: ["reflow", "repaint", "rendering", "browser-performance"],
      answer:
        "A reflow (layout calculation) occurs when an element's geometric properties change (width, position), forcing the browser to recalculate the layout of the entire document tree. A repaint occurs on visual changes (color, shadows) without layout shifts. Both block the main thread. To optimize, I avoid 'layout thrashing' (forced synchronous layouts) by batching DOM reads and writes separately so the browser doesn't recalculate layout mid-execution. I use `DocumentFragments` for bulk DOM insertions. Crucially, for animations, I exclusively use CSS `transform` and `opacity`; these properties can be handled directly by the GPU compositor thread, bypassing the layout and paint phases entirely.",
    },
    {
      id: "js-senior-10",
      questionNumber: 62,
      question: "How would you design a concurrency limiter for async tasks?",
      difficulty: "advanced",
      tags: ["concurrency", "async", "queue", "system-design"],
      answer:
        "I would implement a Queue-based class to throttle execution. The class maintains a `limit` integer, an `activeCount` integer, and a `queue` array holding the `resolve` functions of deferred Promises. When a task is added: if `activeCount < limit`, I immediately increment the counter and run the task. If the limit is hit, I instantiate a new Promise, push its `resolve` function into the `queue`, and await it—essentially pausing execution. Whenever an active task completes (using a `.finally()` block), I decrement `activeCount`. Then, if the queue has pending items, I `.shift()` the oldest `resolve` function and call it, unpausing the next task in line. This protects backend APIs from rate limits and keeps client-side memory stable.",
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
    },
    {
      id: "js-int-2",
      questionNumber: 64,
      question: 'What is truthy and falsy in JavaScript? Why is "0" truthy?',
      difficulty: "intermediate",
      tags: ["truthy", "falsy", "type-coercion", "type-system"],
      answer:
        "In JavaScript, every value has an inherent boolean equivalent used in logical contexts (like if-statements). 'Falsy' values evaluate to false. There are exactly six primary falsy values: false, 0, \"\" (empty string), null, undefined, and NaN (plus 0n in BigInt). Everything else is 'truthy'. The string \"0\" is truthy because it is a non-empty string; JavaScript evaluates all non-empty strings as true, regardless of the characters they contain.",
    },
    {
      id: "js-int-3",
      questionNumber: 65,
      question: "What is hoisting? What gets hoisted?",
      difficulty: "intermediate",
      tags: ["hoisting", "scope", "execution-context"],
      answer:
        "Hoisting is JavaScript's default behavior of conceptually moving declarations to the top of their current scope during the compilation phase, before execution. Function declarations are fully hoisted, meaning you can call them before they are written in the code. Variables declared with 'var' are hoisted but initialized with 'undefined'. Variables declared with 'let' and 'const' are technically hoisted, but remain uninitialized in the Temporal Dead Zone, throwing an error if accessed early.",
    },
    {
      id: "js-int-4",
      questionNumber: 66,
      question: "What is the Temporal Dead Zone (TDZ)?",
      difficulty: "intermediate",
      tags: ["tdz", "let", "const", "execution-context"],
      answer:
        "The Temporal Dead Zone (TDZ) is the period during execution from the start of a block until a 'let' or 'const' variable is formally declared and initialized. While these variables are technically hoisted to the top of the block, accessing them while they are in the TDZ will result in a ReferenceError. The engine enforces this to catch bugs and ensure that variables are not read before their lexical binding is evaluated.",
    },
    {
      id: "js-int-5",
      questionNumber: 67,
      question: "What is the difference between var, let, and const?",
      difficulty: "intermediate",
      tags: ["var", "let", "const", "scope", "variables"],
      answer:
        "'var' is function-scoped, can be re-declared in the same scope, and is hoisted with a value of 'undefined'. 'let' and 'const' were introduced in ES6 and are block-scoped (confined to {}). They cannot be re-declared in the same scope and are hoisted into the Temporal Dead Zone. The key difference between 'let' and 'const' is that 'const' creates an immutable binding—the variable cannot be reassigned to a new value (though if it's an object or array, its contents can still be mutated).",
    },
    {
      id: "js-int-6",
      questionNumber: 68,
      question: "What is a closure?",
      difficulty: "intermediate",
      tags: ["lexical-scope", "functions", "closures"],
      answer:
        "A closure is a function that 'remembers' its lexical environment even after the outer function has finished executing. Practically, this happens when a function returns an inner function. The inner function maintains access to the variables and arguments of its parent function's scope. Closures are heavily used in JavaScript for data encapsulation (creating private variables), event handlers, and functional programming patterns like currying.",
    },
    {
      id: "js-int-7",
      questionNumber: 69,
      question: "What does this refer to in JavaScript?",
      difficulty: "intermediate",
      tags: ["this", "context", "binding", "this-keyword"],
      answer:
        "The 'this' keyword refers to the object that is currently executing the code. Its value is determined by its execution context—how the function is called, not where it's defined. In an object method, 'this' refers to the object itself. In a regular global function, it refers to the global object (window in browsers) or undefined in strict mode. The major exception is Arrow Functions, which do not have their own 'this' binding and instead inherit it from their surrounding lexical scope.",
    },
    {
      id: "js-int-8",
      questionNumber: 70,
      question: "What is the difference between map() and forEach()?",
      difficulty: "intermediate",
      tags: ["map", "foreach", "arrays"],
      answer:
        "Both are array methods used for iteration, but they differ in their return values. 'forEach()' simply executes a provided function once for each array element and always returns undefined. It is used when you want to perform side effects (like logging or updating DOM elements). 'map()' executes a provided function on each element and returns a brand new array populated with the results of those function calls, leaving the original array unchanged.",
    },
    {
      id: "js-int-9",
      questionNumber: 71,
      question: "What is the difference between slice() and splice()?",
      difficulty: "intermediate",
      tags: ["slice", "splice", "mutation", "arrays"],
      answer:
        "'slice()' returns a shallow copy of a portion of an array into a new array. It does not modify the original array (it is immutable). It takes a start and end index. 'splice()', on the other hand, mutates the original array in place by adding, removing, or replacing elements. It takes a start index, a delete count, and optional items to insert, and returns an array containing any deleted elements.",
    },
    {
      id: "js-int-10",
      questionNumber: 72,
      question: "What is the difference between push/pop and shift/unshift?",
      difficulty: "intermediate",
      tags: ["push", "pop", "shift", "unshift", "arrays"],
      answer:
        "These are all mutator methods used to add or remove elements from an array. 'push()' adds elements to the end of an array, while 'pop()' removes the last element. 'unshift()' adds elements to the beginning of the array, while 'shift()' removes the first element. From a performance perspective, push/pop are generally faster because shift/unshift require the engine to re-index every single remaining element in the array.",
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
    },
    {
      id: "js-sr-3",
      questionNumber: 78,
      question: "Are arrow functions hoisted? Why or why not?",
      difficulty: "advanced",
      tags: ["arrow-functions", "functions", "variables"],
      answer:
        "Arrow functions themselves are not hoisted because they are always function expressions, never function declarations. Their hoisting behavior is entirely dictated by the variable keyword used to declare them. If assigned to a 'var', the identifier is hoisted and initialized to 'undefined'. If assigned to a 'let' or 'const', the identifier is hoisted into the Temporal Dead Zone. In either case, you cannot execute the arrow function before its definition line.",
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
    },
    {
      id: "dsa-sr-1",
      questionNumber: 84,
      question: "Detect a cycle in a linked list.",
      difficulty: "advanced",
      tags: ["cycle-detection", "two-pointers"],
      answer:
        "The optimal approach is Floyd's Cycle-Finding Algorithm, also known as the 'Tortoise and Hare' method. You initialize two pointers, 'slow' and 'fast', both pointing to the head of the list. In a loop, move 'slow' by one node (`slow = slow.next`) and 'fast' by two nodes (`fast = fast.next.next`). If the linked list has a cycle, the fast pointer will eventually lap the slow pointer, and they will point to the exact same node (`slow === fast`), returning true. If the 'fast' pointer or 'fast.next' reaches null, the list terminates, meaning there is no cycle (return false). This operates in O(N) time complexity and O(1) auxiliary space.",
    },
    {
      id: "js-closure-1",
      questionNumber: 85,
      question: "What is a closure in JavaScript (in your own words)?",
      difficulty: "intermediate",
      tags: ["closure", "scope", "functions", "closures"],
      answer:
        "A closure is a fundamental feature in JavaScript where an inner function retains access to the outer (enclosing) function's variables and scope chain, even after that outer function has finished executing and returned. It essentially 'closes over' its lexical environment. Every time a function is created in JavaScript, a closure is implicitly created alongside it, bundling the function with references to its surrounding state.",
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
    },
    {
      id: "js-closure-3",
      questionNumber: 87,
      question: "How would you use closures to create private variables?",
      difficulty: "intermediate",
      tags: ["private-state", "encapsulation", "module-pattern", "closures"],
      answer:
        "You can create a private variable by defining a local variable inside an outer function, and then returning an inner function (or an object with methods) that interacts with it. Because the variable is scoped only to the outer function, it is completely inaccessible from the outside world. The returned methods form a closure over that variable, acting as a 'privileged' API. For example, a `createCounter` function can hold a `count` variable and return `increment` and `decrement` methods; the `count` is completely shielded from direct external modification.",
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
    },
    {
      id: "js-closure-5",
      questionNumber: 89,
      question: "How can closures help in memoization? When can it backfire?",
      difficulty: "advanced",
      tags: ["memoization", "performance", "memory-leaks", "closures"],
      answer:
        "Closures power memoization by encapsulating a private `cache` object (usually a plain object or a Map) within a higher-order outer function. The returned inner function checks this cache before performing expensive computations. If the result exists, it returns it instantly; otherwise, it computes, stores, and returns the result. However, this can backfire by causing memory leaks. Because the closure holds onto the cache object indefinitely, if the function is called with thousands of unique, large inputs (or DOM nodes), the cache will grow unbounded. In advanced cases, using an LRU (Least Recently Used) cache strategy or a `WeakMap` is necessary to allow garbage collection.",
    },
    {
      id: "js-closure-6",
      questionNumber: 90,
      question: "How do closures relate to currying and partial application?",
      difficulty: "advanced",
      tags: ["currying", "partial-application", "functional-js"],
      answer:
        "Both currying and partial application rely entirely on closures to function. Currying transforms a function of multiple arguments into a sequence of nested functions, each taking a single argument. Each returned inner function acts as a closure, 'remembering' the arguments passed to the outer functions until all arguments are collected and the final evaluation occurs. Partial application uses a closure to 'bake in' a few initial arguments ahead of time, returning a new function that waits for the remaining arguments before executing.",
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
    },
    {
      id: "js-closure-8",
      questionNumber: 92,
      question: "In real applications, where do closures commonly appear?",
      difficulty: "intermediate",
      tags: ["react-hooks", "event-handlers", "async-code", "closures"],
      answer:
        "Closures are ubiquitous in modern development. In React, functional components and Hooks (like `useEffect` or `useState`) rely heavily on closures to 'capture' state and props for a specific render cycle. They are the standard for DOM event listeners, allowing the handler function to access variables from the component that registered it. They are also heavily used in utility functions (like `debounce` and `throttle` capturing timer IDs), Promise `.then()` chains resolving with outer-scope data, and in setting up state stores like Redux.",
    },
  ],
};
