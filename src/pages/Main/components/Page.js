import React from 'react';
import Main from './Main';
class Page extends React.Component {
  state = {
    projects : []
  }
  handleChange(e){
   this.setState({inputState:e.target.value});
  }
  handleClick(){
    let array = this.state.projects;
    if(this.state.inputState!=undefined && this.state.inputState!=''){
      array.push(this.state.inputState);
        this.setState({
        projects : array
      });
    }
  }
  render(){
    return(
      <div>
  <input type = "text" onChange = {(e) => this.handleChange(e)} />
  <button onClick = {() => this.handleClick()} >
    Create project
  </button>
  {this.state.projects.map((el) => <div> {el} <Main /> </div>)}
  </div>
    )
  }
  
}

export default Page;