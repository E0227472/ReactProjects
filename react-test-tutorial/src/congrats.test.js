import React from 'react';
import {shallow} from 'enzyme';
import Congrats from './congrats';
import { findByattribute, checkProp } from '../test/testUtils';



const defaultProps = {success: false};

/* mounting / shallow copies of components */
const setup = (prop = {}) => {
	const props = {...defaultProps, ...prop};
	return shallow(<Congrats {...props} />);
};

test('test if component renders without any errors', () => {
	expect(findByattribute(setup(), '#component').length).toEqual(1);
});

test('render no text when success prop is false', () => {
	const wrapper = setup({ success: false });
	const component = findByattribute(wrapper, '#component-congrats');
	expect(component.text()).toBe('');
});

test('renders non-empty congrats message when success prop is true ', () => {
	const wrapper = setup({ success: true });
	const message = findByattribute(wrapper, '#congrats-message');
	expect(message.text().length).not.toBe(0);
});

test('Testing propType: checking the props type', () => {
	expect(checkProp(Congrats, {success: true})).toBeUndefined();
});
