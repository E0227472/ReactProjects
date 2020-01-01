import "../styles/buttonStyles.scss";

import React, { Component } from "react";

import Button from "../common/button";
import Form from "../common/Form";
import http from "../services/httpService";
<<<<<<< HEAD
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash';
=======
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";
>>>>>>> 33e3908871de98e8aafdb0d9d888c2df3a76606c

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

    // github data obtained from github api 
    const data = result["data"];
<<<<<<< HEAD
    console.log(data);
    const path = {path: 'clone_url', fullName: 'full_name'};

    // getting only the github url and the name out of all the other properties in the object 
     const github_Urls = data.map(
      ({clone_url, full_name}) => {
        return {clone_url, full_name}
      }
    );

    // store the updated array in the redux store - for display in the table component 


    console.log(github_Urls);
=======
    const filteredData = data.map(obj => {
      return { clone_url: obj.clone_url, full_name: obj.full_name };
    });
    console.log(filteredData);
>>>>>>> 33e3908871de98e8aafdb0d9d888c2df3a76606c
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
