import React, { Component } from "react";
import AdminButtons from "../../common/adminbuttons";
import CreateCheckListTable from "./createCheckListTable";
import QuestionsTable from "../components/questionsTable";
import HeadersTable from "../components/headerTable";
import classes from "./createchecklist.css";
import { getQuestions } from "../../services/fakeQuestionService";
import { getHeaders } from "../../services/fakeHeaderService";
import PopUpForm from "../../common/createCheckListPopUpForm";
import Test from "../../common/test";

class CreateChecklist extends Component {
  state = {
    questions: [],
    headers: []
  };

  componentDidMount() {
    const questions = getQuestions();
    const headers = getHeaders();
    this.setState({ questions, headers });
    console.log(headers);
  }

  editQuestions = question => {
    console.log(question);
  };

  deleteQuestion = question => {
    console.log(question);
  };

  editHeaders = headers => {
    console.log(headers);
  };

  render() {
    return (
      <React.Fragment>
        <Test />
        {/*justify - content- end splits column into 2 left and right extremes */}
        <div className="row justify-content-end">
          {/* <AdminButtons
            button1Label="Add Heading"
            button2Label="Add Question"
            button3Label="Edit CheckList"
          /> */}
          <PopUpForm
            button1Label="Add Heading"
            button2Label="Add Question"
            button3Label="Edit CheckList"
          />
        </div>
        <div className="row justify-content-center" id="row2">
          <h2>Headings</h2>
        </div>
        <div className="row" id="row3">
          <HeadersTable headers={this.state.headers} />
        </div>
        <div className="row justify-content-center" id="row4">
          <h2>Questions</h2>
        </div>
        <div className="row justify-content-center" id="row5">
          <QuestionsTable questions={this.state.questions} />
        </div>
      </React.Fragment>
    );
  }
}

export default CreateChecklist;
