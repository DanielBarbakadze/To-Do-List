import React from 'react';
import Form from '../../components/Form';
import Require from '../../lib/validations';
import Main from '../Main';
import Input from '../../components/Input';
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
      <Form 
      inputs={[
        {
          name: 'username',
          validations: ['require'],
          style: {color:'red'},
          type: 'text'
        },
        {
          name: 'password',
          validations: ['require'],
          style: {},
          type: 'text'
        }
      ]}
      onSubmit={(state) => this.handleOnSubmit(state)}
    />
    
    )}
 
}

export default withRouter(Login);