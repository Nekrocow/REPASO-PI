const { default: get } = require('axios')
const { Character } = require('../db.js')

const getChars = async (req, res, next) => {
  try {
    // API chars
    const charsAPI = await get('https://rickandmortyapi.com/api/character')
    const getAPI = charsAPI.data.results.map(c => {
      return {
        id: c.id,
        name: c.name,
        species: c.species,
        origin: c.origin.name,
        image: c.image
      }
    })
    // DB chars
    const getDB = await Character.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
    }
    )
    const result = [...getAPI, ...getDB].sort((a, b) => a.name.localeCompare(b.name))
    res.json(result)
    // if (getCharInfo) {
    // }
    // res.status(404).json('Character not found!')
  } catch (error) {
    next(error)
  }
}

const postChar = async (req, res, next) => {
  try {
    const { name, species, origin, image } = req.body
    if (!name) { res.status(422).send('Missing data!') }
    var newChar = await Character.findOrCreate({
      where: { name: name },
      defaults: { species, origin, image }
    })
    res.json(newChar)
  } catch (error) {
    next(error)
  }
}

const deleteChar = async (req, res, next) => {
  try {
    const { name } = req.body
    if (!name) { res.status(422).send('Missing data!') }
    await Character.destroy({
      where: { name: name }
    })
    const remainingChars = 'Acá iría listado de personajes que quedan' // getChars()
    res.json(remainingChars)
  } catch (error) {
    next(error)
  }
}

module.exports = { getChars, postChar, deleteChar }