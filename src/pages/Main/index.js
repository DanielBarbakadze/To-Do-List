import React from 'react';
import { withRouter } from "react-router";
import ListOfToDoList from "./components/ListOfToDoList";
import Mainbar from "./components/Mainbar";
import Navbar from "./components/Navbar";
import Popup from '../../components/Popup';
import Page from "./components/Page";
import '../../App.css'
import './index.css'
class Main extends React.Component {

  state = ({
    loggedIn: null,
    Selected: 'nothing selected',
    Projects: ['no projects selected'],
    tempPopup: []
  })

  // constructor(props) {
  //   super(props);
  //   this.state = { showPopup: false };
  // }

  togglePopup() {
    this.handlegetUserInfo();
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleSession() {
    if (this.state.loggedIn == null) {
      let loggedInPerson = localStorage.getItem('loggedIn');
      if (loggedInPerson != null) {
        this.setState({
          loggedIn: loggedInPerson
        })
      }
      else {
        this.handleEndSession();
      }
    }
  }

  handleEndSession() {
    localStorage.removeItem('loggedIn');
    this.props.history.push('/login');
  }

  handlegetUserInfo() {
    let userInfo = JSON.parse(localStorage.getItem(localStorage['loggedIn']));
    userInfo = this.ObjectToArray(userInfo);
    this.setState({
      tempPopup: userInfo
    });
  }

  ObjectToArray(obj) {
    let result = Object.keys(obj).map(function (key) {
      return [(key), obj[key]];
    });
    return result;
  }


  render() {
    return (
      <div>
        <div className="Topbar">
          <span>Welcome Back, <strong>{this.state.loggedIn}</strong> !</span>
          {/* <button onClick={(e) => this.handleSession(e)}>click</button>   */}
          {this.handleSession()}
          <div className="settingsBar">
            <button className="settingOptions" onClick={this.togglePopup.bind(this)}>Info</button>
            <button className="settingOptions" onClick={() => this.handleEndSession()}>Log Out</button>
          </div>
          {
            this.state.showPopup ?
              <Popup
                text={'User Info'}
                infoArray={this.state.tempPopup}
                closePopup={this.togglePopup.bind(this)}
              />
              : null
          }
        </div>

        <div className="row">
          <Navbar
            changeIndexState={(el, projects) => this.setState({ Selected: el, Projects: projects })}
          />
          <Mainbar
            selected={this.state.Selected}
            projects={this.state.Projects}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(Main);