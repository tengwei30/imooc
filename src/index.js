import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
// import App from './App'
import Auth from './Auth'
import Dashboard from './Dashboard'
// import About from './About'
import { counter } from './index.redux.js'


const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f  // 开启chrome redux调试
))

function render () {
    ReactDOM.render(
        (<Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Auth}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Redirect to="dashboard"></Redirect>
                    {/* <Route path="/" exact component={App}></Route> */}
                    {/* <Route path="/about" component={About}></Route> */}
                </Switch>
            </BrowserRouter>
        </Provider>),
        document.getElementById('root')
    )
}
render()

store.subscribe(render)