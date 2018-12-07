import React from 'react'
import { connect } from 'react-redux'
import { addGUN, addGUNAsync, removeGUN } from './index.redux'

// const mapStatetoPros = (state) => {
//     return {num: state}
// }
// const actionCreators = { addGUN, addGUNAsync, removeGUN }
// App = connect(mapStatetoPros, actionCreators)(App)
@connect(
    state => ({num: state.counter}),
    { addGUN, addGUNAsync, removeGUN }
)    // 修饰器写法～等同上面书写方式
class App extends React.Component{
    render() {
        const { num, addGUN, addGUNAsync, removeGUN } = this.props
        return (
            <div>
                <h2>我是{num}</h2>
                <button onClick={addGUN}>加1</button>
                <button onClick={removeGUN}>减1</button>
                <button onClick={addGUNAsync}>异步2s加1</button>
            </div>
        )
    }
}

export default App;