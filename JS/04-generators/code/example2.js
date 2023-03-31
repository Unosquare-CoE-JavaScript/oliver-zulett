// example generate infinite random numbers

const LIMIT = 100

const infiniteRandomGenerator = function* (limit) {
  while (true) {
    yield Math.round(Math.random() * limit) + 1
  }
}

let randomNumber = infiniteRandomGenerator(LIMIT)

setInterval(() => {
  console.log(`Random Number: ${randomNumber.next().value}`)
}, 1000)
