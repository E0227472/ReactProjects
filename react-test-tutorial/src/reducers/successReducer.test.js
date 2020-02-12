import {reducer} from './successReducer';
import {correctGuess, wrongGuess} from '../actions/index';
/*
For every test case, always remember to pass the state into the function
 
*/ 
describe ('reducer', () => {
    let state;

    beforeEach(() => {
         state = {
            guess: false
        }
    })

    test('returns state of true when action = "CORRECT_GUESS"', () => {
        expect(reducer(state, correctGuess())).toEqual({guess: true});
    })

    test('returns state of false when action = "WRONG_GUESS"', () => {
        expect(reducer(state, wrongGuess())).toEqual({guess: false});
    })

    test('returns default initial state if no action is passed', () => {
        expect(reducer(state, {type: ''})).toEqual({guess: false});
    })

})