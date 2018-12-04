import React from 'react'
import { Link, Route } from 'react-router-dom'
import App from './App'
import About from './About'

class Dashboard extends React.Component{
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
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
    }
}

export default Dashboard