import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import App from './App'
import About from './About'
import { connect } from 'react-redux'
import { loginOut, getUserData } from './Auth.redux'


@connect(
    state => state.auth,
    { loginOut, getUserData }
)
class Dashboard extends React.Component{
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: {}
    //     }
    // }
    componentWillMount () {
        this.props.getUserData()
    }
    render () {
        const { loginOut, isAuth, user } = this.props
        const redirect = <Redirect to="/login"></Redirect>
        const app = (
            <div>
                <h2>进来啦</h2>
                <h3>我的名字：{user}</h3>
                <button onClick={ loginOut } >点击退出 </button>
                <ul>
                    <li>
                        <Link to="/dashboard">home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/about">about</Link>
                    </li>
                </ul>
                <Route path="/dashboard" exact component={ App }></Route>
                <Route path="/dashboard/about" component={ About }></Route>
            </div>
        )
        return isAuth ? app : redirect
    }
}

export default Dashboard