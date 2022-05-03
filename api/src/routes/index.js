const { Router } = require('express')
const router = Router()
const { tryCatchWrapper: tryCatch }  = require('../controllers/tryCatchWrapper')
const { getChars, postChar } = require('../controllers/charCont')
const { getEpis } = require('../controllers/epiCont')

// Configurar los routers

router.get('/characters', getChars)
// router.get('/characters/:id', tryCatch(getCharByID))
// router.post('/characters', tryCatch(postChar))

// router.get('/episodes', tryCatch(getEpis))

module.exports = router