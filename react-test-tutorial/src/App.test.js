import React from 'react';
import App from './App';
import {shallow} from 'enzyme';



/* mounting / shallow copies of components */
const setup = (prop = {}, state = null) => {
	return shallow(<App {...prop} />);
};

const findByattribute = (wrapper, val) => {
	return wrapper.find(`${val}`);
};

test('To test if the App component rendered correctly', () => {
	const wrapper = setup();
	expect(wrapper).toBeTruthy();
	//expect(findByattribute(wrapper, '#React-Fragments').length).toEqual(1);
});

// test('test if increment button renders', () => {
// 	expect(findByattribute(setup(), '#increment').length).toEqual(1);
// });

// test('test if decrement button renders', () => {
// 	expect(findByattribute(setup(), '#decrement').length).toEqual(1);
// });

// test('test if counter display renders', () => {
// 	expect(findByattribute(setup(), '#counterDisplay').length).toEqual(1);
// });

// test('test if key of state has counter', () => {
// 	expect(setup().state('counter')).toEqual(1);
// });
