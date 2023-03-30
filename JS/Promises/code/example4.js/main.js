// example how to read data from ui, make a request then create ui
// with a IIFE function

(function () {
    'use strict'
    const URL = 'https://pokeapi.co/api/v2/pokemon'
    const pokemonName = document.getElementById('pokemonName')
    const searchBtn = document.getElementById('searchBtn')
    const resultContainer = document.getElementById('pokemonInfo')

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(pokemonName.value);
        findPokemon(pokemonName.value)
    })

    const findPokemon = (name) => {

        resultContainer.innerHTML = '';
        fetch(`${URL}/${name}`)
            .then(resp => resp.json())
            .then(result => {
                console.log(result);
                buildResult(result)
            })
            .catch(err => {
                console.error(`Error finding pokemon: ${err.message} - ${err.code}`);
                buildErrorMsg()
            })
    }

    const buildResult = (pokemonInfo) => {

        const nameContainer = document.createElement('h1')
        const name = document.createTextNode(pokemonInfo.name)

        const specieContainer = document.createElement('h3')
        const specie = document.createTextNode(`specie: ${pokemonInfo.species.name}`)

        const experienceContainer = document.createElement('p')
        const experience = document.createTextNode(`Experience: ${pokemonInfo.base_experience}`)

        const heightContainer = document.createElement('p')
        const height = document.createTextNode(`Height: ${pokemonInfo.height}`)

        const weightContainer = document.createElement('p')
        const weight = document.createTextNode(`Weight: ${pokemonInfo.weight}`)

        nameContainer.appendChild(name)
        specieContainer.appendChild(specie)
        experienceContainer.appendChild(experience)
        heightContainer.appendChild(height)
        weightContainer.appendChild(weight)

        resultContainer.appendChild(nameContainer)
        resultContainer.appendChild(specieContainer)
        resultContainer.appendChild(experienceContainer)
        resultContainer.appendChild(heightContainer)
        resultContainer.appendChild(weightContainer)
    }

    const buildErrorMsg = () => {
        const errorContainer = document.createElement('h3')
        const error = document.createTextNode(`Pokemon not found`)

        errorContainer.appendChild(error)
        errorContainer.style.color = 'red'
        resultContainer.appendChild(errorContainer)
    }
})()