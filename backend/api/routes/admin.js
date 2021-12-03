const { Router } = require('express')
const controller = require('../controllers/admin')
const middlewares = require ('../../middlewares')

const router = Router()




router.get("/users",controller.getAllUsers)

// Quizzes
router.post("/quiz", controller.createQuiz)
router.get("/quizes", controller.getAllQuizes)
router.delete('/quiz', controller.deleteQuiz)
router.patch('/quiz', controller.updateQuiz)


router.post("/sub_bac", controller.createSubBac)

module.exports = router