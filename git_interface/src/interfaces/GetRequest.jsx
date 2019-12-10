import "../styles/buttonStyles.scss";

import React, { Component } from "react";

import Button from "../common/button";
import Form from "../common/Form";
import http from "../services/httpService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";

// Higher Order Components
class GetRequest extends Form {
  state = {
    data: {
      search: ""
    },
    error: {}
  };

  // get data from github api based on input
  handleButtonclick = async () => {
    const input = this.state.data.search;
    console.log(input);
    if (input === "") toast.error("please enter a valid input");
    const gitUrl = http.repoUrl(input);
    const result = await http.get(gitUrl);
    const data = result["data"];
    const filteredData = data.map(obj => {
      return { clone_url: obj.clone_url, full_name: obj.full_name };
    });
    console.log(filteredData);
  };

  render() {
    const inputClasses = classNames("row", "input");
    return (
      <div className="btn_position_GetRequest">
        <ToastContainer />
        <div className={inputClasses}>
          {this.renderInput("search", "Enter username here")}
        </div>
        <div className="row">{this.renderbutton("Search", "btn")}</div>
      </div>
    );
  }
}

export default GetRequest;
