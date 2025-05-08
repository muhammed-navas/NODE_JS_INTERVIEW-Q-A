

# React Concepts and Hooks

A comprehensive guide to React hooks and core concepts.

## Table of Contents

- [Core Concepts](#core-concepts)
  - [What is React?](#what-is-react)
  - [Virtual DOM](#virtual-dom)
  - [JSX](#jsx)
  - [Components](#components)
  - [Props](#props)
  - [State](#state)
  - [React vs Other Frameworks](#react-vs-other-frameworks)
  - [Development Environment](#development-environment)
  - [Component Types](#component-types)
- [React Hooks](#react-hooks)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [useContext](#usecontext)
  - [useReducer](#usereducer)
  - [useMemo](#usememo)
  - [useCallback](#usecallback)
- [Routing](#routing)
- [Advanced Patterns](#advanced-patterns)
  - [Component Composition](#component-composition)
  - [Avoiding Prop Drilling](#avoiding-prop-drilling)
- [Performance Optimization](#performance-optimization)
  - [React.memo](#reactmemo)
  - [Lazy Loading](#lazy-loading)
- [Best Practices](#best-practices)
- [Component Lifecycle](#component-lifecycle)
- [React Concepts](#react-concepts)
  - [Strict Mode](#strict-mode)
  - [Higher Order Components](#higher-order-components)
  - [Controlled vs Uncontrolled Components](#controlled-vs-uncontrolled-components)
  - [Keys in React](#keys-in-react)
- [React Fragments](#react-fragments)


## React Hooks

<details>
<summary><b>⭕ Q1: What is React?</b></summary>

✅ React is an open-source JavaScript library 

✅ React is used for building user interface (UI)

✅ React simplifies creation of SPA (single page application) by using reusable components
</details>

<details>
<summary><b>⭕ Q2: What are the Key Features of React?</b></summary>

![Key Features of React](/assest/react/image.png)
</details>

<details>
<summary><b>⭕ Q3: What is DOM? What is the difference between HTML and DOM?</b></summary>

✅ DOM (Document Object Model) represents the web page as a tree-like structure which allows JavaScript to dynamically access and manipulate the content and structure of a web page.

![DOM](/assest/react/image1.png)

🔄 Difference Between HTML and DOM:

![HTML vs DOM](/assest/react/image2.png)
</details>

<details>
<summary><b>⭕ Q4: What is Virtual DOM? Difference between DOM and Virtual DOM?</b></summary>

✅ React uses a virtual DOM to efficiently update the UI without re-rendering the entire page, which helps improve performance and make the application more responsive.

✅ The Virtual DOM (V-DOM) is a lightweight JavaScript object that is a copy of the real DOM. It is used primarily by libraries like React to optimize performance during UI updates.

✅ The new virtual DOM is compared with the previous one (using a process called diffing).

![Virtual DOM](/assest/react/image3.png)

![DOM vs Virtual DOM](/assest/react/image4.png)
</details>

<details>
<summary><b>⭕ Q5: What is Reconciliation in React?</b></summary>

✅ Reconciliation is the process React uses to update the DOM efficiently when the state or props of a component change.

⚙️ Steps of Reconciliation:

👉 Render Phase:

🤎 A new Virtual DOM tree is created from the updated component.

👉 Diffing Algorithm:

🤎 Compares the new tree with the previous one.

🤎 Identifies which parts (nodes/components) changed.

👉 Commit Phase:

🤎 Applies only the necessary updates to the real DOM.
</details>

<details>
<summary><b>⭕ Q6: What are React Components?</b></summary>

✅ In React, a component is a reusable building block for creating user interface 

✅ React Components define how your UI looks and behaves.

✅ They can receive props, manage state, and respond to user interactions.

✅ Components promote reusability, modularity, and maintainability in your code.
</details>

<details>
<summary><b>⭕ Q7: What is SPA (Single Page Application)?</b></summary>

✅ A Single Page Application (SPA) is a web application that has only one single web page.

✅ Whenever user does some action on the website, then in response content is dynamically updated without refreshing or loading a new page.
</details>

<details>
<summary><b>⭕ Q8: What is the role of JSX in React?</b></summary>

✅ JSX stands for JavaScript XML  

✅ JSX allows you to write HTML-like code inside JavaScript, which makes it easier to visualize and build component UIs in a clean and readable way.

✅ JSX is converted to JavaScript via tools like Babel, because browsers understand JavaScript not JSX

```javascript
//JSX
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

//Transpiles To (Behind the Scenes)
const Welcome = (props) => {
  return React.createElement('h1', null, `Hello, ${props.name}!`);
};
```

✅ This transformation is handled by Babel, a JavaScript compiler
</details>

<details>
<summary><b>⭕ Q9: What is the difference between Declarative & Imperative syntax?</b></summary>

👉 Declarative

✅ 1. Declarative syntax focuses on describing the desired result without specifying the step-by-step process.
✅ 2. JSX in React is used to write declarative syntax.

* Focuses on: What the result should be.
* Describes the desired outcome, not the step-by-step process.
* Code is often cleaner, more abstracted, and reactive.
* React promotes declarative style.

```javascript
function App() {
  return <button onClick={() => alert("Clicked!")}>Click Me</button>;
}
```

👉 Imperative

✅ 1. Imperative syntax involves step by step process to achieve a particular goal.
✅ 2. JavaScript has an imperative syntax.

* Focuses on: How to achieve a result.
* You write step-by-step instructions.
* Used in vanilla JavaScript DOM manipulation, C, etc.
* Often more manual and verbose.

```javascript
const button = document.createElement('button');
button.innerText = 'Click Me';
button.addEventListener('click', () => alert('Clicked!'));
document.body.appendChild(button);
```
</details>

<details>
<summary><b>⭕ Q10: What is Arrow Function Expression in JSX?</b></summary>

✅ An Arrow Function Expression in JSX refers to using JavaScript arrow functions (=>) directly inside JSX, often for event handling, inline rendering, or short functional logic.

✅ Arrow functions are concise and preserve the this context from their parent scope, which makes them especially useful in React components.

```jsx
<button onClick={() => alert('Clicked!')}>Click Me</button>
```

* Here, () => alert('Clicked!') is an arrow function expression used inline inside JSX.
</details>

<details>
<summary><b>⭕ Q11: What is the difference between React and Angular?</b></summary>

✅ React and Angular are two of the most popular frameworks/libraries for building modern web applications — but they differ significantly in architecture, philosophy, and usage.

✅ React is a flexible library for building UIs; it gives you freedom to choose tools.

✅ Angular is a complete framework with more built-in features but a steeper learning curve.

![React vs Angular](/assest/react/image6.png)
</details>

<details>
<summary><b>⭕ Q12: Whether React is a Framework or a Library? What is the difference?</b></summary>

✅ React = Library: Focuses only on the view/UI layer.

✅ You're free to pick your own stack for routing (e.g., React Router), state (e.g., Redux, Zustand), or data (e.g., Axios, TanStack Query).

✅ A framework (like Angular) includes most of these features out of the box.

![Framework vs Library](/assest/react/image7.png)
</details>

<details>
<summary><b>⭕ Q13: How React provides Reusability and Composition?</b></summary>

✅ React provides reusability and composition through its component-based architecture.

✅ **Reusability:-** Once you create a component, you can re-use it in different parts of your application or even in multiple projects.

👉 React promotes DRY (Don't Repeat Yourself) by encouraging you to:

✅ Write once, reuse anywhere – Components are just JavaScript functions.

✅ Parameterize components with props to change behavior or content.

✅ Create UI libraries of reusable components (e.g., buttons, inputs, cards).

```javascript
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// Reuse:
<Button label="Save" onClick={handleSave} />
<Button label="Cancel" onClick={handleCancel} />
```

✅ **Composition:-** Composition is creating new and big components by combining existing small components. Its advantage is, change to one small component will not impact other components.

✅ Composition is the idea of nesting components inside others to build larger pieces of the UI from small, simple parts.

✅ React prefers composition over inheritance, allowing flexibility and modularity.

```javascript
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function App() {
  return (
    <Card title="Welcome">
      <p>This is the card content!</p>
    </Card>
  );
}
```
</details>

<details>
<summary><b>⭕ Q14: What are State, Stateless, Stateful and State Management terms?</b></summary>

🧠 State in React:  

✅ Refers to how you store, update, and share state across your application.
✅ "state" refers to the current data of the component

🧠 Stateless Component:

✅ A stateless component does not manage or store state.
✅ It only receives props and renders UI.

```javascript
import React from 'react';

export function App(props) {
  let count = 0 

  const clickHandle = () => {
    count += 1 
    console.log(count,'this is count')
  }
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={clickHandle}> click me </button>
    </div>
  );
}
```

🧠 Stateful Component

✅ A stateful component has its own internal state using useState, useReducer, or class-based this.state.

✅ It controls dynamic behavior.

✅ Stateful or state management means, when a user performs some actions on the UI, then the React application should be able to update and re-render that data or state on the UI.

```javascript
import React, {useState} from 'react';

export function App(props) {
  const [count, setCount] = useState(0)

  const clickHandle = () => {
    setCount(count+1)
  }
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={clickHandle}> click me </button>
    </div>
  );
}
```
</details>

<details>
<summary><b>⭕ Q15: What are Props in JSX?</b></summary>

✅ props (properties) are way to pass data from parent component to child component

✅ Props are read-only 

✅ Props are immutable inside the component.

✅ Enables component reusability and dynamic rendering.

✅ Can pass any data: strings, numbers, arrays, functions, even components.

```javascript
function Greeting(props) {
  return <p>Good Morning, {props.name}!</p>;
}


function App() {
  return (
    <div>
      <Greeting name="John" /> // Good Morning,John
      <Greeting name="Sarah" /> // Good Morning,Sarah
    </div>
  );
}
```
</details>

<details>
<summary><b>⭕ Q16: What is NPM? What is the role of node_modules folder?</b></summary>

* **NPM (Node Package Manager)** is used to manage the dependencies for your Node project.

* **node_modules** folder contains all the dependencies of the node project.
</details>

<details>
<summary><b>⭕ Q17: What is the role of index.js file and ReactDOM in React?</b></summary>

✅ ReactDOM is a JavaScript library that renders components to the DOM or browser.

✅ The index.js file is the JavaScript file that replaces the root element of the index.html file with the newly rendered components.

```html
//html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style.css">
  </head>
  <body>
    <div id="root"></div>

    <script src="src/index.jsx"></script>
  </body>
</html>
```

```javascript
//react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>
);
```
</details>

<details>
<summary><b>⭕ Q18: What is Babel?</b></summary>

✅ Babel in React is used to transpile JSX syntax into regular JavaScript which browser can understand.

✅ Converts JSX into valid JavaScript.

✅ Transforms modern JS syntax (like arrow functions, async/await, destructuring).

✅ Ensures browser compatibility by compiling code down to ES5.

![Babel](/assest/react/image8.png)
</details>

<details>
<summary><b>⭕ Q19: What is the role of Fragment in JSX?</b></summary>

✅ In JSX, you can only return one parent element from a component. If you need to return multiple sibling elements, you can:

✅ Wrap them in a <div> (adds extra node to DOM)

✅ Use a <React.Fragment> or <> (cleaner)

```javascript
import React from 'react';
import {Fragment} from 'react';

function ListItems() {
  return (
    <Fragment>
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
    </Fragment>
  );
}
```
or 
```javascript
function ListItems() {
  return (
    <>
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
    </>
  );
}
```
</details>

<details>
<summary><b>⭕ Q20: What is Spread Operator in JSX?</b></summary>

✅ The Spread Operator (...) is used to expand or spread an array or object 

✅ The spread operator (...) in JavaScript is used to unpack elements from arrays or copy/spread properties from objects. In JSX (React), it's often used to pass props dynamically. 

```javascript
import React from 'react';

export function App(props) {
  
  const user = {
    name: "Alice",
    age: 25,
    location: "New York"
  };
  return (
    <div className='App'>
     <Profile {...user} /> 
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      <h2>{props.name}</h2> 
      <p>{props.age} years old</p>
      <p>From {props.location}</p>
    </div>
  );
}
```

✅ Used for copying, merging, and updating objects or arrays.

```javascript
//array 
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

//object 
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // { a: 1, b: 2, c: 3 }
```
</details>

<details>
<summary><b>⭕ Q21: What are the types of Conditional Rendering in JSX?</b></summary>

![Conditional Rendering](/assest/react/image9.png)

1️⃣ if-else Statement (outside JSX)

✅ Use this when logic is too complex to include inline inside JSX.

```javascript
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
```

2️⃣ Ternary Operator condition ? true : false

✅ Use this inline in JSX for concise rendering:

```javascript
function Status({ online }) {
  return (
    <div>
      {online ? <p>Online ✅</p> : <p>Offline ❌</p>}
    </div>
  );
}
```

3️⃣ Logical AND Operator &&

✅ Render a component only if the condition is true (good for optional rendering).

```javascript
function Notification({ getData }) {
  return (
    <div>
      {getData.length > 0 && <p>You getData is success</p>}
    </div>
  );
}
```

4️⃣ switch-case (outside JSX)

✅ Useful when you have multiple conditions to handle.

```javascript
function RenderComponent({ role }) {
  switch (role) {
    case 'admin':
      return <h2>Admin Panel</h2>;
    case 'user':
      return <h2>User Dashboard</h2>;
    case 'guest':
      return <h2>Guest View</h2>;
    default:
      return <h2>Unknown Role</h2>;
  }
}
```

🧠 Summary Table:

![Conditional Rendering Summary](/assest/react/image10.png)
</details>

<details>
<summary><b>⭕ Q22: How do you iterate over a list in JSX? What is map() method?</b></summary>

✅ Creates a new array by applying a function to each item in an existing array.

✅ map() does not modify the original array

✅ Used often in React for rendering lists.

✅ the key(prop) Required for list items for React's internal tracking

```javascript
function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
```
</details>

<details>
<summary><b>⭕ Q23: What is Transpiler? What is the difference between Compiler & Transpile?</b></summary>

✅ A Transpiler is a tool that converts source code from one high-level programming language (JSX) to another high-level programming language (JavaScript).
// Example: Babel

✅ A compiler is a tool that converts high-level programming language (Java) into a lower-level language (machine code or bytecode).

![Transpiler vs Compiler](/assest/react/image11.png)
</details>

<details>
<summary><b>⭕ Q24: Is it possible to use JSX without React?</b></summary>

✅ Yes, it is technically possible to use JSX without React, but it requires a custom setup.

![JSX without React](/assest/react/image12.png)
</details>

<details>
<summary><b>⭕ Q25: What are the Types of React components? What are Functional Components?</b></summary>

//functional components
✅ Functional components are declared as a JavaScript function 

✅ They are stateless components, but with the help of hooks, they can now manage state also 

![Component Types](/assest/react/image13.png)
</details>

<details>
<summary><b>⭕ Q26: What is Prop Drilling in React?</b></summary>

✅ Prop Drilling the process of passing down props through multiple layers of components

```javascript
function App() {
  const user = "Alice";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello, {user}!</h1>;
}
```

![Prop Drilling](/assest/react/image15.png)
--
![Prop Drilling Visualization](/assest/react/image14.png)
</details>

<details>
<summary><b>⭕ Q27: Why to Avoid Prop Drilling? In how many ways can avoid Prop Drilling?</b></summary>

👉 Why to avoid Prop Drilling:

✅ 1. Maintenance: Prop drilling can make code harder to maintain as changes in data flow require updates across multiple components.

✅ 2. Complexity: It increases code complexity and reduces code readability.

✅ 3. Debugging: Debugging becomes challenging when props need to be traced through numerous components.

👉 Ways to Avoid Prop Drilling in React

1️⃣ React Context API (Most Common)

2️⃣ State Management Libraries (Redux, MobX, Recoil, Zustand)

3️⃣ Component Composition (Children/Render Props)

4️⃣ Custom Hooks
</details>

<details>
<summary><b>⭕ Q28: What are Class Components In React?</b></summary>

✅ Class components are defined using JavaScript classes.

✅ They are stateful components by using the lifecycle methods.

✅ The render method in a class component is responsible for returning JSX.
</details>

<details>
<summary><b>⭕ Q29: What are the 5 differences btw Functional components & Class components?</b></summary>

✅ Functional components are simpler and preferred in modern React.

✅ Class components are older and still valid, especially in legacy codebases.

![Functional vs Class Components](/assest/react/image16.png)
</details>

<details>
<summary><b>⭕ Q30: What is Routing and Router in React?</b></summary>

✅ Routing allows you to create a single-page web application with navigation, without the need for a full-page refresh.

✅ React Router is a library for handling routing and enables navigation and React Router rendering of different components based on the URL.
</details>

<details>
<summary><b>⭕ Q31: What are the roles of &lt;Routes&gt; & &lt;Route&gt; component in React Routing?</b></summary>

✅ The &lt;Routes&gt; component is used as the root container for declaring your collection of routes.

✅ The &lt;Route&gt; component is used to define a route and specify the component that should render when the route matches.

* For example, in this code if user enter "websitename.com/about" in url, then matching "About" component will be rendered.
</details>

<details>
<summary><b>⭕ Q32: What are Route Parameters in React Routing?</b></summary>

✅ Route parameters in React Router are a way to pass dynamic values (data) to the component as part of the URL path.
</details>

<details>
<summary><b>⭕ Q33: What are React Hooks? What are the Top React Hooks?</b></summary>

✅ 1. React Hooks are inbuilt functions provided by React that allow functional components to use state and lifecycle features.

✅ 2. Before Hooks, class components lifecycle methods were used to maintain state in React applications.

✅ 3. To use React Hook first we first have to import it from React library:

![React Hooks](/assest/react/image17.png)
</details>

<details>
<summary><b>⭕ Q34: What is the role of useState() hook and how it works?</b></summary>

✅ The useState hook enables functional components to manage state.

✅ useState() working: useState() function accept the initial state value as the parameter and returns an array with two elements:

1. The first element is the current state value (count in this code).
2. Second element is the function that is used to update the state (setCount in this code).

✅ The concept of assign array elements to individual variables is called array destructuring.

```javascript
import React, { useState } from 'react';

export function App(props) {
  const [state, setState] = useState()
  return (
    <div className='App'>
      <h1>hello</h1>
    </div>
  );
}
```

![useState hook](/assest/react/image18.png)
</details>

<details>
<summary><b>⭕ Q35: What is the role of useEffect(). How it works and what is its use?</b></summary>

✅ The useEffect Hook in React is used to perform side effects in functional components.

✅ For example, data fetching from API, subscriptions, DOM manipulation or any other operation that needs to be performed after the component has been rendered.

✅ useEffect() is called after the component renders. Example, side effects.

✅ useEffect() function will accept two parameter: (Effect function, dependency array).

```javascript
useEffect(() => {
  fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => setData(data));
}, []); // runs once after first render
```
</details>

<details>
<summary><b>⭕ Q36: What is Dependency Array in useEffect() hook?</b></summary>

✅ Dependencies arrays (optional) act as triggers for useEffect to rerun; meaning if any of dependencies values change, the code inside useEffect() will be executed again.

✅ To control how often and when the effect runs.

✅ It helps React optimize performance by avoiding unnecessary re-runs of the effect.
</details>

<details>
<summary><b>⭕ Q37: What is the meaning of the empty array [] in the useEffect()?</b></summary>

✅ An empty array indicates that the effect function should only run once 

✅ Fetching data once

✅ Initializing a library or subscription

✅ Setting up event listeners (with cleanup)

🔍 The empty array tells React:

"This effect has no dependencies — nothing to watch for changes."

✅ So React runs the effect once (when the component is mounted), and never again.

✅ This behavior is similar to the componentDidMount() lifecycle method in class components.

```javascript
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Runs only once, when component mounts');
  }, []); // <- empty array here

  return <div>Hello, React!</div>;
}
```
</details>

<details>
<summary><b>⭕ Q38: What are default export and named export in React?</b></summary>

✅ **Default Export**: Allows you to export a single value as the main export from a file

```javascript
// In Component.js
const MyComponent = () => {
  return <div>Hello World</div>;
};

export default MyComponent;

// In another file
import MyComponent from './Component'; // Name can be anything
```

✅ **Named Export**: Allows you to export multiple values from a file

```javascript
// In utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// In another file
import { add, subtract } from './utils'; // Names must match exactly
```

✅ **Key differences**:
- A file can have multiple named exports but only one default export
- Default exports can be imported with any name, named exports must use the exact export name
- Named exports are helpful when a module has multiple functionalities
</details>

<details>
<summary><b>⭕ Q39: What is the role of useContext() hook?</b></summary>

✅ **useContext()** allows you to access global data without prop drilling (passing props manually through every level of the component tree)

✅ It only lets you read the context and subscribe to its changes

✅ It does not trigger a re-render if the consuming component is not inside the Provider

✅ It must be used inside a functional component

```javascript
import React, {createContext} from 'react';

const ThemeContext = createContext('light');

// 2. Provide the context
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

import React, { useContext} from 'react'
//access data in component
function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>The current theme is {theme}</div>;
}
```

![Context API visualization](/assest/react/image19.png)
</details>

<details>
<summary><b>⭕ Q40: What is createContext() method? What are Provider & Consumer properties?</b></summary>

✅ **createContext()** function returns an object with Provider and Consumer properties

✅ The Provider property is responsible for providing the context value to all its child components

✅ useContext() method or Consumer property can be used to consume the context value in child components
</details>

<details>
<summary><b>⭕ Q41: What is useReducer() hook? When to use useState() and when useReducer()?</b></summary>

✅ The **useReducer()** hook is an alternative to useState() for managing more complex state logic in React functional components

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

✅ **reducer**: A function that defines how the state is updated

✅ **initialState**: The starting state

✅ **dispatch**: A function to send actions to the reducer

```javascript
import React, { useReducer } from 'react';

// Step 1: Define initial state
const initialState = { count: 0 };

// Step 2: Create reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Step 3: Use in a component
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

📝 **Conclusion**:

✅ Use **useState()** for simple and isolated state needs

👉 Use **useReducer()** when:
- Your component state is complex
- You need centralized state management logic
- You are refactoring a component with too many useState() calls

![useReducer illustration](/assest/react/image20.png)
</details>

<details>
<summary><b>⭕ Q42: How do useState and useReducer work internally?</b></summary>

**useState working flow**:
![useState flow](/assest/react/image22.png)

**useReducer working flow**:
![useReducer flow](/assest/react/image21.png) ![useReducer dispatch flow](/assest/react/image23.png)
</details>

<details>
<summary><b>⭕Q43: What is useEffect in React?</b></summary>

🧊 **useEffect** is a React Hook that lets you perform side effects in function components. Side effects include things like:
   - Fetching data from an API
   - Subscribing to events (like WebSockets)
   - Manually manipulating the DOM
   - Setting timers

🧊 **Runs after render**: The effect runs after the component renders

🧊 **Dependency array**: Determines when the effect runs:
   - `[]` (empty array): runs only once after the initial render
   - `[someValue]`: runs when someValue changes
   - No array: runs after every render

```javascript
//useEffect rendering output example
import React, {useEffect} from 'react'

function App() {
    console.log('start')
    useEffect(()=>{
        console.log('this is useEffect')
    })
    console.log('end')
    return <h1>hello</h1>
}
export default App

//output 
// start 
// end 
// this is useEffect
```
</details>

## Component Lifecycle

<details>
<summary><b>⭕ Q44: What are component lifecycle phases?</b></summary>

👉 **Mounting Phase** (Component creation started)
- This phase occurs when an instance of a component is being created and inserted into the DOM

👉 **Updating Phase** (Component updates)
- This phase occurs when a component is being re-rendered as a result of changes to either its props or state

👉 **Unmounting Phase** (Removal from the DOM)
- This phase occurs when a component is being removed from the DOM
</details>

<details>
<summary><b>⭕ Q45: What is the role of componentDidMount(), componentDidUpdate(), and componentWillUnmount() method in component lifecycle?</b></summary>

🔹 **1. componentDidMount()**
- 📌 Called once after the component is mounted (inserted into the DOM)
- 📌 Ideal for: API calls, event listeners, initial DOM operations, etc.

```javascript
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component mounted");
    // Fetch data or set up listeners
  }

  render() {
    return <div>Hello</div>;
  }
}
```

🔹 **2. componentDidUpdate(prevProps, prevState)**
- 📌 Called after every update (re-render), except the first render
- 📌 Ideal for: Reacting to prop/state changes, making network calls, etc.

```javascript
class MyComponent extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      console.log("Prop changed, do something");
    }
  }

  render() {
    return <div>Updated Value: {this.props.value}</div>;
  }
}
```

🔹 **3. componentWillUnmount()**
- 📌 Called just before the component is removed from the DOM
- 📌 Ideal for: Cleanup, such as removing event listeners or cancelling timers

```javascript
class MyComponent extends React.Component {
  componentWillUnmount() {
    console.log("Component will unmount");
    // Cleanup logic
  }

  render() {
    return <div>Goodbye</div>;
  }
}
```
</details>

<details>
<summary><b>⭕Q46: What are the equivalents of componentDidMount(), componentDidUpdate(), and componentWillUnmount() in functional components using useEffect()?</b></summary>

📘 **useEffect()** can handle all 3 lifecycles based on how you use it:

✅ **Equivalent of componentDidMount()**:
```javascript
useEffect(() => {
  console.log("Component mounted");
  // API call or setup
}, []); // Empty dependency array = run once
```

✅ **Equivalent of componentDidUpdate()**:
```javascript
useEffect(() => {
  console.log("Prop or state changed");
}, [props.value]); // Run when `props.value` changes
```

✅ **Equivalent of componentWillUnmount()**:
```javascript
useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);
  
  return () => {
    console.log("Cleanup before unmount");
    clearInterval(timer);
  };
}, []);
```
</details>

## Performance Optimization

<details>
<summary><b>⭕ Q47: What is useMemo() in React?</b></summary>

✅ **useMemo()** is a React hook that memorizes (caches) the result of a function, so it only recalculates when its dependencies change. This is useful for expensive calculations to avoid doing the same work on every render.

🧠 **Syntax**:
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

🧠 **Example**:
```javascript
import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ num }) {
  const expensiveCalculation = (n) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) result += n;
    return result;
  };

  const result = useMemo(() => expensiveCalculation(num), [num]);

  return <div>Result: {result}</div>;
}
```

❎ Without useMemo, the calculation runs on every render
✅ With useMemo, the calculation runs only when num changes
</details>

<details>
<summary><b>⭕ Q48: What is useCallback() in React?</b></summary>

✅ **useCallback()** returns a memoized version of a function, preventing it from being recreated on every render. It's useful when you pass functions to child components to prevent unnecessary re-renders.

🧠 **Syntax**:
```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

🧠 **Example**:
```javascript
import React, { useState, useCallback } from 'react';

function Button({ handleClick }) {
  console.log('Button rendered');
  return <button onClick={handleClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const memoizedClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return <Button handleClick={memoizedClick} />;
}
```

❎ Without useCallback, handleClick is recreated every time
✅ With useCallback, handleClick stays the same unless dependencies change
</details>

<details>
<summary><b>⭕ Q49: What is React.memo()?</b></summary>

✅ **React.memo()** is a higher-order component that prevents a functional component from re-rendering if its props haven't changed.

🧠 **Syntax**:
```javascript
const MemoizedComponent = React.memo(Component);
```

🧠 **Example**:
```javascript
import React, { useState } from 'react';

const Child = React.memo(({ name }) => {
  console.log('Child rendered');
  return <div>Hello {name}</div>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child name="React" />
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```

📌 Here, the Child component won't re-render unless the name prop changes.
</details>

<details>
<summary><b>⭕ Q50: What is Lazy Loading in React?</b></summary>

✅ **Lazy loading** is a performance optimization where components are loaded only when needed — instead of loading everything at once. React provides React.lazy() and Suspense for this.

🧠 **Syntax**:
```javascript
const LazyComponent = React.lazy(() => import('./MyComponent'));
```

🧠 **Example**:
```javascript
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <div>
      <h1>Main App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

📌 **Benefits**:
- Reduces initial load time
- Loads heavy components only when needed

![Lazy Loading Illustration](/assest/react/image24.png)
</details>

## React Concepts

<details>
<summary><b>⭕Q51: What is Strict Mode in React?</b></summary>

✅ **React Strict Mode** is a tool that helps developers identify potential problems in their applications during development. It does not render anything on the UI and does not affect production builds — it only runs in development mode.

🚦 **Why Use Strict Mode?**
- 🧊 Detecting unsafe lifecycle methods
- 🧊 Warning about legacy string refs
- 🧊 Identifying unexpected side effects
- 🧊 Detecting state updates inside useEffect cleanup
- 🧊 Double-invoking certain functions to simulate strict behavior (in development)
</details>

<details>
<summary><b>⭕Q52: What are Higher Order Components?</b></summary>

🧊 **Higher-Order Component (HOC)** is a function that takes in a component and returns a new component.

📌 Think of HOCs like wrappers that add extra features or data to a component without modifying the original one.

```javascript
import React from 'react';

// Higher Order Component
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
}

// Normal component
function Hello({ name }) {
  return <h1>Hello, {name}</h1>;
}

// Enhanced version of Hello
const HelloWithLogger = withLogger(Hello);

// Usage
<HelloWithLogger name="React" />;
```

✅ This will log the props every time the component renders, without changing the original Hello component.

![HOC Illustration](/assest/react/image25.png)
</details>

<details>
<summary><b>⭕Q53: What is the difference between Controlled and Uncontrolled Components in React?</b></summary>

📌 In React, form elements like `<input>`, `<textarea>`, and `<select>` can be either:
- 🧊 **Controlled Components** — where React controls the form state
- 🧊 **Uncontrolled Components** — where the DOM manages the state

🔧 **Controlled Component**:
✅ React manages the state via useState or this.state

```javascript
import React, { useState } from 'react';

function ControlledInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <p>You typed: {name}</p>
    </div>
  );
}
```

🧠 **Explanation**:
- 📌 value={name} binds the input value to React state
- 📌 onChange updates the state
- 📌 React controls everything

🔧 **Uncontrolled Component**:
✅ React does not manage the input value — instead, it accesses the value using a ref

```javascript
import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert('Input Value: ' + inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```

🧠 **Explanation**:
- 📌 No useState — React doesn't track the input value
- 📌 You access the DOM value via ref
</details>

<details>
<summary><b>⭕Q54: What are Keys in React?</b></summary>

✅ In React, a **key** is a special attribute you add to elements when creating lists. Keys help React identify which items have changed, been added, or removed, making rendering more efficient.

📉 **Bad Example Using Index**:
```javascript
// Not ideal if items can be added/removed
{items.map((item, index) => (
  <li key={index}>{item.name}</li>
))}
```

✅ **Better Example Using Unique ID**:
```javascript
{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}
```

🧠 **What Happens Without Keys?**
- 📌 React may re-render entire lists unnecessarily
- 📌 You can get bugs with input fields losing focus or incorrect updates
- 📌 Warning: "Each child in a list should have a unique key prop."

![Keys in React illustration](/assest/react/image26.png)
</details>