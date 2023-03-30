## Promises

- a promise is a javascript object with properties and objects
- it represents the eventual completion or failure of an asynchronous operation
- provides a value when this operation completes

example of use
```js
asyncFunction()
    .then(callback to handle a resolved promise)
    .catch(callback to handle a rejected promise)
    .finally(callback to handle a rejected or resolved promise)
```

note: a use case for finally could be when a db connection succeeds or fails in the finally method we just need to know that the promise was completed.

### ```js Promise.all([promise1(), promise2(), ..., promiseN()]) ```

would return an array with all the promises resolved

### ```js Promise.allSettled([promise1(), promise2(), ..., promiseN()]) ```

would return an array with all the promises resolved or rejected

### ```js Promise.race([promise1(), promise2(), ..., promiseN()]) ```

would return the first promise without handle the rejection

### ```js Promise.any([promise1(), promise2(), ..., promiseN()]) ```

would return the first resolved promise but handle the rejected promises 


## IIFEs (Immediately Invoked Function Expression)

- are function expressions that are invoke immediately | invoked at the time are defined
- help to avoid to create global variables just creating a local scope 

example 
```js
(function(){...})()
or
(function(){...}())
```