# Promises

promises are objects that represent an asynchronous task that may be completed at some point in the future. Promises have two possible states: fulfilled or rejected.

- a promise is a javascript object with properties and objects
- it represents the eventual completion or failure of an asynchronous operation
- provides a value when this operation completes

example of use:

```js
asyncFunction()
    .then(callback to handle a resolved promise)
    .catch(callback to handle a rejected promise)
    .finally(callback to handle a rejected or resolved promise)
```

note: a use case for finally could be when a db connection succeeds or fails in the finally method we just need to know that the promise was completed.

## Methods to handle multiple promises

### Promise.all
Promise.all() is a method that takes an array of promises and returns a new promise that resolves to an array of the resolved values of all the input promises, in the same order as the input promises.

If any of the input promises reject, then the returned promise from Promise.all() will reject with the reason of the first rejected promise.
```javascript 
Promise.all([promise1(), promise2(), ..., promiseN()]) 
```

### Promise.allSettled
Promise.allSettled() is a method that takes an array of promises and returns a new promise that resolves to an array of objects that represent the status of each input promise, whether it resolved or rejected.

Each object in the returned array has two properties:

status: A string that is either "fulfilled" if the promise was fulfilled, or "rejected" if the promise was rejected.
value or reason: If the promise was fulfilled, value contains the fulfillment value. If the promise was rejected, reason contains the rejection reason.
```javascript 
Promise.allSettled([promise1(), promise2(), ..., promiseN()]) 
```
Note: Promise.allSettled() returns an array of all the settled promises, regardless of whether they resolved or rejected, whereas Promise.all() will reject if any of the input promises reject.

### Promise.race
Promise.race() is a method that takes an array of promises and returns a new promise that resolves or rejects as soon as any of the input promises resolve or reject.

The value or reason of the first resolved or rejected promise will be passed as an argument to the resolve or reject callback of the promise returned by Promise.race().
```javascript 
Promise.race([promise1(), promise2(), ..., promiseN()]) 
```

### Promise.any
Promise.any() is a method that takes an array of promises and returns a new promise that resolves with the value of the first input promise that fulfills, or rejects with an AggregateError object if all input promises reject.
```javascript 
Promise.any([promise1(), promise2(), ..., promiseN()]) 
```


## IIFEs (Immediately Invoked Function Expression)

- are function expressions that are invoke immediately | invoked at the time are defined
- help to avoid to create global variables just creating a local scope

example:

```javascript
(function(){...})()
or
(function(){...}())
```
