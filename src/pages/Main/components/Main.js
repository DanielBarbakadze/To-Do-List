import React from 'react';
import List from './List';
class Main extends React.Component {
  state = {
    list: [
    ],
    inputState: "",
    listsFromLS: JSON.parse(localStorage[localStorage['loggedIn']]).cachedProjects[this.props.selected]
  }
  handleClick() {

    let tempUser = JSON.parse(localStorage[localStorage['loggedIn']]);
    this.setState({
      list: tempUser.cachedProjects[this.props.selected]
    })
    let lastItem;
    if (this.state.inputState != "") {
      let tempStateList = this.state.list;
      if (tempStateList.length == 0) lastItem = { id: 1, value: this.state.inputState };
      else {
        lastItem = { id: this.state.list[this.state.list.length - 1].id + 1, value: this.state.inputState };
      }
      tempStateList.push(lastItem);
      this.setState({ list: tempStateList })

      this.LSmanage(tempStateList)

    }
  }
  handleChange(e) {
    this.setState({ inputState: e.target.value })
  }
  handleDelete(tempList) {
    this.setState({
      listsFromLS: tempList
    })
  }
  handleLine(tempList) {
    this.setState({
      list: tempList
    })
  }

  LSmanage(tempStateList) {
    let tempUser = JSON.parse(localStorage[localStorage['loggedIn']]);

    let tempLoggedIn = localStorage[localStorage['loggedIn']];
    let tempProjects = JSON.parse(tempLoggedIn).cachedProjects[this.props.selected];
    let newProjects = JSON.parse(tempLoggedIn).cachedProjects;
    newProjects[this.props.selected] = tempStateList;

    let concated = { ...tempProjects, }
    let len = Object.keys(tempProjects).length
    concated[len] = { ...newProjects[this.props.selected][0] }
    newProjects[this.props.selected] = concated;
    tempUser['cachedProjects'] = newProjects;
    localStorage.setItem([localStorage['loggedIn']], JSON.stringify(tempUser))

    this.setState({ listsFromLS: concated })
  }

  ObjectToArray(obj) {
    if (obj != undefined) {
      let result = Object.keys(obj).map(function (key) {
        return [(key), obj[key]];
      });
      return result;
    }
    else return []

  }

  render() {
    return (
      <div>


        <div>
          {/* {this.props.projects} */}
        </div>

        <div>
          <input name="lists" type="text" onChange={(e) => this.handleChange(e)} />
          <button onClick={() => this.handleClick()}>
            Add another list
          </button>


        </div>
        {/* 
        {console.log('gare',
          this.ObjectToArray(this.state.listsFromLS).map(
              (item) => console.log('shida',item)
            )
          )
        } */}

        {this.ObjectToArray(this.state.listsFromLS).map((item) =>
          <List
            id={item[1].id}
            value={item[1].value}
            style={item[1].style}
            list={this.state.listsFromLS}
            handleDelete={(e) => this.handleDelete(e)}
            handleLine={(e) => this.handleLine(e)}
            selected={this.props.selected}
          />
        )}

      </div>

    )
  }

}

export default Main;