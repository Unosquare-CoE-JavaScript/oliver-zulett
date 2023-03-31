// example how to use async and await

const asyncFunction = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve('Promise resolved')
    }, 2000)
  )

const asyncFun = async () => {
  const promiseResolved = await asyncFunction() // await pause the execution till the promise its resolved
  console.log(promiseResolved)
  console.log('finish execution')
}

asyncFun()
