# React - FSDCWEEB4142

## What is React?

- React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently.
- React was developed by Facebook and is widely used for building web applications, mobile apps, and even desktop applications.

## Key Features of React

1. **Component-Based Architecture**:
   - React applications are built using components.
   - Components are reusable piece of UI (User Interface)
   - User Interface means web pages in web applications or websites.
   - Components can be defined as one or more HTML elements, along with JavaScript code that defines their behavior.
   
2. **Virtual DOM**:
   - React uses a virtual DOM (Document Object Model) to optimize rendering.
   - When the state of a component changes, React updates the virtual DOM first and then efficiently updates the actual DOM to reflect those changes, minimizing performance issues.

   In layman terms:
   1. First, React creates a virtual representation of the UI in memory (Virtual DOM).
   2. When the state of a component changes, React updates the virtual DOM.
   3. React then compares the updated virtual DOM with the previous version to identify what has changed.
   4. Finally, React updates only the parts of the actual DOM that have changed instead of re-rendering the entire UI, which improves performance.

3. **Single Page Application (SPA)**:
   - React is often used to build single-page applications, where the entire application runs on a single web page, and content is dynamically updated without requiring a full page reload.
   - Which means, we will have only one HTML file (index.html) and all the content will be rendered dynamically using JavaScript.

## Components

1. Functional Components:
   - These are JavaScript functions that return JSX (JavaScript XML) to define the UI.
   - They can use hooks to manage state and lifecycle events.

2. Class Components:
   - These are ES6 classes that extend the `React.Component` class.
   - They have a `render()` method that returns JSX to define the UI.
   - They can also manage state and lifecycle events using class methods.

## Props: Passing Data from Parent to Child

- Props (short for properties) are used to pass data from a parent component to a child component.
- Props are read-only, meaning that a child component cannot modify the props it receives from its parent component.
- Props can be of any data type, including strings, numbers, arrays, objects, and even functions.

## Passing Data from Child to Parent

- To pass data from a child component to a parent component, we can use callback functions.
- The parent component can define a function and pass it as a prop to the child component.
- The child component can then call this function and pass data as an argument, which allows the parent component to receive the data from the child component.

## Props Drilling

- Props drilling refers to the process of passing data through multiple levels of components in a React application.
- It occurs when a parent component needs to pass data to a deeply nested child component, and the data has to be passed through intermediate components that do not need it.
- This can lead to code that is difficult to maintain and understand, as it requires passing props through multiple layers of components, even if those components do not need the data themselves.

Problem with Props Drilling:

- It can make the code more complex and harder to maintain, as it requires passing props through multiple layers of components, even if those components do not need the data themselves.
- It can lead to performance issues, as it may require unnecessary re-rendering of components that do not need the data, which can slow down the application.

Solution to Props Drilling:

- To avoid props drilling, we can use state management libraries like Redux or Context API, which allow us to manage the state of our application in a centralized way and avoid passing props through multiple layers of components.

## React Hooks

React hooks are introduced in React 16.8 (2019) to allow functional components to manage state and side effects.
React hooks are functions that let you "hook into" React state and lifecycle features from function components.
Some commonly used React hooks include:
useState: Allows you to add state to functional components.
useEffect: Allows you to perform side effects in functional components, such as fetching data or subscribing to events.
useContext: Allows you to access the context in functional components, which is a way to share data between components without passing props down manually at every level.
useRef: Allows you to create a mutable reference that persists across re-renders, which can be used to access DOM elements or store mutable values.

- Initially, React only had class components, which by default had access to state and lifecycle methods. Class components were more complex and less intuitive for many developers, especially those new to React.
- On the other hand, React also had functional components, which were simpler and easier to understand but did not have access to state or lifecycle methods. But the functional components are simple, easy to read and write, and they encourage a more functional programming style.
- To address this issue, React introduced Hooks in version 16.8(in the year 2019). Hooks allow functional components to use state and lifecycle methods, making them more powerful and versatile. With Hooks, developers can write functional components that have the same capabilities as class components, while still maintaining the simplicity and readability of functional programming.
- Hooks are functions that allow you to "hook into" React's state and lifecycle features from functional components. They provide a way to manage state, perform side effects, and access context in functional components without the need for class components.
- Hooks has a prefix "use" to indicate that they are hooks, and they can only be called at the top level of a functional component or from within other hooks.
- Some commonly used hooks include `useState` for managing state, `useEffect` for performing side effects, and `useContext` for accessing context.

## What is a State?

- State is a built-in object in React that allows components to manage and store data that can change over time.
- Unlike a normal data or props in a Component, state is mutable, which means that it can be updated and changed as needed. If there is a change in the state, React will re-render the component to reflect the updated state in the UI.

## useState Hook

The useState hook is used to add state to functional components. It returns an array with two elements: the current state value and a function to update that state.


# Uncontrolled Input Vs Controlled Input
Uncontrolled Input: An uncontrolled input is an input element that manages its own state internally. It does not rely on React state to control its value. Instead, it uses the DOM to handle user input and updates its value accordingly.



## useEffect Hook
The useEffect hook is used to perform side effects in functional components. It allows you to run code after the component has rendered, and it can be used for tasks such as fetching data, subscribing to events, or manipulating the DOM.

useEffect is a hook in React that allows you to perform side effects in function components. It serves the same purpose as lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
side effects can include things like fetching data from an API, subscribing to events, or manually manipulating the DOM.



## The ways to use useEffect:
 1. Without dependencies: The effect will run after every render.
 2. With an empty dependency array: The effect will run only once, after   the initial render.
 3. With specific dependencies: The effect will run only when the specified dependencies change.