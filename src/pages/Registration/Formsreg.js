import React, { useState } from 'react';
import * as Validation from '../../lib/validations';
import InputReg from './Inputreg';
import {withRouter} from "react-router";
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
    submitted: {
      username: false,
      name: false,
      surname: false,
      date: false,
      email: false,
      password: false,
      confirm_password: false
    },
    person: {
      username: 'test',
      name: 'test',
      surname: 'test',
      date: 'test',
      email: 'test',
      password: 'test'
    },
    errorMessage: ''
  }

  handleOnRegister(e)
  {
    e.preventDefault();
    // console.log(this.state.submitted);

     
    let logIn = true;
    Object.values(this.state.submitted).map(function(value){
      if(value==false){
        logIn = false;
      }
    })


    let checkUser = JSON.parse(localStorage.getItem(this.state.person.username));

    if(logIn == true){
      
      if(checkUser != null){
        if (checkUser.username.length>0){
          this.setState({
            errorMessage: 'this username is taken'
          })
        }
      }
      else{

        let tempPerson = this.state.person;
        localStorage.setItem(tempPerson.username, JSON.stringify(tempPerson));

        this.setState({
          errorMessage: 'registered succesfully'
        })

        this.props.history.push('/Main');
        
      }
      // console.log(localStorage)
    }


  }

  handleChange(e, vals) {
    let errors = '';

    if (e.target.name === "password") {

      this.setState({
        oldpassword: e.target.value
      });

      if (this.state.newpassword !== undefined) {
        if (this.state.newpassword !== e.target.value) {
           errors = "passwords don't match"; 
          }
        else {
          let tempState = {}; 
            tempState = this.state.submitted;

            Object.keys(tempState).map(function(key){
              if(key==['confirm_password']){
                Object.entries(tempState[key]=true)
              }
            });
          this.setState({
             ["passwordcheck"]: "" 
            });
          this.setState({
             ["confirm_passwordcheck"]: "" 
            });
          errors = "";
        }
      }
    }

    if (e.target.name === "confirm_password") {
      this.setState({
        newpassword: e.target.value
      });

      if (e.target.value !== this.state.oldpassword) {
        errors = "passwords don't match";
        let tempState = {}; 
        tempState = this.state.submitted;

        Object.keys(tempState).map(function(key){
          if(key==['confirm_password']){
            Object.entries(tempState[key]=false)
          }
        });
      }
      else {
        let tempState = {}; 
            tempState = this.state.submitted;

            Object.keys(tempState).map(function(key){
              if(key==['confirm_password']){
                Object.entries(tempState[key]=true)
              }
            });
        this.setState({
          ["confirm_passwordcheck"]: ""
        });
        this.setState({
          ["passwordcheck"]: ""
        });
        errors = "";
      }
    }

    if (e.target.name !== "confirm_password") {
      vals.forEach((val) => {
        if (Validation[val]) {
          if (Validation[val](e.target.value) !== true) {

            let tempState = {}; 
            tempState = this.state.submitted;

            Object.keys(tempState).map(function(key){
              if(key==[e.target.name]){
                Object.entries(tempState[key]=false)
              }
            });

            this.setState({
              submitted: tempState
            });
            this.setState({
              submitted: tempState
            });
            errors = Validation[val](e.target.value);
            this.setState({
              [e.target.name + "check"]: errors
            });
          }
          else {
            let tempState2 = {}; 
            tempState2 = this.state.submitted;
            let tempPerson = {};
            tempPerson = this.state.person;
            Object.keys(tempState2).map(function(key){
              if(key==[e.target.name]){
                Object.entries(tempState2[key]=true);
                Object.entries(tempPerson[key]=e.target.value);
              }
            });

            this.setState({
              submitted: tempState2,
              person: tempPerson
            });

            this.setState({
              [e.target.name + "check"]: errors
            });
          }
        }
      })
    }
    else {
      this.setState({
        [e.target.name + "check"]: errors
      });
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
                <div className="error-text">{this.state[item.name + "check"]}</div>
              </div>
            )}
            <p className="error-text">
              {this.state.errorMessage}
            </p>
            <button onClick={(e) => this.handleOnRegister(e) }> Register </button>
            <p className="message">
              Registered? 
              <Link to="/">
                Login Jigaro!
              </Link>
            </p>
            {/* {console.log(this.state.submitted)} */}
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(FormsReg);