import axios from 'axios'
import { getRedirectPath } from '../util'
// const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'

const initState = { // 用户初始化信息
  redirectTo: '',
  // isAuth: '',
  user: '',
  type: '',
  msg: ''
}
// reduces
export function user(state=initState,action ) {
  switch (action.type) {
    case AUTH_SUCCESS:
    return { ...state, msg:'', redirectTo: getRedirectPath(action.payload), ...action.payload }
    // case REGISTER_SUCCESS:
    //   return { ...state, msg:'', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
    //   break
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
      break
    // case LOGIN_SUCCESS:
    //   return { ...state, isAuth: true, ...action.payload, redirectTo: getRedirectPath(action.payload), msg: '' }
    //   break
    case LOAD_DATA:
      return { ...state, ...action.payload }
      break
    default:
      return state
  }
}

function authSuccess (data) {
  return {
    type: AUTH_SUCCESS,
    payload: data 
  }
}

// function registerSuccess (data) {
//   return {
//     type: REGISTER_SUCCESS,
//     'payload': data
//   }
// }

function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}

// function loginSuccess (data) {
//   return {
//     type: LOGIN_SUCCESS,
//     'payload': data
//   }
// }

export function loadData (data) {
  return {
    type: LOAD_DATA,
    'payload': data
  }
}

// action
export function register({user, pwd, repeatpwd, type}) {  // 注册
  if (!user || !pwd || !type) {
    return errorMsg('用户名密码必须输入')
  }
  if (pwd !== repeatpwd) {
    return errorMsg('两次密码输入不一致')
  }
  return dispatch => {
    axios.post('/user/register', {
      user,
      pwd,
      type
    }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function update(data) {  // 更新
  return dispatch => {
    axios.post('/user/update', data)
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}


export function loginIn ({user, pwd}) { // 登录
  if (!user || !pwd) {
    return errorMsg('用户名密码必须输入')
  }
  return dispatch => {
    axios.post('/user/login', {
      user,
      pwd
    }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

