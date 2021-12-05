const { Router } = require('express')
const controller = require('../controllers/user.js')
const middlewares = require ('../../middlewares')

const router = Router()


// User Auth
router.post("/login",controller.loginController)
router.post("/register",controller.registerController)

// User Profile
router.get("/profile",middlewares.Auth,controller.getUserProfileController)
router.get("/profile/:id",middlewares.Auth,controller.getUserProfileFromIdController)
router.post("/profile/picture",middlewares.Auth,controller.uploadProfilePictureController)
router.patch("/profile",middlewares.Auth,controller.updateUserProfileController)

router.get("/subs_bac", controller.getAllSubBac)
router.post("/sub_bac/:id", controller.submitSubBac)

router.get("/quizzes", controller.getAllQuizes)
router.post("/quiz/:quiz_id", controller.submitQuiz)
router.get('/note', controller.getAllNote)


router.get('/events', controller.getAllEvents)

module.exports = router