
import axios from 'axios'
const LOGIN_IN = 'LOGIN_IN'
const LOGIN_OUT = 'LOGIN_OUT'
const USER_DATA = 'USER_DATA'

const initState = {
    isAuth: false,
    user: '滕伟',
    age: 25
}

// reducers
export function auth(state=initState, action) {
    console.log(state, action)
    switch(action.type) {
        case LOGIN_IN:
            return {...state, isAuth: true}
        case LOGIN_OUT:
            return {...state, isAuth: false}
        case USER_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export function getUserData() {
    // dispatch 用来通知数据修改
    return dispatch => {
        axios.get('/data')
            .then(res => {
                if (res.status === 200) {
                    dispatch(userData(res.data))
                }
            }).catch(err => {
                console.error('error ---------> ', err)
            })
    }
}

export function userData(data) {
    return { type: USER_DATA, payload: data }
}
// action
export function loginIn () {
    return { type: 'LOGIN_IN' }
}

export function loginOut () {
    return { type: 'LOGIN_OUT' }
}

