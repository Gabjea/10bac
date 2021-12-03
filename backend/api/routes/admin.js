const { Router } = require('express')
const controller = require('../controllers/admin')
const middlewares = require ('../../middlewares')

const router = Router()




router.get("/users",controller.getAllUsers)


module.exports = router