import React from 'react';
import './Mainbar.css';
import Main from './Main';
export default class Mainbar extends React.Component {

  render(){
    return (
      <div className="Mainbar column">
        <div className="Workingbar">
          <h1>Main Bar </h1>
          {
            this.props.projects.map((el) => {
              if(this.props.selected===el){
                return (
                  <li>
                    {el}
                    <Main
                      selected = {this.props.selected}
                      projects = {this.props.projects}
                    /> 
                  </li>  
                )
              }
            })
          }
        </div>
      </div>
    )
  }
}