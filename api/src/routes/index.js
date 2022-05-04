const { Router } = require('express')
const router = Router()
const { getChars, postChar, deleteChar } = require('../controllers/charCont')
const { getEpis } = require('../controllers/epiCont')

// Configurar los routers

router.get('/characters', getChars)
// router.get('/characters/:id', getCharByID)
router.post('/characters', postChar)
router.delete('/characters', deleteChar)

router.get('/episodes', getEpis)

module.exports = router