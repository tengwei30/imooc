import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './App'
import About from './About'
import { counter } from './index.redux.js'


const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f  // 开启chrome redux调试
))

function render () {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                    </ul>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/about" component={About}></Route>
                </div>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    )
}
render()

store.subscribe(render)