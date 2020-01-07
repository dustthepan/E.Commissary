import {userActionTypes} from './user.types'
export const setCurrentUser = user => ({
    // type must match conditional value in reducer
    type: userActionTypes.SET_CURRENT_USER, // snakecase
    payload: user
})
