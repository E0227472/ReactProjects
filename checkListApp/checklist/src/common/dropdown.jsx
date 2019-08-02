import React, { Component } from 'react';

const DropDown = (props) => {
    const { name, error, placeholder, options, ...rest } = props;
    return (
        <div className="form-group">
            <select
                className="form-control"
                id={name}
                name={name}
                {...rest}
            >
                <option value="" disabled selected>{placeholder}</option>
                <option value=""/>
                {options.map(option => (
                    <option key={option._id} value={option._id}>{option.question}</option>
                ))}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

 
export default DropDown;