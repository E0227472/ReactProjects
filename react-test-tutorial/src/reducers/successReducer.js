 import {correctGuess, wrongGuess} from '../actions/index';


const initialState = {
    guess: false, 
 }
 
 export const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case correctGuess().type: {
            return {
                ...state,
                guess: true
            }
        }

        case wrongGuess().type: {
            return {
                ...state,
               guess: false
            }
        }

        default:
          return state;

    }
}

