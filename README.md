# Intro To React

---

## Objectives
* Explain what react is
* Describe how react works using words like Virtual DOM, Render and State
* Use create-react-app to generate react applications
* Explain the purpose of each file in a generated react app
* Use JSX to build react components
* List the ways JSX is different from plain HTML
* Use `useState` to manage component state
* Handle DOM events on react elements
* Use the React Developer Tools to effectively debug React apps

---

# What is React?

---

# Describe how react works using words like Virtual DOM, Render and State

----

## State

* All the data in our application at a specific point in time
* State changes as the user interacts with the application

----

## Virtual DOM

* A virtual (JSON) representation of the DOM (Document Object Model)
* React compares the previous and next VDOM trees to efficiently update the real DOM

----

## Render

* The process of applying the latest state changes to the UI.

----

### How it all works

1. When state changes, react re-runs our render function to get a new VDOM tree.
2. React then compares this new VDOM tree with the current VDOM.
3. Any changes detected are then applied to the real DOM.

> React allows us to write declarative code (we declare what we want react to do, and it takes care of the details) instead of imperative code (we write exactly the code needed to do the thing we want to do... lets see an example)

---

# Use create-react-app to generate react applications

---

# Explain the purpose of each file in a generated react app

---

# Use JSX to build react components

---

# List the ways JSX is different from plain HTML

See the article [here](https://www.freecodecamp.org/news/html-vs-jsx-whats-the-difference/)

---

# Use `useState` to manage component state

---

# Handle DOM events on react elements

---

# Use the React Developer Tools to effectively debug React apps

---
