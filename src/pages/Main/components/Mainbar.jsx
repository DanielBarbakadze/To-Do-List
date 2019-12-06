import React from 'react';
import './Mainbar.css';
import Main from './Main';
import List from './List';
export default class Mainbar extends React.Component {
  state = {
    array : []
  }
  handleOutput(e){
    let selected = JSON.stringify(e);
    let list = [];
    if(localStorage[selected]) {list = JSON.parse(localStorage[selected]);}
    return(
      <div>
        { list.map((item) => <div>
        { <List
           id={item.id}
           value={item.value}
           style={item.style}
           list={list}
         />}
          </div>
          ) }
      </div>
    )
  }

  render(){
    return (
      <div>
          { this.props.projects.map((el) => {
              if(this.props.selected===el){
               
                return (
                  <div>
                    {el}
                    <Main
                     selected = {el}
                     />
                     {this.handleOutput(el)}
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