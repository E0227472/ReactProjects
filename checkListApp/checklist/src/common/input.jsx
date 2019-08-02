import React from 'react';


const Input = (props) => {
    const { name, error, placeholder, ...rest } = props;
    return (  
        <div className="form-group">
            <input
                autoFocus
                {...rest}
                name={name}
                className="form-control"
                id={name}
                aria-describedby="emailHelp"
                placeholder = {placeholder}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}
 
export default Input;