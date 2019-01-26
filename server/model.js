// 操作数据库

const mongoose = require('mongoose')
// 使用mongoose 链接数据库 (加/imooc表示链接imooc这个集合，如果没有会自己创建)
const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
    console.log('mongo connect success')
})

const models = {
    user: {
        'user': {type: String, require: true},
        'pwd': {type: String, require: true},
        'type': {type: String, require: true},
        'avator': {type: String},
        'desc': {type: String},
        'title': {type: String},
        'company': {type: String},
        'money': {type: String}
    },
    chat: {
    }
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name) {
        return mongoose.model(name)
    }
}

