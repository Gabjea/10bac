const { Router } = require('express')
const controller = require('../controlllers/user/index')
const middlewares = require ('../../middlewares')

const router = Router()


// User Auth
router.post("/login",controller.loginController)
router.post("/register",controller.registerController)


module.exports = router