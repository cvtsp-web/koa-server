const LoginInfo =  require('../../models/user/login')
const models = require('../../models')

/**
 * @fileOverview: 登陆
 * @class LoginService
 * @method {} findUser: 查找用户
 * @return {Object} {flag, data}
 */
class LoginService {
    // 查找用户帐号是否存在
    async findUser(ctx) {
        const { userName, enterpriseCode, password } = ctx.query;
        const results = await models.login.findOne({
            userName
        });

        this.createToken(userName);
        return {
            flag: results ? true : false,
            data: results
        };
    }

    // 存储用户帐号
    async createUser(ctx) {
        const query = ctx.query;
        const results = await models.login.update(
            {userName: query.userName},
            {$set: query},
            {upsert: true}
        )

        return results;
    }

    /**
     * @fileOverview: 随机创建token
     * @param {String} userName 
     */
    createToken(userName) {
        var token = `${userName}_${new Date() * 1}_${Math.random().toFixed(5) * Math.pow(10, 5)}`;
        return token;
    }
}

module.exports =  new LoginService();