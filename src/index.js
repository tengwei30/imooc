import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import reducers from "./reducer.js";


const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f  // 开启chrome redux调试
))

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Auth}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Redirect to="dashboard"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)