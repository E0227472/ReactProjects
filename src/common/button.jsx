import React from 'react';
// button component for submit and cancel 
const Button = (props) => {

const {type, onClick, label, disabled, styles} = props;

    return (
      <button
      onClick = {onClick}
      type = {type}
      disabled = {disabled}
      className = {styles}
      >
          {label}
      </button>
    )

};
export default Button;