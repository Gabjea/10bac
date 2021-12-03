const { Router } = require('express')
const router = Router()

const userApi = require('./routes/user')
const adminApi = require('./routes/admin')


router.use('/user', userApi)
router.use('/admin', adminApi)
module.exports = router