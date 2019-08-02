// node.js way of importing redux library to application
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer - gets 2 arguments; state and action
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') 
    return {
        ...state,
        counter: state.counter + 1
    }
    if (action.type === 'ADD_COUNTER')
        return {
            ...state,
            counter: state.counter + action.value
        }
    return state;
};

// store -  store states 
const store = createStore(rootReducer);

// subscription - async task where only when state is changed through actions, the new data is returned to the state. 
store.subscribe(() => {
    console.log("Subscription: ", store.getState());
});

//dispatch - action argument that is passed into the rootReducer
store.dispatch({type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });


