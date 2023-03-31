## Async Await

- async allow us to use synchronous code inside an asynchronous function
- use async keyboard in a function make the function return a promise and allows to use await keyboard inside the function
- the only reason to use async in a function is if you are gonna use await inside it
- the await keyboard can only be used inside an async function
- await awaits for a promise
- await causes the async function to pause
  = use Async Await could be dangerous because converts the Asynchronous code in Synchronous

## for await of

if we got an array of promises we can use this operator to iterate across all promises inside the array

example:

```js
const promises = [
  new Promise(resolve => setTimeout(() => resolve(1), 1000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 3000)),
]

async function printValues() {
  for await (const value of promises) {
    console.log(value)
  }
}

printValues() // Output: 1, 2, 3
```
