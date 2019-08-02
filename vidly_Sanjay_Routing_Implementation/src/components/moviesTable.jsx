import React, { Component } from "react";
import Heart from "../common/heart";
import Table from "../common/table";


class moviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: item => <Heart clicked={() => this.props.onLike(item)} liked={item.liked} />
    },
    {
      key: "delete",
      content: item => (
        <button
          onClick={() => this.props.onDelete(item)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, onDelete, onLike, sortColumn, onSort } = this.props;

    return (
     <Table 
     columns = {this.columns}
     data = {movies}
     sortColumn = {sortColumn}
     onSort = {onSort}
     onLike = {onLike}
     onDelete = {onDelete}
     />
    );
  }
}

export default moviesTable;
