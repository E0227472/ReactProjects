import {correctGuess, actionTypes} from './index';

describe ('correctGuess', () => {

    test('if return of correctGuess of type "CORRECT_GUESS"', () => {
        expect(correctGuess()).toEqual({type: actionTypes.CORRECT_GUESS});
    })
})

