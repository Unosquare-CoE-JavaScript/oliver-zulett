const URL = 'https://jsonplaceholder.typicode.com/posts'
const USER_ID = 2

const retrievingPost = async userId => {
  const postsData = await fetch(URL).then(response => response.json())
  return postsData.filter(post => post.userId === userId)
}

retrievingPost(USER_ID).then(posts => console.log(posts))

console.log('code out of promise')
