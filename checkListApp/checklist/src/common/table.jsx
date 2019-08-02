import React, { Component } from "react";
import TableHeader from "../common/tableHeader";
import TableBody from "./tableBody";


const Table = ({ columns, data}) => {
  return (
    <table className="table">
      <TableHeader columns={columns} />
        <TableBody 
        columns = {columns}
        data = {data} />
    </table>
  );
};

export default Table;
