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
                if(el.style==undefined){
                    el.style = {textDecoration : "line-through"};
                }
                if(el.style.textDecoration==="line-through"){
                    el.style = {textDecoration : "underline"}
                }
                if(el.style.textDecoration==="underline"){
                    el.style = {textDecoration : "line-through"};
                };
                console.log(el.style)
                // if(el.style["text-decoration"]==undefined && el.style["text-decoration"]==''){
                //     el.style = {"text-decoration" : "line-through"};
                // }
                // else{
                //     el.style = {"text-decoration" : "underline"};
                // }
                
                // console.log(el,el.style);
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