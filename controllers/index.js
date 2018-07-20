const router = require('koa-router')()
const LoginController = require('./user/LoginController')

router
.use('/login', LoginController.routes(), LoginController.allowedMethods())

module.exports = router;