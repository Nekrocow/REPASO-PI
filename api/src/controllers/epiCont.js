const { default: get } = require('axios')

const getEpis = async (req, res, next) => {
  try {
    const getEpisInfo = await get('https://rickandmortyapi.com/api/episode')
    if (getEpisInfo) {
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
  } catch (error) {
    next(error)
  }
}

module.exports = { getEpis }