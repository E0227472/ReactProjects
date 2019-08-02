import React, { Component } from "react";

const listGroup = props => {
  const { items, textProperty, valueProperty, 
  onitemSelect,
  selectedGenre } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key = {item[valueProperty]}
          onClick={() => onitemSelect(item)}
          className= {item[textProperty] === selectedGenre ? "list-group-item active" : "list-group-item"}
          style={{ cursor: "pointer" }}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

// new objects can be created from the component function with their properties
listGroup.defaultProps = {
textProperty: "name",
valueProperty: "_id"
};

export default listGroup;
