const express  = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const utility = require('utility')
const userRouter = require('./user')

// 新建app
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())  // 用来解析post过来的json数据
app.use('/user', userRouter) // 用来开启一个中间件
const port = 9093
app.listen(port, () => console.log(`app listening on port ${port}`))