import React from 'react';
// input component 
const Input = (props) => {
    // type: e.g. text, email
    // name: name of the field 
    // value: added from parent component's state
    // onChange: to capture user input into state 
    const {type, name, value, onChange, placeholder, onFocus} = props;
    return ( 
        <input
        type = {type}
        name = {name}
        value = {value}
        onChange = {onChange}
        onFocus = {onFocus}
        placeholder = {placeholder}
        />
     );
}
 
export default Input;