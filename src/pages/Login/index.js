import React from 'react';
import Form from '../../components/Form';
import { withRouter } from "react-router";

import {
  Link
} from "react-router-dom";

class Login extends React.Component {


  state = ({
    errorMessage: ''
  })

  handleOnSubmit(state) {

    let givenPerson1 = JSON.parse(localStorage.getItem(state['username'].value));

    if (givenPerson1 == null) {
      this.setState({
        errorMessage: 'Invalid Username or Password'
      })
    }
    else {
      if (state['username'].value !== '' && state['password'].value !== '' && state['username'].value != undefined && state['password'].value != undefined) {
        if (givenPerson1['username'] === state['username'].value && givenPerson1['password'] === state['password'].value) {

          // Session start (after login)
          localStorage.setItem('loggedIn', givenPerson1.username);

          this.props.history.push('/Main');
        }
        else {
          this.setState({
            errorMessage: 'Invalid Username or Password'
          })
        }
      }
    }

  }

  handleSession() {
    if (localStorage.getItem('loggedIn') != null) {
      this.props.history.push('/Main');
    }
  }

  render() {
    return (
      <div className="mainWrapper" >

        <div className="back-img" >
          <img src="../../../back.gif" />
        </div>

        <div className="login-page">

          <div className="form">

            <div className="form-text">
              <label>Authorization</label>
            </div>

            <div className="login-form" >

              <Form
                inputs={[
                  {
                    name: 'username',
                    validations: ['require'],
                    style: { color: 'red' },
                    type: 'text',
                    style: {
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
                    validations: ['require',],
                    style: {},
                    type: 'text',
                    placeholder: 'Enter Password'
                  }
                ]}
                onSubmit={(state) => this.handleOnSubmit(state)}
              />

              {this.handleSession()}

              <p style={{ color: 'red', fontWeight: 'bold' }}>{this.state.errorMessage}</p>
              <p className="message">Not registered? <Link to="/Registration"> Register Jigaro!</Link></p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Login);