import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../src/reducers';


/* mocking the redux store */
export const storeFactory = (initialState) => {
	return createStore(rootReducer, initialState);
}




/* 
function to take in component wrapper and find the respective elements within the component 
*/
export const findByattribute = (wrapper, val) => {
	return wrapper.find(`${val}`);
};

/* 
function to take in component and prop and check the props 
*/
export const checkProp = (component, prop) => {
	return checkPropTypes(component.propTypes, prop, 'prop', component.name);
}

