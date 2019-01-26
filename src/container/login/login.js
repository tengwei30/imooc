import React from 'react'
import { Redirect } from 'react-router-dom'
import Logo from '../../component/logo/logo'
import { Button, WhiteSpace, InputItem, WingBlank, List } from 'antd-mobile'
import { connect } from 'react-redux'
import { loginIn } from '../../redux/user.redux'

@connect(
    state => state.user,
    { loginIn }
)
class Login extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this) // 这种方法的话每回都会传入定义好的这个函数，如果下面用箭头函数的话每回刷新都会传入新的对象
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleChange (key, val) {
        this.setState({
            [key]: val
        })
    }
    handleLogin () {
        this.props.loginIn(this.state)
    }
    register () {
        this.props.history.push('/register')
    }
    render () {
        return (
            <div>
                { this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null }
                <Logo></Logo>
                <h2>登录页</h2>
                <WingBlank>
                    { this.props.msg ? <p>{ this.props.msg }</p> : null }
                    <InputItem
                        onChange={ v => this.handleChange('user', v) }
                    >用户</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={ v => this.handleChange('pwd', v) }
                    >密码</InputItem>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={ this.register }>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login