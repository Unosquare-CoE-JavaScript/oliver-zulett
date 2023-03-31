// example how to pass a value to a generator maybe I need to research more about this

function* receiveValueGenerator() {
  let value = yield 'a yeild value'
  console.log(`Value received from the next() method: `, value)
  yield value
}

const generator = receiveValueGenerator()

console.log(generator.next(100))
console.log(generator.next('some word'))
console.log(
  generator.next({
    name: 'oliver',
    surname: 'zulett',
  })
)
console.log(generator.next(() => console.log('this is a function')))
