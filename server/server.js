const express  = require('express')
const mongoose = require('mongoose')
// 使用mongoose 链接数据库 (加/imooc表示链接imooc这个集合，如果没有会自己创建)
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
    console.log('mongo connect success')
})

// 新建数据模型， 相当于mysql中表的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}))
// 新增数据 增
// User.create({
//     user: 'zhazha',
//     age: 14
// }, (err, doc) => {
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })

// 移除数据 删
// User.remove({age: 18}, (err, doc) => {
//     console.log(doc)
// })

// 更新数据
// User.update({'user': 'tengwei'}, {'$set':{age: 24}}, (err, doc) => {
//     console.log(doc)
// })

// 新建app
const app = express()

const port = 9093

app.get('/', (req, res) => res.send('hello world'))


app.get('/data', (req, res) => {
    User.find({}, (err, doc) => {  // 查找全部
        res.json(doc)
    })
    // User.find({'user': 'xiaoming'}, (err, doc) => { // 精确查询
    //     res.json(doc)
    // })
})

app.listen(port, () => console.log(`app listening on port ${port}`))