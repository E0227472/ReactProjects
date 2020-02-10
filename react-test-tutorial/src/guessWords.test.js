import React from 'react';
import {shallow} from 'enzyme';
import {checkProp, findByattribute} from '../test/testUtils';
import GuessWords from './guessWords';
import { wrap } from 'module';

const defaultProps = {
    guessWords: [{guessWord: 'Train', letterMatchCount: 3}]
}

/* mounting / shallow copies of components */
const setup = (prop = {}) => {
const props = {...defaultProps, ...prop};
return shallow( < GuessWords {...props}/>);
};

test('does not throw error with expected props', () => {
    expect(checkProp(GuessWords, defaultProps)).toBeUndefined();
});


describe('if there are no words guessed, props has no data', () => {
    let wrapper;

    // applicable for all tests
    beforeEach(() => {
    wrapper = setup({guessWords: []})
    })

    test('renders component without error', () => {
         expect(findByattribute(wrapper, '#component').length).toEqual(1);
    });

    test('renders instructions(span) to guess a word', () => {
        expect(findByattribute(wrapper, '#instructions').text().length).not.toBe(0);
    });


})

describe('if there are words guessed, props has data', () => {
    let wrapper;

    // applicable for all tests
    beforeEach(() => {

        wrapper = setup({
            guessWords: [ 
                 {guessWord: 'Train',letterMatchCount: 3},
                 {guessWord: 'agile',letterMatchCount: 1},
                 {guessWord: 'party',letterMatchCount: 5},
                ]
        })
    })

      test('renders component without error', () => {
          expect(findByattribute(wrapper, '#component').length).toEqual(1);
      });

     test('renders "guessed words" section', () => {
         expect(findByattribute(wrapper, '#guessed-words').length).toBe(1);
     });

     test('correct number of guessed words', () => {
        expect(findByattribute(wrapper, '#guessed-word').length).toBe(3);
     });
     
})