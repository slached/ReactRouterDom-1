const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController.js')

router.post("/create", userController.create)
router.get("/getAll", userController.getUserData)
router.get("/getOne/:id", userController.getOneUser)

module.exports = router