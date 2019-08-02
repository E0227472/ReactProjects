import React, { Component } from "react";
// columns is passed into the table parent component.
// The columns is then passed from table parent component to tableheader child component.
// column label is being output.
class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th key={column.path || column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
