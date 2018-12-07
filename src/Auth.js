import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginIn } from './Auth.redux.js'

@connect(
    state => state.auth,
    { loginIn }
)
class Auth extends React.Component{
    render () {
        const { loginIn, isAuth } = this.props
        return (
            <div>
                { isAuth ? <Redirect to="/dashBoard"></Redirect> : null }
                <h2>你还没有权限，请先登录</h2>
                <button onClick={ loginIn }>点击登录</button>
            </div>
        )
    }
}

export default Auth