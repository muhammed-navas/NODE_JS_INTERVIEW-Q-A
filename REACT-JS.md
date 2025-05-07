* default export and named export in react ? // ----------- (q.15)




Q1. What is React?

(a)
✅ react is an open-source javascript library 
✅ react is used for building user interface (UI)
✅ react is simplifies createtion of SPA ( single page application ) by using reusable component

Q2. What are the Key Features of React?

(a) 
![alt text](/assest/react/image.png)

Q3. What is DOM? What is the difference between HTML and DOM? 

(a) 
✅ DOM(Document Object Model) represents the web page as a tree-like structure which allows JavaScript to dynamically access and manipulate the content and structure of a web page.

![alt text](/assest/react/image1.png)

🔄 Difference Between HTML and DOM:

![alt text](/assest/react/image2.png)

Q4. What is Virtual DOM? Difference between DOM and Virtual DOM?

(a)

✅ React uses a virtual DOM to efficiently update the UI without re- render the entire page, which helps improve performance and make the application more responsive.

✅ The Virtual DOM (V-DOM) is a lightweight JavaScript object that is a copy of the real DOM. It is used primarily by libraries like React to optimize performance during UI updates.

✅ The new virtual DOM is compared with the previous one (using a process called diffing).

![alt text](/assest/react/image3.png)

![alt text](/assest/react/image4.png)


Q5. What is Reconciliation in React?

(a)

✅ Reconciliation is the process React uses to update the DOM efficiently when the state or props of a component change.

⚙️ Steps of Reconciliation:

👉 Render Phase:

🤎A new Virtual DOM tree is created from the updated component.

👉 Diffing Algorithm:

🤎 Compares the new tree with the previous one.

🤎 Identifies which parts (nodes/components) changed.

👉 Commit Phase:

🤎 Applies only the necessary updates to the real DOM.

 Q6. What are React Components? 

(a)

✅ In React , a component is a reusable building block for creating user interface 

✅ React Components define how your UI looks and behaves.

✅ They can receive props, manage state, and respond to user interactions.

✅ Components promote reusability, modularity, and maintainability in your code.

 Q7. What is SPA(Single Page Application)?

 (a)

✅ A Single Page Application (SPA) is a web application that have only one single web page.

✅ Whenever user do some action on the website, then in response content is dynamically updated without refreshing or loading a new page.


Q8. What is the role of JSX in React? 

(a)
✅ JSX stands for javascript XML  

✅ JSX allows you to write HTML-like code inside JavaScript, which makes it easier to visualize and build component UIs in a clean and readable way.

✅ jsx is convert to javascript via tools like Babel , Because browsers understand javascript not jsx

//jsx
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

//Transpiles To (Behind the Scenes)
const Welcome = (props) => {
  return React.createElement('h1', null, `Hello, ${props.name}!`);
};

✅ This transformation is handled by Babel, a JavaScript compile


Q9. What is the difference between Declarative & Imperative syntax?

(a)

👉 Declarative

✅ 1. Declarative syntax focuses on describing the desired result without specifying the step-by-step process.
✅ 2. JSX in React is used to write declarative syntax.

     * Focuses on: What the result should be.

     * Describes the desired outcome, not the step-by-step process.

     * Code is often cleaner, more abstracted, and reactive.

     * React promotes declarative style.

function App() {
  return <button onClick={() => alert("Clicked!")}>Click Me</button>;
}

👉 Imperative

✅ 1. Imperative syntax involves step by step process to achieve a particular goal.
✅ 2. JavaScript has an imperative syntax.

    * Focuses on: How to achieve a result.

    * You write step-by-step instructions.

    * Used in vanilla JavaScript DOM manipulation, C, etc.

    * Often more manual and verbose.

const button = document.createElement('button');
button.innerText = 'Click Me';
button.addEventListener('click', () => alert('Clicked!'));
document.body.appendChild(button);




Q10. What is Arrow Function Expression in JSX? 

(a) 
✅ An Arrow Function Expression in JSX refers to using JavaScript arrow functions (=>) directly inside JSX, often for event handling, inline rendering, or short functional logic.

✅ Arrow functions are concise and preserve the this context from their parent scope, which makes them especially useful in React components.

<button onClick={() => alert('Clicked!')}>Click Me</button>

* Here, () => alert('Clicked!') is an arrow function expression used inline inside JSX.


Q11. What is the difference between React and Angular?

(a) 
✅ React and Angular are two of the most popular frameworks/libraries for building modern web applications — but they differ significantly in architecture, philosophy, and usage.

✅ React is a flexible library for building UIs; it gives you freedom to choose tools.

✅ Angular is a complete framework with more built-in features but a steeper learning curve.

![alt text](/assest/react/image6.png)


Q12. Whether React is a Framework or a Library? What is the difference?

(a)
✅ React = Library: Focuses only on the view/UI layer.

✅ You’re free to pick your own stack for routing (e.g., React Router), state (e.g., Redux, Zustand), or data (e.g., Axios, TanStack Query).

✅ A framework (like Angular) includes most of these features out of the box.

![alt text](/assest/react/image7.png)


Q13. How React provides Reusability and Composition?

(a) 

✅ React provides reusability and composition through its component-based architecture.

✅ **Reusability:-** Once you create a component, you can re-use it in different parts of your application or even in multiple projects.

👉 React promotes DRY (Don’t Repeat Yourself) by encouraging you to:

✅ Write once, reuse anywhere – Components are just JavaScript functions.

