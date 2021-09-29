### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a front-end framework developed by Facebook to help make building modular applications easier.

- What is Babel?

Babel is a JavaScript compiler that converts modern JS into something unsupported browsers can understand.

- What is JSX?

JSX is JavaScript Syntax Extension and allows to embed HTML in JavaScript (transpiled by Babel). It is used to in React to create HTML components with JavaScript code.

- How is a Component created in React?

Components are building blocks in React and are created by declaring a function that returns some JSX or React element. This can then be added to HTML with the render method.

- What are some difference between state and props?

State is internal to component whereas props are external (passed in to the component).

- What does "downward data flow" refer to in React?

The parent component is smarter than the child component -- data and functions are passed down to the child and used when appropriate.

- What is a controlled component?

Controlled component receives values through props and passes changes back through callback. The parent component handles the callback and manages the state. A controlled component is a "dumb" component.

- What is an uncontrolled component?

Uncontrolled components stores its own state internally and query the DOM using ref.

- What is the purpose of the `key` prop when rendering a list of components?

A key prop ensures uniqueness in a list so that changes are reflected properly.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

An array index can change or items can be deleted. It is not a stable value.

- Describe useEffect.  What use cases is it used for in React components?

useState sets state on render. useEffect alternatively is a hook that allows side effects in a component. It is used to decouple behaviors from render -- it runs after every render. By providing a second argument (an array of values from surrounding scope), it can change useEffect to run whenever a dependency changes (it still runs on initial render).

So after rendering finishes, useEffect checks if any dependency values changed, and will run.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

useRef does not trigger re-render. It is a hook that can be used as reference to an element (such as DOM element or a timer ID) so it can be used to focus input or stop a timer.

- When would you use a ref? When wouldn't you use one?

You can use ref to stop timers or focus input however ref should not be used anytime you want access to a DOM element. If something needs to be changed, should think critically on what component owns the state.

- What is a custom hook in React? When would you want to write one?

A custom hook can abstract logic, handle repeated tasks, generate own JSX. For example, a toggler may be used by multiple components, this can sometimes be abstracted into a single custom hook.