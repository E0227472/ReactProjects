import * as actions from "../actions"

// state
const initialState = {
    results: []
};

// to get state's current value, retrieve it from the application state - initialstate
const reducer = (state = initialState, action) => {
    switch (action.type) {
       
        case actions.STORE_RESULT: {
            return {
                ...state,
                // to get access to other states, need to pass data through the actual component methods 
                results: state.results.concat({ id: new Date(), value: action.counter })
            };
        }
        case actions.DELETE_RESULT: {
            const updatedArray = state.results.filter((result) => result.id !== action.id)

            return {
                ...state,
                results: updatedArray
            };
        }
        default:
            return state;
    }
}

export default reducer;
