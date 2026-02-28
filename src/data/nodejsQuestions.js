export const nodejsData = {
  id: "nodejs",
  title: "Node.js & Backend Interview Questions",
  level: "Freshers-to-Senior",
  totalQuestions: 58,
  questions: [
    {
      id: "node-1",
      questionNumber: 1,
      question: "What is a first class function in JavaScript?",
      difficulty: "beginner",
      tags: ["functions", "callbacks", "functional-programming"],
      answer:
        "In JavaScript, functions are treated as 'first-class citizens'. This means functions are essentially just objects and can be treated like any other variable. You can assign a function to a variable, pass a function as an argument to another function (which is how callbacks work), and return a function from another function. This concept is the foundation of functional programming in JS.",
      codeSnippet:
        "// 1. Assigning a function to a variable\nconst greet = function(name) {\n  return `Hello, ${name}`;\n};\n\n// 2. Passing a function as an argument (Callback)\nfunction processUserInput(callback) {\n  const name = 'Alice';\n  console.log(callback(name));\n}\nprocessUserInput(greet);\n\n// 3. Returning a function\nfunction multiplier(factor) {\n  return function(number) { return number * factor; };\n}\nconst double = multiplier(2);\nconsole.log(double(5)); // Output: 10",
    },
    {
      id: "node-2",
      questionNumber: 2,
      question: "What tools can be used to assure consistent code style?",
      difficulty: "beginner",
      tags: ["eslint", "prettier", "linting"],
      answer:
        "To ensure consistent code style and catch errors early, developers primarily use Linters and Formatters. ESLint is the industry standard for analyzing code to find problematic patterns or code that doesn't adhere to specific style guidelines. Prettier is an opinionated code formatter that automatically rewrites your code to ensure consistent formatting (like spacing and quotes). Often, they are used together and integrated into pre-commit hooks using tools like Husky.",
      codeSnippet:
        '// Example .eslintrc.json configuration\n{\n  "env": { "node": true, "es2021": true },\n  "extends": ["eslint:recommended", "prettier"],\n  "parserOptions": { "ecmaVersion": 12 },\n  "rules": {\n    "no-unused-vars": "warn",\n    "no-console": "off"\n  }\n}\n\n// Example .prettierrc configuration\n{\n  "semi": true,\n  "singleQuote": true,\n  "trailingComma": "es5"\n}',
    },
    {
      id: "node-3",
      questionNumber: 3,
      question: "What is the purpose of module.exports?",
      difficulty: "beginner",
      tags: ["commonjs", "exports", "require"],
      answer:
        "In Node.js (specifically within the CommonJS module system), every file is treated as a separate module. The `module.exports` object is used to define what part of the module (variables, functions, classes, or objects) should be exposed and made available for other files to use. When another file uses the `require()` function to import that module, it receives whatever was assigned to `module.exports`.",
      codeSnippet:
        "// --- mathUtils.js (Exporting) ---\nconst add = (a, b) => a + b;\nconst subtract = (a, b) => a - b;\n\n// Exposing specific functions\nmodule.exports = {\n  add,\n  subtract\n};\n\n// --- app.js (Importing) ---\nconst math = require('./mathUtils');\nconsole.log(math.add(5, 3)); // Output: 8",
    },
    {
      id: "node-4",
      questionNumber: 4,
      question: "List down the two arguments that async.queue takes as input.",
      difficulty: "intermediate",
      tags: ["async-library", "queue", "concurrency"],
      answer:
        "Using the popular `async` utility library, the `async.queue` method takes two arguments: 1) A `worker` function, which is the logic that processes each task added to the queue, and 2) a `concurrency` value, which is an integer defining the maximum number of worker functions that can be executed in parallel at any given time.",
      codeSnippet:
        "const async = require('async');\n\n// 1. Worker function, 2. Concurrency limit (e.g., process 2 at a time)\nconst uploadQueue = async.queue(async (fileTask, callback) => {\n  console.log(`Uploading ${fileTask.name}...`);\n  await simulateNetworkDelay(1000);\n  console.log(`Finished ${fileTask.name}`);\n  callback();\n}, 2); \n\nuploadQueue.push({ name: 'image1.png' });\nuploadQueue.push({ name: 'image2.png' });\nuploadQueue.push({ name: 'image3.png' }); // Will wait until 1 or 2 finishes",
    },
    {
      id: "node-5",
      questionNumber: 5,
      question: "What is REPL in Node.js?",
      difficulty: "beginner",
      tags: ["repl", "node-cli", "execution"],
      answer:
        "REPL stands for Read, Eval, Print, Loop. It is a built-in interactive computer environment (like a command-line shell) that takes a single user input (Read), executes it (Eval), returns the result to the user (Print), and waits for the next input (Loop). You can access it simply by typing `node` in your terminal. It is highly useful for quick debugging, testing out JavaScript snippets, or experimenting with Node APIs without writing a full script.",
      codeSnippet:
        "/* \nTerminal interaction:\n\n$ node\nWelcome to Node.js v18.16.0.\nType \".help\" for more information.\n> const x = 10;\nundefined\n> const y = 20;\nundefined\n> x + y;\n30\n> crypto.randomUUID()\n'7c7c9809-c183-4a16-bdf8-6927a3c3b036'\n> .exit\n*/",
    },
    {
      id: "node-6",
      questionNumber: 6,
      question: "How many types of API functions are there in Node.js?",
      difficulty: "beginner",
      tags: ["blocking", "non-blocking", "async"],
      answer:
        "Node.js API functions generally fall into two categories: Asynchronous (Non-blocking) and Synchronous (Blocking). Asynchronous functions allow the main thread to continue executing while an I/O operation finishes in the background, utilizing callbacks or promises (e.g., `fs.readFile`). Synchronous functions block the execution of the rest of the code until they finish running (e.g., `fs.readFileSync`). Node.js strongly advocates for using Asynchronous APIs to maintain performance.",
      codeSnippet:
        "const fs = require('fs');\n\n// 1. Synchronous (Blocking) API\n// The thread STOPS here until the file is fully read.\ntry {\n  const data = fs.readFileSync('/file.md', 'utf8');\n  console.log(data);\n} catch (err) { console.error(err); }\n\n// 2. Asynchronous (Non-blocking) API\n// The thread offloads the work and continues immediately.\nfs.readFile('/file.md', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\nconsole.log(\"This prints BEFORE the file finishes reading.\");",
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
      codeSnippet:
        "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  // Set the response HTTP header with HTTP status and Content type\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  \n  // Send the response body\n  res.end('Hello World\\n');\n});\n\n// Start the server on port 3000\nserver.listen(3000, () => {\n  console.log('Server running at http://localhost:3000/');\n});",
    },
    {
      id: "node-8",
      questionNumber: 8,
      question: "Why is Node.js single-threaded?",
      difficulty: "intermediate",
      tags: ["event-loop", "non-blocking", "architecture"],
      answer:
        "Node.js was intentionally designed to be single-threaded (for executing JavaScript) to handle thousands of concurrent client connections efficiently. Traditional multi-threaded servers allocate a separate thread for each request, consuming significant RAM and CPU context-switching overhead. By using a single thread combined with a non-blocking I/O model and an Event Loop, Node.js delegates heavy tasks to the OS or background worker threads (libuv) and only uses the main thread to handle the resulting callbacks. This makes it incredibly scalable and lightweight for I/O bound tasks.",
      codeSnippet:
        "const https = require('https');\n\n// Node uses a single thread for this JS code.\n// When 10,000 requests hit this server simultaneously...\nhttp.createServer((req, res) => {\n  // Node DOES NOT block the main thread waiting for the DB.\n  // It offloads the network request to the OS and moves to the next client request.\n  database.query('SELECT * FROM users', (err, result) => {\n    // Node's Event Loop picks this up ONLY when the DB is done.\n    res.end(JSON.stringify(result));\n  });\n}).listen(3000);",
    },
    {
      id: "node-9",
      questionNumber: 9,
      question: "What is fork in Node.js?",
      difficulty: "intermediate",
      tags: ["fork", "cluster", "multi-process"],
      answer:
        "`child_process.fork()` is a special instance of the `spawn()` method used specifically to spawn new Node.js processes. The major advantage of `fork` is that it opens a built-in IPC (Inter-Process Communication) channel between the parent and child process. This allows them to easily send messages to each other using `process.send()` and listen via `process.on('message')`, which is essential for offloading CPU-intensive tasks without blocking the main event loop.",
      codeSnippet:
        "// --- parent.js ---\nconst { fork } = require('child_process');\nconst child = fork('./child.js');\n\nchild.on('message', (msg) => {\n  console.log('Message from child:', msg);\n});\nchild.send({ hello: 'world' }); // Send data to child\n\n// --- child.js ---\nprocess.on('message', (msg) => {\n  console.log('Message from parent:', msg);\n  // Do heavy CPU work here...\n  process.send({ result: 'Calculation complete' });\n});",
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
      codeSnippet:
        "// ❌ CALLBACK HELL\ngetUser(1, (err, user) => {\n  if (err) return handleError(err);\n  getPosts(user.id, (err, posts) => {\n    if (err) return handleError(err);\n    console.log(posts);\n  });\n});\n\n// ✅ PROMISES\ngetUser(1)\n  .then(user => getPosts(user.id))\n  .then(posts => console.log(posts))\n  .catch(err => handleError(err)); // Centralized error handling\n\n// ✨ ASYNC/AWAIT (Built on Promises)\nasync function fetchUserPosts() {\n  try {\n    const user = await getUser(1);\n    const posts = await getPosts(user.id);\n    console.log(posts);\n  } catch (err) { handleError(err); }\n}",
    },
    {
      id: "node-11",
      questionNumber: 11,
      question: "What are some commonly used timing features of Node.js?",
      difficulty: "beginner",
      tags: ["setTimeout", "setInterval", "setImmediate"],
      answer:
        "Node.js provides several global timer functions. `setTimeout(callback, ms)` schedules a single execution of a callback after a specified delay. `setInterval(callback, ms)` schedules a callback to execute repeatedly at the specified interval. Finally, `setImmediate(callback)` schedules a callback to execute immediately after the current phase of the Event Loop (specifically, after I/O events callbacks) finishes.",
      codeSnippet:
        "// 1. setTimeout: Runs once after 1000ms\nsetTimeout(() => {\n  console.log('I run after 1 second');\n}, 1000);\n\n// 2. setInterval: Runs repeatedly every 2000ms\nconst intervalId = setInterval(() => {\n  console.log('I run every 2 seconds');\n}, 2000);\n// clearInterval(intervalId); // To stop it\n\n// 3. setImmediate: Runs on the next iteration of the Event Loop\nsetImmediate(() => {\n  console.log('I run immediately after I/O events');\n});",
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
      codeSnippet:
        "console.log('1. Start (Sync, pushed to Call Stack)');\n\nsetTimeout(() => {\n  console.log('4. Timeout (Async, pushed to Task Queue)');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('3. Promise (Async, pushed to Microtask Queue - higher priority)');\n});\n\nconsole.log('2. End (Sync, pushed to Call Stack)');\n\n/* Output Order:\n   1. Start\n   2. End\n   3. Promise\n   4. Timeout\n*/",
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
      codeSnippet:
        "// Why Node excels at I/O: It can handle thousands of these requests \n// concurrently without allocating 1000 OS threads like older Java/PHP servers.\napp.get('/video', (req, res) => {\n  // Streams the file directly to the client without eating up RAM\n  const stream = fs.createReadStream('./massive-video.mp4');\n  stream.pipe(res);\n});\n\n// Why it helps Full-Stack devs:\n// The exact same JSON format is used natively in Mongo, Node, and React.\nres.json({ id: 1, text: \"Uniform data structures everywhere!\" });",
    },
    {
      id: "node-14",
      questionNumber: 14,
      question: "How do you manage packages in your Node.js project?",
      difficulty: "beginner",
      tags: ["npm", "package.json", "dependencies"],
      answer:
        "Package management is primarily handled using NPM (Node Package Manager), which comes bundled with Node.js, though Yarn or pnpm are also common alternatives. At the root of the project is the `package.json` file, which catalogs the project's dependencies, versions, and scripts. When you run `npm install <package>`, the module is downloaded into the `node_modules` folder, and a `package-lock.json` file is generated or updated to freeze the exact dependency tree, ensuring identical environments across different developer machines.",
      codeSnippet:
        '// Example package.json\n{\n  "name": "my-node-app",\n  "version": "1.0.0",\n  "scripts": {\n    "start": "node server.js",\n    "dev": "nodemon server.js" // Custom script\n  },\n  "dependencies": {\n    "express": "^4.18.2",  // Production dependency\n    "mongoose": "^7.0.3"\n  },\n  "devDependencies": {\n    "nodemon": "^2.0.22"   // Development only dependency\n  }\n}',
    },
    {
      id: "node-15",
      questionNumber: 15,
      question: "What is Node.js and how does it work?",
      difficulty: "beginner",
      tags: ["runtime", "v8-engine", "event-loop"],
      answer:
        "Node.js is an open-source, cross-platform runtime environment that executes JavaScript code outside of a web browser, primarily used for building backend services. It is built on Google Chrome's V8 JavaScript engine, which compiles JS directly to high-performance machine code. It works using a single-threaded, event-driven, non-blocking I/O model. When a request comes in, the main thread handles it. If the request requires a heavy I/O operation (like database querying), Node offloads it to a background C++ thread pool (libuv). Once the background task finishes, an event is emitted, and the callback is processed by the main thread.",
      codeSnippet:
        "// 1. Request hits Node's single V8 thread\napp.get('/data', (req, res) => {\n  // 2. Node hits an I/O operation (file read)\n  // 3. V8 offloads this to libuv (C++ background threads) so V8 isn't blocked\n  fs.readFile('database.json', (err, data) => {\n    // 4. libuv finishes, tells Event Loop\n    // 5. Event Loop pushes this callback back to V8 Call Stack\n    res.send(data);\n  });\n});",
    },
    {
      id: "node-perf-1",
      questionNumber: 16,
      question: "What is an Event Emitter in Node.js?",
      difficulty: "intermediate",
      tags: ["event-emitter", "events-module", "observer-pattern"],
      answer:
        "An EventEmitter is a core class in the built-in `events` module that implements the Observer design pattern. It provides a way for objects (emitters) to broadcast named events, and for other parts of the application (listeners) to register callback functions that are executed synchronously whenever those specific events are emitted. This is the foundational mechanism for most of Node.js's asynchronous, event-driven architecture, including Streams and HTTP servers.",
      codeSnippet:
        "const EventEmitter = require('events');\n\n// Create an instance\nconst myEmitter = new EventEmitter();\n\n// 1. Register a Listener (Observer)\nmyEmitter.on('userSignup', (username) => {\n  console.log(`Send welcome email to ${username}`);\n});\n\n// 2. Emit the Event (Broadcast)\nmyEmitter.emit('userSignup', 'Alice'); \n// Output: Send welcome email to Alice",
    },
    {
      id: "node-perf-2",
      questionNumber: 17,
      question: "How can Node.js performance be enhanced using clustering?",
      difficulty: "advanced",
      tags: ["cluster", "multi-core", "load-balancing", "performance"],
      answer:
        "Because Node.js runs on a single thread, a single instance cannot fully utilize a multi-core CPU. The `cluster` module allows you to fork the main process into multiple child worker processes—typically one for each CPU core. These workers share the same server port and memory footprint of the underlying OS. The master process listens for incoming connections and distributes them across the workers using a round-robin load balancing algorithm, multiplying the application's throughput and providing zero-downtime capabilities if a worker crashes.",
      codeSnippet:
        "const cluster = require('cluster');\nconst http = require('http');\nconst numCPUs = require('os').cpus().length;\n\nif (cluster.isMaster) {\n  console.log(`Master process running. Forking ${numCPUs} workers...`);\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork(); // Create a new Node process per core\n  }\n  cluster.on('exit', (worker) => cluster.fork()); // Revive dead workers\n} else {\n  // All workers share port 8000. Master load balances between them.\n  http.createServer((req, res) => res.end('Handled by worker ' + process.pid)).listen(8000);\n}",
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
      codeSnippet:
        "// Overriding the default libuv thread pool size (must be done early)\nprocess.env.UV_THREADPOOL_SIZE = 8;\n\nconst crypto = require('crypto');\n\n// This heavy crypto function is automatically offloaded to the libuv thread pool.\n// With UV_THREADPOOL_SIZE=8, we can hash 8 passwords in parallel \n// before the event loop is forced to queue them.\ncrypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', (err, key) => {\n  console.log('Hash computed safely in the background');\n});",
    },
    {
      id: "node-perf-4",
      questionNumber: 19,
      question: "What is WASI and why is it being introduced?",
      difficulty: "advanced",
      tags: ["wasi", "webassembly", "runtime", "future-nodejs"],
      answer:
        "WASI stands for WebAssembly System Interface. It is an API that provides WebAssembly modules with safe, sandboxed access to underlying operating system features like the file system, network, and system clocks—capabilities they don't natively have in the browser. Node.js is integrating WASI to allow developers to run high-performance, compiled code (from languages like Rust, C++, or Go) directly on the server in a secure environment. It promises near-native speeds for heavy computational tasks while maintaining cross-platform portability and strict security boundaries.",
      codeSnippet:
        "const fs = require('fs');\nconst { WASI } = require('wasi');\n\n// Setting up a sandboxed environment for a WebAssembly module\nconst wasi = new WASI({\n  args: process.argv,\n  env: process.env,\n  // Sandboxed directory mapping\n  preopens: { '/sandbox': '/some/real/path' } \n});\n\nconst importObject = { wasi_snapshot_preview1: wasi.wasiImport };\nconst wasmBuffer = fs.readFileSync('my_rust_program.wasm');\n\n// Running compiled Rust/C++ at near-native speed directly in Node\nWebAssembly.instantiate(wasmBuffer, importObject).then(res => {\n  wasi.start(res.instance);\n});",
    },
    {
      id: "node-perf-5",
      questionNumber: 20,
      question: "How are worker threads different from clusters?",
      difficulty: "advanced",
      tags: ["worker-threads", "cluster", "parallelism"],
      answer:
        "Clusters spawn entirely separate Node.js processes, each with its own V8 instance, Event Loop, and memory space; they communicate via heavy Inter-Process Communication (IPC) and are meant for scaling I/O across CPU cores (like handling more HTTP requests). Worker Threads (`worker_threads` module), however, share the same process. While they have their own V8 instance, they can share memory directly using `SharedArrayBuffer`. Worker Threads are specifically designed for parallelizing heavy, CPU-intensive tasks (like image processing or complex math) without the massive overhead of spinning up entirely new processes.",
      codeSnippet:
        "const { Worker, isMainThread, parentPort } = require('worker_threads');\n\nif (isMainThread) {\n  // MAIN PROCESS: Offload heavy math to a thread\n  const worker = new Worker(__filename);\n  worker.on('message', (result) => console.log('Math done:', result));\n} else {\n  // WORKER THREAD: Runs in the SAME OS process, but doesn't block main Event Loop\n  let result = 0;\n  for (let i = 0; i < 1_000_000_000; i++) { result += i; } \n  parentPort.postMessage(result);\n}",
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
      codeSnippet:
        "// Method 1: console.time (Quick & Easy)\nconsole.time('DB_Query');\nsetTimeout(() => {\n  console.timeEnd('DB_Query'); // Prints: DB_Query: 1005.12ms\n}, 1000);\n\n// Method 2: performance.now() (High Precision)\nconst { performance } = require('perf_hooks');\nconst start = performance.now();\n\nsetTimeout(() => {\n  const end = performance.now();\n  console.log(`Execution took ${end - start} milliseconds`);\n}, 1000);",
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
      codeSnippet:
        "const { performance, PerformanceObserver } = require('perf_hooks');\n\n// Create an observer to listen for measurements\nconst obs = new PerformanceObserver((items) => {\n  console.log(items.getEntries()[0].name, items.getEntries()[0].duration);\n  performance.clearMarks();\n});\nobs.observe({ type: 'measure' });\n\n// Drop marks in your code\nperformance.mark('A');\nsetTimeout(() => {\n  performance.mark('B');\n  // Measure the time between marks\n  performance.measure('Timeout Measurement', 'A', 'B');\n}, 50);",
    },
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
      codeSnippet:
        "const express = require('express');\nconst app = express();\n\n// Approach 1: URI Versioning (Most common)\napp.use('/api/v1/users', require('./routes/v1/users'));\napp.use('/api/v2/users', require('./routes/v2/users')); // Breaking schema changes\n\n// Approach 2: Header Versioning (Clean URLs, harder to cache)\napp.get('/api/users', (req, res) => {\n  const version = req.headers['x-api-version'];\n  if (version === '2') {\n    return res.json({ message: \"V2 logic\" });\n  }\n  return res.json({ message: \"V1 logic\" });\n});",
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
      codeSnippet:
        "app.get('/heavy-process', (req, res) => {\n  // ❌ BAD: A long synchronous loop here freezes the whole server\n  \n  // ✅ GOOD: Offload to worker_threads\n  const { Worker } = require('worker_threads');\n  const worker = new Worker('./heavy-image-processor.js');\n  \n  worker.on('message', (result) => {\n    res.send(`Done processing: ${result}`);\n  });\n  worker.on('error', (err) => res.status(500).send('Worker Error'));\n});",
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
      codeSnippet:
        "const fs = require('fs');\n\napp.get('/download-movie', (req, res) => {\n  const filePath = './massive-movie.mp4';\n  \n  // ❌ BAD: Loads 2GB into RAM before sending\n  // fs.readFile(filePath, (err, data) => res.send(data));\n\n  // ✅ GOOD: Streams data in tiny chunks. Uses almost zero RAM.\n  const readStream = fs.createReadStream(filePath);\n  \n  res.setHeader('Content-Type', 'video/mp4');\n  // Pipes the readable file stream directly into the writable response stream\n  readStream.pipe(res);\n});",
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
      codeSnippet:
        "app.post('/process-payment', async (req, res) => {\n  const idempotencyKey = req.headers['idempotency-key'];\n  \n  // 1. Check Redis to see if we already processed this exact request\n  const cachedResponse = await redis.get(`idemp:${idempotencyKey}`);\n  if (cachedResponse) {\n    return res.status(200).json(JSON.parse(cachedResponse)); // Safely return old result\n  }\n\n  // 2. Perform the actual (risky/expensive) operation\n  const paymentResult = await chargeCreditCard(req.body.amount);\n\n  // 3. Save the result in Redis for 24 hours to catch retries\n  await redis.setex(`idemp:${idempotencyKey}`, 86400, JSON.stringify(paymentResult));\n  \n  res.status(201).json(paymentResult);\n});",
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
      codeSnippet:
        "// ❌ OFFSET Pagination (Slow on deep pages, duplicates if data changes)\n// GET /users?page=10\nconst offsetQuery = `SELECT * FROM users ORDER BY created_at DESC LIMIT 10 OFFSET 90`;\n\n// ✅ CURSOR Pagination (Fast always, highly consistent)\n// GET /users?cursor=98\nconst lastSeenId = req.query.cursor;\nconst cursorQuery = `\n  SELECT * FROM users \n  WHERE id < ${lastSeenId} \n  ORDER BY id DESC \n  LIMIT 10\n`;\n// The client passes the ID of the last item they received as the next cursor.",
    },
    {
      id: "backend-api-6",
      questionNumber: 28,
      question: "How do you implement graceful shutdown for an Express server?",
      difficulty: "advanced",
      tags: ["signal-handling", "process", "kubernetes", "zero-downtime"],
      answer:
        "A hard crash or sudden termination drops active user connections and leaves database transactions in limbo. Graceful shutdown intercepts termination signals (like `SIGTERM` from Kubernetes or `SIGINT` from Ctrl+C). First, I call `server.close()` on the Express instance, which stops accepting *new* connections but allows existing ones to finish. Then, I set a timeout (e.g., 10 seconds). During this window, I cleanly close database connection pools and flush any pending logs/metrics. If the active requests finish, the process exits cleanly (`process.exit(0)`). If the timeout is reached before connections finish, I force exit (`process.exit(1)`) to prevent a hanging container.",
      codeSnippet:
        "const server = app.listen(3000);\n\nprocess.on('SIGTERM', () => {\n  console.log('SIGTERM received. Shutting down gracefully...');\n  \n  // 1. Stop accepting new requests\n  server.close(async () => {\n    console.log('Closed out remaining HTTP connections.');\n    // 2. Clean up database connections\n    await database.disconnect();\n    process.exit(0);\n  });\n\n  // 3. Fallback timeout: forcefully shut down if connections hang\n  setTimeout(() => {\n    console.error('Could not close connections in time, forcefully shutting down');\n    process.exit(1);\n  }, 10000);\n});",
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
      codeSnippet:
        "const { v4: uuidv4 } = require('uuid');\nconst { AsyncLocalStorage } = require('async_hooks');\nconst asyncLocalStorage = new AsyncLocalStorage();\n\n// 1. Middleware to capture or generate correlation ID\napp.use((req, res, next) => {\n  const correlationId = req.headers['x-correlation-id'] || uuidv4();\n  // 2. Store it in AsyncLocalStorage so it survives async operations\n  asyncLocalStorage.run(correlationId, () => {\n    next();\n  });\n});\n\n// 3. Custom logger reads from AsyncLocalStorage\nfunction log(message) {\n  const id = asyncLocalStorage.getStore();\n  console.log(`[TraceID: ${id}] ${message}`);\n}",
    },
    {
      id: "express-1",
      questionNumber: 30,
      question:
        "What is Express.js, and where does it sit in a Node.js backend stack?",
      difficulty: "beginner",
      tags: ["express", "nodejs", "backend-stack"],
      answer:
        "Express.js is a minimal, fast, and unopinionated web framework built on top of Node.js. In a typical backend stack (like the MERN or MEAN stack), it sits directly on top of the native Node.js `http` module. It acts as the 'middle layer' that abstracts away complex server logic, making it significantly easier to handle routing, middleware, and HTTP requests/responses, bridging the gap between the frontend client and the database.",
      codeSnippet:
        "const express = require('express');\nconst app = express();\n\n// Express abstracts away the raw Node http module.\n// Instead of manually checking req.url and req.method inside a giant if-statement...\n\n// Express provides clean routing methods\napp.get('/users', (req, res) => {\n  // Express provides clean response methods (res.json handles headers and stringify)\n  res.json({ name: \"Alice\" }); \n});\n\napp.listen(3000, () => console.log('Express Server running'));",
    },
    {
      id: "express-2",
      questionNumber: 31,
      question: "What is middleware in Express, and what does next() do?",
      difficulty: "beginner",
      tags: ["middleware", "next-function", "request-lifecycle"],
      answer:
        "Middleware functions are the core building blocks of Express. They are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application’s request-response cycle. They can execute code, modify the req/res objects, or end the request. If a middleware function does not end the request (like sending a response back to the client), it MUST call `next()`. The `next()` function is a callback that passes control to the next middleware in the stack; if it isn't called, the client's request will hang indefinitely.",
      codeSnippet:
        "// A simple logging middleware\nconst loggerMiddleware = (req, res, next) => {\n  console.log(`Incoming request: ${req.method} ${req.url}`);\n  \n  // Modify the request object\n  req.timestamp = new Date();\n\n  // MUST call next() to pass control to the route handler below\n  // Without next(), the request hangs and the browser loading spinner spins forever.\n  next(); \n};\n\napp.use(loggerMiddleware);\n\napp.get('/', (req, res) => {\n  res.send(`Request received at ${req.timestamp}`);\n});",
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
      codeSnippet:
        "// 1. app.use(): Matches ANY HTTP verb (GET, POST, PUT, etc.)\n// Applies to '/api' AND any sub-path like '/api/users'\napp.use('/api', (req, res, next) => {\n  console.log('Middleware hit for an /api request');\n  next();\n});\n\n// 2. app.get(): Matches ONLY GET requests\n// Strictly matches exactly '/api/users'\napp.get('/api/users', (req, res) => {\n  res.send('List of users');\n});",
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
      codeSnippet:
        "const express = require('express');\nconst path = require('path');\nconst app = express();\n\n// ✅ BEST PRACTICE: Use path.join(__dirname) to ensure absolute paths.\n// If you run node from another folder, relative paths will fail.\napp.use(\n  '/assets', \n  express.static(path.join(__dirname, 'public'), {\n    maxAge: '1d', // Pitfall fix: Set caching headers so browsers cache assets\n    dotfiles: 'ignore' // Pitfall fix: Prevent exposing hidden files like .env\n  })\n);\n// Now http://localhost:3000/assets/logo.png maps to /public/logo.png",
    },
    {
      id: "express-5",
      questionNumber: 34,
      question: "How do route parameters work in Express (for example, /:id)?",
      difficulty: "beginner",
      tags: ["route-params", "req.params", "dynamic-routes"],
      answer:
        "Route parameters are named segments in a URL used to capture values at specific positions. In Express, you define them by prefixing a colon (`:`). For instance, if you define a route like `app.get('/users/:id')`, and a client makes a request to `/users/123`, Express automatically extracts `123` and makes it accessible in your route handler via the `req.params` object as `req.params.id`. This is the standard pattern for RESTful APIs to fetch, update, or delete specific resources by their unique identifier.",
      codeSnippet:
        '// The ":userId" and ":postId" define the dynamic parameters\napp.get(\'/users/:userId/posts/:postId\', (req, res) => {\n  // If URL is /users/45/posts/102\n  const { userId, postId } = req.params;\n  \n  console.log(userId); // "45"\n  console.log(postId); // "102"\n  \n  res.send(`Fetching post ${postId} for user ${userId}`);\n});',
    },
    {
      id: "express-6",
      questionNumber: 35,
      question: "What is express.Router() and why do we use it?",
      difficulty: "intermediate",
      tags: ["router", "modular-routes", "scalability"],
      answer:
        "`express.Router()` is a class that creates a modular, mountable set of route handlers. You can think of it as a 'mini-application' that only handles routing. We use it to keep our codebase clean and organized as the application grows. Instead of cramming 100 endpoints into a single `server.js` file, you create separate router files for different domains (e.g., `userRoutes.js`, `orderRoutes.js`). You then export these routers and mount them in your main file using `app.use('/users', userRoutes)`.",
      codeSnippet:
        "// --- routes/users.js ---\nconst express = require('express');\nconst router = express.Router(); // Create mini-app router\n\nrouter.get('/', (req, res) => res.send('All users'));\nrouter.get('/:id', (req, res) => res.send('One user'));\n\nmodule.exports = router;\n\n// --- server.js ---\nconst express = require('express');\nconst app = express();\nconst userRoutes = require('./routes/users');\n\n// Mount the router under the '/users' path\napp.use('/users', userRoutes); \n// A GET request to '/users/5' routes to the router file",
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
      codeSnippet:
        "const express = require('express');\nconst app = express();\n\n// ✅ Parse JSON bodies securely with a strict size limit\napp.use(express.json({ limit: '10kb' }));\n\napp.post('/login', (req, res) => {\n  // By the time it reaches here, req.body is a parsed JavaScript object.\n  // If payload was > 10kb, Express rejected it automatically with a 413 error.\n  const { email, password } = req.body;\n  \n  // Next step: Validate email/password format with Zod/Joi...\n  res.send('Login attempt');\n});",
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
      codeSnippet:
        '// GET /products/99?color=blue&size=large\napp.put(\'/products/:id\', (req, res) => {\n  // 1. ROUTE PARAMS: Part of the URL path (identifies resource)\n  const productId = req.params.id; // "99"\n\n  // 2. QUERY PARAMS: After the \'?\' in URL (filtering/sorting)\n  const colorFilter = req.query.color; // "blue"\n\n  // 3. BODY: Hidden in HTTP payload (actual data to save)\n  // e.g., { "price": 25.00 }\n  const newPrice = req.body.price; // 25.00\n});',
    },
    {
      id: "express-arch-1",
      questionNumber: 38,
      question:
        "How do you handle errors in Express (error-handling middleware signature)?",
      difficulty: "intermediate",
      tags: ["middleware", "error-handler", "express-errors"],
      answer:
        "Error-handling middleware in Express is unique because it strictly requires a four-argument signature: `(err, req, res, next)`. Even if you don't use the `next` object inside the function, you must include it in the parameter list, otherwise Express will interpret it as regular middleware. This middleware must be placed at the very end of the application stack, after all other `app.use()` and routes. When you call `next(error)` from any preceding route or middleware, Express skips all remaining regular middleware and jumps directly to this global error handler, where you can log the error and format a consistent JSON response for the client.",
      codeSnippet:
        "app.get('/fail', (req, res, next) => {\n  const error = new Error('Database connection failed');\n  error.status = 500;\n  // Passing an argument to next() tells Express an error occurred.\n  // It skips all other routes and jumps to the error handler.\n  next(error);\n});\n\n// 🚨 GLOBAL ERROR HANDLER (Must be placed AFTER all other routes)\n// The 4 arguments (err, req, res, next) define it as an error handler.\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(err.status || 500).json({\n    success: false,\n    message: err.message || 'Internal Server Error'\n  });\n});",
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
      codeSnippet:
        "// 1. ROUTES (user.routes.js) - Only defines endpoints\nconst router = express.Router();\nconst userController = require('./user.controller');\nrouter.post('/register', userController.registerUser);\n\n// 2. CONTROLLER (user.controller.js) - Handles HTTP req/res mapping\nconst userService = require('./user.service');\nexports.registerUser = async (req, res, next) => {\n  try {\n    // Controller calls the service, keeping logic separate\n    const newUser = await userService.createUser(req.body);\n    res.status(201).json(newUser);\n  } catch (error) { next(error); }\n};\n\n// 3. SERVICE (user.service.js) - Heavy DB and Business Logic goes here",
    },
    {
      id: "express-arch-3",
      questionNumber: 40,
      question: "How do you implement modular routing (feature-based routing)?",
      difficulty: "intermediate",
      tags: ["router", "feature-based", "modular-design"],
      answer:
        "Instead of creating a single massive folder of all routes, feature-based routing groups everything related to a specific domain (like 'Users' or 'Orders') into its own directory. Inside a `users` folder, you would have `user.router.js`, `user.controller.js`, and `user.service.js`. In the router file, you instantiate `const router = express.Router()` and define paths relative to the feature (e.g., `router.get('/')` instead of `/users`). Finally, in your main `app.js` file, you mount the modular router: `app.use('/users', require('./features/users/user.router'))`. This encapsulates logic and prevents merge conflicts in large teams.",
      codeSnippet:
        "// Directory Structure:\n// /src/features/orders/\n//   - order.controller.js\n//   - order.service.js\n//   - order.router.js\n\n// --- src/features/orders/order.router.js ---\nconst router = require('express').Router();\nconst ctrl = require('./order.controller');\nrouter.post('/', ctrl.createOrder); // Path is relative to the mount point\nmodule.exports = router;\n\n// --- src/app.js ---\n// Mounting feature routers\napp.use('/api/v1/orders', require('./features/orders/order.router'));\napp.use('/api/v1/users', require('./features/users/user.router'));",
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
      codeSnippet:
        "// 1. Authentication Middleware (Who are you?)\nconst isAuth = (req, res, next) => {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).send('No token provided');\n  try {\n    // Attach decoded user info to the request object\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();\n  } catch (err) { res.status(401).send('Invalid token'); }\n};\n\n// 2. Authorization Middleware Factory (What can you do?)\nconst restrictTo = (...roles) => {\n  return (req, res, next) => {\n    // Depends on isAuth running first to populate req.user\n    if (!roles.includes(req.user.role)) {\n      return res.status(403).send('Not authorized');\n    }\n    next();\n  };\n};\n\n// Usage in routes\nrouter.delete('/posts/:id', isAuth, restrictTo('admin'), ctrl.deletePost);",
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
      codeSnippet:
        "// ❌ BAD: Unhandled promise rejection crashes/hangs Express 4\napp.get('/users', async (req, res) => {\n  const users = await db.getUsers(); // If this fails, Express misses it\n  res.json(users);\n});\n\n// ✅ GOOD: Standard try/catch pattern\napp.get('/users', async (req, res, next) => {\n  try {\n    const users = await db.getUsers();\n    res.json(users);\n  } catch (error) {\n    next(error); // Explicitly pass async error to Express global handler\n  }\n});\n\n// ✅ BEST: Using an async handler utility (like express-async-handler)\napp.get('/users', asyncHandler(async (req, res) => {\n  const users = await db.getUsers();\n  res.json(users);\n}));",
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
      codeSnippet:
        "const z = require('zod');\n\n// 1. Define Zod Schema\nconst userSchema = z.object({ email: z.string().email(), age: z.number().min(18) });\n\n// 2. Generic Validation Middleware\nconst validate = (schema) => (req, res, next) => {\n  try {\n    // Validates body and strips unknown fields\n    req.body = schema.parse(req.body); \n    next();\n  } catch (err) {\n    return res.status(400).json(err.errors);\n  }\n};\n\n// 3. Inject into Route (Gatekeeper before controller)\nrouter.post('/users', validate(userSchema), (req, res) => {\n  // Guaranteed type safety here\n  res.send(\"Valid user!\");\n});",
    },
    {
      id: "express-arch-7",
      questionNumber: 44,
      question: "How do you implement rate limiting and request throttling?",
      difficulty: "advanced",
      tags: ["rate-limit", "ddos", "throttling", "security"],
      answer:
        "To protect against brute-force attacks and volumetric DDoS attacks, I use middleware like `express-rate-limit`. At a global level, I might set a general limit (e.g., 100 requests per 15 minutes per IP). For highly sensitive routes, like `/login` or `/reset-password`, I apply a much stricter, route-specific limiter (e.g., 5 requests per hour). For distributed production environments across multiple server instances, an in-memory limiter is insufficient; I back the rate limiter with a fast, centralized key-value store like Redis to ensure the limits are synchronized across the entire cluster.",
      codeSnippet:
        "const rateLimit = require('express-rate-limit');\n\n// 1. Global Rate Limiter\nconst globalLimiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100, // Limit each IP to 100 requests per window\n  message: 'Too many requests from this IP, please try again later.'\n});\napp.use(globalLimiter); // Apply to all routes\n\n// 2. Strict Route-Specific Limiter (e.g., Brute force protection)\nconst loginLimiter = rateLimit({\n  windowMs: 60 * 60 * 1000, // 1 Hour\n  max: 5, // Limit each IP to 5 login attempts per hour\n  message: 'Too many login attempts.'\n});\napp.post('/api/login', loginLimiter, authController.login);",
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
      codeSnippet:
        "const express = require('express');\nconst app = express();\n\n// If using Nginx/AWS ALB, you MUST enable this.\n// Otherwise req.ip returns the proxy's IP, breaking rate-limiters.\n\n// Express will now trust the X-Forwarded-For header.\napp.set('trust proxy', 1); // Trust the first proxy in front of Express\n\napp.get('/ip', (req, res) => {\n  // Will now correctly return the user's real IP address\n  res.send(req.ip); \n});",
    },
    {
      id: "express-arch-9",
      questionNumber: 46,
      question: "How do you handle file uploads securely in Express?",
      difficulty: "advanced",
      tags: ["multer", "uploads", "security", "storage"],
      answer:
        "File uploads require parsing `multipart/form-data`, which native Express cannot do. I use the `multer` middleware. Security is paramount here. First, I set strict `limits` (e.g., maximum file size of 5MB) to prevent Denial of Service via massive uploads. Second, I implement a `fileFilter` function to strictly validate the file's mimetype and extension, ensuring executable files (.exe, .sh) or malicious scripts disguised as images aren't accepted. Finally, instead of saving files to the server's local disk (which doesn't scale in containerized environments), I use Multer's memory storage or streaming plugins (like `multer-s3`) to stream the validated file directly into an object storage service like AWS S3.",
      codeSnippet:
        "const multer = require('multer');\n\n// Use memory storage to avoid disk writes in containers\nconst upload = multer({\n  storage: multer.memoryStorage(),\n  limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5MB\n  fileFilter: (req, file, cb) => {\n    // Validate mimetype (Security check)\n    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {\n      cb(null, true);\n    } else {\n      cb(new Error('Invalid file type'), false);\n    }\n  }\n});\n\n// Apply to route\napp.post('/upload-avatar', upload.single('avatar'), (req, res) => {\n  // req.file.buffer contains the file in memory ready to be piped to S3\n  res.send('Uploaded securely');\n});",
    },
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
      codeSnippet:
        "/* \nDECISION MATRIX:\n\n1. Web Server handling 10,000 req/sec fetching from DB? \n   -> Use CLUSTER (or Kubernetes pods). \n   -> Reason: I/O bound. Each core runs a full Event Loop to juggle HTTP connections.\n\n2. Server resizing large uploaded images or compressing 100MB JSONs?\n   -> Use WORKER_THREADS.\n   -> Reason: CPU bound. Don't block the main Event Loop handling HTTP requests. \n      Spin up a thread, pass memory fast via SharedArrayBuffer, let it compute.\n*/",
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
      codeSnippet:
        "// Detecting Event Loop Lag manually using perf_hooks\nconst { monitorEventLoopDelay } = require('perf_hooks');\n\n// Start monitoring\nconst histogram = monitorEventLoopDelay({ resolution: 20 });\nhistogram.enable();\n\nsetInterval(() => {\n  // If mean lag jumps over a few milliseconds, you have blocking code\n  console.log(`Mean Lag: ${histogram.mean / 1e6} ms`);\n  console.log(`P99 Lag: ${histogram.percentile(99) / 1e6} ms`);\n  histogram.reset();\n}, 5000);",
    },
    {
      id: "node-advanced-3",
      questionNumber: 49,
      question: "How do you diagnose memory leaks in Node.js in production?",
      difficulty: "advanced",
      tags: ["memory-leaks", "heap", "profiling", "production-debugging"],
      answer:
        "In production, continuous APM monitoring is the first line of defense to spot an 'up-and-to-the-right' sawtooth pattern in heap memory usage. When a leak is suspected, I generate a Heap Snapshot. Since doing this directly in production can pause the process, I ideally route traffic away from one specific instance, trigger the snapshot programmatically using the `v8` module (`v8.writeHeapSnapshot()`), and then analyze it in Chrome DevTools using the 'Comparison' view between two snapshots taken over time. Common culprits I look for include detached DOM nodes (in SSR), closures unintentionally capturing large scopes, uncleared intervals/timers, and event listeners accumulating without being removed.",
      codeSnippet:
        "const v8 = require('v8');\nconst fs = require('fs');\n\n// Programmatic endpoint to capture memory state dynamically\napp.post('/admin/memory-snapshot', restrictTo('admin'), (req, res) => {\n  const fileName = `heap-${Date.now()}.heapsnapshot`;\n  \n  // Dumps the entire V8 heap to a file\n  v8.writeHeapSnapshot(fileName);\n  \n  res.send(`Snapshot saved: ${fileName}. Load into Chrome DevTools Memory tab.`);\n});",
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
      codeSnippet:
        "// Using prom-client to expose Node.js specific metrics for Prometheus/Grafana\nconst client = require('prom-client');\n\n// Exposes RAM, CPU, Event Loop Lag, and Active Handles natively\nconst collectDefaultMetrics = client.collectDefaultMetrics;\ncollectDefaultMetrics({ timeout: 5000 });\n\napp.get('/metrics', async (req, res) => {\n  res.set('Content-Type', client.register.contentType);\n  res.end(await client.register.metrics());\n});",
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
      codeSnippet:
        "const fs = require('fs');\nconst { pipeline } = require('stream/promises');\n\nasync function handleDataStream(req, res) {\n  const readableSource = fs.createReadStream('huge-file.txt');\n  \n  try {\n    // ✅ Uses pipeline: Automatically manages backpressure.\n    // If the network (res) gets slow, it tells the file reader to PAUSE\n    // until the network buffer empties, protecting Node's RAM.\n    await pipeline(readableSource, res);\n    console.log('Stream finished successfully');\n  } catch (err) {\n    console.error('Pipeline failed', err);\n  }\n}",
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
      codeSnippet:
        "let connections = [];\nserver.on('connection', connection => {\n  connections.push(connection);\n  connection.on('close', () => connections = connections.filter(curr => curr !== connection));\n});\n\nprocess.on('SIGTERM', () => {\n  server.close(() => {\n    console.log('Http server closed.');\n    process.exit(0);\n  });\n\n  // Destroy any connections remaining after 10s\n  setTimeout(() => {\n    connections.forEach(curr => curr.end());\n    setTimeout(() => connections.forEach(curr => curr.destroy()), 500);\n  }, 10000);\n});",
    },
    {
      id: "node-advanced-7",
      questionNumber: 53,
      question: "What’s your approach to zero-downtime deployments?",
      difficulty: "advanced",
      tags: ["zero-downtime", "blue-green", "rolling-deploy", "ci-cd"],
      answer:
        "Zero-downtime deployments require infrastructure orchestration combined with application-level readiness. I typically use Rolling Updates in Kubernetes. The orchestrator spins up new pods running the V2 codebase. Crucially, the orchestrator relies on a `/health/readiness` probe exposed by the Node app. The load balancer will not route traffic to the new pod until the readiness probe returns 200 OK (meaning DB connections are established, caches are warmed). Once healthy, traffic is routed to V2, and the V1 pod receives a SIGTERM for graceful shutdown. For riskier changes, I prefer a Blue/Green deployment, standing up a complete replica environment and switching the load balancer router instantly, allowing for immediate rollback.",
      codeSnippet:
        "let isReady = false;\n\n// Establish connections on startup\ndb.connect().then(() => { isReady = true; });\n\n// Readiness probe endpoint for Kubernetes Load Balancer\napp.get('/health/readiness', (req, res) => {\n  if (isReady) {\n    // Tells k8s: \"I am ready to receive user traffic!\"\n    res.status(200).send('OK'); \n  } else {\n    // Tells k8s: \"Keep sending traffic to old pods, I'm still booting up\"\n    res.status(503).send('Unavailable'); \n  }\n});",
    },
    {
      id: "node-advanced-8",
      questionNumber: 54,
      question: "How do you design retries and timeouts to avoid retry storms?",
      difficulty: "advanced",
      tags: ["retry-strategy", "timeouts", "circuit-breaker", "resilience"],
      answer:
        "Aggressive, naive retries during a downstream outage create a 'Retry Storm' (Thundering Herd), effectively DDOS-ing the struggling service. To prevent this, retries must implement Exponential Backoff, increasing the wait time between each attempt (e.g., 1s, 2s, 4s). Furthermore, I add Jitter (randomness) to the backoff calculation so that thousands of concurrent requests don't all retry at the exact same millisecond. Ultimately, for sustained outages, retries are insufficient. I wrap external calls in a Circuit Breaker pattern (using libraries like `opossum`). If failures exceed a threshold, the circuit 'opens', failing fast immediately without making the external call, giving the downstream service time to recover.",
      codeSnippet:
        "async function fetchWithJitterBackoff(url, retries = 3, delay = 1000) {\n  try {\n    return await axios.get(url, { timeout: 3000 }); // Hard timeout is vital\n  } catch (err) {\n    if (retries === 0) throw err;\n    \n    // Exponential backoff + Jitter (randomness)\n    // e.g., 1000ms + (0 to 1000ms) -> avoids thundering herd\n    const jitter = Math.floor(Math.random() * delay);\n    const waitTime = delay + jitter;\n    \n    await new Promise(res => setTimeout(res, waitTime));\n    \n    // Multiply delay for next attempt\n    return fetchWithJitterBackoff(url, retries - 1, delay * 2);\n  }\n}",
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
      codeSnippet:
        "/* \nPROCESS CONCURRENCY (Cluster / child_process):\n- Memory: Isolated (Process 1 cannot see Process 2's RAM).\n- Overhead: High (Booting V8 from scratch takes ~30MB+ per instance).\n- Crash impact: Safe (If Process 1 crashes, Process 2 survives).\n\nTHREAD CONCURRENCY (worker_threads):\n- Memory: Shared via SharedArrayBuffer. Extremely fast data transfer.\n- Overhead: Low (Threads exist inside one Node process).\n- Crash impact: Risky (A fatal memory error in Thread 1 can crash the entire Node process).\n*/",
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
      codeSnippet:
        "const express = require('express');\nconst helmet = require('helmet');\nconst app = express();\n\n// 1. Headers: Adds X-Frame-Options, HSTS, removes X-Powered-By\napp.use(helmet());\n\n// 2. Input size limit: Prevents RAM DoS attacks\napp.use(express.json({ limit: '10kb' }));\n\n// 3. Secrets: Pulled dynamically, never hardcoded in GitHub\nconst dbPassword = process.env.DB_PASSWORD; \n\napp.post('/api', (req, res) => {\n  // 4. Input validation (e.g., via Zod) would go here \n  // before touching the DB to prevent injection.\n});",
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
      codeSnippet:
        "// config.js\nconst z = require('zod');\nrequire('dotenv').config(); // Only loads .env in local dev\n\n// Zod schema enforces that critical environment variables exist \n// BEFORE the app attempts to start.\nconst envSchema = z.object({\n  PORT: z.string().default('3000'),\n  NODE_ENV: z.enum(['development', 'production', 'test']),\n  DATABASE_URL: z.string().url(),\n  JWT_SECRET: z.string().min(10)\n});\n\n// Will THROW AN ERROR and crash startup immediately if DB_URL is missing,\n// rather than failing silently later during a user request.\nconst config = envSchema.parse(process.env);\n\nmodule.exports = config;",
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
      codeSnippet:
        '// Root package.json using NPM Workspaces\n{\n  "name": "my-company-monorepo",\n  "private": true,\n  "workspaces": [\n    "apps/*",      // Contains api-gateway, auth-service, etc.\n    "packages/*"   // Contains db-client, shared-logger, eslint-config\n  ]\n}\n\n// Inside apps/auth-service/package.json\n{\n  "name": "@company/auth-service",\n  "dependencies": {\n    "express": "^4.18.0",\n    // Depends on internal shared packages rather than duplicating code\n    "@company/db-client": "*",\n    "@company/shared-logger": "*"\n  }\n}',
    },
  ],
};
