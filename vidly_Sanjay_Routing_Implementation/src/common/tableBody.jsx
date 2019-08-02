import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heart from "../common/heart";
import _ from "lodash";

class Tablebody extends Component {
  renderCell = (item, column) => {
    if (column.content) {
      return column.content(item);
    } else if (column.path !== "title") {
      return _.get(item, column.path);
    } else if (column.path === "title") {
      return <Link to= {`/movies/${item._id}`}>{_.get(item, column.path)}</Link>;
    }
  };

  createKey = (item, column) => {
    if (column.content) return item._id + column.content;
    else return item._id + column.path;
  };

  render() {
    const { data, columns, onLike, onDelete } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default Tablebody;
