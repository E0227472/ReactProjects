import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../common/input";
import DropDown from "../common/dropdown";

class Form extends Component {
  state = {
    data: {},
    error: {}
  };

  // method validates only one property on change.
  // When text entered and deleted, the error message pops up.
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; // obj should contain only one property that is being validated
    const schema = { [name]: this.schema[name] }; // schema should only have one property that is being validated
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    // mapping data to schema object where the properties are matched
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    console.log(error);
    if (!error) return null;

    const errors = { ...this.state.errors };
    for (let item of error.details) // iterate over the details array
      errors[item.path[0]] = item.message;

    return errors;
  };

  handleSubmit = e => {
    e.preventDefault(); // => preventDefault() prevents the default behaviour in this case the loading of the page
    const errors = this.validate(); // => getting the errors from validate method, which returns errors
    this.setState({ errors: errors || {} });
    if (errors) return; // => if the errors present, do not call the server, otherwise call server.
    // return keyword is used to exit from method.

    this.doSubmit();
  };

  handleChange = e => {
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name]; // delete keyword removes the property and its value
    const data = { ...this.state.data }; // get a copy of the data object from state
    data[e.currentTarget.name] = e.currentTarget.value; // get the username that has been typed in textbox
    this.setState({ data, errors }); // set the state to the new value
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderDropDown(name, label, options) {
    const { data, errors } = this.state;
    return (
      <DropDown
        options={options}
        value={data[name]}
        name={name}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
