const fs = require('fs')
const { DB } = require('../config/dbConfig')
const path = require('path')
const mongoose = require('mongoose')

const models = {};
const Root = path.resolve(__dirname);
everyModelFile(Root);
module.exports = models;


function everyModelFile(root) {
    // 获取当前文件下的所有文件
    const directory = fs.readdirSync(root);

    directory.forEach((dir, index) => {
        const currentPath = `${root}/${dir}`;
        if((/^index.js/.test(dir))) return;
        if(isDir(currentPath)) {
            everyModelFile(currentPath);
        }else {
            const name = path.basename(dir, '.js');
            const schema = new mongoose.Schema(require(currentPath));
            models[name] = DB.model(name, schema);
        }
    })
}

function isFile(_path) {
    return fs.statSync(_path).isFile();
}

function isDir(_path) {
    return fs.statSync(_path).isDirectory();
}