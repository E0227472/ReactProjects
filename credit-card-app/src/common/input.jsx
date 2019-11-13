import React from 'react';

const Input = (props) => {
    // type: e.g. text, email
    // name: name of the field 
    // value: added from parent component's state
    // onChange: to capture user input into state 
    const {type, name, value, onChange} = props;
    return ( 
        <input
        type = {type}
        name = {name}
        value = {value}
        onChange = {onChange}
        
        />
     );
}
 
export default Input;