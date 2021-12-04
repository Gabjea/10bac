const { Router } = require('express')
const controller = require('../controllers/comment.js')
const middlewares = require ('../../middlewares')

const router = Router()


router.get('/:lectie',middlewares.Auth,controller.getAllCommentsFromLesson)
router.post('/',middlewares.Auth,controller.createComment)
router.delete('/:id', middlewares.Auth, controller.deleteComment)

router.post('/reply/:comment_id', middlewares.Auth, controller.addReplyToComment)
router.delete('/reply/:comment_id/:reply_id', middlewares.Auth, controller.deleteReplyFromComment)
module.exports = router