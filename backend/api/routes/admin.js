const { Router } = require('express')
const controller = require('../controllers/admin')
const middlewares = require ('../../middlewares')

const router = Router()




router.get("/users",controller.getAllUsers)

// Quizzes
router.post("/quiz", controller.createQuiz)
router.delete('/quiz', controller.deleteQuiz)
router.patch('/quiz', controller.updateQuiz)

// Sub Bac
router.post("/sub_bac", controller.createSubBac)
router.delete('/sub_bac/:id', controller.deleteSubBac)
router.get("/sub_bac", controller.getPendingSubsBac)

router.post('/sub_bac/:id', controller.giveUserGrade)

router.post('/event', controller.createEvent)


module.exports = router