import React, { Component } from "react";
import Table from "../../common/table";

class QuestionsTable extends Component {
  // passing columns as an array
  columns = [
    {
      path: "question",
      label: "Question"
    },
    { path: "mainHeading", label: "Main Heading" },
    { path: "subHeading", label: "Sub Heading" },
    { path: "subOfSubHeading", label: "Sub of Sub Heading" },

    {
      label: "Actions",
      key: "actions",
      content: question => (
        <div>
          <button
            clicked={() => this.props.editQuestion(question)}
            className="btn btn-primary btn-sm">
            Edit
          </button>
          <button
            onClick={() => this.props.deleteQuestion(question)}
            className="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
      )
    }
  ];

  render() {
    return <Table columns={this.columns} data={this.props.questions} />;
  }
}

export default QuestionsTable;
