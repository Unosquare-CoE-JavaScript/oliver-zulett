# Event Loop

The event loop in JavaScript is the mechanism that controls how asynchronous tasks are executed in the browser or in the Node.js runtime environment.

Generally speaking, the event loop maintains a queue of tasks, which include both synchronous and asynchronous tasks. The event loop runs continuously, checking if there are tasks in the queue to process. If there are tasks, the event loop processes one task at a time, starting with the oldest task, and continues running tasks until the queue is empty.

# Asynchronous Programming

## what is asynchronous programming?

is a programming model used to design applications that can efficiently process multiple tasks in parallel without blocking the main thread of execution.

## use in JS

In JavaScript, asynchronous programming is achieved through the use of:
 - callbacks
 - promises 
 - async/await.

### callbacks: 
Callbacks are functions that are passed as arguments to other functions and are called when an asynchronous task is completed. For example, the setTimeout() function uses a callback to call a function after a certain time:

```javascript
setTimeout(function() {
  console.log('Hello!');
}, 1000);
```
### Promises: 
promises are objects that represent an asynchronous task that may be completed at some point in the future. Promises have two possible states: fulfilled or rejected. For example, the fetch() function returns a promise that is resolved when an HTTP request is completed:

```javascript
fetch('https://api.example.com/data')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.error(error);
  });
```

### Async/await: 
The async keyword is used to mark a function that returns a promise, while the await keyword is used to wait for an asynchronous task to complete before continuing to the next line of code. For example:

```javascript
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.error(error);
  }
}
```



