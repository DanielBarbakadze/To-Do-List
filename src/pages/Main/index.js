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
  state = {
    loading : "loading...",
    done:"notloading"
  }
  componentWillMount() {
          setTimeout(() => {
            this.setState({ done: true });
          }, 1500);
  }
  state = ({
    loggedIn: null,
    Selected: 'nothing selected',
    Projects: ['no projects selected'],
    tempPopup: []
  })


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
    if(this.state.done){
    return (
      <div className="main-container">
        <div className="header">
        <nav class="hamb" role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                                Side bar goes here
                    </ul>
                </div>
            </nav>
          <span className="welcome">Welcome Back, <strong>{this.state.loggedIn}</strong> !</span>
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

          <Navbar
            changeIndexState={(el, projects) => this.setState({ Selected: el, Projects: projects })}
          />
          <div className="main">
          <Mainbar
            selected={this.state.Selected}
            projects={this.state.Projects}
          />
          </div>
          
        </div>

    )
  }
  else{
    return( <div className="loading-img" >
       <img src="../../../loading.gif" />
      </div> )
  } 
      
  }
}

export default withRouter(Main);