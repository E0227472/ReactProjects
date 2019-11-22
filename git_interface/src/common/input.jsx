import React from "react";

// input field used for quiz and questions 
const Input = ({ name, error, ...rest }) => {
  return (
    <div className={styles.formGroup}>
      <input
        {...rest}
        name={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;