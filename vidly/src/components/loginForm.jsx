import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {} // => errors are kept in object form so that they can be used easily
  };
  //username = React.createRef(); // Create a reference object.
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // if the submission went through, call server side logic
    console.log("server side logic called ");
  };

  render() {
    const { data, username, password, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/**Extract out the input field of label and input so that can reuse*/}
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
