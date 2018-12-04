
const LOGIN_IN = 'LOGIN_IN'
const LOGIN_OUT = 'LOGIN_OUT'

// reducers
export function auth(state={isAuth:false, user="admin"},action) {
    switch(action.type) {
        case LOGIN_IN:
            return {...state, isAuth: true}
        case LOGIN_OUT:
            return {...state, isAuth: false}
        default:
            return state
    }
}

// action
export function loginIn () {
    return { type: 'LOGIN_IN' }
}

export function loginOut () {
    return { type: 'LOGIN_OUT' }
}

