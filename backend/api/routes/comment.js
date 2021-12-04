const { Router } = require('express')
const controller = require('../controllers/comment.js')
const middlewares = require ('../../middlewares')

const router = Router()


router.get('/:lectie',middlewares.Auth,controller.getAllCommentsFromLesson)
router.post('/',middlewares.Auth,controller.createComment)
router.delete('/:id', middlewares.Auth, controller.deleteComment)
module.exports = router