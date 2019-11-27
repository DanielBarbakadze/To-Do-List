import React from 'react';
import { withRouter } from "react-router";

class Main extends React.Component {
  
  state = ({
    loggedIn: null
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
      </div>
    )
  }
}

  export default withRouter(Main);