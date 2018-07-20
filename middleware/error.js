
module.exports = errorLog;

function errorLog(ctx, next) {
    try{
        await next();
    }catch(e) {
        const status = e.status || 500;
        const message = e.message || '服务器错误';

        ctx.body = {
            flag: false,
            errorCode: status
        };
        if (status == 500) { 
            // 触发 koa 统一错误事件，可以打印出详细的错误堆栈 log
            ctx.app.emit('error', e, ctx);
        }
    }
}