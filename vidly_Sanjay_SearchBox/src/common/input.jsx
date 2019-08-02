import React, { Component } from "react";

const Input = props => {
  const { name, label, error, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        {...rest}
        name = {name}
        className="form-control"
        id={name}
        aria-describedby="emailHelp"
        placeholder="Enter Username"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
