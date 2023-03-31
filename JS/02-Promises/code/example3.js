// example how to send POST request with fetch
'use strict'

const URL = 'https://jsonplaceholder.typicode.com/posts'
const HEADERS = {
  'Content-type': 'application/json; charset=UTF-8',
}
const MOCK_TODO = {
  title: 'foo',
  body: 'bar',
  userId: 1,
}

fetch(URL, {
  method: 'POST',
  body: JSON.stringify(MOCK_TODO),
  headers: HEADERS,
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.error('error creating new task: ', err))
