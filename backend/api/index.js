const { Router } = require('express')
const router = Router()

const userApi = require('./routes/user')
const adminApi = require('./routes/admin')
const middlewares = require ('../middlewares')

router.use('/user', userApi)
router.use('/admin', middlewares.Auth,middlewares.hasAdmin, adminApi)
module.exports = router