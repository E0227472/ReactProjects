import React, { Component } from "react";
import Table from "../../common/table";

class headerTable extends Component {
  // passing columns as an array
  columns = [
    {
      path: "heading",
      label: "Heading"
    },
    { path: "headingType", label: "Heading Type" },
    {
      label: "Actions",
      key: "actions",
      content: heading => (
        <button
          clicked={() => this.props.editHeaders(heading)}
          className="btn btn-primary btn-sm"
        >
          Edit
        </button>
      )
    }
  ];
  render() {
    return <Table columns={this.columns} data={this.props.headers} />;
  }
}

export default headerTable;
