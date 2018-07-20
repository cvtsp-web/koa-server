const router = require('koa-router')()
const LoginService = require('../../services/user/LoginService')

/**
 * @fileOverview: login登陆
 * @author: wukangjun
 * @date: 2018.7.18
 */
router.get('/', async (ctx, next) => {
    ctx.body = await LoginService.findUser(ctx);
})



module.exports = router;