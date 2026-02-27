export const reactData = {
  id: "react",
  title: "React Interview Questions",
  level: "beginner-to-advanced",
  totalQuestions: 48,
  questions: [
    {
      id: "react-1",
      questionNumber: 1,
      question: "What is React? Why is it used?",
      difficulty: "beginner",
      tags: ["fundamentals"],
      answer:
        "Answer: React is a JavaScript library for building user interfaces, primarily for single-page applications. It helps developers build fast, scalable, and simple interfaces by breaking the UI into reusable components. It’s known for its virtual DOM and efficient rendering.",
    },

    {
      id: "react-2",
      questionNumber: 2,
      question: "What are components in React?",
      difficulty: "beginner",
      tags: ["components"],
      answer:
        "Answer: Components are the building blocks of a React application. They can be functional or class-based, and they return a portion of the UI, usually described in JSX. Components can manage their own state and interact with other components through props.",
    },

    {
      id: "react-3",
      questionNumber: 3,
      question: "What is JSX?",
      difficulty: "beginner",
      tags: ["jsx"],
      answer:
        "Answer: JSX stands for JavaScript XML. It’s a syntax extension for JavaScript that allows writing HTML directly within JavaScript code. It looks like HTML but is transpiled by Babel into React createElement calls.",
    },

    {
      id: "react-4",
      questionNumber: 4,
      question: "What is the Virtual DOM?",
      difficulty: "beginner",
      tags: ["virtual-dom"],
      answer:
        "Answer: The Virtual DOM is a lightweight in-memory representation of the real DOM elements. React uses it to update the UI efficiently by calculating the difference (diffing) between the previous and the new virtual DOM and updating only the parts of the real DOM that have changed.",
    },

    {
      id: "react-5",
      questionNumber: 5,
      question: "Explain the difference between state and props.",
      difficulty: "beginner",
      tags: ["state", "props"],
      answer:
        "• Props: Passed from parent to child components, read-only, and cannot be modified by the receiving component.",
    },

    {
      id: "react-6",
      questionNumber: 6,
      question:
        "What is the difference between functional and class components?",
      difficulty: "beginner",
      tags: ["components"],
      answer:
        "• Class Components: Require extending React.Component and can maintain internal state using this.state and lifecycle methods.",
    },

    {
      id: "react-7",
      questionNumber: 7,
      question: "What is a higher-order component (HOC)?",
      difficulty: "intermediate",
      tags: ["patterns"],
      answer:
        "A higher-order component is a pattern where a function takes a component and returns a new component with added functionality. It’s often used to share common behavior across multiple components.",
    },

    {
      id: "react-8",
      questionNumber: 8,
      question: "What is the useState hook?",
      difficulty: "beginner",
      tags: ["hooks"],
      answer:
        "useState is a hook that allows functional components to have state. It returns an array with the current state value and a function to update it.",
    },

    {
      id: "react-9",
      questionNumber: 9,
      question: "What is the useEffect hook?",
      difficulty: "beginner",
      tags: ["hooks"],
      answer:
        "useEffect is used to manage side effects in functi…t can also be cleaned up using a return function.",
    },

    {
      id: "react-10",
      questionNumber: 10,
      question: "What is the purpose of the dependency array in useEffect?",
      difficulty: "intermediate",
      tags: ["hooks"],
      answer:
        "The dependency array tells React when to re-run the effect. If any of the dependencies change, the effect will re-run. If the array is empty, the effect runs only once, after the first render.",
    },

    {
      id: "react-11",
      questionNumber: 11,
      question: "What are controlled components?",
      difficulty: "beginner",
      tags: ["forms"],
      answer:
        "Controlled components are form elements (inputs, selects, etc.) where React manages the value. The component’s state holds the form value, and every input change is handled by an event handler.",
    },

    {
      id: "react-12",
      questionNumber: 12,
      question: "What are uncontrolled components?",
      difficulty: "beginner",
      tags: ["forms"],
      answer:
        "Uncontrolled components are form elements where the form data is handled by the DOM itself. Instead of using state to manage form data, ref is used to access values from the DOM.",
    },

    {
      id: "react-13",
      questionNumber: 13,
      question: "What is the useContext hook?",
      difficulty: "intermediate",
      tags: ["context", "hooks"],
      answer:
        "useContext is used to subscribe to React context values. It allows components to consume context without using Context.Consumer.",
    },

    {
      id: "react-14",
      questionNumber: 14,
      question: "What is context in React?",
      difficulty: "intermediate",
      tags: ["context"],
      answer:
        "Context provides a way to pass data through the component tree without manually passing props at every level. It’s useful for managing global data, such as themes or user authentication.",
    },

    {
      id: "react-15",
      questionNumber: 15,
      question: "What is the useRef hook?",
      difficulty: "intermediate",
      tags: ["hooks", "refs"],
      answer:
        "useRef returns a mutable ref object whose .current property can hold a value that persists across renders. It’s commonly used for accessing DOM elements directly or storing mutable values without causing re-renders.",
    },

    {
      id: "react-16",
      questionNumber: 16,
      question: "How does React handle reconciliation?",
      difficulty: "advanced",
      tags: ["reconciliation"],
      answer:
        "React uses a reconciliation algorithm to efficiently update the DOM. It compares the new virtual DOM with the previous one, calculates the minimum number of updates, and batches changes to the real DOM.",
    },

    {
      id: "react-17",
      questionNumber: 17,
      question: "What are React portals?",
      difficulty: "intermediate",
      tags: ["portals"],
      answer:
        "Portals provide a way to render children into a DOM node that exists outside the hierarchy of the parent component.",
    },

    {
      id: "react-18",
      questionNumber: 18,
      question: "What are React fragments?",
      difficulty: "beginner",
      tags: ["fragments"],
      answer:
        "Fragments let you group multiple elements without adding extra nodes to the DOM. This is useful for returning multiple elements from a component’s render method without wrapping them in a div.",
    },

    {
      id: "react-19",
      questionNumber: 19,
      question: "What is the difference between useCallback and useMemo?",
      difficulty: "advanced",
      tags: ["performance"],
      answer:
        "• useCallback: Memoizes the function and returns the same instance across renders unless its dependencies change.",
    },

    {
      id: "react-20",
      questionNumber: 20,
      question: "Explain React Suspense.",
      difficulty: "advanced",
      tags: ["suspense"],
      answer:
        "React Suspense allows you to pause rendering components until a certain condition (like data fetching) is met. It’s often used with concurrent rendering to show placeholders while waiting for content to load.",
    },

    {
      id: "react-21",
      questionNumber: 21,
      question: "How do error boundaries work in React?",
      difficulty: "advanced",
      tags: ["error-handling"],
      answer:
        "Error boundaries catch JavaScript errors anywhere in the component tree and display a fallback UI instead of crashing the app. They can only be class components that implement the componentDidCatch and getDerivedStateFromError methods.",
    },

    {
      id: "react-22",
      questionNumber: 22,
      question: "What are lazy components in React?",
      difficulty: "intermediate",
      tags: ["lazy-loading"],
      answer:
        "Lazy components are loaded only when needed, which helps improve performance by reducing the initial bundle size. They can be created using React.lazy() and are often used with Suspense for dynamic imports.",
    },

    {
      id: "react-23",
      questionNumber: 23,
      question: "How does code-splitting work in React?",
      difficulty: "advanced",
      tags: ["performance"],
      answer:
        "Code-splitting allows breaking up the application into smaller chunks to load only the code needed for the current view. Tools like Webpack and React.lazy() help with this by creating separate bundles for different parts of the app.",
    },

    {
      id: "react-24",
      questionNumber: 24,
      question: "What is the purpose of memo in React?",
      difficulty: "intermediate",
      tags: ["performance"],
      answer:
        "Get Frontend Highlights’s stories in your inbox\n\nJoin Medium for free to get updates from this writer.\n\nSubscribe",
    },

    {
      id: "react-25",
      questionNumber: 25,
      question: "What is useReducer?",
      difficulty: "intermediate",
      tags: ["state-management"],
      answer:
        "useReducer is a hook that provides an alternative to useState for more complex state management. It works similarly to reducers in Redux, where state updates are triggered by dispatching actions.",
    },

    {
      id: "react-26",
      questionNumber: 26,
      question: "What is prop drilling? How can it be avoided?",
      difficulty: "intermediate",
      tags: ["state-management"],
      answer:
        "Prop drilling occurs when props are passed down multiple levels to reach a deeply nested component. It can be avoided using React Context, which provides global access to certain data without manually passing props through every component.",
    },

    {
      id: "react-27",
      questionNumber: 27,
      question: "What are Pure Components in React?",
      difficulty: "intermediate",
      tags: ["performance"],
      answer:
        "A pure component is a class component that implements a shallow comparison of props and state in the shouldComponentUpdate lifecycle method to avoid unnecessary re-renders.",
    },

    {
      id: "react-28",
      questionNumber: 28,
      question: "What are React hooks?",
      difficulty: "beginner",
      tags: ["hooks"],
      answer:
        "Hooks are functions that allow functional components to use state, lifecycle methods, and other React features without writing class components. Examples include useState, useEffect, useContext, etc.",
    },

    {
      id: "react-29",
      questionNumber: 29,
      question: "What are synthetic events in React?",
      difficulty: "intermediate",
      tags: ["events"],
      answer:
        "Synthetic events are React’s cross-browser wrapper around the browser’s native event system. They ensure that events work the same across all browsers.",
    },

    {
      id: "react-30",
      questionNumber: 30,
      question: "What is React’s concurrent mode?",
      difficulty: "advanced",
      tags: ["concurrency"],
      answer:
        "Concurrent mode is an experimental feature that allows React to interrupt rendering processes to improve the user experience by making UI updates more fluid and responsive, especially in apps with heavy computational tasks.",
    },

    {
      id: "react-31",
      questionNumber: 31,
      question: "Explain the purpose of getDerivedStateFromProps",
      difficulty: "advanced",
      tags: ["lifecycle"],
      answer:
        "getDerivedStateFromProps is a lifecycle method that runs before every render and updates the state based on changes in props. It’s static, so it can’t access this, making it suitable for cases where state needs to be synced with props.",
    },

    {
      id: "react-32",
      questionNumber: 32,
      question: "How can you optimize performance in a React app?",
      difficulty: "advanced",
      tags: ["performance"],
      answer: "Performance optimization strategies include:",
    },

    {
      id: "react-33",
      questionNumber: 33,
      question: "What are keys in React and why are they important?",
      difficulty: "beginner",
      tags: ["lists"],
      answer:
        "Keys help React identify which items have changed, are added, or removed in a list. They provide a stable identity for list items during rendering and reconciliation, improving performance.",
    },

    {
      id: "react-34",
      questionNumber: 34,
      question: "What is useImperativeHandle?",
      difficulty: "advanced",
      tags: ["refs"],
      answer:
        "useImperativeHandle allows you to customize the instance value that is exposed to parent components when using ref. It’s useful when you want to limit what information is accessible to the parent.",
    },

    {
      id: "react-35",
      questionNumber: 35,
      question: "Explain shouldComponentUpdate.",
      difficulty: "advanced",
      tags: ["lifecycle"],
      answer:
        "shouldComponentUpdate is a lifecycle method in class components that lets you control whether a component should re-render when new props or state are received. It helps optimize performance by preventing unnecessary updates.",
    },

    {
      id: "react-36",
      questionNumber: 36,
      question: "What is Redux?",
      difficulty: "intermediate",
      tags: ["redux"],
      answer:
        "Redux is a predictable state management library for JavaScript applications, often used with React. It centralizes the application state in a single store, allowing components to subscribe to state changes and dispatch actions to modify the state.",
    },

    {
      id: "react-37",
      questionNumber: 37,
      question: "What is the difference between useLayoutEffect and useEffect?",
      difficulty: "advanced",
      tags: ["hooks"],
      answer:
        "useLayoutEffect runs synchronously after all DOM mutations but before the browser repaints the screen. It’s typically used for DOM measurements or synchronizing layout changes. useEffect runs asynchronously after the render is committed to the screen.",
    },

    {
      id: "react-38",
      questionNumber: 38,
      question: "How does the useMemo hook work?",
      difficulty: "intermediate",
      tags: ["performance"],
      answer:
        "useMemo is a hook that memoizes the result of an expensive computation and only recalculates it when one of the dependencies changes. It helps optimize performance by preventing recalculations on every render.",
    },

    {
      id: "react-39",
      questionNumber: 39,
      question:
        "What is the difference between componentDidMount and componentDidUpdate?",
      difficulty: "intermediate",
      tags: ["lifecycle"],
      answer:
        "• componentDidMount runs once after the component is initially rendered.",
    },

    {
      id: "react-40",
      questionNumber: 40,
      question: "How do you handle side effects in React?",
      difficulty: "beginner",
      tags: ["hooks"],
      answer:
        "Side effects, such as fetching data or directly manipulating the DOM, are handled using the useEffect hook in functional components or lifecycle methods like componentDidMount in class components.",
    },

    {
      id: "react-41",
      questionNumber: 41,
      question: "What is tree shaking in React?",
      difficulty: "advanced",
      tags: ["performance"],
      answer:
        "Tree shaking is a bundling optimization that removes unused code from the final bundle, reducing the size of the application. It’s commonly used with Webpack and ES6 modules to eliminate dead code.",
    },

    {
      id: "react-42",
      questionNumber: 42,
      question: "What are React hooks rules?",
      difficulty: "beginner",
      tags: ["hooks"],
      answer: "Hooks have two key rules:",
    },

    {
      id: "react-43",
      questionNumber: 43,
      question: "What is the React.Children API?",
      difficulty: "advanced",
      tags: ["api"],
      answer:
        "React.Children provides utilities for dealing with the this.props.children prop, such as mapping over them, counting them, or verifying their types.",
    },

    {
      id: "react-44",
      questionNumber: 44,
      question: "How do you handle forms in React?",
      difficulty: "beginner",
      tags: ["forms"],
      answer:
        "Forms in React are typically controlled components where the form’s input values are managed by the component’s state, and every input change is handled by an event handler.",
    },

    {
      id: "react-45",
      questionNumber: 45,
      question: "What is propTypes in React?",
      difficulty: "intermediate",
      tags: ["validation"],
      answer:
        "propTypes is a way to validate the props passed to a component, ensuring that they are of the correct type. React provides a PropTypes library that can be used to enforce type-checking in development.",
    },

    {
      id: "react-46",
      questionNumber: 46,
      question:
        "What is the difference between client-side and server-side rendering (SSR) in React?",
      difficulty: "advanced",
      tags: ["ssr"],
      answer:
        "• Client-side rendering: The entire React app is loaded in the browser, and the rendering happens on the client-side.",
    },

    {
      id: "react-47",
      questionNumber: 47,
      question: "What is the purpose of forwardRef in React?",
      difficulty: "advanced",
      tags: ["refs"],
      answer:
        "forwardRef is a method that allows a component to forward a ref through it to a child component. It’s useful for building higher-order components or interacting with the DOM in complex component trees.",
    },

    {
      id: "react-48",
      questionNumber: 48,
      question: "What are render props?",
      difficulty: "advanced",
      tags: ["patterns"],
      answer:
        "Render props are a pattern where a component’s render logic is passed to children via a function. This allows greater flexibility and reuse of component logic.",
    },
  ],
};
