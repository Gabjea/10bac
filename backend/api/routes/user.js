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

router.get("/subs_bac",middlewares.Auth,middlewares.hasSubscription, controller.getAllSubBac)
router.post("/sub_bac/:id",middlewares.Auth,middlewares.hasSubscription, controller.submitSubBac)

router.get("/quizzes",middlewares.Auth,middlewares.hasSubscription, controller.getAllQuizes)
router.post("/quiz/:quiz_id",middlewares.Auth,middlewares.hasSubscription, controller.submitQuiz)
router.get('/note',middlewares.Auth,middlewares.hasSubscription, controller.getAllNote)



router.get('/events',middlewares.Auth,middlewares.hasSubscription, controller.getAllEvents)
















module.exports = router