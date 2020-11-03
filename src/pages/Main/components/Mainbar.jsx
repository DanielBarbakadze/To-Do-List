import React from 'react';
import '../index.css';
import Main from './Main';
export default class Mainbar extends React.Component {
  state = {
    username : localStorage.loggedIn + "projects"
  }
  handleList(el,e){
    let arr = {};
    let username = this.state.username;
   if(localStorage[username]!==undefined) arr = JSON.parse(localStorage.getItem(username));
    arr[el] = e;
    localStorage.setItem(username,JSON.stringify(arr));
    console.log(JSON.parse(localStorage[username]));
  }
  render(){
    return (
        <div className="mainContent">
          <h2>ToDos</h2>
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
                    <div className="projname">{el}</div>
                    {
                    <Main
                      list = {list}
                      selected = {this.props.selected}
                      projects = {this.props.projects}
                      handleList = {(e) => this.handleList(el,e)}
                    /> 
              }
                   </div>
                )
              }
            })
          }
        </div>
    )
  }
}