
 export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    WRONG_GUESS: 'WRONG_GUESS'
};

export const correctGuess = () => {
    return {type: actionTypes.CORRECT_GUESS};
};

export const wrongGuess = () => {
    return {type: actionTypes.WRONG_GUESS};
};