export const reactData = {
  id: "react",
  title: "React Interview Questions",
  level: "Beginner-to-Advanced",
  totalQuestions: 48,
  questions: [
    {
      id: "react-1",
      questionNumber: 1,
      question: "What is React? Why is it used?",
      difficulty: "beginner",
      tags: ["fundamentals"],
      answer:
        "React is a JavaScript library for building user interfaces, primarily for single-page applications. It helps developers build fast, scalable, and simple interfaces by breaking the UI into reusable components. It’s known for its virtual DOM and efficient rendering.",
      codeSnippet:
        'import React from \'react\';\n\n// 1. A simple, reusable functional component\nfunction Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\n// 2. Building the UI by reusing the component\nexport default function App() {\n  return (\n    <div>\n      <Greeting name="Alice" />\n      <Greeting name="Bob" />\n    </div>\n  );\n}',
    },
    {
      id: "react-2",
      questionNumber: 2,
      question: "What are components in React?",
      difficulty: "beginner",
      tags: ["components"],
      answer:
        "Components are the building blocks of a React application. They can be functional or class-based, and they return a portion of the UI, usually described in JSX. Components can manage their own state and interact with other components through props.",
      codeSnippet:
        'import React, { useState } from \'react\';\n\nfunction UserCard({ name, role }) {\n  return (\n    <div className="card">\n      <h3>{name}</h3>\n      <p>Role: {role}</p>\n    </div>\n  );\n}\n\nexport default function App() {\n  const [department, setDepartment] = useState(\'Engineering\');\n  return (\n    <div>\n      <h2>Department: {department}</h2>\n      <UserCard name="Alice" role="Frontend Developer" />\n      <UserCard name="Bob" role="Backend Developer" />\n    </div>\n  );\n}',
    },
    {
      id: "react-3",
      questionNumber: 3,
      question: "What is JSX?",
      difficulty: "beginner",
      tags: ["jsx"],
      answer:
        "JSX stands for JavaScript XML. It’s a syntax extension for JavaScript that allows writing HTML directly within JavaScript code. It looks like HTML but is transpiled by Babel into React.createElement() calls.",
      codeSnippet:
        "import React from 'react';\n\nexport default function App() {\n  // JSX syntax (Easy to read)\n  const jsxElement = <h1 className=\"greeting\">Hello, JSX!</h1>;\n\n  // What it compiles to (Harder to read)\n  const plainJsElement = React.createElement(\n    'h1',\n    { className: 'greeting' },\n    'Hello, JSX!'\n  );\n\n  return <div>{jsxElement}</div>;\n}",
    },
    {
      id: "react-4",
      questionNumber: 4,
      question: "What is the Virtual DOM?",
      difficulty: "beginner",
      tags: ["virtual-dom"],
      answer:
        "The Virtual DOM is a lightweight in-memory representation of the real DOM elements. React uses it to update the UI efficiently by calculating the difference (diffing) between the previous and the new virtual DOM and updating only the parts of the real DOM that have changed.",
      codeSnippet:
        "// Conceptual example: React compares the Old Virtual DOM with the New Virtual DOM\n\n// Old Virtual DOM\n// <div><h1>Counter</h1><p>1</p></div>\n\n// New Virtual DOM (after state change)\n// <div><h1>Counter</h1><p>2</p></div>\n\n// React's Diffing Algorithm notices ONLY the <p> tag text changed from '1' to '2'.\n// It updates ONLY that specific text node in the actual browser DOM.",
    },
    {
      id: "react-5",
      questionNumber: 5,
      question: "Explain the difference between state and props.",
      difficulty: "beginner",
      tags: ["state", "props"],
      answer:
        "Props are passed from parent to child components, are read-only, and cannot be modified by the receiving component. State is internal to a component, can be modified using updater functions, and triggers re-renders when changed.",
      codeSnippet:
        "import React, { useState } from 'react';\n\n// Child receives 'props' (read-only)\nfunction Display({ countProp }) {\n  return <h2>Count: {countProp}</h2>;\n}\n\n// Parent manages 'state' (mutable)\nexport default function App() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <Display countProp={count} />\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}",
    },
    {
      id: "react-6",
      questionNumber: 6,
      question:
        "What is the difference between functional and class components?",
      difficulty: "beginner",
      tags: ["components"],
      answer:
        "Functional components are simple JavaScript functions that return JSX and use Hooks for state/lifecycle. Class components require extending React.Component, use 'this' for state, and have dedicated lifecycle methods like componentDidMount.",
      codeSnippet:
        "import React, { Component, useState } from 'react';\n\n// Functional Component (Modern)\nfunction FuncComp() {\n  const [val, setVal] = useState(0);\n  return <div onClick={() => setVal(val + 1)}>{val}</div>;\n}\n\n// Class Component (Older)\nclass ClassComp extends Component {\n  state = { val: 0 };\n  render() {\n    return <div onClick={() => this.setState({ val: this.state.val + 1 })}>{this.state.val}</div>;\n  }\n}",
    },
    {
      id: "react-7",
      questionNumber: 7,
      question: "What is a higher-order component (HOC)?",
      difficulty: "intermediate",
      tags: ["patterns"],
      answer:
        "A higher-order component is a pattern where a function takes a component and returns a new component with added functionality. It’s often used to share common behavior across multiple components.",
      codeSnippet:
        "import React from 'react';\n\n// The HOC\nfunction withAuth(WrappedComponent) {\n  return function AuthenticatedComponent(props) {\n    const isAuthenticated = true; // Mock auth check\n    if (!isAuthenticated) return <p>Please log in.</p>;\n    return <WrappedComponent {...props} />;\n  };\n}\n\nfunction Dashboard() { return <h1>Secret Dashboard</h1>; }\n\n// Enhanced Component\nconst ProtectedDashboard = withAuth(Dashboard);",
    },
    {
      id: "react-8",
      questionNumber: 8,
      question: "What is the useState hook?",
      difficulty: "beginner",
      tags: ["hooks"],
      answer:
        "useState is a hook that allows functional components to have state. It returns an array with the current state value and a function to update it.",
      codeSnippet:
        "import React, { useState } from 'react';\n\nexport default function Counter() {\n  // [stateValue, updaterFunction] = useState(initialValue)\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Clicked {count} times\n    </button>\n  );\n}",
    },
    {
      id: "react-9",
      questionNumber: 9,
      question: "What is the useEffect hook?",
      difficulty: "beginner",
      tags: ["hooks"],
      answer:
        "useEffect is used to manage side effects in functional components, like data fetching, subscriptions, or manual DOM changes. It runs after the render phase. It can also return a cleanup function to prevent memory leaks when the component unmounts.",
      codeSnippet:
        "import React, { useState, useEffect } from 'react';\n\nexport default function Timer() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    // Setup side effect\n    const interval = setInterval(() => setSeconds(s => s + 1), 1000);\n    \n    // Cleanup function runs on unmount\n    return () => clearInterval(interval);\n  }, []); // Empty array means it only runs on mount\n\n  return <div>Timer: {seconds}s</div>;\n}",
    },
    {
      id: "react-10",
      questionNumber: 10,
      question: "What is the purpose of the dependency array in useEffect?",
      difficulty: "intermediate",
      tags: ["hooks"],
      answer:
        "The dependency array tells React when to re-run the effect. If any of the dependencies change, the effect will re-run. If the array is empty, the effect runs only once, after the first render. If omitted entirely, it runs after every render.",
      codeSnippet:
        'import React, { useEffect } from \'react\';\n\nfunction DependencyDemo({ userId }) {\n  // Runs ONLY on initial mount\n  useEffect(() => { console.log("Mounted"); }, []);\n\n  // Runs on mount AND whenever \'userId\' changes\n  useEffect(() => { console.log("User changed:", userId); }, [userId]);\n\n  // Runs after EVERY render\n  useEffect(() => { console.log("Rendered"); });\n\n  return <div>User: {userId}</div>;\n}',
    },
    {
      id: "react-11",
      questionNumber: 11,
      question: "What are controlled components?",
      difficulty: "beginner",
      tags: ["forms"],
      answer:
        "Controlled components are form elements where React manages the value. The component’s state holds the form value, and every input change is handled by an event handler like onChange.",
      codeSnippet:
        "import React, { useState } from 'react';\n\nexport default function ControlledForm() {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <input \n      type=\"text\" \n      value={inputValue} // Value controlled by React State\n      onChange={(e) => setInputValue(e.target.value)} // State updated on keystroke\n    />\n  );\n}",
    },
    {
      id: "react-12",
      questionNumber: 12,
      question: "What are uncontrolled components?",
      difficulty: "beginner",
      tags: ["forms"],
      answer:
        "Uncontrolled components are form elements where the form data is handled by the DOM itself. Instead of using state to manage form data, a ref is used to access values directly from the DOM when needed.",
      codeSnippet:
        'import React, { useRef } from \'react\';\n\nexport default function UncontrolledForm() {\n  const inputRef = useRef(null);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    alert(`Submitted: ${inputRef.current.value}`); // Value pulled directly from DOM\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input type="text" ref={inputRef} />\n      <button type="submit">Submit</button>\n    </form>\n  );\n}',
    },
    {
      id: "react-13",
      questionNumber: 13,
      question: "What is the useContext hook?",
      difficulty: "intermediate",
      tags: ["context", "hooks"],
      answer:
        "useContext is used to subscribe to React context values. It allows components to consume context without wrapping the JSX in Context.Consumer tags.",
      codeSnippet:
        "import React, { useContext, createContext } from 'react';\n\nconst ThemeContext = createContext('light');\n\nfunction ThemedButton() {\n  // Consuming context easily with the hook\n  const theme = useContext(ThemeContext);\n  return <button className={`btn-${theme}`}>Theme is {theme}</button>;\n}\n\nexport default function App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <ThemedButton />\n    </ThemeContext.Provider>\n  );\n}",
    },
    {
      id: "react-14",
      questionNumber: 14,
      question: "What is context in React?",
      difficulty: "intermediate",
      tags: ["context"],
      answer:
        "Context provides a way to pass data through the component tree without manually passing props at every level (avoiding prop drilling). It’s useful for managing global data, such as themes, localization, or user authentication.",
      codeSnippet:
        "import React, { createContext } from 'react';\n\n// 1. Create Context\nexport const AuthContext = createContext(null);\n\nexport default function App() {\n  const user = { name: 'Alice', loggedIn: true };\n\n  return (\n    // 2. Provide Context value to the tree\n    <AuthContext.Provider value={user}>\n      <Navbar />\n    </AuthContext.Provider>\n  );\n}",
    },
    {
      id: "react-15",
      questionNumber: 15,
      question: "What is the useRef hook?",
      difficulty: "intermediate",
      tags: ["hooks", "refs"],
      answer:
        "useRef returns a mutable ref object whose .current property can hold a value that persists across renders. It’s commonly used for accessing DOM elements directly or storing mutable values without causing re-renders.",
      codeSnippet:
        "import React, { useRef } from 'react';\n\nexport default function FocusInput() {\n  const inputElement = useRef(null);\n\n  const handleFocus = () => {\n    // Directly accessing the DOM node to trigger focus\n    inputElement.current.focus();\n  };\n\n  return (\n    <div>\n      <input ref={inputElement} type=\"text\" />\n      <button onClick={handleFocus}>Focus the input</button>\n    </div>\n  );\n}",
    },
    {
      id: "react-16",
      questionNumber: 16,
      question: "How does React handle reconciliation?",
      difficulty: "advanced",
      tags: ["reconciliation"],
      answer:
        "React uses a reconciliation algorithm to efficiently update the DOM. It compares the new virtual DOM with the previous one, calculates the minimum number of updates using a heuristic diffing algorithm, and batches changes to the real DOM.",
      codeSnippet:
        "/* \nReconciliation relies heavily on 'keys' to match children in the original tree with children in the subsequent tree.\n*/\n\nfunction ItemList({ items }) {\n  return (\n    <ul>\n      {/* Providing a unique 'key' helps React reconcile this list efficiently if items are added or reordered */}\n      {items.map(item => (\n        <li key={item.id}>{item.name}</li>\n      ))}\n    </ul>\n  );\n}",
    },
    {
      id: "react-17",
      questionNumber: 17,
      question: "What are React portals?",
      difficulty: "intermediate",
      tags: ["portals"],
      answer:
        "Portals provide a way to render children into a DOM node that exists outside the hierarchy of the parent component. They are commonly used for modals, tooltips, and popups to escape overflow hidden or z-index constraints.",
      codeSnippet:
        "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nexport default function Modal({ children }) {\n  // Renders the children into a div with id=\"modal-root\" in index.html,\n  // completely outside the standard React root div.\n  return ReactDOM.createPortal(\n    <div className=\"modal-overlay\">\n      {children}\n    </div>,\n    document.getElementById('modal-root')\n  );\n}",
    },
    {
      id: "react-18",
      questionNumber: 18,
      question: "What are React fragments?",
      difficulty: "beginner",
      tags: ["fragments"],
      answer:
        "Fragments let you group multiple elements without adding extra nodes to the DOM. This is useful for returning multiple elements from a component’s render method without wrapping them in an unnecessary <div>.",
      codeSnippet:
        "import React from 'react';\n\nexport default function Columns() {\n  return (\n    // Short syntax for <React.Fragment>\n    <>\n      <td>Column 1</td>\n      <td>Column 2</td>\n    </>\n  );\n}",
    },
    {
      id: "react-19",
      questionNumber: 19,
      question: "What is the difference between useCallback and useMemo?",
      difficulty: "advanced",
      tags: ["performance"],
      answer:
        "useCallback memoizes a function instance, returning the same function across renders unless its dependencies change. useMemo memoizes the returned value of a computation, recalculating it only when dependencies change.",
      codeSnippet:
        "import React, { useState, useMemo, useCallback } from 'react';\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n\n  // useMemo: caches the RESULT of an expensive calculation\n  const expensiveValue = useMemo(() => computeExpensiveValue(count), [count]);\n\n  // useCallback: caches the FUNCTION definition itself\n  const handleClick = useCallback(() => {\n    console.log('Clicked!');\n  }, []);\n\n  return <Child onClick={handleClick} value={expensiveValue} />;\n}",
    },
    {
      id: "react-20",
      questionNumber: 20,
      question: "Explain React Suspense.",
      difficulty: "advanced",
      tags: ["suspense"],
      answer:
        "React Suspense allows you to pause rendering components until a certain condition (like data fetching or lazy loading) is met. It’s used to show fallback UIs (like spinners) while waiting for content to load.",
      codeSnippet:
        "import React, { Suspense } from 'react';\n\n// Lazy loaded component\nconst HeavyComponent = React.lazy(() => import('./HeavyComponent'));\n\nexport default function App() {\n  return (\n    <div>\n      {/* Shows the fallback until HeavyComponent is fully downloaded */}\n      <Suspense fallback={<div>Loading component...</div>}>\n        <HeavyComponent />\n      </Suspense>\n    </div>\n  );\n}",
    },
    {
      id: "react-21",
      questionNumber: 21,
      question: "How do error boundaries work in React?",
      difficulty: "advanced",
      tags: ["error-handling"],
      answer:
        "Error boundaries catch JavaScript errors anywhere in the child component tree and display a fallback UI instead of crashing the app. They must be class components implementing static getDerivedStateFromError or componentDidCatch.",
      codeSnippet:
        "import React from 'react';\n\nclass ErrorBoundary extends React.Component {\n  state = { hasError: false };\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true }; // Triggers fallback UI\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.error(\"Caught by boundary:\", error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) return <h1>Something went wrong.</h1>;\n    return this.props.children; \n  }\n}",
    },
    {
      id: "react-22",
      questionNumber: 22,
      question: "What are lazy components in React?",
      difficulty: "intermediate",
      tags: ["lazy-loading"],
      answer:
        "Lazy components are loaded only when needed, which helps improve performance by reducing the initial bundle size. They are created using React.lazy() and must be rendered inside a Suspense component.",
      codeSnippet:
        "import React, { Suspense } from 'react';\n\n// The code for AdminPanel won't be sent to the browser until it's rendered\nconst AdminPanel = React.lazy(() => import('./AdminPanel'));\n\nfunction App({ isAdmin }) {\n  return (\n    <Suspense fallback={<p>Loading Admin...</p>}>\n      {isAdmin && <AdminPanel />}\n    </Suspense>\n  );\n}",
    },
    {
      id: "react-23",
      questionNumber: 23,
      question: "How does code-splitting work in React?",
      difficulty: "advanced",
      tags: ["performance"],
      answer:
        "Code-splitting allows breaking up the application into smaller chunks to load only the code needed for the current view. Tools like Webpack and React.lazy() help with this by creating separate JavaScript bundles for different routes or components.",
      codeSnippet:
        "// Standard Import (loads immediately in main bundle)\n// import MathUtils from './math'; \n\n// Code-splitting via Dynamic Import (creates a separate chunk)\nfunction handleCalculate() {\n  import('./math').then(math => {\n    console.log(math.add(16, 26));\n  });\n}",
    },
    {
      id: "react-24",
      questionNumber: 24,
      question: "What is the purpose of memo in React?",
      difficulty: "intermediate",
      tags: ["performance"],
      answer:
        "React.memo is a higher-order component that prevents a functional component from re-rendering if its props have not changed. It performs a shallow comparison of props and is used for performance optimization.",
      codeSnippet:
        "import React from 'react';\n\nconst UserAvatar = ({ avatarUrl }) => {\n  console.log('UserAvatar rendered');\n  return <img src={avatarUrl} alt=\"Avatar\" />;\n};\n\n// Wrapping in React.memo ensures this component only re-renders \n// if the 'avatarUrl' prop actually changes.\nexport default React.memo(UserAvatar);",
    },
    {
      id: "react-25",
      questionNumber: 25,
      question: "What is useReducer?",
      difficulty: "intermediate",
      tags: ["state-management"],
      answer:
        "useReducer is a hook that provides an alternative to useState for more complex state management. It works similarly to reducers in Redux, where state updates are triggered by dispatching action objects to a reducer function.",
      codeSnippet:
        "import React, { useReducer } from 'react';\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment': return { count: state.count + 1 };\n    case 'decrement': return { count: state.count - 1 };\n    default: throw new Error();\n  }\n}\n\nexport default function Counter() {\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n  return (\n    <>\n      Count: {state.count}\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n    </>\n  );\n}",
    },
    {
      id: "react-26",
      questionNumber: 26,
      question: "What is prop drilling? How can it be avoided?",
      difficulty: "intermediate",
      tags: ["state-management"],
      answer:
        "Prop drilling occurs when props are passed down multiple levels of nested components just to reach a deeply nested component that needs the data. It can be avoided using React Context, Redux, or component composition.",
      codeSnippet:
        "// Example of Prop Drilling:\n// <App user={user} /> -> <MainLayout user={user} /> -> <Navbar user={user} /> -> <Avatar user={user} />\n\n// Avoiding it with Context:\nimport { createContext, useContext } from 'react';\nconst UserContext = createContext();\n\n// Deeply nested component reads directly from Context\nfunction Avatar() {\n  const user = useContext(UserContext);\n  return <img src={user.avatarUrl} />;\n}",
    },
    {
      id: "react-27",
      questionNumber: 27,
      question: "What are Pure Components in React?",
      difficulty: "intermediate",
      tags: ["performance"],
      answer:
        "A pure component is a class component that extends React.PureComponent. It automatically implements a shallow comparison of props and state in the shouldComponentUpdate lifecycle method to avoid unnecessary re-renders.",
      codeSnippet:
        "import React from 'react';\n\n// Re-renders ONLY if props (like title) shallowly change\nclass Header extends React.PureComponent {\n  render() {\n    console.log(\"Header Rendered\");\n    return <h1>{this.props.title}</h1>;\n  }\n}",
    },
    {
      id: "react-28",
      questionNumber: 28,
      question: "What are React hooks?",
      difficulty: "beginner",
      tags: ["hooks"],
      answer:
        'Hooks are special functions introduced in React 16.8 that allow functional components to "hook into" React state, lifecycle features, and context without needing to write class components. Examples include useState, useEffect, and useContext.',
      codeSnippet:
        "import React, { useState, useEffect } from 'react';\n\nfunction CustomHookExample() {\n  // Using state hook\n  const [isOnline, setIsOnline] = useState(true);\n\n  // Using lifecycle/effect hook\n  useEffect(() => {\n    // Setup connection logic here\n  }, []);\n\n  return <h1>Status: {isOnline ? 'Online' : 'Offline'}</h1>;\n}",
    },
    {
      id: "react-29",
      questionNumber: 29,
      question: "What are synthetic events in React?",
      difficulty: "intermediate",
      tags: ["events"],
      answer:
        "Synthetic events are React’s cross-browser wrapper around the browser’s native event system. They ensure that events work consistently across all browsers and pool event objects for better performance.",
      codeSnippet:
        "import React from 'react';\n\nexport default function Button() {\n  const handleClick = (e) => {\n    // 'e' is a SyntheticBaseEvent, not the raw browser DOM event.\n    // React normalizes it so e.preventDefault() works consistently everywhere.\n    e.preventDefault();\n    console.log('Button clicked');\n  };\n\n  return <button onClick={handleClick}>Click Me</button>;\n}",
    },
    {
      id: "react-30",
      questionNumber: 30,
      question: "What is React’s concurrent mode?",
      difficulty: "advanced",
      tags: ["concurrency"],
      answer:
        "Concurrent mode (now Concurrent Features in React 18) allows React to interrupt heavy rendering processes to process higher-priority updates (like user typing). It keeps the UI fluid and responsive using hooks like useTransition and useDeferredValue.",
      codeSnippet:
        "import React, { useState, useTransition } from 'react';\n\nexport default function FilterList({ items }) {\n  const [query, setQuery] = useState('');\n  const [isPending, startTransition] = useTransition();\n\n  const handleChange = (e) => {\n    // startTransition marks the filtering update as low priority,\n    // keeping the input field responsive while the list updates.\n    startTransition(() => {\n      setQuery(e.target.value);\n    });\n  };\n\n  return <input type=\"text\" onChange={handleChange} />;\n}",
    },
    {
      id: "react-31",
      questionNumber: 31,
      question: "Explain the purpose of getDerivedStateFromProps",
      difficulty: "advanced",
      tags: ["lifecycle"],
      answer:
        "getDerivedStateFromProps is a static lifecycle method in class components that runs before every render. It returns an object to update state based on changes in props, or null if no update is needed.",
      codeSnippet:
        "class EmailInput extends React.Component {\n  state = { email: this.props.defaultEmail };\n\n  static getDerivedStateFromProps(nextProps, prevState) {\n    // If the parent passes down a completely new default email, update the state.\n    if (nextProps.defaultEmail !== prevState.prevDefaultEmail) {\n      return { \n        email: nextProps.defaultEmail,\n        prevDefaultEmail: nextProps.defaultEmail\n      };\n    }\n    return null; // No state update needed\n  }\n  // render() { ... }\n}",
    },
    {
      id: "react-32",
      questionNumber: 32,
      question: "How can you optimize performance in a React app?",
      difficulty: "advanced",
      tags: ["performance"],
      answer:
        "Performance optimization strategies include using React.memo for component memoization, useMemo and useCallback for caching values and functions, code-splitting with React.lazy and Suspense, virtualizing long lists (e.g., react-window), and avoiding inline object/function definitions in props.",
      codeSnippet:
        "import React, { useMemo, useCallback } from 'react';\n\n// Example of avoiding inline functions and caching objects\nfunction OptimizedComponent({ data }) {\n  // Cache function so it isn't recreated every render\n  const handleAction = useCallback(() => console.log('Action'), []);\n  \n  // Cache derived data so heavy filtering doesn't run every render\n  const filteredData = useMemo(() => data.filter(d => d.active), [data]);\n\n  return <List items={filteredData} onAction={handleAction} />;\n}",
    },
    {
      id: "react-33",
      questionNumber: 33,
      question: "What are keys in React and why are they important?",
      difficulty: "beginner",
      tags: ["lists"],
      answer:
        "Keys help React identify which items have changed, are added, or are removed in a list. They provide a stable identity for list items during rendering and reconciliation, preventing performance issues and UI bugs when items are reordered.",
      codeSnippet:
        "import React from 'react';\n\nexport default function TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map((todo) => (\n        // The unique key (like a DB id) goes on the outermost element of the map return\n        <li key={todo.id}>\n          {todo.text}\n        </li>\n      ))}\n    </ul>\n  );\n}",
    },
    {
      id: "react-34",
      questionNumber: 34,
      question: "What is useImperativeHandle?",
      difficulty: "advanced",
      tags: ["refs"],
      answer:
        "useImperativeHandle allows a child component to customize the instance value (functions/properties) that is exposed to parent components when using a ref. It is used alongside forwardRef.",
      codeSnippet:
        "import React, { useRef, useImperativeHandle, forwardRef } from 'react';\n\nconst FancyInput = forwardRef((props, ref) => {\n  const inputRef = useRef();\n  \n  useImperativeHandle(ref, () => ({\n    // Expose a custom focus function to the parent\n    customFocus: () => {\n      inputRef.current.focus();\n    }\n  }));\n\n  return <input ref={inputRef} type=\"text\" />;\n});\n\n// Parent can now call: myRef.current.customFocus()",
    },
    {
      id: "react-35",
      questionNumber: 35,
      question: "Explain shouldComponentUpdate.",
      difficulty: "advanced",
      tags: ["lifecycle"],
      answer:
        "shouldComponentUpdate is a lifecycle method in class components that lets you control whether a component should re-render when new props or state are received. Returning false prevents the re-render, optimizing performance.",
      codeSnippet:
        "class Counter extends React.Component {\n  shouldComponentUpdate(nextProps, nextState) {\n    // Only re-render if the score actually changed.\n    // If it's the same score, return false to skip rendering.\n    if (nextProps.score === this.props.score) {\n      return false; \n    }\n    return true;\n  }\n  // render() { ... }\n}",
    },
    {
      id: "react-36",
      questionNumber: 36,
      question: "What is Redux?",
      difficulty: "intermediate",
      tags: ["redux"],
      answer:
        "Redux is a predictable state management library for JavaScript applications, often used with React. It centralizes the application state in a single global store, allowing components to subscribe to state changes and dispatch actions to modify the state via reducers.",
      codeSnippet:
        "// React-Redux hook usage example\nimport { useSelector, useDispatch } from 'react-redux';\n\nfunction Counter() {\n  // Accessing global state from the Redux store\n  const count = useSelector((state) => state.counter.value);\n  const dispatch = useDispatch();\n\n  // Modifying global state by dispatching an action\n  return <button onClick={() => dispatch({ type: 'counter/increment' })}>{count}</button>;\n}",
    },
    {
      id: "react-37",
      questionNumber: 37,
      question: "What is the difference between useLayoutEffect and useEffect?",
      difficulty: "advanced",
      tags: ["hooks"],
      answer:
        "useLayoutEffect runs synchronously immediately after DOM mutations but before the browser repaints the screen. It is used for reading DOM layout and synchronous re-rendering. useEffect runs asynchronously after the browser paints, which is better for performance for most side effects.",
      codeSnippet:
        "import React, { useLayoutEffect, useRef } from 'react';\n\nexport default function Tooltip() {\n  const ref = useRef(null);\n\n  useLayoutEffect(() => {\n    // Measure the DOM node immediately before the browser paints it to the screen\n    const height = ref.current.getBoundingClientRect().height;\n    console.log('Synchronous DOM Measurement:', height);\n  }, []);\n\n  return <div ref={ref}>I am a tooltip</div>;\n}",
    },
    {
      id: "react-38",
      questionNumber: 38,
      question: "How does the useMemo hook work?",
      difficulty: "intermediate",
      tags: ["performance"],
      answer:
        "useMemo is a hook that memoizes the result of an expensive computation and only recalculates it when one of the dependencies changes. It helps optimize performance by preventing complex recalculations on every render.",
      codeSnippet:
        "import React, { useState, useMemo } from 'react';\n\nexport default function PrimeCalculator({ limit }) {\n  const [text, setText] = useState('');\n\n  // This heavy math function only runs when 'limit' changes.\n  // Typing in the text input won't trigger this calculation.\n  const primeNumbers = useMemo(() => calculatePrimesUpTo(limit), [limit]);\n\n  return (\n    <div>\n      <input value={text} onChange={e => setText(e.target.value)} />\n      <p>Primes: {primeNumbers.length}</p>\n    </div>\n  );\n}",
    },
    {
      id: "react-39",
      questionNumber: 39,
      question:
        "What is the difference between componentDidMount and componentDidUpdate?",
      difficulty: "intermediate",
      tags: ["lifecycle"],
      answer:
        "componentDidMount runs only once after the component is initially inserted into the DOM (good for initial API fetches). componentDidUpdate runs after every subsequent re-render caused by state or prop changes (good for responding to prop updates).",
      codeSnippet:
        "class UserProfile extends React.Component {\n  componentDidMount() {\n    // Runs ONCE: Initial data fetch\n    this.fetchUser(this.props.userId);\n  }\n\n  componentDidUpdate(prevProps) {\n    // Runs on updates: Fetch new data only if the userId prop changed\n    if (this.props.userId !== prevProps.userId) {\n      this.fetchUser(this.props.userId);\n    }\n  }\n}",
    },
    {
      id: "react-40",
      questionNumber: 40,
      question: "How do you handle side effects in React?",
      difficulty: "beginner",
      tags: ["hooks"],
      answer:
        "Side effects, such as fetching data from an API, directly manipulating the DOM, or setting up subscriptions, are handled using the useEffect hook in functional components or lifecycle methods like componentDidMount in class components.",
      codeSnippet:
        "import React, { useState, useEffect } from 'react';\n\nexport default function DataFetcher() {\n  const [data, setData] = useState(null);\n\n  // Handling a network request side effect\n  useEffect(() => {\n    fetch('https://api.example.com/data')\n      .then(res => res.json())\n      .then(result => setData(result));\n  }, []); // Run once on mount\n\n  return <div>{data ? data.title : 'Loading...'}</div>;\n}",
    },
    {
      id: "react-41",
      questionNumber: 41,
      question: "What is tree shaking in React?",
      difficulty: "advanced",
      tags: ["performance"],
      answer:
        "Tree shaking is a bundling optimization process (handled by bundlers like Webpack or Vite) that detects and removes unused code (dead code) from the final JavaScript bundle, significantly reducing the application's file size.",
      codeSnippet:
        "// To enable effective tree shaking, use named exports/imports.\n\n// GOOD (Bundler can discard unused functions from lodash-es)\nimport { isEmpty } from 'lodash-es'; \n\n// BAD (Bundler might include the entire lodash library even if you only use one function)\nimport _ from 'lodash';",
    },
    {
      id: "react-42",
      questionNumber: 42,
      question: "What are React hooks rules?",
      difficulty: "beginner",
      tags: ["hooks"],
      answer:
        "Hooks have two key rules: 1. Only call Hooks at the top level of a component (never inside loops, conditions, or nested functions) so React can preserve state order. 2. Only call Hooks from React function components or custom Hooks (not regular JS functions).",
      codeSnippet:
        "import React, { useState, useEffect } from 'react';\n\nfunction BadComponent({ condition }) {\n  // ❌ BAD: Rule violation! Hook called inside a condition.\n  // if (condition) { const [val, setVal] = useState(0); }\n\n  // ✅ GOOD: Call hook at the top level.\n  const [val, setVal] = useState(0);\n  \n  useEffect(() => {\n    if (condition) { /* Do something */ }\n  }, [condition]);\n\n  return <div>{val}</div>;\n}",
    },
    {
      id: "react-43",
      questionNumber: 43,
      question: "What is the React.Children API?",
      difficulty: "advanced",
      tags: ["api"],
      answer:
        "React.Children provides utility functions for dealing with the opaque this.props.children data structure. It includes methods like map, forEach, count, only, and toArray, allowing you to manipulate or iterate over child components safely.",
      codeSnippet:
        "import React from 'react';\n\nfunction TabList({ children }) {\n  return (\n    <div className=\"tabs\">\n      {/* Safely mapping over children, even if there's only one child or none */}\n      {React.Children.map(children, (child, index) => {\n        // Cloning the child to inject a new prop\n        return React.cloneElement(child, { tabIndex: index });\n      })}\n    </div>\n  );\n}",
    },
    {
      id: "react-44",
      questionNumber: 44,
      question: "How do you handle forms in React?",
      difficulty: "beginner",
      tags: ["forms"],
      answer:
        "Forms in React are typically built using controlled components where the form’s input values are managed by the component’s state. The onSubmit event on the form tag is intercepted to prevent the default page reload.",
      codeSnippet:
        "import React, { useState } from 'react';\n\nexport default function SimpleForm() {\n  const [name, setName] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault(); // Prevent page reload\n    console.log(\"Submitted name:\", name);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={name} onChange={(e) => setName(e.target.value)} />\n      <button type=\"submit\">Save</button>\n    </form>\n  );\n}",
    },
    {
      id: "react-45",
      questionNumber: 45,
      question: "What is propTypes in React?",
      difficulty: "intermediate",
      tags: ["validation"],
      answer:
        "propTypes is a mechanism used to validate the props passed to a component, ensuring they are of the expected data type. It logs warnings in the console during development if the wrong type is passed. (Often replaced by TypeScript today).",
      codeSnippet:
        "import React from 'react';\nimport PropTypes from 'prop-types'; // Requires npm install prop-types\n\nfunction UserProfile({ name, age }) {\n  return <div>{name} is {age} years old.</div>;\n}\n\n// Defining expected prop types\nUserProfile.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number\n};",
    },
    {
      id: "react-46",
      questionNumber: 46,
      question:
        "What is the difference between client-side and server-side rendering (SSR) in React?",
      difficulty: "advanced",
      tags: ["ssr"],
      answer:
        "Client-side rendering (CSR) ships a bare HTML file and JavaScript to the browser, which then builds the UI. Server-side rendering (SSR) executes the React code on the server and sends a fully populated HTML page to the browser, improving SEO and initial page load times.",
      codeSnippet:
        "// Client-Side Rendering (CSR) Bootstrapping:\n// import { createRoot } from 'react-dom/client';\n// const root = createRoot(document.getElementById('root'));\n// root.render(<App />);\n\n// Server-Side Rendering (SSR) Hydration:\n// import { hydrateRoot } from 'react-dom/client';\n// hydrateRoot(document.getElementById('root'), <App />);",
    },
    {
      id: "react-47",
      questionNumber: 47,
      question: "What is the purpose of forwardRef in React?",
      difficulty: "advanced",
      tags: ["refs"],
      answer:
        "forwardRef is a method that allows a custom component to take a 'ref' passed from a parent and forward it to an underlying DOM element or child component. It’s essential when parent components need direct access to a child's DOM node (like a <button> or <input>).",
      codeSnippet:
        'import React, { forwardRef, useRef } from \'react\';\n\n// 1. Child component uses forwardRef to accept a ref from parent\nconst CustomInput = forwardRef((props, ref) => (\n  <input ref={ref} className="fancy-input" {...props} />\n));\n\nfunction Parent() {\n  const inputRef = useRef(null);\n  // 2. Parent passes ref to the custom component\n  return <CustomInput ref={inputRef} placeholder="Type here..." />;\n}',
    },
    {
      id: "react-48",
      questionNumber: 48,
      question: "What are render props?",
      difficulty: "advanced",
      tags: ["patterns"],
      answer:
        "Render props are a pattern where a component shares state or behavior with a child by passing a function as a prop (usually named 'render' or 'children'). The child calls this function, passing the state as an argument, allowing the parent to determine what UI to render.",
      codeSnippet:
        "import React, { useState } from 'react';\n\n// Component with reusable logic\nfunction MouseTracker({ render }) {\n  const [pos, setPos] = useState({ x: 0, y: 0 });\n  const handleMouseMove = (e) => setPos({ x: e.clientX, y: e.clientY });\n\n  return <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>\n    {/* Delegating UI rendering back to the parent via the render prop */}\n    {render(pos)}\n  </div>;\n}\n\n// Parent using the logic\nexport default function App() {\n  return <MouseTracker render={({ x, y }) => <h1>Mouse is at {x}, {y}</h1>} />;\n}",
    },
  ],
};
