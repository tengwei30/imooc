import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import Dashboard from './Dashboard'
import reducers from "./reducer.js";
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import Login from './container/login/login'
import Register from './container/register/register';
import 'antd-mobile/dist/antd-mobile.css';


const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f  // 开启chrome redux调试
))

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div> {/** 用swtich 会导致显示出错 */}
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path="/bossinfo" component={BossInfo}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                </Switch>
                {/* <Route path="/dashboard" component={Dashboard}></Route> */}
                {/* <Redirect to="dashboard"></Redirect> */}
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)