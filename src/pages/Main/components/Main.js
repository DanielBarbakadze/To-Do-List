import React from 'react';
import List from './List';
class Main extends React.Component {
  state = {
    list: [
    ],
    inputState: ""
  }
  handleClick(){
    let lastItem;
      if(this.state.inputState!=""){
   let newItem = this.state.list;
   if(newItem.length==0)  lastItem = {id:1,value:this.state.inputState};
   else{
    lastItem = {id: this.state.list[this.state.list.length-1].id + 1,value:this.state.inputState};
   }
     newItem.push(lastItem);
    this.setState({list: newItem})
    }
  }
  handleChange(e){
    this.setState({inputState:e.target.value})
  }
  handleDelete(e){
  this.setState({
    list:e
  })
  }
  handleLine(e){
    this.setState({
      list:e
    })
  }
   render(){
  return(
    <div>

    <div>
    <input name ="lists" type = "text" onChange = {(e) => this.handleChange(e)}/>
    <button onClick = {() => this.handleClick()}>
         Add another list
       </button>


       </div>

 {this.state.list.map((item) =>
 <List 
    id = {item.id}
    value = {item.value}
    style = {item.style}
    list = {this.state.list}
    handleDelete = {(e) => this.handleDelete(e)}
    handleLine = { (e) => this.handleLine(e)}
 />
 )}

 </div>

  )}
  
}

export default Main;