✅ Parameterize components with props to change behavior or content.

✅ Create UI libraries of reusable components (e.g., buttons, inputs, cards).

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// Reuse:
<Button label="Save" onClick={handleSave} />
<Button label="Cancel" onClick={handleCancel} />


✅ **Composition:-** Composition is creating new and big components by combining existing small components. Its advantage is, change to one small component will not impact other
components.

✅ Composition is the idea of nesting components inside others to build larger pieces of the UI from small, simple parts.

✅ React prefers composition over inheritance, allowing flexibility and modularity.

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



Q14. What are State, Stateless, Stateful and State Management terms?

(a)
🧠 State in React:-  

✅ Refers to how you store, update, and share state across your application.
✅ "state" refer to the current data of the component

🧠 Stateless Component:-

✅ A stateless component does not manage or store state.
✅ It only receives props and renders UI.

import React from 'react';

export function App(props) {
  let count = 0 

  const clickHandle  = () =>{
    count += 1 
    console.log(count,'this is count')
  }
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={clickHandle}> clicck me </button>
    </div>
  );
}

🧠 Stateful Component

✅ A stateful component has its own internal state using useState, useReducer, or class-based this.state.

✅ It controls dynamic behavior.

✅ Stateful or state management means, when a user performs some actions on the UI, then the React application should be able to update and re-render that data or state on the UI.

import React,{useState} from 'react';

export function App(props) {
  const [count ,setCount] = useState(0)

  const clickHandle  = () =>{
    setCount(count+1)
  }
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={clickHandle}> clicck me </button>
    </div>
  );
}


 Q15. What are Props n JSX?

 (a) 

✅ props( properties ) are way to pass data from parent component to child component

✅ Props are read-only 

✅ Props are immutable inside the component.

✅ Enables component reusability and dynamic rendering.

✅ Can pass any data: strings, numbers, arrays, functions, even components.

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


<details>
<summary><b>⭕ Q14: What is NPM? What is the role of node_modules folder?</b></summary>

* **NPM (Node Package Manager)** is used to manage the dependencies for your Node project.

* **node_modules** folder contains all the dependencies of the node project.
</details>

Q5. What is the role of index.js file and ReactDOM in React? 

(a) 

✅ ReactDOM is a JavaScript library that renders components to the DOM or browser.

✅ The index.js file is the JavaScript file that replaces the root element of the index.html file with the newly rendered components.

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


Q3. What is Babel?

(a) 

✅ Babel in React is used to transpile JSX syntax into regular JavaScript which browser can understand.

✅ Converts JSX into valid JavaScript.

✅ Transforms modern JS syntax (like arrow functions, async/await, destructuring).

✅ Ensures browser compatibility by compiling code down to ES5.

![alt text](/assest/react/image8.png)


Q4. What is the role of Fragment in JSX?

(a) 
✅ In JSX, you can only return one parent element from a component. If you need to return multiple sibling elements, you can:

✅ Wrap them in a <div> (adds extra node to DOM)

✅ Use a <React.Fragment> or <> (cleaner)

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
or 
function ListItems() {
  return (
    <>
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
    </>
  );
}

Q5. What is Spread Operator in JSX?

(a) 

✅ the Spread Operator (...) is used to expand or spread an array or object 

✅ The spread operator (...) in JavaScript is used to unpack elements from arrays or copy/spread properties from objects. In JSX (React), it's often used to pass props dynamically. 


import React from 'react';

export function App(props) {
  
  const user = {
  name: "Alice",
  age: 25,
  location: "New York"
};
  return (
    <div className='App'>
     <Profile {...user}  /> 
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

✅ Used for copying, merging, and updating objects or arrays.

//array 
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

//object 
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // { a: 1, b: 2, c: 3 }



Q6. What are the types of Conditional Rendering in JSX? 

(a) 

![alt text](/assest/react/image9.png)

1️⃣ if-else Statement (outside JSX)

  ✅ Use this when logic is too complex to include inline inside JSX.

  function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}

2️⃣ Ternary Operator condition ? true : false

   ✅ Use this inline in JSX for concise rendering:

   function Status({ online }) {
  return (
    <div>
      {online ? <p>Online ✅</p> : <p>Offline ❌</p>}
    </div>
  );
}

3️⃣ Logical AND Operator &&

    ✅ Render a component only if the condition is true (good for optional rendering).

    function Notification({ getData }) {
  return (
    <div>
      {getData.length > 0 && <p>You getData is success</p>}
    </div>
  );
}

4️⃣ switch-case (outside JSX)

✅ Useful when you have multiple conditions to handle.

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

🧠 Summary Table:

![alt text](/assest/react/image10.png)



Q7. How do you iterate over a list in JSX? What is map() method?

(a) 

✅ Creates a new array by applying a function to each item in an existing array.

✅ map() does not modify the original array

✅ Used often in React for rendering lists.

✅ the key(prop) Required for list items for React's internal tracking


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


Q9. What is Transpiler? What is the difference between Compiler & Transpile

(a) 
✅ A Transpiler is a tool that converts source code from one high-level programming language(JSX) to another high-level
programming language(JavaScript).
// Example: Babel

✅ A compiler is a tool that converts high-level programming language(Java) into a lower- level language(machine code or bytecode).

![alt text](/assest/react/image11.png)



Q10. Is it possible to use JSX without React?

(a) 

✅ Yes, it is technically possible to use JSX without React, but it requires a custom setup.

![alt text](/assest/react/image12.png)