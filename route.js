const { getAll, create } = require('./controller')
const express = require('express')
const router = express.Router()


router.get('/cards', getAll)

router.post('/cards', create)

module.exports = router