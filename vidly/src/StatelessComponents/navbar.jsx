import React from "react";

const navbar = props => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">{props.count}</span>
      </nav>
    </React.Fragment>
  );
};

export default navbar;
