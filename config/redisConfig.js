const redis = require('redis')

/**
 * @fileOverview: redis基本配置
 */
const redisBaseOptions = {
    host: '10.10.11.172',
    port: 6380
}

const _reids = redis.createClient(redisBaseOptions);

_reids.on('connect', () => {
    console.log('redis is started!!')
})
module.exports = _reids;
