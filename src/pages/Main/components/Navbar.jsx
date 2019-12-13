import React from 'react';
import '../index.css';
import Page from './Page';
export default class Navbar extends React.Component {
  
  render(){
    { let username = localStorage.loggedIn + "projects";
      let userProjects = [];
      if(localStorage[username]!==undefined) userProjects = Object.keys(JSON.parse(localStorage[username]));
    return (
      <div className="aside">
        { 
        <div className="asideContent">
          <h1>Nav Bar</h1>
            
        <Page 
          changeState = {(el,projects) => {this.props.changeIndexState(el,projects)}}
          localProjects = {userProjects}
        />
        </div>
        }
      </div>
    )
  }
}
}