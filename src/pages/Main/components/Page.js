import React from 'react';
import Main from './Main';
import '../../../App.css';
class Page extends React.Component {
  state = {
    projects: [],
    existedErrorMessage: '',
    projectsFromLS: JSON.parse(localStorage[localStorage['loggedIn']]).cachedProjects
  }
  handleChange(e) {
    this.setState({ inputState: e.target.value });
  }
  handleClick() {
    let array = this.state.projects;


    let user = JSON.parse(localStorage[localStorage['loggedIn']]);

    // console.log(user)
    let tempProjects = [];
    if (user['cachedProjects'] != undefined) tempProjects = user['cachedProjects'];
    user['cachedProjects'] = [];
    let newProjects = {};



    // check if the same input exists
    let tempChecker = false;
    array.map((el) => { if (el == this.state.inputState) tempChecker = true })

    if (this.state.inputState != undefined && this.state.inputState != '') {

      if (tempChecker == false) {
        newProjects[this.state.inputState] = [];
        array.push(this.state.inputState);
        this.setState({
          projects: array,
          existedErrorMessage: ''
        });
      }
      else {
        this.setState({
          existedErrorMessage: this.state.inputState + " Already Exists"
        })
      }

      let concated = { ...newProjects, ...tempProjects }
      user['cachedProjects'] = concated;
      localStorage.setItem([localStorage['loggedIn']], JSON.stringify(user))
      console.log('localstorage-> ', JSON.parse(localStorage[localStorage['loggedIn']]))

    }
  }

  handleSelect(selectedItem, projects) {
    this.props.changeState(selectedItem, projects);
  }

  ObjectToArray(obj) {
    if(obj!=undefined){
      let result = Object.keys(obj).map(function (key) {
        return [(key), obj[key]];
      });
      return result;
    }
    else return []
    
  }

  handleReturnArray(arr){
    arr = this.ObjectToArray(arr);
    let ans = []
    arr.map((e) => ans.push(e[0]))
    return ans
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
          this.ObjectToArray(this.state.projectsFromLS).map(
            (el) =>
              <li
                onClick={
                  () => this.handleSelect(
                    el[0], this.handleReturnArray(this.state.projectsFromLS)
                  )
                }>
                {el[0]}
              </li>
          )
        }

        {
          /*
          *   es droebit iyos, roca axals daamateb darefeshebamde 
          *   es gamoachens axals da darefreshebis mere es arafers 
          *   ar aketebs mxolod zedas moaqvs local storagedan
          */
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