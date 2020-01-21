import {createSelector} from 'reselect';


//create state for user
const selectUser = state => state.user;

//selector for current user
export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)