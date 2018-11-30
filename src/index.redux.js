
const ADD_GUN = '加1'
const REMOVE_GUN = '减1'

/**
 * 1、新建store
 * 通过reducer遍历
 * 根据老的state和action 来生成新的state
 */
export function counter(state = 0, action) {
    switch(action.type) {
        case ADD_GUN:
            return state + 1;
        case REMOVE_GUN:
            return state - 1;
        default:
            return 10;
    }
}

/**
 * create action
 */
 export function addGUN () {
     return {type: ADD_GUN}
 }
 
 export function removeGUN () {
     return {type: REMOVE_GUN}
 }

export function addGUNAsync () {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGUN())
        }, 2000)
    }
}