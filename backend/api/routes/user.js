const { Router } = require('express')
const controller = require('../controllers/user.js')
const middlewares = require ('../../middlewares')

const router = Router()


// User Auth
router.post("/login",controller.loginController)
router.post("/register",controller.registerController)

// User Commands
router.get("/profile",middlewares.Auth,controller.getUserProfileController)
router.get("/uploads/icons/:img", middlewares.Auth, controller.getUploadedIcon)
router.post("/profile/picture",middlewares.Auth,controller.uploadProfilePictureController)
router.patch("/profile",middlewares.Auth,controller.updateUserProfileController)

module.exports = router