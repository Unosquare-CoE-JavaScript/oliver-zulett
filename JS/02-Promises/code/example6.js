// example how to handle Promise all, allSettled, any and race

'use strict'

const firstName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Joshua')
    }, 4000)
  })
}

const middleName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Oliver')
    }, 7000)
  })
}

const surName = function (shouldFail) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (shouldFail) {
        reject('Error retreiving name')
      }
      resolve('Zulett')
    }, 1000)
  })
}

Promise.all([firstName(), surName(), middleName()])
  .then(resolvedPromises => {
    console.log('PROMISE ALL')
    console.log(resolvedPromises)
  })
  .catch(err => console.error(err))
  .finally(() => console.log('All promises resolved'))

Promise.allSettled([firstName(), surName(), middleName()])
  .then(resolvedPromises => {
    console.log('PROMISE ALLSETTLED')
    console.log(resolvedPromises)
  })
  .catch(err => console.error(err))
  .finally(() => console.log('AllSettled promises resolved'))

Promise.race([firstName(), surName(), middleName()])
  .then(resolvedPromises => {
    console.log('PROMISE RACE')
    console.log(resolvedPromises)
  })
  .catch(err => console.error(err))
  .finally(() => console.log('Race promise resolved'))

Promise.any([firstName(), surName(), middleName()])
  .then(resolvedPromises => {
    console.log('PROMISE ANY')
    console.log(resolvedPromises)
  })
  .catch(err => console.error(err))
  .finally(() => console.log('Any promise resolved'))
