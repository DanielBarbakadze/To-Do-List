import React, { useState } from 'react';
import * as Validation from '../../lib/validations';
import InputReg from './Inputreg';
import { withRouter } from "react-router";

import {
  Link,
} from "react-router-dom";
let styles = {
  color: "purple",
  display: "inline",
  fontSize: "10px"
}

class FormsReg extends React.Component {
  state = {
    submitted : false,
    required: ""
  }
  handleCheck(){
    let checked = Object.entries(this.state);
    let boo = 0;
     if( checked.length === this.props.input.length + 4 ){
    for(let i = 0 ; i < checked.length ; i++){
      if(checked[i][0].search("check") !== -1) {
        if(checked[i][1]!="") boo = 1;
      }
    }
  }
    if(!boo) {this.props.history.push('/Main');}
    else{
      console.log(this.props.input,checked.length);
    }
  }


  handleChange(e, vals) {
    let errors = "";
    if (e.target.name === "password") {
      this.setState({ oldpassword: e.target.value });
      if (this.state.newpassword !== undefined) {
        if (this.state.newpassword !== e.target.value) { this.setState({submitted:false}); errors = "passwords don't match"; }
        else {
          this.setState({submitted:true,["confirm passwordcheck"]: "" });
        errors = "";
        }
      }
    }
    if (e.target.name === "confirm password") {
      this.setState({ newpassword: e.target.value });
      if (e.target.value !== this.state.oldpassword) { this.setState({submitted:false}); errors = "passwords don't match"; }
      else {
        this.setState({submitted:true,["confirm passwordcheck"]: "" });
      errors = "";
      }
    }

    if (e.target.name !== "confirm password") {
      vals.forEach((val) => {
        if (Validation[val]) {
          if (Validation[val](e.target.value) !== true) {
            this.setState({ submitted: false });
            errors = (Validation[val](e.target.value));
            this.setState({ [e.target.name + "check"]: errors });
          }
          else {
            this.setState({ submitted: true });
            this.setState({ [e.target.name + "check"]: errors });
          }
        }
      })
    }
    else {
      this.setState({ [e.target.name + "check"]: errors });
    }
  }
 
  render() {
    return (
        <div className="login-page">

        <div className="form">

          <div className="form-text">
          <label>Registration</label>
          <div >{this.state.required}</div>
          </div>
          <div className="login-form">
        {this.props.input.map((item) =>
          <div>
            <InputReg
              name={item.name}
              type={item.type}
              onChange={(e) => this.handleChange(e, item.validation)}
            />
            <div className ="error-text">{this.state[item.name + "check"]}</div>
          </div>
        )}
        <button onClick = {() => this.handleCheck()} > Register </button>
        <p className="message">Registered? <Link to="/">
        Login Jigaro!</Link></p>
        </div>
        </div>
        </div>
    )
  }
}



export default withRouter(FormsReg);