const express = require('express')
const Router = express.Router()
const utility = require('utility')
const model = require('./model')
const User = model.getModel('user')
const _filter = {'pwd': 0, '__v': 0}

Router.get('/list', function(req, res) {
    // User.remove({}, function(err,doc) {})
    User.find({}, function(err, doc) {
        return res.json(doc)
    })
})

Router.post('/register', function(req, res) {   // 注册接口
    const { user, pwd, type } = req.body
    User.findOne({user}, function(err, doc) {
        if (doc) {
            return res.json({code: 1, msg: '用户名重复'})
        }
        const userModel = new User({user, pwd: md5Salt(pwd), type})
        userModel.save(function(err, doc) { // 创建新数据用save方法～不要用create方法
            if (err) {
                return res.json({code: 1, msg: '后端出错啦'})
            }
            const { user, type, _id } = doc
            res.cookie('userid', _id)
            res.json({code: 0, data: { user, type, _id }})
        })
        // User.create(, function(err, doc) {
        //     if (err) {
                
        //     }
        //     return res.json({code: 0})
        // })
    })
})

Router.post('/login', function(req, res) {  // 登录接口
    const { user, pwd } = req.body
    User.findOne({user, pwd: md5Salt(pwd)}, _filter, function(err, doc) { // 参数第一个是查询条件，第二个是显示条件，pwd：0 表示返回接口不显示pwd
        if (!doc) {
            return res.json({code: 1, msg:'用户不存在或者密码错误'})
        }
        res.cookie('userid', doc._id)   // 设置cookie
        return res.json({code: 0, data: doc})
    })
})

Router.post('/update', function(req, res) {  // 登录接口
    const userid = req.cookies.userid
    if (!userid) {
        return json.dumps({code: 1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid, body, function(err, doc) {
        const data = Object.assign({}, {
            user: doc.user,
            type: doc.type
        }, body)
        return res.json({ code: 0, data })  
    })
})


Router.get('/info', function(req, res) {
    const { userid } = req.cookies
    if (!userid) {
        return res.json({code: 1})
    }
    User.findOne({_id: userid},_filter, function(err, doc) {
        if (err) {
            return res.json({code: 1, msg: '后端出错啦'})
        }
        if (doc) {
            return res.json({code: 0, data: doc})
        }
    })
})

function md5Salt(pwd) { // 对密码进行加盐处理
    const salt = '123abc_tengwei123'
    return utility.md5(utility.md5(pwd+salt))
}

module.exports = Router

// module.exports 和 exports default的区别
