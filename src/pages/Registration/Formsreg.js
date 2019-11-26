import React, { useState } from 'react';
import * as Validation from '../../lib/validations';
import InputReg from './Inputreg';

let styles = {
  color: "purple",
  display: "inline",
  fontSize: "10px"
}

class FormsReg extends React.Component {
  state = {
    submitted: false
  }
  handleChange(e, vals) {
      
    let errors;
    if (e.target.name === "password") {
      this.setState({ oldpassword: e.target.value });
      if (this.state.newpassword !== undefined) {
        if (this.state.newpassword !== e.target.value) { errors = "passwords don't match"; }
      }
    }
    if (e.target.name === "confirm password") {
      this.setState({ newpassword: e.target.value });
      if (e.target.value !== this.state.oldpassword) { errors = "passwords don't match"; }
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
          </div>
          <form className="login-form">
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
        <button > Click me</button>
        {/* {console.log(this.state.submitted)} */}
        </form>
        </div>
        </div>
    )
  }
}



export default FormsReg;