// example how to create a promise

'use strict'

let promiseResolved = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Promise 1')
  }, 4000)
})

let promiseRejected = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('Promise 2')
  }, 4000)
})

promiseResolved.then(
  function (val) {
    console.log(`Resolved => ${val}`)
  },
  function (val) {
    console.log(`Rejected => ${val}`) // also we can use the catch
  }
)

promiseRejected.then(
  function (val) {
    console.log(`Resolved => ${val}`)
  },
  function (val) {
    console.log(`Rejected => ${val}`)
  }
)
