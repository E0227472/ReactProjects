import React, { Component } from "react";
import "../styles/buttonStyles.scss";

// parent form to store all form elements such as button, input fields etc.
class Form extends Component {
  // parent state is empty. when child component extends parent, state obj filled
  state = {
    data: {},
    error: {}
  };

  // general button click event
  handleButtonclick = () => {
    console.log("Test");
  };

  // validate the form
  validate = () => {
    return false;
  };

  handleChange = e => {
    // copy state
    const data = { ...this.state.data };
    // update the form-field (properties) data
    data[e.currentTarget.name] = e.currentTarget.value;
    console.log(data[e.currentTarget.name]);

    this.setState({ data });
  };
  // when user presses enter key, search 
  handleKeyPress = e => {
    if (e.key === "Enter") this.handleButtonclick();
  };

  renderbutton(label, styles) {
    return (
      <button
        type="button"
        className={styles + "btn btn-light"}
        onClick={this.handleButtonclick}
        disabled=""
      >
        {label}
      </button>
    );
  }

  renderInput(name, label) {
    const { data } = this.state;
    return (
      <input
        type="text"
        name={name}
        value={data[name]}
        placeholder={label}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      ></input>
    );
  }
}
export default Form;
