/**
 * @fileOverview: 是否为空对象
 * @param {Object} obj={}
 */
exports.isEmptyObject = function(obj) {
    if(typeof obj !== 'object') return false;
    for(var i  in obj) {
        if(obj[i]) return false;
    }
    return true;
}

