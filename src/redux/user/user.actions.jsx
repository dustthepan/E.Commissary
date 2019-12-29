export const setCurrentUser = user => ({
    // type must match conditional value in reducer
    type: 'SET_CURRENT_USER', // snakecase
    payload: user
})
