// 操作数据库

const mongoose = require('mongoose')
// 使用mongoose 链接数据库 (加/imooc表示链接imooc这个集合，如果没有会自己创建)
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
    console.log('mongo connect success')
})