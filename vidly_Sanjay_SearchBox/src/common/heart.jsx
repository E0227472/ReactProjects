import React, { Component } from "react";

const heart = (props) => {
   let btn_class = props.liked ? "fa fa-heart" : "fa fa-heart-o";
    return (  
          <React.Fragment>
        <i
          onClick={props.clicked}
          className={btn_class}
          aria-hidden="true"
        />
      </React.Fragment>
    );
}
 
export default heart;
