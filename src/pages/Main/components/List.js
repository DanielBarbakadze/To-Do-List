import React from 'react';
import '../../../../src/App.css';
function List(props){
    function handleClick(){
        let newList = props.list;
         newList = newList.map((el) => {
        if(el.id!=props.id) return el; 
        })
         newList = newList.filter((el) => el!=undefined);
       props.handleDelete(newList);
    }

    function handleLine(){
        let tempList = props.list;
        tempList = tempList.map((el) => {
            if(el.id == props.id) {
                if(el.style && el.style.textDecoration==="line-through"){
                    el.style = {textDecoration : ""}
                }
                else el.style = {textDecoration : "line-through"};
                return el;
            }
            else {
                return el;
            }
        });
        props.handleLine(tempList);
        // console.log(tempList);
    }
return(
    <div>
      
        {<div style = {props.style} className="elements"> {props.value} </div>}
              
        <button onClick = {() => handleClick()} >
            Delete
        </button>
        <button onClick = {() => handleLine() } >
            Done 
        </button>
    </div>

)
}

export default List;