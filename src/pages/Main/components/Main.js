import React from 'react';
import List from './List';
class Main extends React.Component {
  state = {
    list: [
    ],
    inputState: ""
  }
  handleClick() {
    let lastItem;
    if (this.state.inputState != "") {
      let tempStateList = this.state.list;
      if (tempStateList.length == 0) lastItem = { id: 1, value: this.state.inputState };
      else {
        lastItem = { id: this.state.list[this.state.list.length - 1].id + 1, value: this.state.inputState };
      }
      tempStateList.push(lastItem);
      this.setState({ list: tempStateList })
    }
  }
  handleChange(e) {
    this.setState({ inputState: e.target.value })
  }
  handleDelete(tempList) {
    this.setState({
      list: tempList
    })
  }
  handleLine(tempList) {
    this.setState({
      list: tempList
    })
  }
  render() {
    return (
      <div>

        <div>
          <input name="lists" type="text" onChange={(e) => this.handleChange(e)} />
          <button onClick={() => this.handleClick()}>
            Add another list
       </button>


        </div>

        {this.state.list.map((item) =>
          <List
            id={item.id}
            value={item.value}
            style={item.style}
            list={this.state.list}
            handleDelete={(e) => this.handleDelete(e)}
            handleLine={(e) => this.handleLine(e)}
          />
        )}

      </div>

    )
  }

}

export default Main;