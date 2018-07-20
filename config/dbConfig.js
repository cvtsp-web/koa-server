const mongoose = require('mongoose')

/**
 * @fileOverview: 数据基本配置
 */
const dbBaseOptions = {
    name: 'cvtsp_ts_server',
    host: 'localhost',
    port: 27017
}
exports.dbBaseOptions = dbBaseOptions;

/**
 * @fileOverview: 数据库链接
 */
const DB = mongoose.createConnection(
    `mongodb://${dbBaseOptions.host}:${dbBaseOptions.port}/${dbBaseOptions.name}`, 
    {useNewUrlParser: true}
);

DB.on('open', () => {
    console.log('mongodb is started!')
})

exports.DB = DB;


