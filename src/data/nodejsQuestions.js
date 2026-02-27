export const nodejsData = {
  id: "nodejs",
  title: "Node.js & Backend Interview Questions",
  level: "Freshers-to-Senior",
  totalQuestions: 58,
  questions: [
    // ---------- BASIC TO INTERMEDIATE NODE.JS FUNDAMENTALS ----------
    {
      id: "node-1",
      questionNumber: 1,
      question: "What is a first class function in JavaScript?",
      difficulty: "beginner", // Normalized from User source
      tags: ["functions", "callbacks", "functional-programming"],
      answer:
        "In JavaScript, functions are treated as 'first-class citizens'. This means functions are essentially just objects and can be treated like any other variable. You can assign a function to a variable, pass a function as an argument to another function (which is how callbacks work), and return a function from another function. This concept is the foundation of functional programming in JS.",
    },
    {
      id: "node-2",
      questionNumber: 2,
      question: "What tools can be used to assure consistent code style?",
      difficulty: "beginner",
      tags: ["eslint", "prettier", "linting"],
      answer:
        "To ensure consistent code style and catch errors early, developers primarily use Linters and Formatters. ESLint is the industry standard for analyzing code to find problematic patterns or code that doesn't adhere to specific style guidelines. Prettier is an opinionated code formatter that automatically rewrites your code to ensure consistent formatting (like spacing and quotes). Often, they are used together and integrated into pre-commit hooks using tools like Husky.",
    },
    {
      id: "node-3",
      questionNumber: 3,
      question: "What is the purpose of module.exports?",
      difficulty: "beginner",
      tags: ["commonjs", "exports", "require"],
      answer:
        "In Node.js (specifically within the CommonJS module system), every file is treated as a separate module. The `module.exports` object is used to define what part of the module (variables, functions, classes, or objects) should be exposed and made available for other files to use. When another file uses the `require()` function to import that module, it receives whatever was assigned to `module.exports`.",
    },
    {
      id: "node-4",
      questionNumber: 4,
      question: "List down the two arguments that async.queue takes as input.",
      difficulty: "intermediate",
      tags: ["async-library", "queue", "concurrency"],
      answer:
        "Using the popular `async` utility library, the `async.queue` method takes two arguments: 1) A `worker` function, which is the logic that processes each task added to the queue, and 2) a `concurrency` value, which is an integer defining the maximum number of worker functions that can be executed in parallel at any given time.",
    },
    {
      id: "node-5",
      questionNumber: 5,
      question: "What is REPL in Node.js?",
      difficulty: "beginner",
      tags: ["repl", "node-cli", "execution"],
      answer:
        "REPL stands for Read, Eval, Print, Loop. It is a built-in interactive computer environment (like a command-line shell) that takes a single user input (Read), executes it (Eval), returns the result to the user (Print), and waits for the next input (Loop). You can access it simply by typing `node` in your terminal. It is highly useful for quick debugging, testing out JavaScript snippets, or experimenting with Node APIs without writing a full script.",
    },
    {
      id: "node-6",
      questionNumber: 6,
      question: "How many types of API functions are there in Node.js?",
      difficulty: "beginner",
      tags: ["blocking", "non-blocking", "async"],
      answer:
        "Node.js API functions generally fall into two categories: Asynchronous (Non-blocking) and Synchronous (Blocking). Asynchronous functions allow the main thread to continue executing while an I/O operation finishes in the background, utilizing callbacks or promises (e.g., `fs.readFile`). Synchronous functions block the execution of the rest of the code until they finish running (e.g., `fs.readFileSync`). Node.js strongly advocates for using Asynchronous APIs to maintain performance.",
    },
    {
      id: "node-7",
      questionNumber: 7,
      question:
        "How do you create a simple server in Node.js that returns Hello World?",
      difficulty: "beginner",
      tags: ["http-module", "server", "backend-basics"],
      answer:
        "You can create a basic server using the built-in `http` module. First, you require the module: `const http = require('http');`. Then, you use `http.createServer((req, res) => { res.writeHead(200, {'Content-Type': 'text/plain'}); res.end('Hello World'); });`. Finally, you bind the server to a network port by calling `.listen(3000)` on the created server instance.",
    },
    {
      id: "node-8",
      questionNumber: 8,
      question: "Why is Node.js single-threaded?",
      difficulty: "intermediate",
      tags: ["event-loop", "non-blocking", "architecture"],
      answer:
        "Node.js was intentionally designed to be single-threaded (for executing JavaScript) to handle thousands of concurrent client connections efficiently. Traditional multi-threaded servers allocate a separate thread for each request, consuming significant RAM and CPU context-switching overhead. By using a single thread combined with a non-blocking I/O model and an Event Loop, Node.js delegates heavy tasks to the OS or background worker threads (libuv) and only uses the main thread to handle the resulting callbacks. This makes it incredibly scalable and lightweight for I/O bound tasks.",
    },
    {
      id: "node-9",
      questionNumber: 9,
      question: "What is fork in Node.js?",
      difficulty: "intermediate",
      tags: ["fork", "cluster", "multi-process"],
      answer:
        "`child_process.fork()` is a special instance of the `spawn()` method used specifically to spawn new Node.js processes. The major advantage of `fork` is that it opens a built-in IPC (Inter-Process Communication) channel between the parent and child process. This allows them to easily send messages to each other using `process.send()` and listen via `process.on('message')`, which is essential for offloading CPU-intensive tasks without blocking the main event loop.",
    },
    {
      id: "node-10",
      questionNumber: 10,
      question:
        "What are the advantages of using promises instead of callbacks?",
      difficulty: "beginner",
      tags: ["promises", "callbacks", "async-await"],
      answer:
        "Promises resolve the infamous 'Callback Hell' (or Pyramid of Doom) by flattening deeply nested asynchronous code. They provide a much cleaner, more readable syntax via `.then()` chaining. Promises also centralize error handling; instead of checking for errors in every single callback, you can catch any error in the chain with a single `.catch()` block at the end. Furthermore, promises are the foundation for the modern `async/await` syntax, which makes asynchronous code look and behave like synchronous code.",
    },
    {
      id: "node-11",
      questionNumber: 11,
      question: "What are some commonly used timing features of Node.js?",
      difficulty: "beginner",
      tags: ["setTimeout", "setInterval", "setImmediate"],
      answer:
        "Node.js provides several global timer functions. `setTimeout(callback, ms)` schedules a single execution of a callback after a specified delay. `setInterval(callback, ms)` schedules a callback to execute repeatedly at the specified interval. Finally, `setImmediate(callback)` schedules a callback to execute immediately after the current phase of the Event Loop (specifically, after I/O events callbacks) finishes.",
    },
    {
      id: "node-12",
      questionNumber: 12,
      question:
        "Explain the steps of how Control Flow manages function calls in Node.js.",
      difficulty: "intermediate",
      tags: ["event-loop", "callbacks", "async-flow"],
      answer:
        "Control flow in Node.js is managed by the Event Loop and the Call Stack. When Node runs, it executes synchronous code sequentially, pushing functions onto the Call Stack and popping them off when complete. When it encounters an asynchronous operation (like reading a file), it offloads the task to the system (libuv) and continues executing the rest of the synchronous code. Once the async task finishes, its callback is pushed to a Task Queue (or Microtask Queue for Promises). The Event Loop constantly monitors the Call Stack; once the stack is completely empty, it pushes the pending callbacks from the queues onto the stack for execution.",
    },
    {
      id: "node-13",
      questionNumber: 13,
      question:
        "How is Node.js better than other commonly used backend frameworks?",
      difficulty: "intermediate",
      tags: ["performance", "scalability", "non-blocking-io"],
      answer:
        "Node.js excels due to its non-blocking, event-driven architecture, making it exceptionally fast and scalable for I/O-intensive workloads (like streaming or APIs) compared to traditional threaded models (like PHP or Spring Boot). Secondly, it allows for 'Full-Stack JavaScript', meaning developers can use the same language on both the frontend and backend, unifying data structures (JSON) and increasing team efficiency. Lastly, it boasts the largest package ecosystem in the world (NPM), providing ready-to-use libraries for almost any task.",
    },
    {
      id: "node-14",
      questionNumber: 14,
      question: "How do you manage packages in your Node.js project?",
      difficulty: "beginner",
      tags: ["npm", "package.json", "dependencies"],
      answer:
        "Package management is primarily handled using NPM (Node Package Manager), which comes bundled with Node.js, though Yarn or pnpm are also common alternatives. At the root of the project is the `package.json` file, which catalogs the project's dependencies, versions, and scripts. When you run `npm install <package>`, the module is downloaded into the `node_modules` folder, and a `package-lock.json` file is generated or updated to freeze the exact dependency tree, ensuring identical environments across different developer machines.",
    },
    {
      id: "node-15",
      questionNumber: 15,
      question: "What is Node.js and how does it work?",
      difficulty: "beginner",
      tags: ["runtime", "v8-engine", "event-loop"],
      answer:
        "Node.js is an open-source, cross-platform runtime environment that executes JavaScript code outside of a web browser, primarily used for building backend services. It is built on Google Chrome's V8 JavaScript engine, which compiles JS directly to high-performance machine code. It works using a single-threaded, event-driven, non-blocking I/O model. When a request comes in, the main thread handles it. If the request requires a heavy I/O operation (like database querying), Node offloads it to a background C++ thread pool (libuv). Once the background task finishes, an event is emitted, and the callback is processed by the main thread.",
    },

    // ---------- NODE.JS PERFORMANCE & SCALING ----------
    {
      id: "node-perf-1",
      questionNumber: 16,
      question: "What is an Event Emitter in Node.js?",
      difficulty: "intermediate",
      tags: ["event-emitter", "events-module", "observer-pattern"],
      answer:
        "An EventEmitter is a core class in the built-in `events` module that implements the Observer design pattern. It provides a way for objects (emitters) to broadcast named events, and for other parts of the application (listeners) to register callback functions that are executed synchronously whenever those specific events are emitted. This is the foundational mechanism for most of Node.js's asynchronous, event-driven architecture, including Streams and HTTP servers.",
    },
    {
      id: "node-perf-2",
      questionNumber: 17,
      question: "How can Node.js performance be enhanced using clustering?",
      difficulty: "advanced",
      tags: ["cluster", "multi-core", "load-balancing", "performance"],
      answer:
        "Because Node.js runs on a single thread, a single instance cannot fully utilize a multi-core CPU. The `cluster` module allows you to fork the main process into multiple child worker processes—typically one for each CPU core. These workers share the same server port and memory footprint of the underlying OS. The master process listens for incoming connections and distributes them across the workers using a round-robin load balancing algorithm, multiplying the application's throughput and providing zero-downtime capabilities if a worker crashes.",
    },
    {
      id: "node-perf-3",
      questionNumber: 18,
      question:
        "What is a thread pool and which library manages it in Node.js?",
      difficulty: "advanced",
      tags: ["thread-pool", "libuv", "async-io"],
      answer:
        "The thread pool is a set of background worker threads utilized by Node.js to execute heavy, blocking operations so they don't block the main event loop. It is managed by `libuv`, the underlying C library that gives Node.js its asynchronous I/O capabilities. Tasks like heavy File System operations, DNS lookups, cryptography (`crypto`), and compression (`zlib`) are automatically offloaded to this pool. By default, the pool has 4 threads, but this can be adjusted using the `UV_THREADPOOL_SIZE` environment variable.",
    },
    {
      id: "node-perf-4",
      questionNumber: 19,
      question: "What is WASI and why is it being introduced?",
      difficulty: "advanced",
      tags: ["wasi", "webassembly", "runtime", "future-nodejs"],
      answer:
        "WASI stands for WebAssembly System Interface. It is an API that provides WebAssembly modules with safe, sandboxed access to underlying operating system features like the file system, network, and system clocks—capabilities they don't natively have in the browser. Node.js is integrating WASI to allow developers to run high-performance, compiled code (from languages like Rust, C++, or Go) directly on the server in a secure environment. It promises near-native speeds for heavy computational tasks while maintaining cross-platform portability and strict security boundaries.",
    },
    {
      id: "node-perf-5",
      questionNumber: 20,
      question: "How are worker threads different from clusters?",
      difficulty: "advanced",
      tags: ["worker-threads", "cluster", "parallelism"],
      answer:
        "Clusters spawn entirely separate Node.js processes, each with its own V8 instance, Event Loop, and memory space; they communicate via heavy Inter-Process Communication (IPC) and are meant for scaling I/O across CPU cores (like handling more HTTP requests). Worker Threads (`worker_threads` module), however, share the same process. While they have their own V8 instance, they can share memory directly using `SharedArrayBuffer`. Worker Threads are specifically designed for parallelizing heavy, CPU-intensive tasks (like image processing or complex math) without the massive overhead of spinning up entirely new processes.",
    },
    {
      id: "node-perf-6",
      questionNumber: 21,
      question:
        "How can you measure the duration of asynchronous operations in Node.js?",
      difficulty: "intermediate",
      tags: ["performance", "timing", "async-hooks", "console-time"],
      answer:
        "For basic, quick measurements, you can use `console.time('label')` before the operation and `console.timeEnd('label')` inside the asynchronous callback or after the `await`. For more precise, sub-millisecond accuracy without the overhead of the console, you should use `process.hrtime.bigint()` to get high-resolution timestamps, or the modern Web Performance API (`performance.now()`) available via the built-in `perf_hooks` module.",
    },
    {
      id: "node-perf-7",
      questionNumber: 22,
      question:
        "How do you measure and analyze the performance of asynchronous operations?",
      difficulty: "advanced",
      tags: ["profiling", "performance-hooks", "monitoring", "optimization"],
      answer:
        "For robust, production-level analysis, I use the `perf_hooks` module to implement the Performance Timeline API (using `performance.mark()` and `performance.measure()`), which integrates well with profiling tools. To track the exact lifecycle, execution time, and event loop delay of specific asynchronous resources, I utilize the `async_hooks` module. Additionally, for deep system-level profiling, running Node with the `--prof` flag generates a V8 tick file, and tools like Clinic.js can ingest this data to produce flame graphs and identify exactly where async operations are bottlenecking the event loop.",
    },

    // ---------- BACKEND API DESIGN ----------
    {
      id: "backend-api-1",
      questionNumber: 23,
      question:
        "How do you approach API versioning (URI vs header vs content negotiation)?",
      difficulty: "advanced",
      tags: [
        "rest",
        "versioning",
        "uri-versioning",
        "header-versioning",
        "content-negotiation",
      ],
      answer:
        "There are three main approaches. **URI Versioning** (`/v1/users`) is the most common and pragmatic; it's explicitly clear, highly cacheable by CDNs, and easy for clients to discover, though it technically violates REST principles by changing the resource identifier. **Header Versioning** (`X-API-Version: 1`) keeps URIs clean and strictly adheres to REST, but it complicates browser testing and caching rules. **Content Negotiation** (Accept: `application/vnd.company.v1+json`) is the most 'pure' RESTful approach, allowing versioning of the representation rather than the resource itself, but it has the steepest learning curve for clients. In practice, I advocate for URI versioning for major, breaking changes, while using headers for minor, non-breaking features.",
    },
    {
      id: "backend-api-2",
      questionNumber: 24,
      question:
        "How do you prevent blocking the event loop when doing heavy work in an Express route?",
      difficulty: "advanced",
      tags: ["non-blocking", "worker-threads", "child-process", "cpu-bound"],
      answer:
        "Since Node.js is single-threaded, synchronous CPU-bound tasks (like parsing massive JSONs, cryptography, or image processing) in an Express route will freeze the Event Loop, halting all other incoming requests. To prevent this, I use the `worker_threads` module. I offload the heavy computation to a separate thread, passing the data via a `SharedArrayBuffer` or messaging channel. The main thread immediately yields, remains responsive, and simply waits for the worker thread to emit a 'message' event with the result. For tasks requiring complete isolation or different binaries, I might use `child_process.fork()`.",
    },
    {
      id: "backend-api-3",
      questionNumber: 25,
      question:
        "How do you implement streaming responses (downloads or large payloads) in Express?",
      difficulty: "advanced",
      tags: ["node-streams", "pipe", "backpressure", "large-files"],
      answer:
        "Loading a massive file entirely into memory before sending it via `res.send()` will quickly cause an 'Out of Memory' crash under load. Instead, I use Node's `Streams` API. I create a Readable stream (e.g., `fs.createReadStream(filePath)` or a database cursor stream) and use the `.pipe()` method to connect it directly to the Express `res` object, which is a Writable stream. This sends the data in small chunks. Crucially, `.pipe()` automatically handles 'backpressure'—if the client's network is slow, it pauses the reading of the file so the server's memory buffer doesn't overflow.",
    },
    {
      id: "backend-api-4",
      questionNumber: 26,
      question:
        "How do you implement idempotency for POST endpoints (payment or order APIs)?",
      difficulty: "advanced",
      tags: [
        "payments",
        "idempotency-key",
        "distributed-systems",
        "consistency",
      ],
      answer:
        "Idempotency ensures that safely retrying a failed network request (like creating a charge) won't result in duplicate operations (double-charging). I implement this by requiring clients to send a unique `Idempotency-Key` (usually a UUID) in the request header. In the backend, before processing, I check a fast distributed cache (like Redis) or database for that key. If the key exists and the transaction is complete, I immediately return the cached response (e.g., 200 OK with the original payload). If the key doesn't exist, I lock it, process the transaction, store the result against that key, and release the lock. This pattern is vital for distributed system consistency.",
    },
    {
      id: "backend-api-5",
      questionNumber: 27,
      question:
        "How do you design pagination (offset vs cursor) and handle consistency?",
      difficulty: "advanced",
      tags: [
        "offset-pagination",
        "cursor-pagination",
        "consistency",
        "scalability",
      ],
      answer:
        "Offset pagination (`LIMIT 10 OFFSET 1000`) is easy to implement but scales poorly; the database must scan and discard all 1,000 preceding rows, making deep queries extremely slow. It also suffers from data drift—if an item is inserted or deleted while a user navigates pages, they will see duplicate or missed items. Cursor pagination (`WHERE id > last_seen_id LIMIT 10`) solves both issues. It uses an indexed, sequential column (like a timestamp or sequential ID) as a pointer. It is O(1) for database lookups regardless of depth, and because it relies on a specific data marker rather than a relative offset, the returned list remains consistent even if new data is continuously added.",
    },
    {
      id: "backend-api-6",
      questionNumber: 28,
      question: "How do you implement graceful shutdown for an Express server?",
      difficulty: "advanced",
      tags: ["signal-handling", "process", "kubernetes", "zero-downtime"],
      answer:
        "A hard crash or sudden termination drops active user connections and leaves database transactions in limbo. Graceful shutdown intercepts termination signals (like `SIGTERM` from Kubernetes or `SIGINT` from Ctrl+C). First, I call `server.close()` on the Express instance, which stops accepting *new* connections but allows existing ones to finish. Then, I set a timeout (e.g., 10 seconds). During this window, I cleanly close database connection pools and flush any pending logs/metrics. If the active requests finish, the process exits cleanly (`process.exit(0)`). If the timeout is reached before connections finish, I force exit (`process.exit(1)`) to prevent a hanging container.",
    },
    {
      id: "backend-api-7",
      questionNumber: 29,
      question:
        "How do you handle centralized logging and correlation IDs across microservices?",
      difficulty: "advanced",
      tags: [
        "correlation-id",
        "distributed-tracing",
        "microservices",
        "monitoring",
      ],
      answer:
        "In a distributed system, tracing a single user request across multiple microservices requires a 'Correlation ID' (or Trace ID). At the API Gateway or the very first entry point, I generate a unique UUID and attach it to a specific header (e.g., `X-Correlation-ID`). Every subsequent microservice must extract this header and inject it into its own outgoing HTTP requests to downstream services. Furthermore, using a tool like Node's `AsyncLocalStorage`, I bind this ID to the execution context so that every single `console.log` or error generated by that specific request automatically appends the ID. These logs are then shipped to a centralized aggregator (like ELK or Datadog), allowing me to query a single ID and see the exact waterfall of events across the entire system.",
    },

    // ---------- EXPRESS JS QUESTIONS ----------
    {
      id: "express-1",
      questionNumber: 30,
      question:
        "What is Express.js, and where does it sit in a Node.js backend stack?",
      difficulty: "beginner",
      tags: ["express", "nodejs", "backend-stack"],
      answer:
        "Express.js is a minimal, fast, and unopinionated web framework built on top of Node.js. In a typical backend stack (like the MERN or MEAN stack), it sits directly on top of the native Node.js `http` module. It acts as the 'middle layer' that abstracts away complex server logic, making it significantly easier to handle routing, middleware, and HTTP requests/responses, bridging the gap between the frontend client and the database.",
    },
    {
      id: "express-2",
      questionNumber: 31,
      question: "What is middleware in Express, and what does next() do?",
      difficulty: "beginner",
      tags: ["middleware", "next-function", "request-lifecycle"],
      answer:
        "Middleware functions are the core building blocks of Express. They are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application’s request-response cycle. They can execute code, modify the req/res objects, or end the request. If a middleware function does not end the request (like sending a response back to the client), it MUST call `next()`. The `next()` function is a callback that passes control to the next middleware in the stack; if it isn't called, the client's request will hang indefinitely.",
    },
    {
      id: "express-3",
      questionNumber: 32,
      question:
        "What’s the difference between app.use() and route handlers like app.get()?",
      difficulty: "intermediate",
      tags: ["app.use", "app.get", "routing", "http-methods"],
      answer:
        "`app.use()` is primarily used to bind middleware to your application. It matches a path (or all paths if left blank) regardless of the HTTP method (GET, POST, PUT, etc.). For example, `app.use('/api', authMiddleware)` will run the auth middleware on *any* request starting with `/api`. Conversely, route handlers like `app.get()`, `app.post()`, or `app.delete()` are strictly bound to both a specific URL path *and* a specific HTTP verb. They are generally used to define the final endpoint logic where a response is sent.",
    },
    {
      id: "express-4",
      questionNumber: 33,
      question:
        "How do you serve static files in Express, and what are common pitfalls?",
      difficulty: "intermediate",
      tags: ["express.static", "assets", "caching", "security"],
      answer:
        "You serve static files (images, CSS, JS) using the built-in middleware: `app.use(express.static('public'))`. A common pitfall is relying on relative paths. If you run your Node app from a different directory, the relative path will break. To fix this, always use absolute paths with the path module: `app.use(express.static(path.join(__dirname, 'public')))`. Other pitfalls include exposing sensitive files by choosing the wrong directory, and failing to configure caching options (like `maxAge`), which forces browsers to re-download unchanged assets on every request.",
    },
    {
      id: "express-5",
      questionNumber: 34,
      question: "How do route parameters work in Express (for example, /:id)?",
      difficulty: "beginner",
      tags: ["route-params", "req.params", "dynamic-routes"],
      answer:
        "Route parameters are named segments in a URL used to capture values at specific positions. In Express, you define them by prefixing a colon (`:`). For instance, if you define a route like `app.get('/users/:id')`, and a client makes a request to `/users/123`, Express automatically extracts `123` and makes it accessible in your route handler via the `req.params` object as `req.params.id`. This is the standard pattern for RESTful APIs to fetch, update, or delete specific resources by their unique identifier.",
    },
    {
      id: "express-6",
      questionNumber: 35,
      question: "What is express.Router() and why do we use it?",
      difficulty: "intermediate",
      tags: ["router", "modular-routes", "scalability"],
      answer:
        "`express.Router()` is a class that creates a modular, mountable set of route handlers. You can think of it as a 'mini-application' that only handles routing. We use it to keep our codebase clean and organized as the application grows. Instead of cramming 100 endpoints into a single `server.js` file, you create separate router files for different domains (e.g., `userRoutes.js`, `orderRoutes.js`). You then export these routers and mount them in your main file using `app.use('/users', userRoutes)`.",
    },
    {
      id: "express-7",
      questionNumber: 36,
      question:
        "How do you handle JSON request bodies safely in Express, and what middleware is typically used?",
      difficulty: "intermediate",
      tags: ["express.json", "body-parser", "validation", "security"],
      answer:
        "To parse incoming JSON payloads, you use the built-in middleware `express.json()`. To do this safely and prevent Denial of Service (DoS) attacks via massive payloads, you should restrict the allowed payload size by passing an options object: `app.use(express.json({ limit: '10kb' }))`. Furthermore, parsing the JSON is only the first step; safely handling it means using an external validation library (like Joi, Zod, or express-validator) immediately in your route to ensure the parsed `req.body` exactly matches your expected schema before processing it.",
    },
    {
      id: "express-8",
      questionNumber: 37,
      question:
        "What is the difference between query params, route params, and body?",
      difficulty: "beginner",
      tags: ["req.query", "req.params", "req.body"],
      answer:
        "They represent three different ways to pass data to the server. **Route Params (`req.params`)** are embedded directly in the URL path (e.g., `/users/123`) and are used to identify a specific resource. **Query Params (`req.query`)** are appended to the end of the URL after a question mark (e.g., `/users?role=admin&sort=asc`) and are used for optional filtering, searching, or pagination. **Body (`req.body`)** data is hidden inside the HTTP request payload (not visible in the URL) and is used for sending sensitive or large amounts of data, typically in POST or PUT requests to create or update resources.",
    },

    // ---------- EXPRESS ARCHITECTURE AND PERFORMANCE ----------
    {
      id: "express-arch-1",
      questionNumber: 38,
      question:
        "How do you handle errors in Express (error-handling middleware signature)?",
      difficulty: "intermediate",
      tags: ["middleware", "error-handler", "express-errors"],
      answer:
        "Error-handling middleware in Express is unique because it strictly requires a four-argument signature: `(err, req, res, next)`. Even if you don't use the `next` object inside the function, you must include it in the parameter list, otherwise Express will interpret it as regular middleware. This middleware must be placed at the very end of the application stack, after all other `app.use()` and routes. When you call `next(error)` from any preceding route or middleware, Express skips all remaining regular middleware and jumps directly to this global error handler, where you can log the error and format a consistent JSON response for the client.",
    },
    {
      id: "express-arch-2",
      questionNumber: 39,
      question:
        "How do you structure routes and controllers in a production Express app?",
      difficulty: "intermediate",
      tags: ["mvc", "controllers", "routes", "folder-structure"],
      answer:
        "A robust production app typically separates concerns. The **Routes** layer only handles URL path definitions and HTTP verbs, mapping them to specific functions (e.g., `router.post('/users', userController.createUser)`). The **Controllers** layer receives the `req` and `res` objects; its job is to extract inputs, call the appropriate business logic, and send back the HTTP response. Crucially, the controller itself should not contain heavy business rules or database queries. Those belong in a separate **Services** layer. This modularity makes the codebase easier to read, test, and scale.",
    },
    {
      id: "express-arch-3",
      questionNumber: 40,
      question: "How do you implement modular routing (feature-based routing)?",
      difficulty: "intermediate",
      tags: ["router", "feature-based", "modular-design"],
      answer:
        "Instead of creating a single massive folder of all routes, feature-based routing groups everything related to a specific domain (like 'Users' or 'Orders') into its own directory. Inside a `users` folder, you would have `user.router.js`, `user.controller.js`, and `user.service.js`. In the router file, you instantiate `const router = express.Router()` and define paths relative to the feature (e.g., `router.get('/')` instead of `/users`). Finally, in your main `app.js` file, you mount the modular router: `app.use('/users', require('./features/users/user.router'))`. This encapsulates logic and prevents merge conflicts in large teams.",
    },
    {
      id: "express-arch-4",
      questionNumber: 41,
      question:
        "How do you write custom middleware for authentication and authorization?",
      difficulty: "intermediate",
      tags: ["middleware", "jwt", "auth", "authorization"],
      answer:
        "For authentication, I create an `isAuth` middleware function. It extracts the JWT from the `Authorization: Bearer <token>` header or from cookies. It then uses `jwt.verify()` to validate the token's signature and expiration. If valid, the decoded user payload (like the user's ID) is attached to the request object (`req.user = decoded`) and `next()` is called. If invalid, it returns a 401 Unauthorized. For authorization, I create an `authorize(roles)` middleware factory that checks if `req.user.role` is included in the permitted `roles` array; if not, it returns a 403 Forbidden.",
    },
    {
      id: "express-arch-5",
      questionNumber: 42,
      question:
        "What’s the difference between synchronous errors and async errors in Express routes?",
      difficulty: "intermediate",
      tags: ["async-await", "error-propagation", "try-catch"],
      answer:
        "If a synchronous error occurs (like referencing an undefined variable) inside a route handler, Express automatically catches it and forwards it to the global error handler. However, Express 4 does *not* automatically catch errors thrown inside asynchronous functions (Promises or async/await). If an unhandled promise rejection occurs, the server will crash or the request will hang. Therefore, you must wrap all async code in `try/catch` blocks and explicitly call `next(error)` in the catch block. To avoid this boilerplate, developers typically use a wrapper utility function (like `express-async-handler`) to automatically catch and forward async errors.",
    },
    {
      id: "express-arch-6",
      questionNumber: 43,
      question:
        "How do you implement request validation, and where should it live?",
      difficulty: "intermediate",
      tags: ["validation", "zod", "joi", "middleware"],
      answer:
        "Request validation should happen immediately upon receiving the payload, acting as a gatekeeper before the data ever reaches the Controller or Database layer. I implement this using schema-based validation libraries like Zod or Joi. I write a generic validation middleware factory `validateRequest(schema)` that takes the schema as an argument. Inside the route definition, it sits between the route path and the controller: `router.post('/login', validateRequest(loginSchema), authController.login)`. If validation fails, the middleware returns a 400 Bad Request with the specific error details; if it passes, it calls `next()`.",
    },
    {
      id: "express-arch-7",
      questionNumber: 44,
      question: "How do you implement rate limiting and request throttling?",
      difficulty: "advanced",
      tags: ["rate-limit", "ddos", "throttling", "security"],
      answer:
        "To protect against brute-force attacks and volumetric DDoS attacks, I use middleware like `express-rate-limit`. At a global level, I might set a general limit (e.g., 100 requests per 15 minutes per IP). For highly sensitive routes, like `/login` or `/reset-password`, I apply a much stricter, route-specific limiter (e.g., 5 requests per hour). For distributed production environments across multiple server instances, an in-memory limiter is insufficient; I back the rate limiter with a fast, centralized key-value store like Redis to ensure the limits are synchronized across the entire cluster.",
    },
    {
      id: "express-arch-8",
      questionNumber: 45,
      question:
        "How does trust proxy impact IP extraction and security in Express deployments?",
      difficulty: "advanced",
      tags: ["reverse-proxy", "nginx", "load-balancer", "security"],
      answer:
        "When an Express app is deployed behind a reverse proxy or load balancer (like Nginx, AWS ALB, or Cloudflare), the `req.ip` property will incorrectly show the internal IP address of the proxy itself, not the actual user's IP. To fix this, you must enable `app.set('trust proxy', true)` (or ideally, pass the specific IP/subnet of your trusted proxy). This tells Express to parse the `X-Forwarded-For` header injected by the proxy to determine the real client IP. If configured incorrectly, a malicious user could spoof the `X-Forwarded-For` header to bypass IP-based rate limiting or geo-blocking.",
    },
    {
      id: "express-arch-9",
      questionNumber: 46,
      question: "How do you handle file uploads securely in Express?",
      difficulty: "advanced",
      tags: ["multer", "uploads", "security", "storage"],
      answer:
        "File uploads require parsing `multipart/form-data`, which native Express cannot do. I use the `multer` middleware. Security is paramount here. First, I set strict `limits` (e.g., maximum file size of 5MB) to prevent Denial of Service via massive uploads. Second, I implement a `fileFilter` function to strictly validate the file's mimetype and extension, ensuring executable files (.exe, .sh) or malicious scripts disguised as images aren't accepted. Finally, instead of saving files to the server's local disk (which doesn't scale in containerized environments), I use Multer's memory storage or streaming plugins (like `multer-s3`) to stream the validated file directly into an object storage service like AWS S3.",
    },

    // ---------- ADVANCED NODE.JS PERFORMANCE & SCALING ----------
    {
      id: "node-advanced-1",
      questionNumber: 47,
      question:
        "How do you decide between cluster and worker_threads for scaling a Node service?",
      difficulty: "advanced",
      tags: [
        "cluster",
        "worker_threads",
        "scaling",
        "cpu-bound",
        "process-model",
      ],
      answer:
        "The decision depends entirely on the type of workload. The `cluster` module forks the entire Node.js process, creating multiple independent instances that can share a single port. It is ideal for horizontal scaling of I/O-bound applications (like handling thousands of concurrent HTTP requests) across multiple CPU cores. However, IPC communication between clusters is slow and memory overhead is high. `worker_threads`, introduced later, run within the same process and share memory via `SharedArrayBuffer`. They are specifically designed for CPU-bound tasks (like heavy cryptography, image processing, or complex data parsing) to prevent those computations from blocking the main event loop.",
    },
    {
      id: "node-advanced-2",
      questionNumber: 48,
      question:
        "What are common causes of event loop blocking, and how do you detect them?",
      difficulty: "advanced",
      tags: ["event-loop", "performance", "blocking", "diagnostics"],
      answer:
        "The event loop gets blocked when the main thread executes synchronous, CPU-intensive code. Common culprits include: `JSON.parse` or `JSON.stringify` on massive payloads, synchronous crypto algorithms (e.g., `bcrypt.hashSync`), complex regular expressions causing 'Catastrophic Backtracking', heavy array sorts/iterations, and using synchronous `fs` methods in production. To detect blocking, I monitor 'Event Loop Lag' (the delay between when a timer is scheduled and when it actually executes). I use tools like `perf_hooks`, APMs (Datadog/New Relic), or the `clinic doctor` tool from NearForm, which profiles the application under load and visually flags event loop delays.",
    },
    {
      id: "node-advanced-3",
      questionNumber: 49,
      question: "How do you diagnose memory leaks in Node.js in production?",
      difficulty: "advanced",
      tags: ["memory-leaks", "heap", "profiling", "production-debugging"],
      answer:
        "In production, continuous APM monitoring is the first line of defense to spot an 'up-and-to-the-right' sawtooth pattern in heap memory usage. When a leak is suspected, I generate a Heap Snapshot. Since doing this directly in production can pause the process, I ideally route traffic away from one specific instance, trigger the snapshot programmatically using the `v8` module (`v8.writeHeapSnapshot()`), and then analyze it in Chrome DevTools using the 'Comparison' view between two snapshots taken over time. Common culprits I look for include detached DOM nodes (in SSR), closures unintentionally capturing large scopes, uncleared intervals/timers, and event listeners accumulating without being removed.",
    },
    {
      id: "node-advanced-4",
      questionNumber: 50,
      question:
        "What metrics do you monitor for Node services beyond CPU and RAM?",
      difficulty: "advanced",
      tags: ["metrics", "monitoring", "latency", "throughput", "apm"],
      answer:
        "Beyond basic infrastructure metrics, Node-specific observability is critical. I heavily monitor Event Loop Lag, as high lag indicates CPU bottlenecks hiding behind seemingly fine CPU utilization. I track Garbage Collection (GC) pauses; if Major GC sweeps happen too frequently or take too long, it severely impacts P99 latency. I also monitor Active Handles/Requests (to detect connection pooling issues or hanging requests), Heap Size breakdown (new space vs. old space), and application-level SLIs: Error Rates (5xx), Throughput (RPS), and Request Latency percentiles (P50, P90, P99).",
    },
    {
      id: "node-advanced-5",
      questionNumber: 51,
      question:
        "Explain backpressure in streams. What breaks if you ignore it?",
      difficulty: "advanced",
      tags: ["streams", "backpressure", "performance", "data-flow"],
      answer:
        "Backpressure occurs in stream processing when the source (Readable stream) is pushing data faster than the destination (Writable stream) can consume it. If you ignore backpressure and force the destination to keep accepting data, the Node.js internal buffer will rapidly fill up. This leads to massive RAM spikes, severe garbage collection thrashing, and eventually an 'Out of Memory' (OOM) process crash. To handle it correctly, you should rely on the `.pipe()` method or the modern `stream/promises` pipeline, which automatically monitor the destination's `highWaterMark` and pause/resume the source stream as needed.",
    },
    {
      id: "node-advanced-6",
      questionNumber: 52,
      question:
        "How do you implement graceful shutdown in Node (SIGTERM) without dropping requests?",
      difficulty: "advanced",
      tags: ["graceful-shutdown", "signals", "sigterm", "production"],
      answer:
        "When a container orchestrator like Kubernetes scales down, it sends a `SIGTERM` signal. If ignored, the process forcefully exits, instantly dropping all active HTTP requests and database transactions. To implement graceful shutdown: 1) Listen for `process.on('SIGTERM')`. 2) Tell the HTTP server to stop accepting new connections using `server.close()`. 3) Wait for existing requests to complete. 4) Cleanly close all database connection pools and message queue consumers. 5) Call `process.exit(0)`. Crucially, I also implement a hard timeout (e.g., 10-15 seconds) so that if some requests hang indefinitely, the process is forced to exit `process.exit(1)` before the orchestrator's termination grace period ends.",
    },
    {
      id: "node-advanced-7",
      questionNumber: 53,
      question: "What’s your approach to zero-downtime deployments?",
      difficulty: "advanced",
      tags: ["zero-downtime", "blue-green", "rolling-deploy", "ci-cd"],
      answer:
        "Zero-downtime deployments require infrastructure orchestration combined with application-level readiness. I typically use Rolling Updates in Kubernetes. The orchestrator spins up new pods running the V2 codebase. Crucially, the orchestrator relies on a `/health/readiness` probe exposed by the Node app. The load balancer will not route traffic to the new pod until the readiness probe returns 200 OK (meaning DB connections are established, caches are warmed). Once healthy, traffic is routed to V2, and the V1 pod receives a SIGTERM for graceful shutdown. For riskier changes, I prefer a Blue/Green deployment, standing up a complete replica environment and switching the load balancer router instantly, allowing for immediate rollback.",
    },
    {
      id: "node-advanced-8",
      questionNumber: 54,
      question: "How do you design retries and timeouts to avoid retry storms?",
      difficulty: "advanced",
      tags: ["retry-strategy", "timeouts", "circuit-breaker", "resilience"],
      answer:
        "Aggressive, naive retries during a downstream outage create a 'Retry Storm' (Thundering Herd), effectively DDOS-ing the struggling service. To prevent this, retries must implement Exponential Backoff, increasing the wait time between each attempt (e.g., 1s, 2s, 4s). Furthermore, I add Jitter (randomness) to the backoff calculation so that thousands of concurrent requests don't all retry at the exact same millisecond. Ultimately, for sustained outages, retries are insufficient. I wrap external calls in a Circuit Breaker pattern (using libraries like `opossum`). If failures exceed a threshold, the circuit 'opens', failing fast immediately without making the external call, giving the downstream service time to recover.",
    },
    {
      id: "node-advanced-9",
      questionNumber: 55,
      question:
        "What’s the difference between process-level concurrency and thread-level concurrency in Node?",
      difficulty: "advanced",
      tags: ["process", "threads", "worker_threads", "event-loop"],
      answer:
        "Process-level concurrency (using the `cluster` or `child_process` modules) achieves parallelism by spinning up entirely separate Node instances, each with its own V8 engine, Event Loop, and isolated memory space. Communication happens via relatively slow Inter-Process Communication (IPC). It is heavy on memory but highly stable (a crash in one process doesn't affect others). Thread-level concurrency (using `worker_threads`) spins up multiple threads within a single Node process. While each thread has its own Event Loop, they share the same OS process footprint and can pass data extremely quickly by sharing memory via `SharedArrayBuffer`. It's lighter on memory but requires careful synchronization to avoid data race conditions.",
    },
    {
      id: "node-advanced-10",
      questionNumber: 56,
      question:
        "How do you secure Node apps against common risks (secrets, headers, dependencies, input validation)?",
      difficulty: "advanced",
      tags: ["security", "helmet", "secrets", "validation", "owasp"],
      answer:
        "Security requires a multi-layered approach based on OWASP principles. 1) Headers: Use `helmet` middleware to set strict HTTP headers (HSTS, X-Frame-Options) and remove the `X-Powered-By` fingerprint. 2) Dependencies: Use `npm audit` in CI/CD pipelines to block vulnerable packages, and consider tools like Snyk. 3) Secrets: Never hardcode secrets; inject them at runtime using environment variables managed by a secure vault (AWS Secrets Manager, HashiCorp Vault), and prevent them from being logged. 4) Input Validation: Use strict schema validators (Zod, Joi) to sanitize inputs and prevent NoSQL/SQL injection, and limit payload sizes (`express.json({limit: '10kb'})`) to prevent DoS attacks.",
    },
    {
      id: "node-advanced-11",
      questionNumber: 57,
      question:
        "How do you manage configuration safely across environments (12-factor principles)?",
      difficulty: "advanced",
      tags: ["12-factor", "env", "configuration-management", "devops"],
      answer:
        "Following the 12-Factor App methodology, configuration that varies between environments (Staging, Prod) must be stored strictly in the environment, never in the codebase. I use `.env` files only for local development. In production, configurations are injected directly into the container as environment variables by the orchestrator (like Kubernetes ConfigMaps/Secrets) or fetched dynamically on startup from a central configuration server (like AWS Parameter Store). Within the Node app, I centralize reading `process.env` into a single, validated configuration file (often using Zod to ensure the app crashes immediately on startup if a required env variable is missing or malformed).",
    },
    {
      id: "node-advanced-12",
      questionNumber: 58,
      question:
        "How do you structure a large Node monorepo (packages, shared libraries, boundaries)?",
      difficulty: "advanced",
      tags: ["monorepo", "workspace", "architecture", "scalability"],
      answer:
        "For large codebases, I structure the monorepo using tools like Turborepo, Nx, or simply npm/yarn Workspaces. The structure is separated into `apps` (the deployable Node services, like `api-gateway` or `user-service`) and `packages` (internal libraries). Inside `packages`, I strictly separate concerns: a `ui` package (if fullstack), a `config` package (shared ESLint/TSConfig), a `database` package (shared Prisma schemas/clients), and a `core-utils` package. This creates strict boundaries. Services in `apps` declare dependencies on specific `packages` in their `package.json`. This architecture allows for massive code reuse, atomic commits across boundaries, and heavily optimized caching where only the specific apps affected by a code change are rebuilt and redeployed.",
    },
  ],
};
