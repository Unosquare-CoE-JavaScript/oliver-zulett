// example retrieve results from server and wait for the response

const URL = 'https://swapi.dev/api/films'

const retrieveSWFilms = async () => {
  const filmsData = await fetch(URL).then(response => response.json()) // this then acts like a map in observables
  const filmsTitles = filmsData.results.map(filmData => filmData.title)
  console.log(filmsTitles)
}

retrieveSWFilms()

console.log('Code out of promise')
