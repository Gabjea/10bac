const { Router } = require('express')
const controller = require('../controllers/admin')
const middlewares = require ('../../middlewares')

const router = Router()




router.get("/users",controller.getAllUsers)

router.post("/quiz", controller.createQuiz)
router.get("/quizes", controller.getAllQuizes)
router.patch('/quiz', controller.updateQuiz)
router.post("/sub_bac", controller.createSubBac)

module.exports = router