import React from 'react';
import List from './List';
class Main extends React.Component {
  state = {
    list: this.props.list,
    inputState: "",
    firstValue:1,
     secondValue:1
  }
  handleClick() {
    let lastItem;
    if (this.state.inputState != "") {
      let tempStateList = this.state.list;
      if (tempStateList.length == 0) lastItem = { id: 0, value: this.state.inputState };
      else {
        lastItem = { id: this.state.list[this.state.list.length - 1].id + 1, value: this.state.inputState };
      }
      tempStateList.push(lastItem);
      this.setState({ list: tempStateList })
      this.props.handleList(tempStateList);
     }
     this.setState({inputState:""})
   
  }
  handleChange(e) {
    this.setState({ inputState: e.target.value })
  }
  handleDelete(tempList) {
    this.setState({
      list: tempList
    })
    this.props.handleList(tempList);
  }
  handleLine(tempList) {
    this.setState({
      list: tempList
    })
    this.props.handleList(tempList);
  }

  dragStart(event){
    let id = event.target.id;
    if(id!=""){
      this.setState({firstValue:id});
    }
   }

   drop(event){
    let list = this.state.list;
    let firstVal = this.state.firstValue;
    let secondVal = this.state.secondValue;
    firstVal*=1; secondVal*=1;
    let toswap = 0;
    let curr = 0;
    list.map((item) => {if(item.id==secondVal) toswap = item
    }
    );
    list.map((item) => {if(item.id==firstVal) curr = item
    });
    let newList = list.map((item)=>{
      if(item.id === firstVal) return toswap;
      else if(item.id==secondVal) return curr;
      else return item;
    });
    this.setState({list:newList});
   }

   dragEnter(event){
    event.preventDefault();
     let id = event.target.id;
    if(id!=""){
      this.setState({secondValue:id});
    }
    }
    
  render() {
    return (
      <div> 
        <div className="buttoninside"> 
         <div className="MainbarTop">
         <input 
           className="todoinput"
           name="lists" type="text" 
           onChange={(e) => this.handleChange(e)} 
           value = {this.state.inputState}
           onKeyPress={event => {
             if (event.key === 'Enter') {
               this.handleClick()
             }
           }}
         />
         
         <span className="createbtnspan" onClick = {() => this.handleClick()}>
           <button className="createbtn" id="todoadd">+</button>
         </span>
         </div>
       </div>    
          {this.state.list.map((item) =>
          <div>
            <li 
            id = {item.id} 
            draggable = 'true'
             onDragStart = {(event) =>this.dragStart(event)} 
            onDragEnd = {(event) => this.drop(event)}
             onDragEnter={(event) => this.dragEnter(event)}> 
            <List
              id={item.id}
              value={item.value}
              style={item.style}
              list={this.state.list}
              handleDelete={(e) => this.handleDelete(e)}
              handleLine={(e) => this.handleLine(e)}
            />
            </li>
            <br/>
             </div>
          )}
        
       </div>
    )
  }

}

export default Main;