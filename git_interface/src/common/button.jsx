
import React from 'react';
import "../styles/buttonStyles.scss";

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