// const { Character, Episode } = require('../db')
const { default: get } = require('axios')
// const { Op } = require('sequelize')

const getEpis = async (req, res, next) => {
  const getEpisInfo = await get('https://rickandmortyapi.com/api/episode')
  if (getEpisInfo.length > 0) {
    var response = getEpisInfo.data.results.map(c => {
      return {
        id: c.id,
        name: c.name,
        episode: c.episode,
        characters: c.characters
      }
    })
    res.json(response)
  } else res.status(404).json('Episode not found!')
}

module.exports = { getEpis }