const express = require('express')
const router = express.Router()
const tokenControllers = require('../Controllers/tokenController.js')

router.patch("/create", tokenControllers.create)

module.exports = router