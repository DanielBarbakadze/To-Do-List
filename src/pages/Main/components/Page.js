import React from 'react';
import Main from './Main';
import '../../../App.css';
class Page extends React.Component {
  state = {
    projects: this.props.localProjects,
    existedErrorMessage: '',
  }
  handleChange(e) {
    this.setState({ inputState: e.target.value });
  }
  handleClick(){
    let inputState = this.state.inputState;
    let projects = this.state.projects;
    projects.push(inputState);
    this.setState({projects})
  }
  handleSelect(selectedItem, projects) {
    this.props.changeState(selectedItem, projects);
  }

  render() {
    return (
      <div>
        <input className="empty" type="text" onChange={(e) => this.handleChange(e)} />
        <button onClick={() => this.handleClick()} >
          Create project
        </button>
        <span>
          <div className="error-text2">{this.state.existedErrorMessage}</div>
        </span>
        {
          this.state.projects.map((el) =>
            <li onClick={() => this.handleSelect(el, this.state.projects)}>
              {el}
            </li>
          )
        }

      </div>
    )
  }

}

export default Page;