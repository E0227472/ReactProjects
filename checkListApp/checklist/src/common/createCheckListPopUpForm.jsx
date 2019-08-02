import React, { Component } from "react";
import Modal from "react-responsive-modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "./form";
import Joi from "joi-browser";
import { getQuestions } from "../services/fakeQuestionService.js";

class PopUpForm extends Form {
  state = {
    openQuestionForm: false,
    openHeaderForm: false,
    data: {
      header: "",
      hubName: "",
      subAdminHubDropDown: "",
      mainHeadingDropDown: "",
      subHeadingDropDown: "",
      subOfSubHeadingDropDown: "",
      question: "",
      headerText: "",
      footerText: "",
      option1: "",
      option2: "",
      option3: "",
      option4: ""
    },
    errors: {},
    options: []
  };

  componentDidMount() {
    const options = getQuestions();
    this.setState({ options });
  }
  schema = {
    header: Joi.string().required(),
    hubName: Joi.string().required(),
    subAdminHubDropDown: Joi.string().required(),
    mainHeadingDropDown: Joi.string().required(),
    subHeadingDropDown: Joi.string().required(),
    subOfSubHeadingDropDown: Joi.string().required(),
    question: Joi.string().required(),
    headerText: Joi.string().required(),
    footerText: Joi.string().required(),
    option1: Joi.string().required(),
    option2: Joi.string().required(),
    option3: Joi.string().required(),
    option4: Joi.string().required()
  };
  onOpenAddQuestionForm = () => {
    this.setState({ openQuestionForm: true });
  };

  onOpenAddHeaderForm = () => {
    this.setState({ openHeaderForm: true });
  };

  onCloseQuestionForm = () => {
    this.setState({ openQuestionForm: false });
  };
  onCloseHeaderForm = () => {
    this.setState({ openHeaderForm: false });
  };

  render() {
    const { openHeaderForm, openQuestionForm, options } = this.state;
    return (
      <div>
        <div className="float-right">
          <ButtonGroup aria-label="Basic example">
            <button
              type="button"
              onClick={this.onOpenAddHeaderForm}
              className="mx-2 btn btn-outline-primary"
            >
              {this.props.button1Label}
            </button>
            <button
              type="button"
              onClick={this.onOpenAddQuestionForm}
              className="mx-2 btn btn-outline-primary"
            >
              {this.props.button2Label}
            </button>
            <button type="button" className="mx-2 btn btn-outline-primary">
              {this.props.button3Label}
            </button>
          </ButtonGroup>
        </div>
        <Modal open={openHeaderForm} onClose={this.onCloseHeaderForm} center>
          <h3>Add Heading</h3>
          <form onSubmit={this.handleSubmit}>
            {/**Extract out the input field of label and input so that can reuse*/}
            {this.renderDropDown(
              "subAdminHubDropDown",
              "Enter the sub Admin Hub",
              options
            )}
            {this.renderInput("hubName", "Enter Hub Name")}
            {this.renderInput("header", "Enter Heading")}
            {this.renderButton("Cancel")} {this.renderButton("Save")}
          </form>
        </Modal>
        <Modal
          open={openQuestionForm}
          onClose={this.onCloseQuestionForm}
          center
        >
          <h3>Add Question Form</h3>
          <form onSubmit={this.handleSubmit}>
            {/**Extract out the input field of label and input so that can reuse*/}
            {this.renderDropDown(
              "mainHeadingDropDown",
              "Select Main-Heading",
              options
            )}
            {this.renderDropDown(
              "subHeadingDropDown",
              "Select Sub-Heading",
              options
            )}
            {this.renderDropDown(
              "subOfSubHeadingDropDown",
              "Select Sub of Sub-Heading",
              options
            )}
            {this.renderInput("question", "Enter Question")}
            {this.renderInput("headerText", "Enter HeaderText(optional)")}
            {this.renderInput("footerText", "Enter FooterText(optional)")}
            <br />
            <br />
            <h3>Options</h3>
            {this.renderInput("option1", "Option1(optional)")}
            {this.renderInput("option2", "Option2(optional)")}
            {this.renderInput("option3", "Option3(optional)")}
            {this.renderInput("option4", "Option4(optional)")}
            {this.renderButton("Cancel")} {this.renderButton("Save")}
          </form>
        </Modal>
      </div>
    );
  }
}

export default PopUpForm;
