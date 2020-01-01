import "../styles/buttonStyles.scss";

import React, { Component } from "react";

import Button from "../common/button";
import Form from "../common/Form";
import http from "../services/httpService";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash';

// Higher Order Components
class GetRequest extends Form {

  
  state = {
    data: {
      search: ""
    },
    error: {}
  };


// get data from github api based on input 
  handleButtonclick = async() => {
    const input = this.state.data.search;
    console.log(input);
    if(input === "")
    toast.error('please enter a valid input');
    const gitUrl = http.repoUrl(input);
    const result = await http.get(gitUrl);

    // github data obtained from github api 
    const data = result["data"];
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
  };

  render() {
    return (
      
        <div className="btn_position_GetRequest">
          <ToastContainer/>
          <div className="row">
            {this.renderInput("search", "Enter username here")}
          </div>
          <div className="row">
          {this.renderbutton("Search", "btn")}
          </div>
        </div>
    );
  }
}

export default GetRequest;
