// state - storing the array of objects from git api
const initialState = {
  data: [{}]
};

// if actions are invoked in the components, the state is updated accordingly
const reducer = (state = initialState, action) => {
  switch (
    action.type // if the action type matches (as mentioned within the component)
  ) {
    case action.SAVE_DATA: {
      return {
        ...state,
        data: action.value // action.value is the array with objects obtained from github api
      };
    }

    default:
      return state;
  }
};

export default reducer;
