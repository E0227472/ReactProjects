import * as actions from "../actions"

// state
const initialState = {
    counter: 0
};

// to get state's current value, retrieve it from the application state - initialstate
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT: {
            return {
                ...state,
                counter: state.counter + 1
            };
        }
        case actions.DECREMENT: {
            return {
                ...state,
                counter: state.counter - 1
            };
        }

        case actions.INC: {
            return {
                ...state,
                counter: state.counter + action.value
            };
        }
        case actions.DEC: {
            return {
                ...state,
                counter: state.counter - action.value
            };
        }

        default:
            return state;
    }
}

export default reducer;
