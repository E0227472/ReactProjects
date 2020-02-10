import React from 'react';
import PropTypes from 'prop-types';

const GuessWords = (props) => {
    const guessWordRows = props.guessWords.map((word, index) => {

        return (
        <tr id = "guessed-word" key = {index}>
            <td>{word.guessWord}</td>
            <td>{word.letterMatchCount}</td>
        </tr>
        )
    })
    return (
        <div id = 'component' >
             {props.guessWords.length === 0 ? (
                <span id = "instructions">
                    Please guess a word
                </span>) : (
                    <div id = "guessed-words">
                        <h3>Guessed Words</h3>
                        <table>
                            <thead>
                                <tr><th>Guess</th><th>Matching Letters</th></tr>
                            </thead>
                            <tbody>
                                {guessWordRows}
                            </tbody>
                        </table>
                    </div>
                )}
        </div>
    );
};

GuessWords.propTypes = {
    guessWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessWords;