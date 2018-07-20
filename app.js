const Koa = require('koa')
const controllers = require('./controllers')             // controller配置
const serverConfig = require('./config/serverConfig')    //server配置

const app = new Koa()

// 路由配置
app.use(controllers.routes(), controllers.allowedMethods());

app.listen(serverConfig.PORT, serverConfig.HOST, function() {
   console.log('server is started at:' + serverConfig.PORT);
}) 
