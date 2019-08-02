import * as actionType from "../actions";

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADDPERSON : {
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor(Math.random() * 40)
            }
            let personsCopy = state.persons; // => update array immutable, do not update initial array
            return {
                ...state,
                persons: personsCopy.concat(newPerson)
            };
        }

        case actionType.DELETEPERSON : {
            const personsCopy = state.persons.filter(person => person.id !== action.id)
            return {
                ...state,
                persons: personsCopy
            }
        }
        default:
            return state;
    }
}

export default reducer;