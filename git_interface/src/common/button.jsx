
import React from 'react';


const Button = (props) => {
    const{onClick, label, styles, disabled} = props;
    return (
      <button 
      type= "button"
      className={styles + "btn btn-light"}
      onClick = {onClick}
      disabled = {disabled}
      >
        {label}
      </button>
    );
}
 
export default Button;