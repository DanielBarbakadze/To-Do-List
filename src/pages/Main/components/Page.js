import React from 'react';
import Main from './Main';
import '../../../App.css';
import '../index.css';
class Page extends React.Component {
  state = {
    projects: this.props.localProjects,
    errorMessage: '',
    inputState: ""
  }
  handleChange(e) {
    this.setState({ inputState: e.target.value });
    if (this.state.errorMessage != "") {
      this.setState({ errorMessage: "" })
    }
  }
  handleClick() {
    let projects = this.state.projects;
    let inputState = this.state.inputState;
    let tempChecker = false;
    if (this.state.inputState == "") {
      this.setState({
        errorMessage: "Please input something"
      })
    }
    else {
      projects.map((el) => { if (el == this.state.inputState) tempChecker = true })
      if (tempChecker == false) {
        projects.push(inputState);
        this.setState({ projects })
        this.setState({ inputState: "" })
        this.setState({ errorMessage: "" })
      }
      else {
        this.setState({
          errorMessage: this.state.inputState + " already exists"
        })
      }
    }
  }
  handleSelect(selectedItem, projects) {
    this.props.changeState(selectedItem, projects);
  }
  handleDelete(el) {
    let projects = this.state.projects;
    projects = projects.map((item) => {
      if (item != el) return item;
    })
    projects.filter((item) => item !== undefined);
    this.setState({ projects });
    let username = localStorage.loggedIn + "projects";
    let localProjects = JSON.parse(localStorage[username]);
    delete localProjects[el];
    localStorage.setItem(username, JSON.stringify(localProjects))

  }
  render() {

    return (
      <div className="NavbarContent">
        <input className="projinput"
          type="text"
          onChange={(e) => this.handleChange(e)}
          value={this.state.inputState}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.handleClick()
            }
          }}
        />
        <span className="createbtnspan" onClick={() => this.handleClick()}>
          <button className="createbtn">+</button>
          Add Project
        </span>
        <span>
          <div className="error-text2">{this.state.errorMessage}</div>
        </span>
        {
          this.state.projects.map((el) => {
            if (el != undefined) {
              return (
                <div className="elements">
                  <li className="NavbarList" onClick={() => this.handleSelect(el, this.state.projects)}>
                    {el}
                  </li>
                  <span className="createbtnspan hidden" onClick={() => this.handleDelete(el)}>
                      <button className="createbtn redbtn">-</button>
                      Delete Project
                  </span>

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