import React from 'react'
import { Redirect } from 'react-router-dom'
import Logo from '../../component/logo/logo'
import { Button, WhiteSpace, InputItem, WingBlank, List, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'

@connect(
    state => state.user,
    { register }
)
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius'
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange (key, val) {
        this.setState({
            [key]: val
        })
    }
    handleRegister () {
        this.props.register(this.state)
    }
    render () {
        const RedioItem = Radio.RadioItem
        return (
            <div>
                { this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null }
                <Logo></Logo>
                <h2>注册页</h2>
                <List>
                    { this.props.msg ? <p>{ this.props.msg }</p> : null }
                    <InputItem
                        onChange={ v => this.handleChange('user', v) }
                    >用户</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={ v => this.handleChange('pwd', v) }
                    >密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={ v => this.handleChange('repeatpwd', v) }
                    >确认密码</InputItem>
                    <WhiteSpace />
                    <RedioItem
                        checked={ this.state.type==='genius' }
                        onChange={ () => this.handleChange('type', 'genius') }
                    >
                        牛人
                    </RedioItem>
                    <RedioItem
                        checked={ this.state.type==='boss' }
                        onChange={ () => this.handleChange('type', 'boss') }
                    >
                        BOSS
                    </RedioItem>
                    <WhiteSpace />
                    <Button
                        type='primary'
                        onClick={ this.handleRegister }
                    >确认</Button>
                </List>
            </div>
        )
    }
}

export default Register