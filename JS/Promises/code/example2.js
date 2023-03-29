// example of how to use fetch to call an api and chain and convert responses

'use strict'

const URL = 'https://swapi.dev/api/';
const RESOURCE = 'films';
const EPISODE_ID = 4;

fetch(`${URL}/${RESOURCE}`)
    .then(response => response.json())
    .then(data => data.results)
    .then(results => results.find(result => result.episode_id === EPISODE_ID))
    .then(result => {
        if (!result) {
            throw new Error('movie doesnt exists')
        }
        return fetch(`${URL}/${RESOURCE}/${EPISODE_ID}`);
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

