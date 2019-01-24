import React from 'react'
import Logo from '../../component/logo/logo'
import { Button, WhiteSpace, InputItem, WingBlank, List, Radio } from 'antd-mobile'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'genius'
        }
    }
    render () {
        const RedioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <h2>注册页</h2>
                <List>
                    <InputItem>用户</InputItem>
                    <WhiteSpace />
                    <InputItem>密码</InputItem>
                    <WhiteSpace />
                    <InputItem>确认密码</InputItem>
                    <WhiteSpace />
                    <RedioItem checked={ this.state.type==='genius' }>
                        牛人
                    </RedioItem>
                    <RedioItem checked={ this.state.type==='boss' }>
                        BOSS
                    </RedioItem>
                    <WhiteSpace />
                    <Button type='primary'>确认</Button>
                </List>
            </div>
        )
    }
}

export default Register