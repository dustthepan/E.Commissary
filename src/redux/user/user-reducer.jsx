// set default state of current user
    const INITIAL_STATE = {
        currentUser : null
    }
//make user reducer function
     //takes in state and action as arguments 
    const userReducer = (state=INITIAL_STATE, action) => {

    //if the type of action is equal to the current user 
        //return the rest of the state 
        //set current user to payload
    // if not return back to original state

        if (action.type === 'SET_CURRENT_USER'){
            return {
                ...state,
                currentUser: action.payload
            }
        } else {
            return state;
        }
    }

    export default userReducer;