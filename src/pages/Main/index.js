import React from 'react';
import { withRouter } from "react-router";
import ListOfToDoList from "./components/ListOfToDoList";
import Mainbar from "./components/Mainbar";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
class Main extends React.Component {
  
  state = ({
    loggedIn: null,
    Selected: 'nothing selected',
    Projects: ['no projects selected']
  })

  handleSession(){
    if(this.state.loggedIn==null){
      let loggedInPerson = localStorage.getItem('loggedIn');
      if(loggedInPerson!=null){
        this.setState({
          loggedIn: loggedInPerson
        })
      }
      else {
        this.handleEndSession();
      }
    }
  }

  handleEndSession(){
    localStorage.removeItem('loggedIn');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <p>Welcome Back, <strong>{this.state.loggedIn}</strong> !</p>
        {/* <button onClick={(e) => this.handleSession(e)}>click</button>   */}
        {this.handleSession()}
        <button onClick={() => this.handleEndSession()}>Log Out</button>
        <ListOfToDoList/>
      <br/>
      <div className="row">
        <Navbar
          changeIndexState = {(el,projects) => this.setState({Selected: el,Projects: projects})}
        />
        <Mainbar
          selected = {this.state.Selected}
          projects = {this.state.Projects}
        />
        <button onClick={() => console.log('from index',this.state)}>console log magic</button>
      </div>
        
      </div>
    )
  }
}

  export default withRouter(Main);