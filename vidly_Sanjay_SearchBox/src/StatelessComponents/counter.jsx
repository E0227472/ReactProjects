import React from "react";

const counter = props => {
  return (
    <React.Fragment>
      <button
        className=" btn btn-success btn-sm mx-2"
        onClick={props.onIncrement}
      >
        +
      </button>
      <button
        className="btn btn-danger btn-sm mx-2"
        onClick={props.onDecrement}
        disabled={props.count === 0 ? "disabled" : ""}
      >
        -
      </button>
      <button className="btn btn-danger btn-sm mx-2" onClick={props.onDelete}>
        Delete
      </button>
    </React.Fragment>
  );
};

export default counter;
