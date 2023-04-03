// example how to use for await of

const URL = 'https://swapi.dev/api/films'
const FILM_ID = 232

const retrieveCharactersFromFilm = async filmID => {
  try {
    const filmData = await fetch(`${URL}/${filmID}`).then(response =>
      response.json()
    )
    if (!filmData?.characters) {
      throw new Error(`Non film data found for film ${filmID}`)
    }
    const charactersDataPromises = filmData.characters.map(characterUrl =>
      fetch(characterUrl).then(response => response.json())
    )
    let charactersNames = []
    for await (const character of charactersDataPromises) {
      charactersNames.push(character.name)
    }
    return charactersNames
  } catch (error) {
    throw new Error(
      `Error retrieving characters names for the film: ${filmID}. Error> ${error}`
    )
  }
}

retrieveCharactersFromFilm(FILM_ID)
  .then(charactersNames => console.log(charactersNames))
  .catch(e => console.error(e))

console.log('code out of promise')
