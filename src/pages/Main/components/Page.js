import React from 'react';
import Main from './Main';
import '../../../App.css';
class Page extends React.Component {
  state = {
    projects: this.props.localProjects,
    existedErrorMessage: '',
    inputState: ""
  }
  handleChange(e) {
    this.setState({ inputState: e.target.value });
  }
  handleClick() {
    let projects = this.state.projects;
    let inputState = this.state.inputState;
    let tempChecker = false;

    projects.map((el)=>{if(el==this.state.inputState)tempChecker=true})
    if(tempChecker==false){
      projects.push(inputState);
      this.setState({ projects })
      this.setState({ inputState: "" })
      this.setState({existedErrorMessage:""})
    }
    else{
      this.setState({
        existedErrorMessage: this.state.inputState + " already exists"
      })
    }
    
  }
  handleSelect(selectedItem, projects) {
    this.props.changeState(selectedItem, projects);
  }
  handleDelete(el){
   let projects = this.state.projects;
   projects =  projects.map((item) =>{
     if(item!=el) return item;
   })
   projects.filter((item) => item!==undefined);
   this.setState({projects});
   let username = localStorage.loggedIn + "projects";
    let localProjects = JSON.parse(localStorage[username]);
    delete localProjects[el];
    localStorage.setItem(username,JSON.stringify(localProjects))
    
  }
  render() {
   
    return (
      <div>
        <input className="empty" 
        type="text"
         onChange={(e) => this.handleChange(e)}
          value={this.state.inputState} 
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.handleClick()
            }
          }}
          />
        <button onClick={() => this.handleClick()} >
          Create project
        </button>
        <span>
          <div className="error-text2">{this.state.existedErrorMessage}</div>
        </span>
        {
          this.state.projects.map((el) =>{
            if(el!=undefined){
              return(
            <div className="elements">
              <li onClick={() => this.handleSelect(el, this.state.projects)}>
                {el}
              </li>
              <button onClick ={() => this.handleDelete(el)}>

                Delete project
              </button>
            
            </div>
              )
            }
          }
          )
        }
      </div>
    )
  }

}

export default Page;