import React from 'react'
import Logo from '../../component/logo/logo'
import { Button, WhiteSpace, InputItem, WingBlank, List } from 'antd-mobile'

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.register = this.register.bind(this) // 这种方法的话每回都会传入定义好的这个函数，如果下面用箭头函数的话每回刷新都会传入新的对象
    }
    register () {
        this.props.history.push('/register')
    }
    render () {
        return (
            <div>
                <Logo></Logo>
                <h2>登录页</h2>
                <WingBlank>
                    <InputItem>用户</InputItem>
                    <WhiteSpace />
                    <InputItem>密码</InputItem>
                    <WhiteSpace />
                    <Button type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={ this.register }>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login