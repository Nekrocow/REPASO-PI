// const { Character, Episode } = require('../db')
const { default: get } = require('axios')
// const { Op } = require('sequelize')

const getChars = async (req, res, next) => {
  const getCharInfo = await get('https://rickandmortyapi.com/api/character')
  console.log(getCharInfo)
  if (getCharInfo.length > 0) {
    var response = getCharInfo.data.results.map(c => {
      return {
        id: c.id,
        name: c.name,
        species: c.species,
        origin: c.origin.name,
        image: c.image
      }
    })
    res.json(response)
  } else res.status(404).json('Character not found!')
}


const postChar = async (req, res, next) => {
    const newChar = 'Hola, soy newChar'
    res.status(201).json(newChar)
}

module.exports = { getChars, postChar }