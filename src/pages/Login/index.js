import React from 'react';
import Form from '../../components/Form';
import Require from '../../lib/validations';
import Main from '../Main';
import { withRouter } from "react-router";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Redirect } from 'react-router';

class Login extends React.Component {

  handleOnSubmit(state) {

    // Temp User 
    let person1 =
    {
      username:"iva",
      password:"123"
    };
    
    localStorage.setItem('person1',JSON.stringify(person1))

    let givenPerson1 = JSON.parse(localStorage.getItem('person1'));

    if(state['username']!=='' && state['password']!=='' && state['username'] != undefined && state['password'] != undefined) {
      if(givenPerson1['username']===state['username'] && givenPerson1['password']===state['password']){
        this.props.history.push('/Main');
      }
    }
  
  }

render(){
    return (
      <div className="login-page">

      <div className="form">

            <div className="form-text">
            <label>Authorization</label>
            </div>

        <form className="login-form" >

        <Form 
      inputs={[
        {
          name: 'username',
          validations: [],
          style:{ 
            'font-family': '"Roboto", sans-serif',
            'outline': '0',
            'background': '#dddddd',
            'width': '100%',
            'border': '0',
            'margin': '0 0 20px',
            'padding': '18px',
            'box-sizing': 'border-box',
            'font-size': '14px',
            'border-radius': '3px'
          },
          type: 'text',
          placeholder: 'Enter Username'
        },
        {
          name: 'password',
          validations: [],
          style: {},
          type: 'text',
          placeholder: 'Enter Password'
        }
      ]}
      onSubmit={(state) => this.handleOnSubmit(state)}
    />
          <p className="message">Not registered? <Link to="/Registration">Register Blyat!</Link></p>

        </form>
      </div>
    </div>
      
    
    )}
 
}

export default withRouter(Login);