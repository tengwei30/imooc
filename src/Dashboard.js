import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import App from './App'
import About from './About'
import { connect } from 'react-redux'
import { loginOut } from './Auth.redux'
// import axios from 'axios'

@connect(
    state => state.auth,
    { loginOut }
)
class Dashboard extends React.Component{
    componentWillMount () {
//         axios.get('/api/data')
//             .then(res => {
//                 console.info(res)
//             }).catch(err => {
//                 console.error('error ---------> ', err)
//             })
    }
    render () {
        const { loginOut, isAuth } = this.props
        const redirect = <Redirect to="/login"></Redirect>
        const app = (
            <div>
                <h2>进来啦</h2>
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