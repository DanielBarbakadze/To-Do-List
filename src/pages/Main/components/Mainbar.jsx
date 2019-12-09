import React from 'react';
import './Mainbar.css';
import Main from './Main';
export default class Mainbar extends React.Component {
  state = {
    username : localStorage.loggedIn + "projects"
  }
  handleList(el,e){
    let username = this.state.username;
    let obj = {
      [el] : e
    }
    let arr = JSON.parse(localStorage.getItem(username));
    arr[el] = e;
    localStorage.setItem(username,JSON.stringify(arr));
    console.log(JSON.parse(localStorage[username]));
  }
  render(){
    return (
      <div className="Mainbar column">
        <div className="Workingbar">
          <h1>Main Bar </h1>
          {
            this.props.projects.map((el) => {
              if(this.props.selected===el){
                let list = [];
                if(localStorage.getItem(this.state.username)){
                  let obj = JSON.parse(localStorage.getItem(this.state.username));
                  if(obj[el]!==undefined) list = obj[el];
                }
                return (
                  <div>
                  <li>
                    {el}
                    {
                    <Main
                      list = {list}
                      selected = {this.props.selected}
                      projects = {this.props.projects}
                      handleList = {(e) => this.handleList(el,e)}
                    /> 
              }
                  </li>  
                   </div>
                )
              }
            })
          }
        </div>
      </div>
    )
  }
}