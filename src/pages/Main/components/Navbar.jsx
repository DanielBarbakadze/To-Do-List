import React from 'react';
import './Navbar.css';
import Page from './Page';
export default class Navbar extends React.Component {

  render(){
    return (
      <div className="Navbar">
        <div className="list"></div>
        <h1>Nav Bar</h1>

        <Page 
          changeState = {(el,projects) => {this.props.changeIndexState(el,projects)}}
        />

      </div>
    )
  }
}