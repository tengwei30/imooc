const express  = require('express')
const userRouter = require('./user')

// 新建app
const app = express()

app.use('/user', userRouter) // 用来开启一个中间件
const port = 9093
app.listen(port, () => console.log(`app listening on port ${port}`))