
export const gettingLetterMatchCount = (guessword, secretWord) => {

    const secretLetterSet = new Set(secretWord.split(''));
    const guessWordSet = new Set(guessword.split(''));

    return [...secretLetterSet].filter(letter => guessWordSet.has(letter)).length;
}