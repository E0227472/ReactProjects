import React, { Component } from "react";
import Button from "../common/button";
import "../styles/buttonStyles.scss";

// Higher Order Components
class GetRequest extends Component {

  handleSubmitHandler = ()=> {
      console.log("GetRequest Component")
  }
  render() {
    return (
      <React.Fragment>


        <div className = "btn_position_GetRequest" >
        <Button
        label = "Test Button"
        styles = "btn"
        onClick = {this.handleSubmitHandler}
        disabled = ""
        />
        </div>
      </React.Fragment>
    );
  }
}

export default GetRequest;
