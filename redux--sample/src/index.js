import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import {Provider} from "react-redux";
// combineReducers is a helper method from redux. 
// method takes in a javascript object, where keys mapped to different reducers 
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});
// store accepts combined reducers 
const store = createStore(rootReducer);

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
