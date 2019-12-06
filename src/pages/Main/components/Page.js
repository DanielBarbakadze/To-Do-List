import React from 'react';
import Main from './Main';
import '../../../App.css';
class Page extends React.Component {
  state = {
    projects: [],
    existedErrorMessage: ''
  }
  handleChange(e) {
    this.setState({ inputState: e.target.value });
  }
  handleClick() {
    let array = this.state.projects;
    
    // check if the same input exists
    let tempChecker = false;
    array.map((el)=>{if(el==this.state.inputState)tempChecker=true})

    if (this.state.inputState != undefined && this.state.inputState != '') {
      
      if(tempChecker==false){
        array.push(this.state.inputState);
        this.setState({
          projects: array,
          existedErrorMessage: ''
        });
      }
      else{
        this.setState({
          existedErrorMessage: this.state.inputState + " Already Exists"
        })
      }
    }
  }

  handleSelect(selectedItem,projects) {
    this.props.changeState(selectedItem,projects);
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
            <li onClick={() => this.handleSelect(el,this.state.projects)}>
              {el}
            </li>
          )
        }
      </div>
    )
  }

}

export default Page;