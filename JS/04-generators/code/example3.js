// example of an iterator

const array = ['a', 'b', 'c', 'd']

const arrayIterator = function* (array) {
  for (let index = 0; index < array.length; index++) {
    yield array[index]
  }
}

let iterator = arrayIterator(array)
let generatorDone = false

while (!generatorDone) {
  const { value, done } = iterator.next()
  !done && console.log(`Value inside array: ${value}`)
  generatorDone = done
}

console.log('code out of iterator')
