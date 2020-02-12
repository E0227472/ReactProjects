import React from 'react';
import {shallow} from 'enzyme';
import Input from './input';
import {findByattribute, storeFactory} from '../test/testUtils';

/* 
Component with redux store test
*/


/* mounting / shallow copies of components 
Need to use dive() when using shallow wrap with a redux store to get the child elements. 
*/
const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper =  shallow( < Input store = {store}/>).dive().dive();
     return wrapper;
};

/* 
Testing the rendering of the components
*/
describe('render', () => {

    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success: false};
            wrapper = setup(initialState);
        })
        test('renders component without any error', () => {
            const component = findByattribute(wrapper, "#component-input");
            expect(component.length).toBe(1);
        });

        test('renders input box', () => {
              const inputBox = findByattribute(wrapper, "#input-box");
              expect(inputBox.length).toBe(1);
        });

        test('renders submit button', () => {
              const submitButton = findByattribute(wrapper, "#submit-button");
              expect(submitButton.length).toBe(1);
        });
    });

    describe('word has been guessed', () => {
         let wrapper;
         beforeEach(() => {
             const initialState = {
                 success: true
             };
             wrapper = setup(initialState);
         })
          test('renders component without any error', () => {
                const component = findByattribute(wrapper, "#component-input");
                expect(component.length).toBe(1);
          });

          test('does not render input box', () => {
                 const inputBox = findByattribute(wrapper, "#input-box");
                 expect(inputBox.length).toBe(0);
          });

          test('does not render submit button', () => {
               const inputBox = findByattribute(wrapper, "#submit-button");
               expect(inputBox.length).toBe(0);
          });
    });

});

describe('update state', () => {

});



